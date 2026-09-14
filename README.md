# `vercel` provider for [`stackql`](https://github.com/stackql/stackql)

This repository builds and documents the `vercel` provider for StackQL, enabling SQL-based query and provisioning operations against the [Vercel REST API](https://vercel.com/docs/rest-api) - projects, deployments (including file upload and deployment creation), aliases, domains and DNS records, environment variables, Edge Config stores and items, teams and members, access groups, webhooks, log and trace drains, feature flags, the firewall, AI Gateway, sandboxes, the container registry and billing.

## Design principles

- **Generated from the published OpenAPI document.** Vercel serves one unversioned OpenAPI 3.0.3 document at `https://openapi.vercel.sh/`. Every REST operation in it is exposed (417 operations at the pinned snapshot; the four `HEAD` operations are outside the generator's verb set). Vercel has no GraphQL API.
- **Fixed server, bearer auth.** The base URL is the literal `https://api.vercel.com`; authentication is a bearer token read from `VERCEL_API_TOKEN`, the same variable the Vercel Terraform provider reads.
- **Team scope is explicit.** Vercel scopes almost every operation by a `teamId` query parameter, supplied as `WHERE team_id = '...'`. StackQL resolves environment variables for server URL variables only (`x-stackQL-envVar`), not query parameters, so `team_id` is always written in SQL; `VERCEL_TEAM_ID` is the convention for scripts and tests (see [NOTES.md](NOTES.md)).
- **snake_case surface.** Columns, `WHERE` and `INSERT` keys and `EXEC` variables are snake_case over the camelCase wire (`snake_case_aliases: true` on the provider config plus `request.nativeCasing: camel` on every method); path parameters are physically snake_case (`id_or_name`, `project_id`). Nested JSON columns keep their wire casing inside the value.
- **Durable operation mapping.** [provider-dev/config/all_services.csv](provider-dev/config/all_services.csv) is the checked-in record of every operation's resource, method and SQL verb. It is merged, never regenerated: a spec refresh appends new operations unmapped and reports removed ones, and `make validate-mappings` blocks the build until a maintainer decides. Resource names therefore cannot drift between provider versions by accident.
- **Lifecycle operations live on their resources.** Cancel, promote, rollback, pause, restore, rerequest, test and the like are `EXEC` methods of the resource they act on (`vercel.deployments.deployments.cancel`, `vercel.projects.projects.promote`), keeping non-selectable resources to a minimum.
- **Pagination and LIMIT pushdown.** Vercel's five pagination dialects (timestamp `until`, continuation `from`, `next` token, `cursor`, page number) are configured per method from the operation itself; `LIMIT n` is pushed down as `?limit=n` (max 100).
- **Deterministic builds.** Every stage is a script wrapped by a `make` target; manual decisions are rules in scripts or rows in the mapping manifest, never hand-edits to generated artifacts.

## Prerequisites

- Node.js >= 20, GNU make, bash (Linux, WSL or macOS)
- A local `stackql` binary for testing (`$STACKQL`, `./stackql`, or on `PATH`)
- A Vercel API token for the live smoke suite ([create one](https://vercel.com/docs/rest-api/reference/welcome#creating-an-access-token)); a Hobby team is sufficient and free

Install dependencies:

```bash
npm install
```

### Makefile

Every step below is a `make` target (`make help` lists them). The composite targets are:

```bash
make all      # deps, full pipeline against the current upstream spec, offline + meta-route tests, docs, website build
make smoke    # live smoke suite against the locally generated provider (sources .env if present)
```

`make all` never touches a Vercel account. The live suites are separate targets: `smoke`, `smoke-live` (against the published provider) and `smoke-cleanup`. Credentials are read from the environment or a gitignored `.env` file:

```bash
VERCEL_API_TOKEN=...   # required
VERCEL_TEAM_ID=...     # optional; the token's default team is used otherwise
```

## 0. Fetch the spec

```bash
make fetch-spec        # or: npm run fetch-spec
```

Downloads the OpenAPI document into `provider-dev/downloaded/openapi.json` and records the fetch date, stated version, path / operation / tag counts and sha256 in `provider-dev/config/spec_pin.json`. Both are committed: Vercel republishes a single unversioned document continuously, so the snapshot is what makes a build reproducible and a refresh a reviewable diff. Drift from the recorded pin is reported, not fatal: the mapping validation below is what turns upstream change into a reviewed decision. `make check-spec` fails on drift (the scheduled CI job uses it). After a refresh, commit the snapshot, the pin, the manifest and the generated provider together.

## 1. Split into service specs

```bash
make split
```

Splits the document into 38 per-service specs in `provider-dev/source/` using `provider-dev/scripts/svc-discriminator.mjs`, a tag -> service map. Versioned duplicate tags are folded (`checks` + `checks-v2` -> `checks`, `ai-gateway` + `api-ai-gateway` -> `ai_gateway`, `global-config` -> `edge_config`), single-operation tags are folded into their parent (`logs` -> `deployments`, `static-ips` -> `networking`), and the eight untagged operations are routed by path prefix.

| Service | Surface |
|---|---|
| `projects` | projects, project domains, environment variables, promote aliases, transfer requests, traces |
| `deployments` | deployments, file upload, deployment files, events, runtime logs |
| `edge_config` | Edge Config stores, items, schema, tokens, backups |
| `teams`, `project_members`, `access_groups` | teams, members, access requests, project members, access groups |
| `domains`, `dns`, `domains_registrar`, `certs`, `aliases` | domains, DNS records, registrar (TLDs, pricing, orders), certificates, aliases |
| `environments` | shared environment variables, custom environments |
| `feature_flags`, `rolling_release`, `checks` | flags, segments, SDK keys, rolling releases, checks and check runs |
| `drains`, `log_drains`, `webhooks`, `integrations`, `marketplace`, `connect` | drains, legacy log drains, webhooks, integrations, marketplace installations, connectors |
| `security`, `networking`, `kms` | firewall config, bypass rules, attack mode, networks, PrivateLink, KMS issuers and keys |
| `sandboxes`, `vcr`, `storage`, `artifacts`, `edge_cache` | sandboxes and sessions, container registry, blob stores, remote cache artifacts, edge cache purges |
| `ai_gateway`, `observability`, `web_analytics`, `billing`, `bulk_redirects`, `project_routes`, `microfrontends`, `user`, `authentication` | AI Gateway, observability, analytics queries, billing, redirects, routes, microfrontends, user and events, API tokens |

## 2. Mappings

```bash
make mappings            # analyze -> merge into provider-dev/config/all_services.csv
make validate-mappings   # fails until every operation is mapped or skipped and no row is stale
```

`generate-mappings` (provider-utils `analyze`) writes a fresh skeleton to a temp dir; `provider-dev/scripts/merge_mappings.mjs` folds it into the checked-in manifest, preserving every existing `stackql_resource_name` / `stackql_method_name` / `stackql_verb` / `stackql_object_key` and appending new operations unmapped. `validate_mappings.mjs` checks completeness, staleness, snake_case names, valid verbs and unique method names per resource.

Mapping results at the pinned snapshot: 413 rows, 400 mapped (156 `SELECT`, 53 `INSERT`, 41 `UPDATE`, 6 `REPLACE`, 56 `DELETE`, 88 `EXEC`), 13 skipped (the nine OCI distribution operations the spec places on `api.vercel.com` where they are not served, the 302-only file download, and the operations with no 2xx response - see [NOTES.md](NOTES.md)), 134 resources across 38 services, 18 of them without a select method (write-only or action-only surfaces such as `edge_cache.cache` and `kms.signing_keys`).

## 3. Normalize

```bash
make pre-normalize
make normalize
```

`pre_normalize.mjs` applies the Vercel-specific corrections recorded in [NOTES.md](NOTES.md): list responses the spec declares as objects but the API returns as bare arrays (Edge Config stores and tokens, log drains, webhooks, integration configurations), opaque `{type: object}` placeholders inside response `oneOf`s that would poison the merged schema, an undeclared microfrontends response, and request body properties that collide with a query parameter of the same name (the team `slug` alias), which otherwise leave the body empty. The generic provider-utils pass then flattens variants and wraps the remaining bare-array responses.

## 4. Generate the provider

```bash
make generate     # generate-provider ... then post-process
```

```bash
npm run generate-provider -- \
  --provider-name vercel \
  --input-dir provider-dev/source \
  --output-dir provider-dev/openapi/src/vercel \
  --config-path provider-dev/config/all_services.csv \
  --servers '[{"url": "https://api.vercel.com"}]' \
  --provider-config '{"auth": {"type": "bearer", "credentialsenvvar": "VERCEL_API_TOKEN"}, "snake_case_aliases": true}' \
  --naive-req-body-translate \
  --update-path-param-names \
  --overwrite
node provider-dev/scripts/post_process.mjs
```

`post_process.mjs` adds what the generator cannot express, derived from each operation: `request.nativeCasing: camel` on all 400 methods; pagination on 32 list methods (10 timestamp `until`, 1 continuation `from`, 5 `next` token, 15 `cursor`, 1 page number); `LIMIT` pushdown on the 37 select methods that accept `limit`; the octet-stream request transform on the three upload methods (`files.upload`, `artifacts.upload`, `projects.upload_avatar`: the `value` variable is sent verbatim as the body); and a text wrapper for the seven responses that are not tabular JSON (billing jsonl, runtime logs, sandbox command logs and file reads, plus the two opaque JSON schema documents), surfaced as one row with a `contents` column.

### Authentication

Provider config: `{"auth": {"type": "bearer", "credentialsenvvar": "VERCEL_API_TOKEN"}}`. A different variable can be passed at runtime with `--auth='{"vercel": {"type": "bearer", "credentialsenvvar": "..."}}'`.

## 5. Test the provider

Three layers; the first two run in `make test` and `make all`, the third is live.

```bash
make test-offline   # tests/offline_validation.mjs - SHOW / DESCRIBE via stackql exec + generated-YAML assertions
make test-meta      # bin/test-meta-routes.cjs over a local stackql server - every service, resource, method; DESCRIBE on every selectable resource
make smoke          # tests/smoke_test.mjs - live, see below
```

### Smoke tests (live)

[tests/smoke_test.mjs](tests/smoke_test.mjs) starts a `stackql srv` (local file registry, or the public registry with `--live`) and drives it with `@stackql/pgwire-lite`. It runs read smokes (user, teams, projects, deployments, aliases, domains, Edge Configs, tokens, event types, TLDs) and a full lifecycle mirroring the Terraform provider's headline resources: a project `INSERT` / `UPDATE`, an environment variable `INSERT` / `SELECT` / `UPDATE` / `DELETE`, an Edge Config store with items and a read token, a hello world `index.html` uploaded with `EXEC vercel.deployments.files.upload` and deployed to production with `INSERT INTO vercel.deployments.deployments`, polled to `READY` and fetched over HTTPS from its production alias, deployment files and events, `EXEC pause` / `unpause`, and finally the deletes. Everything is named `stackql-smoke-<stamp>` and breadcrumbs are swept first. On a Hobby team the run is free; on Pro it is well under $1.

```bash
make smoke          # local provider
make smoke-live     # published provider (post-publish verification)
make smoke-cleanup  # sweep stackql-smoke-* projects and edge configs only
```

### UAT

```bash
set -a; source .env; set +a
REG_ROOT="$(pwd)/provider-dev/openapi"
REG="{\"url\":\"file://${REG_ROOT}\",\"localDocRoot\":\"${REG_ROOT}\",\"verifyConfig\":{\"nopVerify\":true}}"
stackql --registry="${REG}" shell
```

```sql
SELECT id, name, framework FROM vercel.projects.projects WHERE team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';
```

### CI

[.github/workflows/build-and-test.yml](.github/workflows/build-and-test.yml): build from the committed spec snapshot (warning only if upstream has drifted), split, merge mappings, validate, normalize, generate and fail on uncommitted generation drift; offline validation, meta-route suite and docs generation on every push and pull request; the secret-gated live smoke suite on pushes; and a weekly spec-drift job that opens an issue when the served document changes. The web workflows build and deploy the microsite from `main`.

## 6. Publish the provider

Push the `vercel` dir to `providers/src` in a feature branch of the [`stackql-provider-registry`](https://github.com/stackql/stackql-provider-registry) and follow the [registry release flow](https://github.com/stackql/stackql-provider-registry/blob/dev/docs/build-and-deployment.md). Pull and verify from the dev registry:

```bash
export DEV_REG="{ \"url\": \"https://registry-dev.stackql.app/providers\" }"
stackql --registry="${DEV_REG}" shell
```

```sql
registry pull vercel;
```

then `make smoke-live`.

## 7. Generate web docs

The microsite (`website/`) is Docusaurus 3.10 on the shared architecture used by the other provider microsites: navbar, footer, theme and plugins come from [`stackql/docusaurus-config`](https://github.com/stackql/docusaurus-config), vendored into `.shared-config/` at build time. Site-local files are the provider identity (`website/provider.js`), a thin `docusaurus.config.js` wrapper (which also turns on `showLastUpdateTime` so every page carries a "Last updated on" stamp), the shared components and theme under `src/`, and static assets including `static/CNAME` (`vercel-provider.stackql.io`).

```bash
make docs           # generate-docs --snake-case-aliases + website/scripts/sanitize-docs.mjs
make website        # yarn install && yarn build (vendors the shared config; needs GitHub access)
make website-start  # dev server
```

`headerContent1.txt` / `headerContent2.txt` in `provider-dev/docgen/provider-data/` supply the landing page: installation, authentication, team scope, casing, pagination, the getting-started queries (project inventory, deployments by state, environment variable audit, domains and DNS, Edge Config items, members and tokens), provisioning end to end and the static-site deployment walkthrough.

To publish, select GitHub Actions as the Pages source and create the DNS record:

| Source Domain | Record Type | Target |
|---|---|---|
| vercel-provider.stackql.io | CNAME | stackql.github.io. |

## License

MIT License - see [LICENSE](LICENSE).

## Contributing

Contributions are welcome. Please open an issue or pull request.
