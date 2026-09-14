--- 
title: aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - aliases
  - aliases
  - vercel
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage vercel resources using SQL
custom_edit_url: null
image: /img/stackql-vercel-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aliases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.aliases.aliases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

The alias information

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>The deployment ID (example: dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx) (wire: deploymentId)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the project (example: prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB) (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The alias name, it could be a `.vercel.app` subdomain or a custom domain (example: my-alias.vercel.app)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the alias was created (example: 2017-04-26T23:00:34.232Z)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>The date when the alias was created in milliseconds since the UNIX epoch (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>Information of the user who created the alias</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>number</code></td>
    <td>The date when the alias was deleted in milliseconds since the UNIX epoch (wire: deletedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>object</code></td>
    <td>A map with the deployment ID, URL and metadata</td>
</tr>
<tr>
    <td><CopyableCode code="microfrontends" /></td>
    <td><code>object</code></td>
    <td>The microfrontends for the alias including the routing configuration</td>
</tr>
<tr>
    <td><CopyableCode code="protection_bypass" /></td>
    <td><code>object</code></td>
    <td>The protection bypass for the alias (wire: protectionBypass)</td>
</tr>
<tr>
    <td><CopyableCode code="redirect" /></td>
    <td><code>string</code></td>
    <td>Target destination domain for redirect when the alias is a redirect</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_status_code" /></td>
    <td><code>number</code></td>
    <td>Status code to be used on redirect (301, 302, 307, 308, ) (wire: redirectStatusCode)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the alias</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>The date when the alias was updated in milliseconds since the UNIX epoch (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The paginated list of aliases

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>The deployment ID (example: dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx) (wire: deploymentId)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the project (example: prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB) (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The alias name, it could be a `.vercel.app` subdomain or a custom domain (example: my-alias.vercel.app)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the alias was created (example: 2017-04-26T23:00:34.232Z)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>The date when the alias was created in milliseconds since the UNIX epoch (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>Information of the user who created the alias</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>number</code></td>
    <td>The date when the alias was deleted in milliseconds since the UNIX epoch (wire: deletedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>object</code></td>
    <td>A map with the deployment ID, URL and metadata</td>
</tr>
<tr>
    <td><CopyableCode code="microfrontends" /></td>
    <td><code>object</code></td>
    <td>The microfrontends for the alias including the routing configuration</td>
</tr>
<tr>
    <td><CopyableCode code="protection_bypass" /></td>
    <td><code>object</code></td>
    <td>The protection bypass for the alias (wire: protectionBypass)</td>
</tr>
<tr>
    <td><CopyableCode code="redirect" /></td>
    <td><code>string</code></td>
    <td>Target destination domain for redirect when the alias is a redirect</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_status_code" /></td>
    <td><code>number</code></td>
    <td>Status code to be used on redirect (301, 302, 307, 308, ) (wire: redirectStatusCode)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the alias</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>The date when the alias was updated in milliseconds since the UNIX epoch (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id_or_alias"><code>id_or_alias</code></a></td>
    <td><a href="#parameter-from"><code>from</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieves an Alias for the given host name or alias ID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-from"><code>from</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-rollback_deployment_id"><code>rollback_deployment_id</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieves a list of aliases for the authenticated User or Team. When `domain` is provided, only aliases for that domain will be returned. When `projectId` is provided, it will only return the given project aliases.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-alias_id"><code>alias_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Delete an Alias with the specified ID.</td>
</tr>
<tr>
    <td><a href="#update_protection_bypass"><CopyableCode code="update_protection_bypass" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-override"><code>override</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Update the protection bypass for the alias or deployment URL (used for user access & comment access for deployments). Used as shareable links and user scoped access for Vercel Authentication and also to allow external (logged in) people to comment on previews for Preview Comments (next-live-mode).</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-alias_id">
    <td><CopyableCode code="alias_id" /></td>
    <td><code></code></td>
    <td>The ID or alias that will be removed</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The alias or deployment ID</td>
</tr>
<tr id="parameter-id_or_alias">
    <td><CopyableCode code="id_or_alias" /></td>
    <td><code>string</code></td>
    <td>The alias or alias ID to be retrieved</td>
</tr>
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code></code></td>
    <td>Get only aliases of the given domain name</td>
</tr>
<tr id="parameter-from">
    <td><CopyableCode code="from" /></td>
    <td><code>number</code></td>
    <td>Get only aliases created after the provided timestamp</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>number</code></td>
    <td>Maximum number of aliases to list from a request</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Filter aliases from the given `projectId` (wire: projectId)</td>
</tr>
<tr id="parameter-rollback_deployment_id">
    <td><CopyableCode code="rollback_deployment_id" /></td>
    <td><code>string</code></td>
    <td>Get aliases that would be rolled back for the given deployment (wire: rollbackDeploymentId)</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>number</code></td>
    <td>Get aliases created after this JavaScript timestamp</td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team slug to perform the request on behalf of.</td>
</tr>
<tr id="parameter-teamId">
    <td><CopyableCode code="teamId" /></td>
    <td><code>string</code></td>
    <td>The Team identifier to perform the request on behalf of.</td>
</tr>
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The Team identifier to perform the request on behalf of. (wire: teamId)</td>
</tr>
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code>number</code></td>
    <td>Get aliases created before this JavaScript timestamp</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Retrieves an Alias for the given host name or alias ID.

```sql
SELECT
deployment_id,
project_id,
alias,
created,
created_at,
creator,
deleted_at,
deployment,
microfrontends,
protection_bypass,
redirect,
redirect_status_code,
uid,
updated_at
FROM vercel.aliases.aliases
WHERE id_or_alias = '{{ id_or_alias }}' -- required
AND from = '{{ from }}'
AND project_id = '{{ project_id }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Retrieves a list of aliases for the authenticated User or Team. When `domain` is provided, only aliases for that domain will be returned. When `projectId` is provided, it will only return the given project aliases.

```sql
SELECT
deployment_id,
project_id,
alias,
created,
created_at,
creator,
deleted_at,
deployment,
microfrontends,
protection_bypass,
redirect,
redirect_status_code,
uid,
updated_at
FROM vercel.aliases.aliases
WHERE domain = '{{ domain }}'
AND from = '{{ from }}'
AND limit = '{{ limit }}'
AND project_id = '{{ project_id }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
AND rollback_deployment_id = '{{ rollback_deployment_id }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete an Alias with the specified ID.

```sql
DELETE FROM vercel.aliases.aliases
WHERE alias_id = '{{ alias_id }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="update_protection_bypass"
    values={[
        { label: 'update_protection_bypass', value: 'update_protection_bypass' }
    ]}
>
<TabItem value="update_protection_bypass">

Update the protection bypass for the alias or deployment URL (used for user access & comment access for deployments). Used as shareable links and user scoped access for Vercel Authentication and also to allow external (logged in) people to comment on previews for Preview Comments (next-live-mode).

```sql
EXEC vercel.aliases.aliases.update_protection_bypass 
@id='{{ id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"ttl": {{ ttl }}, 
"revoke": "{{ revoke }}", 
"scope": "{{ scope }}", 
"override": "{{ override }}"
}'
;
```
</TabItem>
</Tabs>
