--- 
title: versions
hide_title: false
hide_table_of_contents: false
keywords:
  - versions
  - project_routes
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

Creates, updates, deletes, gets or lists a <code>versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.project_routes.versions" /></td></tr>
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

A version of routing rules stored in S3.

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
    <td>Unique identifier for the version.</td>
</tr>
<tr>
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The staging alias for previewing this version.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user who created this version. (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="is_live" /></td>
    <td><code>boolean</code></td>
    <td>Whether this version is currently live in production. (false, true) (wire: isLive)</td>
</tr>
<tr>
    <td><CopyableCode code="is_staging" /></td>
    <td><code>boolean</code></td>
    <td>Whether this version is staged and not yet promoted to production. (false, true) (wire: isStaging)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>number</code></td>
    <td>Timestamp of when this version was last modified. (wire: lastModified)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_count" /></td>
    <td><code>number</code></td>
    <td>The number of routing rules in this version. (wire: ruleCount)</td>
</tr>
<tr>
    <td><CopyableCode code="s_3_key" /></td>
    <td><code>string</code></td>
    <td>The S3 key where the routing rules are stored. (wire: s3Key)</td>
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
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Get the version history for a project's routing rules. Returns the staging version (if one exists) followed by production versions, most recent first. The staging version has `isStaging: true` and the current production version has `isLive: true`.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Promote staged routing rules to production, restore a previous production version, or discard staged changes. - `promote`: Publishes the staging version to production. - `restore`: Rolls back to a previous production version. - `discard`: Removes the staging version without publishing.</td>
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
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td></td>
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

Get the version history for a project's routing rules. Returns the staging version (if one exists) followed by production versions, most recent first. The staging version has `isStaging: true` and the current production version has `isLive: true`.

```sql
SELECT
id,
alias,
created_by,
is_live,
is_staging,
last_modified,
rule_count,
s_3_key
FROM vercel.project_routes.versions
WHERE project_id = '{{ project_id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Promote staged routing rules to production, restore a previous production version, or discard staged changes. - `promote`: Publishes the staging version to production. - `restore`: Rolls back to a previous production version. - `discard`: Removes the staging version without publishing.

```sql
EXEC vercel.project_routes.versions.update 
@project_id='{{ project_id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"id": "{{ id }}", 
"action": "{{ action }}"
}'
;
```
</TabItem>
</Tabs>
