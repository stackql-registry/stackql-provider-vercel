# CLAUDE.md

## Project

This repository builds and documents the `vercel` provider for [StackQL](https://github.com/stackql/stackql): SQL query and provisioning over the Vercel REST API - projects, deployments (including file upload and deployment creation), aliases, domains and DNS, environment variables, Edge Config, teams and members, access groups, webhooks, drains, feature flags, firewall, AI Gateway, sandboxes, the container registry and billing.

The provider is a type 1 (DIRECT) provider: generated from the OpenAPI document Vercel publishes at `https://openapi.vercel.sh/` with `@stackql/provider-utils`. The repository follows the layout and pipeline of the sibling provider repos under `stackql-registry` (the `clickhouse` repo is the closest reference: Makefile, tests with a live flag, Docusaurus 3.10 on the shared config). When in doubt about structure, mirror it.

## Toolchain rules

- Latest `@stackql/provider-utils` and `@stackql/pgwire-lite`, pinned exactly in package.json (check npm for newer minors before a refresh).
- Node >= 20, `type: module`. The two provider-utils CLIs are wrapped as npm scripts invoked through `node` (no `.bin` shims); flags pass through with `--`.
- GNU make and bash for the pipeline (`make help`); WSL on Windows. A `stackql` binary on `PATH` (or `$STACKQL` / `./stackql`) for tests.
- No em dashes, no ASCII arrows other than `->`, no characters off a QWERTY keyboard, in any file. Matter-of-fact prose.

## Repository layout

```
Makefile                      # every pipeline stage, test layer and docs step as a target; `make all`
bin/                          # fetch-spec.sh, start-server.sh, stop-server.sh, server-status.sh, test-meta-routes.cjs
provider-dev/
  config/all_services.csv     # THE durable operation -> resource/method/verb manifest (hand-maintained, checked in)
  config/spec_pin.json        # what the provider was built from (date, hash, counts)
  downloaded/openapi.json     # fetched spec (gitignored, ~10 MB)
  source/                     # split per-service specs (build artifacts)
  openapi/src/vercel/         # generated provider (checked in)
  scripts/svc-discriminator.mjs   # tag -> service map for the split
  scripts/pre_normalize.mjs       # vercel-specific spec corrections (see NOTES.md)
  scripts/merge_mappings.mjs      # analyze output merged into all_services.csv, mappings preserved
  scripts/validate_mappings.mjs   # fails on unmapped / stale / duplicate rows
  scripts/post_process.mjs        # nativeCasing, pagination, LIMIT pushdown, upload and text transforms
  docgen/provider-data/           # headerContent1.txt, headerContent2.txt (docs landing page)
tests/
  offline_validation.mjs      # SHOW / DESCRIBE via stackql exec + YAML assertions, no network
  smoke_test.mjs              # live suite over pgwire-lite; --live targets the published provider
website/                      # Docusaurus 3.10 microsite (shared config vendored at build time)
NOTES.md                      # build findings: spec quirks, engine behaviour, platform limits
```

## Pipeline (`make build`)

1. `make fetch-spec` - download the spec, record `spec_pin.json` (reports drift; `make check-spec` fails on it).
2. `make split` - one service per tag group (`provider-dev/scripts/svc-discriminator.mjs`; 38 services). Versioned duplicate tags (checks / checks-v2, ai-gateway / api-ai-gateway) and single-operation tags (logs, static-ips) are folded; untagged operations are routed by path prefix.
3. `make mappings` - provider-utils `analyze` into a temp dir, merged into `all_services.csv` by `merge_mappings.mjs`. Existing rows keep their mapping columns; new upstream operations are appended unmapped; rows for removed operations stay and are reported.
4. `make validate-mappings` - fails until every operation is mapped (or `skip_this_resource`) and no row is stale. This is the gate that turns upstream change into a reviewed decision.
5. `make pre-normalize` then `make normalize` - vercel corrections (bare-array responses, opaque oneOf placeholders, body/query name collisions) then the generic provider-utils pass.
6. `make generate` - `generate` with bearer auth (`VERCEL_API_TOKEN`), `snake_case_aliases: true`, `--naive-req-body-translate`, `--update-path-param-names`, followed by `make post-process`.

`make all` = deps + build + test + docs + website. It never touches a Vercel account.

## Mapping conventions (all_services.csv)

- Resource names are plural snake_case nouns scoped by the service (`projects.env_vars`, `edge_config.items`, `teams.members`).
- GET collection -> `list` (select, `stackql_object_key` on the array), GET single -> `get` (select), POST create -> `create` (insert), PATCH -> `update`, PUT full replacement -> `replace`, DELETE -> `delete`.
- Lifecycle and action operations attach to the resource they act on as `exec` methods (`deployments.cancel`, `projects.promote`, `projects.rollback`, `projects.pause`, `backups.restore`, `drains.test`), keeping non-selectable resources to a minimum.
- Two select methods on one resource must have different required-parameter signatures (the meta-route suite enforces this); older API versions of a list (`list_v1`) are `exec`.
- Operations with no 2xx response are `skip_this_resource`.
- Never regenerate the CSV from scratch. A rename or a move of an existing operation to a different resource is a breaking change and needs a deliberate edit.

## Tests (`make test`, `make smoke`)

1. `make test-offline` - `tests/offline_validation.mjs`: services, resources, verbs, snake_case columns, pagination / pushdown / transform config in the generated YAML.
2. `make test-meta` - `bin/test-meta-routes.cjs` over a local `stackql srv` (pgwire-lite): every service, resource and method; DESCRIBE on every selectable resource; unique signatures per verb.
3. `make smoke` - `tests/smoke_test.mjs` (pgwire-lite over a server the suite starts): read smokes plus a full lifecycle - project, environment variable, Edge Config with items and a token, a hello world `index.html` upload and production deployment polled to READY and fetched over HTTPS, pause / unpause, then deletion. Names everything `stackql-smoke-<stamp>` and sweeps breadcrumbs first. Free on a Hobby team; under $1 on Pro. `make smoke-live` runs the same suite against the published provider (post-publish verification); `make smoke-cleanup` only sweeps.

Credentials: `VERCEL_API_TOKEN` (required) and `VERCEL_TEAM_ID` (optional; the token's default team otherwise) from the environment or a gitignored `.env`.

## Docs (`make docs`, `make website`)

`generate-docs --snake-case-aliases` then `website/scripts/sanitize-docs.mjs`. The landing page comes from `provider-dev/docgen/provider-data/headerContent1.txt` and `headerContent2.txt` (installation, authentication, team scope, casing, pagination, getting-started queries, provisioning and the static-site deployment walkthrough). `website/docusaurus.config.js` wraps the shared `stackql/docusaurus-config` (vendored to `.shared-config/` by `yarn vendor-config`) and sets `showLastUpdateTime = true`. Site identity is `website/provider.js`; `static/CNAME` pins `vercel-provider.stackql.io`.

## Known constraints (details in NOTES.md)

- Team scope is a `teamId` query parameter; `team_id` must be in the WHERE clause. any-sdk honours `x-stackQL-envVar` on server URL variables only, so `VERCEL_TEAM_ID` is a scripting convention until the engine supports the extension on parameters.
- In `stackql srv`, the first select method used on a resource in a session fixes its physical table; a `get` after a `list` on projects or deployments returns no rows over the wire (`stackql exec` is unaffected).
- Path parameters are physically snake_case (`@project_id` in EXEC); query and header parameters accept snake_case or the wire name.

## Non-negotiables

1. Latest provider-utils and pgwire-lite, pinned.
2. `all_services.csv` is the durable record of the operation mapping; upstream change is absorbed by `make mappings` and reviewed through `make validate-mappings`, never by regeneration.
3. Deterministic scripts; generated artifacts are never hand-edited.
4. Every regeneration is followed by `make test` before commit; `make smoke` before publishing.
5. The smoke suite cleans up everything it creates.
