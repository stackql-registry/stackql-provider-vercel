# Build notes

Findings recorded while building the refreshed `vercel` provider (September 2026). Each item names the evidence and the decision taken so a future refresh reuses them instead of re-deriving.

## Spec source

- Vercel serves one unversioned OpenAPI 3.0.3 document at `https://openapi.vercel.sh/` (`info.version` is `0.0.1`). It changes continuously - schema-only changes to eight services landed within hours of the first build - so the snapshot in `provider-dev/downloaded/openapi.json` is committed alongside the sha256, date and counts in `provider-dev/config/spec_pin.json`, and CI builds from the snapshot (drift is a warning on push and an issue from the weekly job). Snapshot used for this build: 297 paths, 417 operations, 42 tags.
- Four HEAD operations (artifact exists, marketplace experimentation config, container registry blob and manifest heads) are outside the generator's verb set and are not mapped.
- 8 operations carry no tag (`/domains/records`, `/api-keys`, `/v2/observability/*`, `/speed-insights/toggle`, `/web/insights/toggle`); the discriminator routes them by path prefix.

## Team scope and `VERCEL_TEAM_ID`

- Vercel scopes by a `teamId` (or `slug`) query parameter on almost every operation. A "northstar" account's projects live under its default team; listing without `teamId` returns an empty envelope, so `team_id` is effectively required for useful queries.
- any-sdk resolves `x-stackQL-envVar` only on OpenAPI server URL variables (`internal/anysdk/server.go`; the constant is the only consumer of `ExtensionKeyEnvVar`). A server URL carrying a query string (`https://api.vercel.com?teamId={team_id}`) fails route matching (`router.FindRoute() failure`), so the extension cannot carry a query parameter today. `VERCEL_TEAM_ID` is therefore a convention for scripts, tests and docs, not a provider default. A core enhancement (honouring `x-stackQL-envVar` on `in: query` and `in: header` parameters when no WHERE value is supplied) would make `team_id` optional; the parameter is declared identically on ~380 operations so the provider needs no change beyond the annotation once that lands.
- A `custom` auth successor with `location: query` was considered and rejected: `/v1/integrations/git-namespaces` returns 400 when `teamId` is supplied, and duplicates would arise with a WHERE value.

## Spec inaccuracies corrected in `pre_normalize.mjs`

Verified against the live API with a read-only token:

| Operation | Spec | Wire | Correction |
|---|---|---|---|
| `getEdgeConfigs` GET /v1/global-config | single object | bare array (`[]`) | wrap as array (normalize then applies the bare-array wrap) |
| `getEdgeConfigTokens` | `$ref GlobalConfigToken` | bare array | wrap as array |
| `getAllLogDrains` GET /v1/log-drains | oneOf [array, {drains}] | bare array | keep the array variant |
| `getWebhooks`, `getConfigurations` | oneOf [array, array] | bare array | keep the first variant |
| `getProjects` GET /v10/projects | oneOf [array, envelope x2] | `{projects, pagination}` | drop the legacy array variant |
| `getMicrofrontendsGroups` | opaque object | `{groups: [], maxMicrofrontendsGroupsPerTeam, maxMicrofrontendsPerGroup}` | declare the object |
| 14 list responses | oneOf with an empty `{type: object}` or scalar placeholder | envelope | drop the placeholder variants (generic rule) |

Without the last rule the normalize merge produced `type: string` schemas for `listPromoteAliases`, `listAccessGroups`, `getProjectMembers`, `listTeamFlagSettings`, `listSessionSnapshots`, `listSessions`, `getRecords`, `getRoutes`, `searchRepo` and `getActiveAttackStatus`.

## Body / query parameter name collisions

Ten operations declare a request body property with the same name as one of their query parameters (`slug` - the team slug alias - on `createEdgeConfig`, `updateEdgeConfig`, `createFlag`, `createFlagSegment`, `createCustomEnvironment`, `updateCustomEnvironment`, `patchTeam`; `teamId` on `stageRedirects`, `addRepositoryPermission`, `removeRepositoryPermission`). With the naive body translation the value binds to the query parameter and the body goes out empty - observed as `415 Unsupported Media Type` on `POST /v1/global-config`. `pre_normalize.mjs` drops the colliding query parameter on those operations. Two fork operations (`createSandboxesByNameForkV2/V3`) collide on the `name` path parameter; the body `name` is unreachable there (documented limitation).

## Pagination

Five dialects, all inferred per method in `post_process.mjs` from the query parameters and the 200 schema:

| Dialect | Request token | Response token | Methods |
|---|---|---|---|
| timestamp | `until` | `$.pagination.next` (number) | deployments, aliases, domains, dns records, project domains, project and team members, teams, promote aliases (10) |
| continuation | `from` | `$.pagination.next` (base32 string) | projects (1) |
| next token | `next` | `$.pagination.next` | access groups (3), kms issuers, edge config backups (5) |
| cursor | `cursor` | `$.pagination.next`, `$.nextCursor` (vcr), `$.cursor` (ai gateway) | connect, feature flags, sandboxes, vcr, ai gateway (18) |
| page number | `page` | `$.pagination.page` / `$.pagination.numPages` | bulk redirects (1) |

The numeric `until` token is decoded as a float64 by any-sdk and formatted with `%v`; verified live that Vercel accepts the resulting value (two deployments were returned with `"limit" = '1'`, i.e. the second page was fetched). `limit` is a reserved word in the SQL grammar: `LIMIT n` is pushed down as `?limit=n` on the 40 select methods that accept it (`queryParamPushdown.top`, max 100); to force a page size without a SQL LIMIT quote the identifier (`AND "limit" = '1'`).

## Operations skipped or adjusted in the manifest

- The nine OCI distribution operations (`GET /v2/`, `/v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/...`, `.../manifests/...`, `.../tags/list`) are `skip_this_resource`: the spec declares them on `https://api.vercel.com`, where `/v2/` answers with an nginx 404 (the container registry protocol host is not in the document), and three of them have no 2xx response. The management surface of the registry (`vcr.repositories`, `images`, `tags`, `permissions`) is exposed. `registry` is also a reserved word in the StackQL grammar (`REGISTRY PULL`), so it cannot be a resource name.
- `getDeploymentFileContents` (302-only) is skipped.
- Two select methods on one resource must differ in required parameters (the meta-route suite enforces it): `getAiGatewayVirtualModelConfig` (`GET /virtual-model-configs`, query-addressed) is `exec get_by_query`, and the v1 flag lists (`listFlags`, `listTeamFlags`) are `exec list_v1` beside the v2 `list`.
- `marketplace.experimentation_edge_config.get` returns `{items: {<key>: value}, digest, purpose, updatedAt}`; StackQL's selectable-schema heuristic treats a property named `items` as a list envelope and rejects the object, so the method carries `stackql_object_key = $` (project the whole object as one row).

## Non-JSON endpoints

- Octet-stream request bodies (`uploadFile`, `uploadArtifact`, `uploadProjectAvatar`): the operation body schema is replaced by a one-column object (`value`) and a `golang_template_json_v0.1.0` transform emits it verbatim (cloudflare Workers AI precedent). Invoked as `EXEC vercel.deployments.files.upload @team_id = ..., @x_vercel_digest = '<sha1>', @value = '<contents>'`. `@@json` payloads are rejected for this method ("payload map of declared type string") - use `@value`.
- jsonl / ndjson / stream+json / octet-stream responses (`listBillingCharges`, `listContractCommitments`, `getRuntimeLogs`, `getSessionCommandLogs`, `readSessionFile`): surfaced as one row with a `contents` text column via `text/plain` + `overrideMediaType` + `schema_override` + `objectKey $.items` + a text template (the bare-array wrap machinery). Go templates in any-sdk have no string split, so an NDJSON stream cannot be exploded into rows client-side.
- The same wrapper is applied to select methods whose JSON response schema is opaque (`{type: object}` with no properties, or `properties: {}`): `edge_config.schema.get` (the store's JSON schema document) and `domains_registrar.contact_info_schema.get`. Without it `DESCRIBE` has no columns and the meta-route suite fails.
- `getDeploymentEvents` declares both `application/json` and `application/stream+json`; the JSON variant is used (the API returns a JSON array unless `follow=1`).

## StackQL engine observations

- **Server mode: one physical table per resource.** In `stackql srv`, `drm.getTableName` is keyed on provider.service.resource plus the discovery generation, not the method. When two select methods of one resource return different shapes (projects `list` items vs `get` object; deployments `list` items carry `uid`, `get` carries `id`), the first method used in a session fixes the table and the other returns no rows for the rest of the session. `stackql exec` (one process per statement) is unaffected. The smoke suite (pgwire-lite over `srv`) keeps to the list method for projects and deployments; resources whose two shapes match (teams, env vars, edge config items) are fine. Reproduction: `tests/smoke_test.mjs` history in git, or run `SELECT ... FROM vercel.projects.projects WHERE team_id = ...` then `... WHERE id_or_name = ...` over one server.
- `DESCRIBE` reports the first select method (the more specific `get`), so `DESCRIBE vercel.deployments.deployments` shows `id` while the list rows carry `uid`.
- With `--update-path-param-names` path parameters are physically snake_case (`id_or_name`, `project_id`), so EXEC variables for path parameters must be snake (`@project_id`); query and header parameters resolve from snake_case through `request.nativeCasing: camel` (`@team_id`, `@x_vercel_digest`) and also accept the wire name.

## Vercel platform notes

- Hobby teams allow one Edge Config store; the smoke suite sweeps `stackql-smoke-*` stores before creating one. Deployments on Hobby are free (daily limit applies).
- A deployment into a project without a framework needs `project_settings` (`{"framework": null}`) or `skip_auto_detection_confirmation = '1'`; a project `build_command` makes Vercel run a build and fail a static upload for lack of an output directory (the smoke suite updates `dev_command` instead).
- Deployment protection applies to the `<project>-<hash>-<team>.vercel.app` URL on Hobby (it serves the Vercel login page); the production alias `<project>.vercel.app` is public.
- `listDeploymentFiles` returns a tree whose top level is the `src` directory.
- `GET /v1/security/firewall/bypass`, `/v1/bulk-redirects`, `/v2/sandboxes`, `/v1/vcr/repository` and `/v1/networking/privatelink/endpoints` require `projectId` (or `project`); `/v1/integrations/configurations` requires `view`; `/v1/billing/charges` requires `from` and `to`. `SHOW METHODS` lists them.
