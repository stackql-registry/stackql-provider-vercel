--- 
title: flag_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - flag_versions
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

Creates, updates, deletes, gets or lists a <code>flag_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flag_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.feature_flags.flag_versions" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="flag_id" /></td>
    <td><code>string</code></td>
    <td> (wire: flagId)</td>
</tr>
<tr>
    <td><CopyableCode code="changed_environments" /></td>
    <td><code>array</code></td>
    <td> (wire: changedEnvironments)</td>
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
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>number</code></td>
    <td></td>
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
    <td><a href="#parameter-project_id_or_name"><code>project_id_or_name</code></a>, <a href="#parameter-flag_id_or_slug"><code>flag_id_or_slug</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-with_metadata"><code>with_metadata</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Lists flag versions for a given flag.</td>
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
<tr id="parameter-flag_id_or_slug">
    <td><CopyableCode code="flag_id_or_slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project_id_or_name">
    <td><CopyableCode code="project_id_or_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>Pagination cursor</td>
</tr>
<tr id="parameter-environment">
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Environment to filter by</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>number</code></td>
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
<tr id="parameter-with_metadata">
    <td><CopyableCode code="with_metadata" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include metadata (wire: withMetadata)</td>
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

Lists flag versions for a given flag.

```sql
SELECT
id,
flag_id,
changed_environments,
created_at,
created_by,
data,
message,
metadata,
revision
FROM vercel.feature_flags.flag_versions
WHERE project_id_or_name = '{{ project_id_or_name }}' -- required
AND flag_id_or_slug = '{{ flag_id_or_slug }}' -- required
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
AND environment = '{{ environment }}'
AND with_metadata = '{{ with_metadata }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
