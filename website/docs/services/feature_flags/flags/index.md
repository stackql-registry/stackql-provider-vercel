--- 
title: flags
hide_title: false
hide_table_of_contents: false
keywords:
  - flags
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

Creates, updates, deletes, gets or lists a <code>flags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.feature_flags.flags" /></td></tr>
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
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td> (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td> (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="type_name" /></td>
    <td><code>string</code></td>
    <td> (flag) (wire: typeName)</td>
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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="environments" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td> (boolean, json, number, string)</td>
</tr>
<tr>
    <td><CopyableCode code="maintainer_ids" /></td>
    <td><code>array</code></td>
    <td> (wire: maintainerIds)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="permanent" /></td>
    <td><code>boolean</code></td>
    <td> (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="seed" /></td>
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td> (active, archived)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td> (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td> (wire: updatedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="variants" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#parameter-project_id_or_name"><code>project_id_or_name</code></a>, <a href="#parameter-flag_id_or_slug"><code>flag_id_or_slug</code></a></td>
    <td><a href="#parameter-if_match"><code>if_match</code></a>, <a href="#parameter-with_metadata"><code>with_metadata</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieve a specific feature flag by its ID or slug.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id_or_name"><code>project_id_or_name</code></a></td>
    <td><a href="#parameter-state"><code>state</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-search"><code>search</code></a>, <a href="#parameter-tags"><code>tags</code></a>, <a href="#parameter-created_by"><code>created_by</code></a>, <a href="#parameter-maintainer_ids"><code>maintainer_ids</code></a>, <a href="#parameter-include_marketplace_flags"><code>include_marketplace_flags</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieve feature flags for a project. Returns an opaque cursor for pagination.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_id_or_name"><code>project_id_or_name</code></a>, <a href="#parameter-slug"><code>slug</code></a>, <a href="#parameter-kind"><code>kind</code></a>, <a href="#parameter-environments"><code>environments</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td>Create a new feature flag for a project. The flag must have a unique slug within the project and specify its kind (boolean, string, number, or json).</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project_id_or_name"><code>project_id_or_name</code></a>, <a href="#parameter-flag_id_or_slug"><code>flag_id_or_slug</code></a></td>
    <td><a href="#parameter-if_match"><code>if_match</code></a>, <a href="#parameter-with_metadata"><code>with_metadata</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Update an existing feature flag. This endpoint supports partial updates, allowing you to modify specific properties like variants, environments, or state without providing the full flag configuration.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project_id_or_name"><code>project_id_or_name</code></a>, <a href="#parameter-flag_id_or_slug"><code>flag_id_or_slug</code></a></td>
    <td><a href="#parameter-if_match"><code>if_match</code></a>, <a href="#parameter-with_metadata"><code>with_metadata</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Permanently delete a feature flag from the project. This action cannot be undone. Consider archiving the flag instead if you may need it in the future.</td>
</tr>
<tr>
    <td><a href="#list_v1"><CopyableCode code="list_v1" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id_or_name"><code>project_id_or_name</code></a></td>
    <td><a href="#parameter-state"><code>state</code></a>, <a href="#parameter-withMetadata"><code>withMetadata</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-search"><code>search</code></a>, <a href="#parameter-tags"><code>tags</code></a>, <a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieve feature flags for a project. The list can be filtered by state and supports pagination.</td>
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
    <td>The flag id or name</td>
</tr>
<tr id="parameter-project_id_or_name">
    <td><CopyableCode code="project_id_or_name" /></td>
    <td><code>string</code></td>
    <td>The project id or name</td>
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
<tr id="parameter-if_match">
    <td><CopyableCode code="if_match" /></td>
    <td><code>string</code></td>
    <td>Etag to match, can be used interchangeably with the `if-match` header (wire: ifMatch)</td>
</tr>
<tr id="parameter-include_marketplace_flags">
    <td><CopyableCode code="include_marketplace_flags" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include Marketplace experimentation items in the paginated response. Defaults to false. (wire: includeMarketplaceFlags)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of flags to return. When not set, all flags are returned.</td>
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
<tr id="parameter-withMetadata">
    <td><CopyableCode code="withMetadata" /></td>
    <td><code>boolean</code></td>
    <td>Deprecated. Whether to include creator metadata in each flag in the response. Resolve creator identity client-side (e.g. via the team members endpoint) instead; this parameter will be removed in a future release. Use `GET /v1/projects/:id/feature-flags/flags/:flagIdOrSlug?withMetadata=true` for single-flag lookups that need creator metadata.</td>
</tr>
<tr id="parameter-with_metadata">
    <td><CopyableCode code="with_metadata" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include metadata in the response (wire: withMetadata)</td>
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

Retrieve a specific feature flag by its ID or slug.

```sql
SELECT
id,
owner_id,
project_id,
type_name,
created_at,
created_by,
description,
environments,
kind,
maintainer_ids,
metadata,
permanent,
revision,
seed,
slug,
state,
tags,
updated_at,
updated_by,
variants
FROM vercel.feature_flags.flags
WHERE project_id_or_name = '{{ project_id_or_name }}' -- required
AND flag_id_or_slug = '{{ flag_id_or_slug }}' -- required
AND if_match = '{{ if_match }}'
AND with_metadata = '{{ with_metadata }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Retrieve feature flags for a project. Returns an opaque cursor for pagination.

```sql
SELECT
*
FROM vercel.feature_flags.flags
WHERE project_id_or_name = '{{ project_id_or_name }}' -- required
AND state = '{{ state }}'
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
AND search = '{{ search }}'
AND tags = '{{ tags }}'
AND created_by = '{{ created_by }}'
AND maintainer_ids = '{{ maintainer_ids }}'
AND include_marketplace_flags = '{{ include_marketplace_flags }}'
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

Create a new feature flag for a project. The flag must have a unique slug within the project and specify its kind (boolean, string, number, or json).

```sql
INSERT INTO vercel.feature_flags.flags (
slug,
kind,
variants,
environments,
seed,
description,
state,
maintainer_ids,
permanent,
tags,
project_id_or_name,
team_id
)
SELECT 
'{{ slug }}' /* required */,
'{{ kind }}' /* required */,
'{{ variants }}',
'{{ environments }}' /* required */,
{{ seed }},
'{{ description }}',
'{{ state }}',
'{{ maintainer_ids }}',
{{ permanent }},
'{{ tags }}',
'{{ project_id_or_name }}',
'{{ team_id }}'
RETURNING
id,
owner_id,
project_id,
type_name,
created_at,
created_by,
description,
environments,
kind,
maintainer_ids,
permanent,
revision,
seed,
slug,
state,
tags,
updated_at,
updated_by,
variants
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: flags
  props:
    - name: project_id_or_name
      value: "{{ project_id_or_name }}"
      description: Required parameter for the flags resource.
    - name: slug
      value: "{{ slug }}"
      description: |
        A unique (per project) key for the flag, composed of letters, numbers, dashes, and underscores
    - name: kind
      value: "{{ kind }}"
      description: |
        The kind of flag
      valid_values: ['boolean', 'string', 'number', 'json']
    - name: variants
      description: |
        The variants of the flag
      value:
        - id: "{{ id }}"
          label: "{{ label }}"
          description: "{{ description }}"
          value: "{{ value }}"
    - name: environments
      value: "{{ environments }}"
      description: |
        The configuration for the flag in different environments
    - name: seed
      value: {{ seed }}
      description: |
        A random seed to prevent split points in different flags from having the same targets
    - name: description
      value: "{{ description }}"
      description: |
        A description of the flag
    - name: state
      value: "{{ state }}"
      valid_values: ['active', 'archived']
    - name: maintainer_ids
      value:
        - "{{ maintainer_ids }}"
      description: |
        The user ids of the maintainers of the flag
    - name: permanent
      value: {{ permanent }}
      description: |
        Whether this flag is marked as permanent, indicating it should not be removed
    - name: tags
      value:
        - "{{ tags }}"
      description: |
        Tags for categorizing the flag
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

Update an existing feature flag. This endpoint supports partial updates, allowing you to modify specific properties like variants, environments, or state without providing the full flag configuration.

```sql
UPDATE vercel.feature_flags.flags
SET 
created_by = '{{ created_by }}',
message = '{{ message }}',
variants = '{{ variants }}',
environments = '{{ environments }}',
seed = {{ seed }},
description = '{{ description }}',
state = '{{ state }}',
maintainer_ids = '{{ maintainer_ids }}',
permanent = {{ permanent }},
tags = '{{ tags }}'
WHERE 
project_id_or_name = '{{ project_id_or_name }}' --required
AND flag_id_or_slug = '{{ flag_id_or_slug }}' --required
AND if_match = '{{ if_match}}'
AND with_metadata = {{ with_metadata}}
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
id,
owner_id,
project_id,
type_name,
created_at,
created_by,
description,
environments,
kind,
maintainer_ids,
metadata,
permanent,
revision,
seed,
slug,
state,
tags,
updated_at,
updated_by,
variants;
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

Permanently delete a feature flag from the project. This action cannot be undone. Consider archiving the flag instead if you may need it in the future.

```sql
DELETE FROM vercel.feature_flags.flags
WHERE project_id_or_name = '{{ project_id_or_name }}' --required
AND flag_id_or_slug = '{{ flag_id_or_slug }}' --required
AND if_match = '{{ if_match }}'
AND with_metadata = '{{ with_metadata }}'
AND team_id = '{{ team_id }}'
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

Retrieve feature flags for a project. The list can be filtered by state and supports pagination.

```sql
EXEC vercel.feature_flags.flags.list_v1 
@project_id_or_name='{{ project_id_or_name }}' --required, 
@state='{{ state }}', 
@withMetadata={{ withMetadata }}, 
@limit='{{ limit }}', 
@cursor='{{ cursor }}', 
@search='{{ search }}', 
@tags='{{ tags }}', 
@teamId='{{ teamId }}', 
@slug='{{ slug }}'
;
```
</TabItem>
</Tabs>
