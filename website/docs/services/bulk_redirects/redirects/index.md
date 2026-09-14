--- 
title: redirects
hide_title: false
hide_table_of_contents: false
keywords:
  - redirects
  - bulk_redirects
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

Creates, updates, deletes, gets or lists a <code>redirects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="redirects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.bulk_redirects.redirects" /></td></tr>
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
    <td><CopyableCode code="case_sensitive" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: caseSensitive)</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="permanent" /></td>
    <td><code>boolean</code></td>
    <td> (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="preserve_query_params" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: preserveQueryParams)</td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>boolean</code></td>
    <td> (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="sensitive" /></td>
    <td><code>boolean</code></td>
    <td> (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status_code" /></td>
    <td><code>number</code></td>
    <td> (wire: statusCode)</td>
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
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-version_id"><code>version_id</code></a>, <a href="#parameter-q"><code>q</code></a>, <a href="#parameter-diff"><code>diff</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a>, <a href="#parameter-sort_order"><code>sort_order</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Get the version history for a project's bulk redirects</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-redirect"><code>redirect</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Edits a single redirect identified by its source path. Stages a new change with the modified redirect and returns the alias for the new version in the response.</td>
</tr>
<tr>
    <td><a href="#stage"><CopyableCode code="stage" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-team_id"><code>team_id</code></a></td>
    <td><a href="#parameter-slug"><code>slug</code></a></td>
    <td>Stages new redirects for a project and returns the new version.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Deletes the provided redirects from the latest version of the projects' bulk redirects. Stages a new change with the new redirects and returns the alias for the new version in the response.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-redirects"><code>redirects</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Restores the provided redirects in the staging version to the value in the production version. If no production version exists, removes the redirects from staging.</td>
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
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td> (wire: projectId)</td>
</tr>
<tr id="parameter-diff">
    <td><CopyableCode code="diff" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-q">
    <td><CopyableCode code="q" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team slug to perform the request on behalf of.</td>
</tr>
<tr id="parameter-sort_by">
    <td><CopyableCode code="sort_by" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sort_order">
    <td><CopyableCode code="sort_order" /></td>
    <td><code>string</code></td>
    <td></td>
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
<tr id="parameter-version_id">
    <td><CopyableCode code="version_id" /></td>
    <td><code>string</code></td>
    <td> (wire: versionId)</td>
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

Get the version history for a project's bulk redirects

```sql
SELECT
case_sensitive,
destination,
permanent,
preserve_query_params,
query,
sensitive,
source,
status_code
FROM vercel.bulk_redirects.redirects
WHERE project_id = '{{ project_id }}' -- required
AND version_id = '{{ version_id }}'
AND q = '{{ q }}'
AND diff = '{{ diff }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND sort_by = '{{ sort_by }}'
AND sort_order = '{{ sort_order }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
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

Edits a single redirect identified by its source path. Stages a new change with the modified redirect and returns the alias for the new version in the response.

```sql
UPDATE vercel.bulk_redirects.redirects
SET 
name = '{{ name }}',
redirect = '{{ redirect }}',
restore = {{ restore }}
WHERE 
project_id = '{{ project_id }}' --required
AND redirect = '{{ redirect }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
alias,
version;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="stage"
    values={[
        { label: 'stage', value: 'stage' }
    ]}
>
<TabItem value="stage">

Stages new redirects for a project and returns the new version.

```sql
REPLACE vercel.bulk_redirects.redirects
SET 
project_id = '{{ project_id }}',
team_id = '{{ team_id }}',
overwrite = {{ overwrite }},
name = '{{ name }}',
redirects = '{{ redirects }}'
WHERE 
project_id = '{{ project_id }}' --required
AND team_id = '{{ team_id }}' --required
AND slug = '{{ slug}}'
RETURNING
alias,
version;
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

Deletes the provided redirects from the latest version of the projects' bulk redirects. Stages a new change with the new redirects and returns the alias for the new version in the response.

```sql
DELETE FROM vercel.bulk_redirects.redirects
WHERE project_id = '{{ project_id }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="restore"
    values={[
        { label: 'restore', value: 'restore' }
    ]}
>
<TabItem value="restore">

Restores the provided redirects in the staging version to the value in the production version. If no production version exists, removes the redirects from staging.

```sql
EXEC vercel.bulk_redirects.redirects.restore 
@projectId='{{ projectId }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"name": "{{ name }}", 
"redirects": "{{ redirects }}"
}'
;
```
</TabItem>
</Tabs>
