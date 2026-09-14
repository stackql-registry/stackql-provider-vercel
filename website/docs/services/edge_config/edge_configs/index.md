--- 
title: edge_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - edge_configs
  - edge_config
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

Creates, updates, deletes, gets or lists an <code>edge_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="edge_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.edge_config.edge_configs" /></td></tr>
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

The Global Config.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td> (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The ID of the user who created the Global Config, optional because it is not always set. (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>number</code></td>
    <td> (wire: deletedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="digest" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="item_count" /></td>
    <td><code>number</code></td>
    <td> (wire: itemCount)</td>
</tr>
<tr>
    <td><CopyableCode code="purpose" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>(opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="size_in_bytes" /></td>
    <td><code>number</code></td>
    <td> (wire: sizeInBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>Name for the Global Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores).</td>
</tr>
<tr>
    <td><CopyableCode code="synced_to_dynamo_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp of when the Global Config was synced to DynamoDB initially. It is only set when syncing the entire Global Config, not when updating. (wire: syncedToDynamoAt)</td>
</tr>
<tr>
    <td><CopyableCode code="transfer" /></td>
    <td><code>object</code></td>
    <td>Keeps track of the current state of the Global Config while it gets transferred.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td> (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

List of all global configs.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td> (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The ID of the user who created the Global Config, optional because it is not always set. (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>number</code></td>
    <td> (wire: deletedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="digest" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="item_count" /></td>
    <td><code>number</code></td>
    <td> (wire: itemCount)</td>
</tr>
<tr>
    <td><CopyableCode code="purpose" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>(opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="size_in_bytes" /></td>
    <td><code>number</code></td>
    <td> (wire: sizeInBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>Name for the Global Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores).</td>
</tr>
<tr>
    <td><CopyableCode code="synced_to_dynamo_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp of when the Global Config was synced to DynamoDB initially. It is only set when syncing the entire Global Config, not when updating. (wire: syncedToDynamoAt)</td>
</tr>
<tr>
    <td><CopyableCode code="transfer" /></td>
    <td><code>object</code></td>
    <td>Keeps track of the current state of the Global Config while it gets transferred.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td> (wire: updatedAt)</td>
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
    <td><a href="#parameter-edge_config_id"><code>edge_config_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Returns a Global Config.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Returns all Global Configs.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-slug"><code>slug</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td>Creates a Global Config.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-edge_config_id"><code>edge_config_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td>Updates a Global Config.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-edge_config_id"><code>edge_config_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Delete a Global Config by id.</td>
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
<tr id="parameter-edge_config_id">
    <td><CopyableCode code="edge_config_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team slug to perform the request on behalf of.</td>
</tr>
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The Team identifier to perform the request on behalf of. (wire: teamId)</td>
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

Returns a Global Config.

```sql
SELECT
id,
owner_id,
created_at,
created_by,
deleted_at,
digest,
item_count,
purpose,
schema,
size_in_bytes,
slug,
synced_to_dynamo_at,
transfer,
updated_at
FROM vercel.edge_config.edge_configs
WHERE edge_config_id = '{{ edge_config_id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Returns all Global Configs.

```sql
SELECT
id,
owner_id,
created_at,
created_by,
deleted_at,
digest,
item_count,
purpose,
schema,
size_in_bytes,
slug,
synced_to_dynamo_at,
transfer,
updated_at
FROM vercel.edge_config.edge_configs
WHERE team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a Global Config.

```sql
INSERT INTO vercel.edge_config.edge_configs (
slug,
items,
team_id
)
SELECT 
'{{ slug }}' /* required */,
'{{ items }}',
'{{ team_id }}'
RETURNING
id,
owner_id,
created_at,
created_by,
deleted_at,
digest,
item_count,
purpose,
schema,
size_in_bytes,
slug,
synced_to_dynamo_at,
transfer,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: edge_configs
  props:
    - name: slug
      value: "{{ slug }}"
    - name: items
      value: "{{ items }}"
    - name: team_id
      value: "{{ team_id }}"
      description: The Team identifier to perform the request on behalf of.
      description: The Team identifier to perform the request on behalf of.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates a Global Config.

```sql
UPDATE vercel.edge_config.edge_configs
SET 
slug = '{{ slug }}'
WHERE 
edge_config_id = '{{ edge_config_id }}' --required
AND slug = '{{ slug }}' --required
AND team_id = '{{ team_id}}'
RETURNING
id,
owner_id,
created_at,
created_by,
deleted_at,
digest,
item_count,
purpose,
schema,
size_in_bytes,
slug,
synced_to_dynamo_at,
transfer,
updated_at;
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

Delete a Global Config by id.

```sql
DELETE FROM vercel.edge_config.edge_configs
WHERE edge_config_id = '{{ edge_config_id }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
