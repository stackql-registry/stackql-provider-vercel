--- 
title: connector_project_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connector_project_connections
  - connect
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

Creates, updates, deletes, gets or lists a <code>connector_project_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connector_project_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.connect.connector_project_connections" /></td></tr>
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

The connector project connection.

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
    <td><CopyableCode code="connector_id" /></td>
    <td><code>string</code></td>
    <td>Stable `scl_` connector ID, even when the request used a UID. (wire: connectorId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>Time when the project connection was created, in epoch milliseconds. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_environments" /></td>
    <td><code>array</code></td>
    <td>Environments where the connector is enabled for the project. (wire: enabledEnvironments)</td>
</tr>
<tr>
    <td><CopyableCode code="project" /></td>
    <td><code>object</code></td>
    <td>Vercel project connected to the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>Time when the project connection was last updated, in epoch milliseconds. (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A page of project connections for the connector.

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
    <td><CopyableCode code="connector_id" /></td>
    <td><code>string</code></td>
    <td>Stable `scl_` connector ID, even when the request used a UID. (wire: connectorId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>Time when the project connection was created, in epoch milliseconds. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_environments" /></td>
    <td><code>array</code></td>
    <td>Environments where the connector is enabled for the project. (wire: enabledEnvironments)</td>
</tr>
<tr>
    <td><CopyableCode code="project" /></td>
    <td><code>object</code></td>
    <td>Vercel project connected to the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>Time when the project connection was last updated, in epoch milliseconds. (wire: updatedAt)</td>
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
    <td><a href="#parameter-connector"><code>connector</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Get the configuration that connects a connector to a project.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-connector"><code>connector</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>List the projects connected to a connector and the environments where each connection is available.</td>
</tr>
<tr>
    <td><a href="#upsert"><CopyableCode code="upsert" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-connector"><code>connector</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-environments"><code>environments</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Connect a connector to a project, or replace the environments on an existing project connection.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-connector"><code>connector</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Disconnect a connector from a project.</td>
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
<tr id="parameter-connector">
    <td><CopyableCode code="connector" /></td>
    <td><code>string</code></td>
    <td>Stable connector ID or URL-encoded team-scoped UID. Examples: `scl_abc123` or `slack%2Fmy-bot`.</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Vercel project ID.</td>
</tr>
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>Cursor from `pagination.next` on the previous response.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of project connections to return. Defaults to 50.</td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The team slug that scopes the request. Do not send it with teamId. If both are omitted, Vercel uses the team associated with the token or the authenticated user's default team. The request returns 401 if no team can be selected.</td>
</tr>
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The team ID that scopes the request. Do not send it with slug. If both are omitted, Vercel uses the team associated with the token or the authenticated user's default team. The request returns 401 if no team can be selected. (wire: teamId)</td>
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

Get the configuration that connects a connector to a project.

```sql
SELECT
connector_id,
created_at,
enabled_environments,
project,
updated_at
FROM vercel.connect.connector_project_connections
WHERE connector = '{{ connector }}' -- required
AND project_id = '{{ project_id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

List the projects connected to a connector and the environments where each connection is available.

```sql
SELECT
connector_id,
created_at,
enabled_environments,
project,
updated_at
FROM vercel.connect.connector_project_connections
WHERE connector = '{{ connector }}' -- required
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="upsert"
    values={[
        { label: 'upsert', value: 'upsert' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="upsert">

Connect a connector to a project, or replace the environments on an existing project connection.

```sql
INSERT INTO vercel.connect.connector_project_connections (
environments,
connector,
project_id,
team_id,
slug
)
SELECT 
'{{ environments }}' /* required */,
'{{ connector }}',
'{{ project_id }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
connector_id,
created_at,
enabled_environments,
project,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connector_project_connections
  props:
    - name: connector
      value: "{{ connector }}"
      description: Required parameter for the connector_project_connections resource.
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the connector_project_connections resource.
    - name: environments
      value: "{{ environments }}"
      description: |
        One or more built-in environment names or stable custom environment IDs that belong to the project. Duplicate values are accepted and removed.
    - name: team_id
      value: "{{ team_id }}"
      description: The team ID that scopes the request. Do not send it with slug. If both are omitted, Vercel uses the team associated with the token or the authenticated user's default team. The request returns 401 if no team can be selected.
      description: The team ID that scopes the request. Do not send it with slug. If both are omitted, Vercel uses the team associated with the token or the authenticated user's default team. The request returns 401 if no team can be selected.
    - name: slug
      value: "{{ slug }}"
      description: The team slug that scopes the request. Do not send it with teamId. If both are omitted, Vercel uses the team associated with the token or the authenticated user's default team. The request returns 401 if no team can be selected.
      description: The team slug that scopes the request. Do not send it with teamId. If both are omitted, Vercel uses the team associated with the token or the authenticated user's default team. The request returns 401 if no team can be selected.
`}</CodeBlock>

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

Disconnect a connector from a project.

```sql
DELETE FROM vercel.connect.connector_project_connections
WHERE connector = '{{ connector }}' --required
AND project_id = '{{ project_id }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
