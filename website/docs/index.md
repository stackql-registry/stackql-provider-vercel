---
title: vercel
hide_title: false
hide_table_of_contents: false
keywords:
  - vercel
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
  - deployments
  - edge config
description: Query, deploy and manage Vercel projects, deployments, domains, environment variables, Edge Config, teams and more using SQL
custom_edit_url: null
image: /img/stackql-vercel-provider-featured-image.png
id: 'provider-intro'
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';

Query, provision and operate the Vercel platform using SQL - projects, deployments (including uploading files and creating deployments), aliases, domains and DNS records, environment variables, Edge Config stores and items, teams and members, access groups, webhooks, log and trace drains, feature flags, the firewall, AI Gateway, sandboxes, the container registry and billing. The provider is generated from the published Vercel REST API OpenAPI document and covers every REST operation in it.


:::info[Provider Summary] 

total services: __38__  
total resources: __172__  

:::

See also:
[[` SHOW `]](https://stackql.io/docs/language-spec/show) [[` DESCRIBE `]](https://stackql.io/docs/language-spec/describe)  [[` REGISTRY `]](https://stackql.io/docs/language-spec/registry)
* * *

## Installation

To pull the latest version of the `vercel` provider, run the following command:

```bash
REGISTRY PULL vercel;
```
> To view previous provider versions or to pull a specific provider version, see [here](https://stackql.io/docs/language-spec/registry).

## Authentication

The following system environment variable is used for authentication by default:

- <CopyableCode code="VERCEL_API_TOKEN" /> - a Vercel API token (see [Creating an access token](https://vercel.com/docs/rest-api/reference/welcome#creating-an-access-token)); the same variable the Vercel Terraform provider reads

The variable is sourced at runtime (from the local machine or as a CI variable/secret). Tokens are scoped to the teams you select when creating them; a token created for a Hobby account covers that account's default team.

<details>

<summary>Using a different environment variable</summary>

To use a different environment variable (instead of the default), use the `--auth` flag of the `stackql` program.  For example:

```bash

AUTH='{ "vercel": { "type": "bearer", "credentialsenvvar": "MY_VERCEL_TOKEN" }}'
stackql shell --auth="${AUTH}"

```
or using PowerShell:

```powershell

$Auth = "{ 'vercel': { 'type': 'bearer', 'credentialsenvvar': 'MY_VERCEL_TOKEN' }}"
stackql.exe shell --auth=$Auth

```
</details>

## Team scope

Vercel scopes almost every operation to a team through the `teamId` query parameter (`team_id` in SQL). Projects, deployments, domains, Edge Config stores, environment variables and most other resources belong to a team, and listing them without a team returns nothing, so supply the team on every statement:

```sql
SELECT id, name, framework
FROM vercel.projects.projects
WHERE team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';
```

Find your team ids with:

```sql
SELECT id, slug, name FROM vercel.teams.teams;
-- or the token's default team
SELECT default_team_id FROM vercel.user.user;
```

A handful of resources are user-scoped and take no `team_id`: <CopyableCode code="vercel.user.user" />, <CopyableCode code="vercel.teams.teams" /> (list), <CopyableCode code="vercel.authentication.tokens" /> and <CopyableCode code="vercel.user.event_types" />.

> The Vercel Terraform provider takes the team as a provider argument; keep the id in an environment variable such as <CopyableCode code="VERCEL_TEAM_ID" /> for your scripts and pass it into the `WHERE` clause. StackQL does not currently default a query parameter from the environment (that mechanism applies to server URL variables only), so `team_id` is always explicit in SQL.

## Parameter and column casing

The Vercel API uses camelCase on the wire (`teamId`, `createdAt`, `buildCommand`). This provider presents a snake_case surface: `WHERE` parameters, `INSERT` and `UPDATE` columns and `EXEC` variables are written in snake_case and resolved to the wire names, and result columns are returned as snake_case (`created_at`, `ready_state`). Nested JSON columns keep their wire casing inside the value; use `json_extract` to reach into them.

```sql
SELECT uid, url, ready_state, created_at,
  json_extract(meta, '$.githubCommitRef') AS branch
FROM vercel.deployments.deployments
WHERE team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';
```

## Pagination and limits

List operations page automatically until the last page. `LIMIT n` is pushed down as the API's `limit` parameter (capped at 100, the Vercel page size ceiling), so `SELECT ... LIMIT 20` fetches one page.

## Project inventory

Every project in a team, with framework and the latest production deployment:

```sql
SELECT
  id,
  name,
  framework,
  node_version,
  json_extract(latest_deployments, '$[0].url') AS latest_url,
  json_extract(latest_deployments, '$[0].readyState') AS latest_state,
  created_at
FROM vercel.projects.projects
WHERE team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';
```

## Deployments by state

Deployments that failed or were cancelled recently (the list method returns `uid`; the single-deployment method returns `id`):

```sql
SELECT uid, name, url, ready_state, target, created_at
FROM vercel.deployments.deployments
WHERE team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx'
AND ready_state IN ('ERROR', 'CANCELED')
ORDER BY created_at DESC;
```

A single deployment by id or hostname:

```sql
SELECT id, url, ready_state, ready_substate, build_command, output_directory
FROM vercel.deployments.deployments
WHERE id_or_url = 'dpl_xxxxxxxxxxxxxxxxxxxxxxxx'
AND team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';
```

## Environment variable audit

Every environment variable of a project, its targets and type (values of `encrypted` and `sensitive` variables are not returned):

```sql
SELECT key, type, target, git_branch, updated_at
FROM vercel.projects.env_vars
WHERE id_or_name = 'my-project'
AND team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';
```

## Domains and DNS

Domains in the team and their verification state, then the DNS records of one of them:

```sql
SELECT name, verified, service_type, expires_at, created_at
FROM vercel.domains.domains
WHERE team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';

SELECT id, name, type, value, ttl
FROM vercel.dns.records
WHERE domain = 'example.com'
AND team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';
```

## Edge Config items

```sql
SELECT id, slug, item_count, size_in_bytes, updated_at
FROM vercel.edge_config.edge_configs
WHERE team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';

SELECT key, value, updated_at
FROM vercel.edge_config.items
WHERE edge_config_id = 'ecfg_xxxxxxxxxxxxxxxxxxxxxxxxxxxx'
AND team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';
```

## Team members and tokens

```sql
SELECT uid, email, role, confirmed, created_at
FROM vercel.teams.members
WHERE team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';

SELECT id, name, type, created_at, expires_at
FROM vercel.authentication.tokens;
```

## Provision, mutate and tear down

Mutations use the same SQL grammar - `INSERT` creates a resource, `UPDATE` patches it, `EXEC` invokes lifecycle methods and `DELETE` removes it. Request body fields are written as columns in snake_case; JSON values (arrays and objects) are passed as JSON text.

A project, an environment variable and an Edge Config store end to end:

```sql
-- create a project
INSERT INTO vercel.projects.projects (team_id, name, framework)
SELECT 'team_xxxxxxxxxxxxxxxxxxxxxxxx', 'my-project', 'nextjs';

-- add an environment variable for production and preview
INSERT INTO vercel.projects.env_vars (id_or_name, team_id, key, value, type, target)
SELECT 'my-project', 'team_xxxxxxxxxxxxxxxxxxxxxxxx', 'API_URL', 'https://api.example.com', 'plain', '["production", "preview"]';

-- change a project setting
UPDATE vercel.projects.projects
SET build_command = 'npm run build'
WHERE id_or_name = 'my-project' AND team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';

-- create an Edge Config store and upsert two items
INSERT INTO vercel.edge_config.edge_configs (team_id, slug)
SELECT 'team_xxxxxxxxxxxxxxxxxxxxxxxx', 'my-config';

UPDATE vercel.edge_config.items
SET items = '[{"operation": "upsert", "key": "greeting", "value": "hello"}, {"operation": "upsert", "key": "flags", "value": {"featureA": true}}]'
WHERE edge_config_id = 'ecfg_xxxxxxxxxxxxxxxxxxxxxxxxxxxx' AND team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';

-- remove them
DELETE FROM vercel.edge_config.edge_configs
WHERE edge_config_id = 'ecfg_xxxxxxxxxxxxxxxxxxxxxxxxxxxx' AND team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';

DELETE FROM vercel.projects.projects
WHERE id_or_name = 'my-project' AND team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';
```

## Deploy a static site

A deployment is two steps: upload each file by its SHA1 digest with the `files.upload` method (the file contents go in the `value` variable and are sent as the raw request body), then create the deployment referencing the uploaded digests. A project that is not linked to a framework needs `project_settings`.

```sql
-- 1. upload index.html (sha1 of the exact bytes, size in bytes)
EXEC vercel.deployments.files.upload
  @team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx',
  @x_vercel_digest = 'fbda2260a7c9bf8a993343caa2238cf17402918c',
  @value = '<!doctype html><html><head><title>Hello</title></head><body><h1>Hello World from StackQL</h1></body></html>';

-- 2. create a production deployment from the uploaded file
INSERT INTO vercel.deployments.deployments (team_id, name, project, files, target, project_settings)
SELECT 'team_xxxxxxxxxxxxxxxxxxxxxxxx', 'my-project', 'my-project',
  '[{"file": "index.html", "sha": "fbda2260a7c9bf8a993343caa2238cf17402918c", "size": 115}]',
  'production', '{"framework": null}';

-- 3. watch it become READY (the production alias is https://my-project.vercel.app)
SELECT uid, url, ready_state
FROM vercel.deployments.deployments
WHERE team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx' AND project_id = 'prj_xxxxxxxxxxxxxxxxxxxxxxxx';
```

Lifecycle operations are invoked with `EXEC`:

```sql
-- cancel a running build
EXEC vercel.deployments.deployments.cancel
  @id = 'dpl_xxxxxxxxxxxxxxxxxxxxxxxx', @team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';

-- promote a deployment to production, or roll back to one
EXEC vercel.projects.projects.promote
  @project_id = 'prj_xxxxxxxxxxxxxxxxxxxxxxxx', @deployment_id = 'dpl_xxxxxxxxxxxxxxxxxxxxxxxx', @team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';

EXEC vercel.projects.projects.rollback
  @project_id = 'prj_xxxxxxxxxxxxxxxxxxxxxxxx', @deployment_id = 'dpl_xxxxxxxxxxxxxxxxxxxxxxxx', @team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';

-- pause and unpause a project (needs an active production deployment)
EXEC vercel.projects.projects.pause @project_id = 'prj_xxxxxxxxxxxxxxxxxxxxxxxx', @team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';
EXEC vercel.projects.projects.unpause @project_id = 'prj_xxxxxxxxxxxxxxxxxxxxxxxx', @team_id = 'team_xxxxxxxxxxxxxxxxxxxxxxxx';
```


## Services
<div class="row">
<div class="providerDocColumn">
<a href="/services/access_groups/">access_groups</a><br />
<a href="/services/ai_gateway/">ai_gateway</a><br />
<a href="/services/aliases/">aliases</a><br />
<a href="/services/artifacts/">artifacts</a><br />
<a href="/services/authentication/">authentication</a><br />
<a href="/services/billing/">billing</a><br />
<a href="/services/bulk_redirects/">bulk_redirects</a><br />
<a href="/services/certs/">certs</a><br />
<a href="/services/checks/">checks</a><br />
<a href="/services/connect/">connect</a><br />
<a href="/services/deployments/">deployments</a><br />
<a href="/services/dns/">dns</a><br />
<a href="/services/domains/">domains</a><br />
<a href="/services/domains_registrar/">domains_registrar</a><br />
<a href="/services/drains/">drains</a><br />
<a href="/services/edge_cache/">edge_cache</a><br />
<a href="/services/edge_config/">edge_config</a><br />
<a href="/services/environments/">environments</a><br />
<a href="/services/feature_flags/">feature_flags</a><br />
</div>
<div class="providerDocColumn">
<a href="/services/integrations/">integrations</a><br />
<a href="/services/kms/">kms</a><br />
<a href="/services/log_drains/">log_drains</a><br />
<a href="/services/marketplace/">marketplace</a><br />
<a href="/services/microfrontends/">microfrontends</a><br />
<a href="/services/networking/">networking</a><br />
<a href="/services/observability/">observability</a><br />
<a href="/services/project_members/">project_members</a><br />
<a href="/services/project_routes/">project_routes</a><br />
<a href="/services/projects/">projects</a><br />
<a href="/services/rolling_release/">rolling_release</a><br />
<a href="/services/sandboxes/">sandboxes</a><br />
<a href="/services/security/">security</a><br />
<a href="/services/storage/">storage</a><br />
<a href="/services/teams/">teams</a><br />
<a href="/services/user/">user</a><br />
<a href="/services/vcr/">vcr</a><br />
<a href="/services/web_analytics/">web_analytics</a><br />
<a href="/services/webhooks/">webhooks</a><br />
</div>
</div>
