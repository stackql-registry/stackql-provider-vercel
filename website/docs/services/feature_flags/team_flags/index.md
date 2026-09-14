--- 
title: team_flags
hide_title: false
hide_table_of_contents: false
keywords:
  - team_flags
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

Creates, updates, deletes, gets or lists a <code>team_flags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="team_flags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.feature_flags.team_flags" /></td></tr>
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
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td><a href="#parameter-state"><code>state</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-search"><code>search</code></a>, <a href="#parameter-kind"><code>kind</code></a>, <a href="#parameter-tags"><code>tags</code></a>, <a href="#parameter-created_by"><code>created_by</code></a>, <a href="#parameter-maintainer_ids"><code>maintainer_ids</code></a>, <a href="#parameter-include_marketplace_flags"><code>include_marketplace_flags</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieve all feature flags for a team across all projects. Returns an opaque cursor for pagination.</td>
</tr>
<tr>
    <td><a href="#list_v1"><CopyableCode code="list_v1" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td><a href="#parameter-state"><code>state</code></a>, <a href="#parameter-withMetadata"><code>withMetadata</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-search"><code>search</code></a>, <a href="#parameter-kind"><code>kind</code></a>, <a href="#parameter-tags"><code>tags</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieve all feature flags for a team across all projects. The list can be filtered by state and supports pagination.</td>
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
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The Team identifier to perform the request on behalf of.</td>
</tr>
<tr id="parameter-created_by">
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Filter flags by the id of the entity that created them (a user or team id). (wire: createdBy)</td>
</tr>
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>Pagination cursor to continue from.</td>
</tr>
<tr id="parameter-include_marketplace_flags">
    <td><CopyableCode code="include_marketplace_flags" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include Marketplace experimentation items in the paginated response. Defaults to false. (wire: includeMarketplaceFlags)</td>
</tr>
<tr id="parameter-kind">
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The kind of flags to retrieve.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of flags to return.</td>
</tr>
<tr id="parameter-maintainer_ids">
    <td><CopyableCode code="maintainer_ids" /></td>
    <td><code>array</code></td>
    <td>Filter flags by maintainer user id. Repeat the parameter for multiple maintainers (any may match). (wire: maintainerIds)</td>
</tr>
<tr id="parameter-search">
    <td><CopyableCode code="search" /></td>
    <td><code>string</code></td>
    <td>Search flags by their slug or description. Case-insensitive.</td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team slug to perform the request on behalf of.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the flags to retrieve. Defaults to `active`.</td>
</tr>
<tr id="parameter-tags">
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Filter flags by tag. Repeat the parameter for multiple tags (all must match).</td>
</tr>
<tr id="parameter-withMetadata">
    <td><CopyableCode code="withMetadata" /></td>
    <td><code>boolean</code></td>
    <td>Deprecated. Whether to include creator metadata in each flag in the response. Resolve creator identity client-side (e.g. via the team members endpoint) instead; this parameter will be removed in a future release.</td>
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

Retrieve all feature flags for a team across all projects. Returns an opaque cursor for pagination.

```sql
SELECT
*
FROM vercel.feature_flags.team_flags
WHERE team_id = '{{ team_id }}' -- required
AND state = '{{ state }}'
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
AND search = '{{ search }}'
AND kind = '{{ kind }}'
AND tags = '{{ tags }}'
AND created_by = '{{ created_by }}'
AND maintainer_ids = '{{ maintainer_ids }}'
AND include_marketplace_flags = '{{ include_marketplace_flags }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="list_v1"
    values={[
        { label: 'list_v1', value: 'list_v1' }
    ]}
>
<TabItem value="list_v1">

Retrieve all feature flags for a team across all projects. The list can be filtered by state and supports pagination.

```sql
EXEC vercel.feature_flags.team_flags.list_v1 
@team_id='{{ team_id }}' --required, 
@state='{{ state }}', 
@withMetadata={{ withMetadata }}, 
@limit='{{ limit }}', 
@cursor='{{ cursor }}', 
@search='{{ search }}', 
@kind='{{ kind }}', 
@tags='{{ tags }}', 
@slug='{{ slug }}'
;
```
</TabItem>
</Tabs>
