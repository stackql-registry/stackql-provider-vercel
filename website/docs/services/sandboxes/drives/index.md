--- 
title: drives
hide_title: false
hide_table_of_contents: false
keywords:
  - drives
  - sandboxes
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

Creates, updates, deletes, gets or lists a <code>drives</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="drives" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.sandboxes.drives" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

This object contains information related to a Vercel Sandbox Drive.

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
    <td>The unique drive ID. (example: drive_abc123)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The unique drive name within the project. (example: workspace)</td>
</tr>
<tr>
    <td><CopyableCode code="current_session_id" /></td>
    <td><code>string</code></td>
    <td>Current session ID the drive is attached to, if any. (example: sbx_123) (wire: currentSessionId)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The project that owns the drive. (example: prj_abc123) (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="current_sandbox_name" /></td>
    <td><code>string</code></td>
    <td>Current sandbox name the drive is attached to, if any. (example: my-sandbox) (wire: currentSandboxName)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>The time when the drive was created, in milliseconds since the epoch. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="max_size_bytes" /></td>
    <td><code>number</code></td>
    <td>The maximum drive size in bytes. (wire: maxSizeBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region where the drive is stored. (example: iad1)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>The last time the drive was updated, in milliseconds since the epoch. (wire: updatedAt)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a>, <a href="#parameter-name_prefix"><code>name_prefix</code></a>, <a href="#parameter-sort_order"><code>sort_order</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieves a paginated list of drives belonging to a specific project. Drives are in private beta. Register your interest to get access: https:​//vercel.com/changelog/drives-for-vercel-sandbox-in-private-beta</td>
</tr>
<tr>
    <td><a href="#get_or_create"><CopyableCode code="get_or_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Gets an existing drive by project and name, or creates it when it does not exist. Drives are in private beta. Register your interest to get access: https:​//vercel.com/changelog/drives-for-vercel-sandbox-in-private-beta</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Deletes a drive by project and name. Attached drives cannot be deleted. Stop or replace the session currently using the drive before retrying deletion. Drives are in private beta. Register your interest to get access: https:​//vercel.com/changelog/drives-for-vercel-sandbox-in-private-beta</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name for the drive. Must be unique per project and URL-safe (alphanumeric, hyphens, underscores).</td>
</tr>
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>Opaque pagination cursor from a previous response.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>number</code></td>
    <td>Maximum number of drives to return in the response. Used for pagination.</td>
</tr>
<tr id="parameter-name_prefix">
    <td><CopyableCode code="name_prefix" /></td>
    <td><code>string</code></td>
    <td>Filter drives whose name starts with this prefix. Only valid when sortBy=name. (wire: namePrefix)</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The project ID or name associated with the drive. Required unless using a Vercel OIDC token scoped to a project. (wire: projectId)</td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team slug to perform the request on behalf of.</td>
</tr>
<tr id="parameter-sort_by">
    <td><CopyableCode code="sort_by" /></td>
    <td><code>string</code></td>
    <td>Field to sort drives by. (wire: sortBy)</td>
</tr>
<tr id="parameter-sort_order">
    <td><CopyableCode code="sort_order" /></td>
    <td><code>string</code></td>
    <td>Sort direction for results. (wire: sortOrder)</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Retrieves a paginated list of drives belonging to a specific project. Drives are in private beta. Register your interest to get access: https://vercel.com/changelog/drives-for-vercel-sandbox-in-private-beta

```sql
SELECT
id,
name,
current_session_id,
project_id,
current_sandbox_name,
created_at,
max_size_bytes,
region,
updated_at
FROM vercel.sandboxes.drives
WHERE project_id = '{{ project_id }}'
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
AND sort_by = '{{ sort_by }}'
AND name_prefix = '{{ name_prefix }}'
AND sort_order = '{{ sort_order }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="get_or_create"
    values={[
        { label: 'get_or_create', value: 'get_or_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="get_or_create">

Gets an existing drive by project and name, or creates it when it does not exist. Drives are in private beta. Register your interest to get access: https://vercel.com/changelog/drives-for-vercel-sandbox-in-private-beta

```sql
INSERT INTO vercel.sandboxes.drives (
project_id,
max_size_bytes,
region,
name,
team_id,
slug
)
SELECT 
'{{ project_id }}',
{{ max_size_bytes }},
'{{ region }}',
'{{ name }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
drive
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: drives
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the drives resource.
    - name: project_id
      value: "{{ project_id }}"
      description: |
        The project ID or name to associate the drive with. Required unless using a Vercel OIDC token scoped to a project.
    - name: max_size_bytes
      value: {{ max_size_bytes }}
      description: |
        Maximum drive size in bytes. Defaults to 1 TiB when omitted (1 GiB for Hobby). The maximum quota is 16 TiB. Request a quota above 16 TiB at https://vercel.com/help.
    - name: region
      value: "{{ region }}"
      description: |
        Region where the drive is stored. Defaults to iad1.
      valid_values: ['iad1', 'sfo1', 'cle1', 'cdg1', 'fra1', 'arn1', 'sin1', 'pdx1', 'lhr1', 'icn1', 'bom1', 'cpt1', 'dub1', 'gru1', 'hkg1', 'syd1', 'yul1', 'hnd1', 'kix1']
      default: iad1
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

Deletes a drive by project and name. Attached drives cannot be deleted. Stop or replace the session currently using the drive before retrying deletion. Drives are in private beta. Register your interest to get access: https://vercel.com/changelog/drives-for-vercel-sandbox-in-private-beta

```sql
DELETE FROM vercel.sandboxes.drives
WHERE name = '{{ name }}' --required
AND project_id = '{{ project_id }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
