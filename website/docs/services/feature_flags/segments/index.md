--- 
title: segments
hide_title: false
hide_table_of_contents: false
keywords:
  - segments
  - feature_flags
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

Creates, updates, deletes, gets or lists a <code>segments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="segments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.feature_flags.segments" /></td></tr>
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
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td> (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="type_name" /></td>
    <td><code>string</code></td>
    <td> (segment) (wire: typeName)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td> (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="hint" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td> (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="used_by_flags" /></td>
    <td><code>array</code></td>
    <td> (wire: usedByFlags)</td>
</tr>
<tr>
    <td><CopyableCode code="used_by_segments" /></td>
    <td><code>array</code></td>
    <td> (wire: usedBySegments)</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td> (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="type_name" /></td>
    <td><code>string</code></td>
    <td> (segment) (wire: typeName)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td> (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="hint" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td> (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="used_by_flags" /></td>
    <td><code>array</code></td>
    <td> (wire: usedByFlags)</td>
</tr>
<tr>
    <td><CopyableCode code="used_by_segments" /></td>
    <td><code>array</code></td>
    <td> (wire: usedBySegments)</td>
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
    <td><a href="#parameter-project_id_or_name"><code>project_id_or_name</code></a>, <a href="#parameter-segment_id_or_slug"><code>segment_id_or_slug</code></a></td>
    <td><a href="#parameter-with_metadata"><code>with_metadata</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieve a feature flag segment by ID or slug.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id_or_name"><code>project_id_or_name</code></a></td>
    <td><a href="#parameter-with_metadata"><code>with_metadata</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>List all feature flag segments for a project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_id_or_name"><code>project_id_or_name</code></a>, <a href="#parameter-slug"><code>slug</code></a>, <a href="#parameter-label"><code>label</code></a>, <a href="#parameter-data"><code>data</code></a>, <a href="#parameter-hint"><code>hint</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td>Create a new feature flag segment.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project_id_or_name"><code>project_id_or_name</code></a>, <a href="#parameter-segment_id_or_slug"><code>segment_id_or_slug</code></a></td>
    <td><a href="#parameter-with_metadata"><code>with_metadata</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Update an existing feature flag segment.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project_id_or_name"><code>project_id_or_name</code></a>, <a href="#parameter-segment_id_or_slug"><code>segment_id_or_slug</code></a></td>
    <td><a href="#parameter-with_metadata"><code>with_metadata</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Delete a feature flag segment.</td>
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
<tr id="parameter-project_id_or_name">
    <td><CopyableCode code="project_id_or_name" /></td>
    <td><code>string</code></td>
    <td>The project id or name</td>
</tr>
<tr id="parameter-segment_id_or_slug">
    <td><CopyableCode code="segment_id_or_slug" /></td>
    <td><code>string</code></td>
    <td>The segment slug</td>
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
<tr id="parameter-with_metadata">
    <td><CopyableCode code="with_metadata" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include metadata (wire: withMetadata)</td>
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

Retrieve a feature flag segment by ID or slug.

```sql
SELECT
id,
project_id,
type_name,
created_at,
created_by,
data,
description,
hint,
label,
metadata,
slug,
updated_at,
used_by_flags,
used_by_segments
FROM vercel.feature_flags.segments
WHERE project_id_or_name = '{{ project_id_or_name }}' -- required
AND segment_id_or_slug = '{{ segment_id_or_slug }}' -- required
AND with_metadata = '{{ with_metadata }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

List all feature flag segments for a project.

```sql
SELECT
id,
project_id,
type_name,
created_at,
created_by,
data,
description,
hint,
label,
metadata,
slug,
updated_at,
used_by_flags,
used_by_segments
FROM vercel.feature_flags.segments
WHERE project_id_or_name = '{{ project_id_or_name }}' -- required
AND with_metadata = '{{ with_metadata }}'
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

Create a new feature flag segment.

```sql
INSERT INTO vercel.feature_flags.segments (
slug,
created_by,
label,
description,
data,
hint,
project_id_or_name,
team_id
)
SELECT 
'{{ slug }}' /* required */,
'{{ created_by }}',
'{{ label }}' /* required */,
'{{ description }}',
'{{ data }}' /* required */,
'{{ hint }}' /* required */,
'{{ project_id_or_name }}',
'{{ team_id }}'
RETURNING
id,
project_id,
type_name,
created_at,
created_by,
data,
description,
hint,
label,
slug,
updated_at,
used_by_flags,
used_by_segments
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: segments
  props:
    - name: project_id_or_name
      value: "{{ project_id_or_name }}"
      description: Required parameter for the segments resource.
    - name: slug
      value: "{{ slug }}"
    - name: created_by
      value: "{{ created_by }}"
      description: |
        The entity who created the segment
    - name: label
      value: "{{ label }}"
    - name: description
      value: "{{ description }}"
    - name: data
      description: |
        The data of the segment
      value:
        rules:
          - id: "{{ id }}"
            conditions: "{{ conditions }}"
            outcome: "{{ outcome }}"
        include: "{{ include }}"
        exclude: "{{ exclude }}"
    - name: hint
      value: "{{ hint }}"
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

Update an existing feature flag segment.

```sql
UPDATE vercel.feature_flags.segments
SET 
operations = '{{ operations }}',
label = '{{ label }}',
description = '{{ description }}',
data = '{{ data }}',
hint = '{{ hint }}'
WHERE 
project_id_or_name = '{{ project_id_or_name }}' --required
AND segment_id_or_slug = '{{ segment_id_or_slug }}' --required
AND with_metadata = {{ with_metadata}}
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
id,
project_id,
type_name,
created_at,
created_by,
data,
description,
hint,
label,
metadata,
slug,
updated_at,
used_by_flags,
used_by_segments;
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

Delete a feature flag segment.

```sql
DELETE FROM vercel.feature_flags.segments
WHERE project_id_or_name = '{{ project_id_or_name }}' --required
AND segment_id_or_slug = '{{ segment_id_or_slug }}' --required
AND with_metadata = '{{ with_metadata }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
