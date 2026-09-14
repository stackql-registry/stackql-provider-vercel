--- 
title: tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - tokens
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

Creates, updates, deletes, gets or lists a <code>tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.edge_config.tokens" /></td></tr>
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
    <td>This is not the token itself, but rather an id to identify the token by</td>
</tr>
<tr>
    <td><CopyableCode code="edge_config_id" /></td>
    <td><code>string</code></td>
    <td> (wire: edgeConfigId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="partial_token" /></td>
    <td><code>string</code></td>
    <td>A partially-masked representation of the token, safe to display in UIs. The format is the first 3 characters of the token followed by a fixed 8-character `*` mask (e.g. `550e8400-e29b-41d4-a716-446655440000` → `550********`). The mask length is intentionally fixed (not proportional to the original token length) to avoid leaking the token length. Prefer this field for display/reference in UIs and logs. The full, plaintext token is only disclosed once at creation time via `POST /v1/edge-config/:edgeConfigId/token`; use `id` to reference a token in subsequent calls (e.g. when deleting). (wire: partialToken)</td>
</tr>
<tr>
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>Deprecated: the full, plaintext token. - Returned once by `POST /v1/edge-config/:edgeConfigId/token` (create). - Still returned by `GET /v1/edge-config/:edgeConfigId/token/:token` (detail) for backwards compatibility, but scheduled for removal. - **Not** returned by `GET /v1/edge-config/:edgeConfigId/tokens` (list); use `partialToken` for display and `id` to reference tokens. Do not rely on this field being present on read operations. Prefer `partialToken` for display and `id` for references.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td>This is not the token itself, but rather an id to identify the token by</td>
</tr>
<tr>
    <td><CopyableCode code="edge_config_id" /></td>
    <td><code>string</code></td>
    <td> (wire: edgeConfigId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="partial_token" /></td>
    <td><code>string</code></td>
    <td>A partially-masked representation of the token, safe to display in UIs. The format is the first 3 characters of the token followed by a fixed 8-character `*` mask (e.g. `550e8400-e29b-41d4-a716-446655440000` → `550********`). The mask length is intentionally fixed (not proportional to the original token length) to avoid leaking the token length. Prefer this field for display/reference in UIs and logs. The full, plaintext token is only disclosed once at creation time via `POST /v1/edge-config/:edgeConfigId/token`; use `id` to reference a token in subsequent calls (e.g. when deleting). (wire: partialToken)</td>
</tr>
<tr>
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>Deprecated: the full, plaintext token. - Returned once by `POST /v1/edge-config/:edgeConfigId/token` (create). - Still returned by `GET /v1/edge-config/:edgeConfigId/token/:token` (detail) for backwards compatibility, but scheduled for removal. - **Not** returned by `GET /v1/edge-config/:edgeConfigId/tokens` (list); use `partialToken` for display and `id` to reference tokens. Do not rely on this field being present on read operations. Prefer `partialToken` for display and `id` for references.</td>
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
    <td><a href="#parameter-edge_config_id"><code>edge_config_id</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Return meta data about a Global Config token.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-edge_config_id"><code>edge_config_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Returns all tokens of a Global Config.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-edge_config_id"><code>edge_config_id</code></a>, <a href="#parameter-label"><code>label</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Adds a token to an existing Global Config.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-edge_config_id"><code>edge_config_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Deletes one or more tokens of an existing Global Config.</td>
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
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
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

Return meta data about a Global Config token.

```sql
SELECT
id,
edge_config_id,
created_at,
label,
partial_token,
token
FROM vercel.edge_config.tokens
WHERE edge_config_id = '{{ edge_config_id }}' -- required
AND token = '{{ token }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Returns all tokens of a Global Config.

```sql
SELECT
id,
edge_config_id,
created_at,
label,
partial_token,
token
FROM vercel.edge_config.tokens
WHERE edge_config_id = '{{ edge_config_id }}' -- required
AND team_id = '{{ team_id }}'
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

Adds a token to an existing Global Config.

```sql
INSERT INTO vercel.edge_config.tokens (
label,
edge_config_id,
team_id,
slug
)
SELECT 
'{{ label }}' /* required */,
'{{ edge_config_id }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
id,
token
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tokens
  props:
    - name: edge_config_id
      value: "{{ edge_config_id }}"
      description: Required parameter for the tokens resource.
    - name: label
      value: "{{ label }}"
    - name: team_id
      value: "{{ team_id }}"
      description: The Team identifier to perform the request on behalf of.
      description: The Team identifier to perform the request on behalf of.
    - name: slug
      value: "{{ slug }}"
      description: The Team slug to perform the request on behalf of.
      description: The Team slug to perform the request on behalf of.
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

Deletes one or more tokens of an existing Global Config.

```sql
DELETE FROM vercel.edge_config.tokens
WHERE edge_config_id = '{{ edge_config_id }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
