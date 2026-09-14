--- 
title: routes
hide_title: false
hide_table_of_contents: false
keywords:
  - routes
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

Creates, updates, deletes, gets or lists a <code>routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="routes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.project_routes.routes" /></td></tr>
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

A routing rule with metadata for project-level routing.

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
    <td>Unique identifier for the routing rule.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Human-readable name for the routing rule.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional description of what the routing rule does.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the routing rule is enabled. Defaults to true. (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="raw_dest" /></td>
    <td><code>string</code></td>
    <td>Original destination provided by user. (wire: rawDest)</td>
</tr>
<tr>
    <td><CopyableCode code="raw_src" /></td>
    <td><code>string</code></td>
    <td>Original source pattern provided by user (path-to-regexp or regex). Used to display the user's input in API responses. (wire: rawSrc)</td>
</tr>
<tr>
    <td><CopyableCode code="route" /></td>
    <td><code>object</code></td>
    <td>The route definition from @vercel/routing-utils.</td>
</tr>
<tr>
    <td><CopyableCode code="route_type" /></td>
    <td><code>string</code></td>
    <td>Computed route type based on the route configuration. Only present in API responses, not stored in S3. (redirect, rewrite, set_status, transform) (wire: routeType)</td>
</tr>
<tr>
    <td><CopyableCode code="src_syntax" /></td>
    <td><code>string</code></td>
    <td>The syntax type of the source pattern. Determines how the pattern is compiled to regex. (equals, path-to-regexp, regex) (wire: srcSyntax)</td>
</tr>
<tr>
    <td><CopyableCode code="staged" /></td>
    <td><code>boolean</code></td>
    <td>Whether this route is new and not yet published to production. Set to true only when a route is first created via add-route. Cleared (set to false) when a version is promoted to production. (false, true)</td>
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
    <td><a href="#parameter-version_id"><code>version_id</code></a>, <a href="#parameter-q"><code>q</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-diff"><code>diff</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Get the routing rules for a project. Supports searching by name/ID/pattern, filtering by route type, and diffing staged changes against production.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-route"><code>route</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Add a single routing rule to a project at a specified position. Defaults to the end of the list if no position is provided. The route is enabled by default. Stages a new version with the added route.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-route_id"><code>route_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Replace a routing rule identified by its ID, or restore it from the current production version. Stages a new version with the modified route.</td>
</tr>
<tr>
    <td><a href="#stage"><CopyableCode code="stage" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Stage routing rules for a project. Set `overwrite` to true to replace all existing rules, or omit it to merge with existing rules by ID. Returns the new staged version.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Delete one or more routing rules from a project by ID. Stages a new version with the routes removed.</td>
</tr>
<tr>
    <td><a href="#generate"><CopyableCode code="generate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-prompt"><code>prompt</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Generate a routing rule configuration from a natural language description. Returns a suggested route configuration that can be reviewed and saved.</td>
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
<tr id="parameter-route_id">
    <td><CopyableCode code="route_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-diff">
    <td><CopyableCode code="diff" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
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

Get the routing rules for a project. Supports searching by name/ID/pattern, filtering by route type, and diffing staged changes against production.

```sql
SELECT
id,
name,
description,
enabled,
raw_dest,
raw_src,
route,
route_type,
src_syntax,
staged
FROM vercel.project_routes.routes
WHERE project_id = '{{ project_id }}' -- required
AND version_id = '{{ version_id }}'
AND q = '{{ q }}'
AND filter = '{{ filter }}'
AND diff = '{{ diff }}'
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

Add a single routing rule to a project at a specified position. Defaults to the end of the list if no position is provided. The route is enabled by default. Stages a new version with the added route.

```sql
INSERT INTO vercel.project_routes.routes (
route,
position,
project_id,
team_id,
slug
)
SELECT 
'{{ route }}' /* required */,
'{{ position }}',
'{{ project_id }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
route,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: routes
  props:
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the routes resource.
    - name: route
      value:
        name: "{{ name }}"
        description: "{{ description }}"
        enabled: {{ enabled }}
        srcSyntax: "{{ srcSyntax }}"
        route:
          src: "{{ src }}"
          dest: "{{ dest }}"
          headers: "{{ headers }}"
          caseSensitive: {{ caseSensitive }}
          status: {{ status }}
          has:
            - type: "{{ type }}"
              key: "{{ key }}"
              value: "{{ value }}"
          missing:
            - type: "{{ type }}"
              key: "{{ key }}"
              value: "{{ value }}"
          transforms:
            - type: "{{ type }}"
              op: "{{ op }}"
              target: "{{ target }}"
              args: "{{ args }}"
              env: "{{ env }}"
          respectOriginCacheControl: {{ respectOriginCacheControl }}
    - name: position
      description: |
        Controls where the route is inserted. Defaults to "end" if omitted.
      value:
        placement: "{{ placement }}"
        referenceId: "{{ referenceId }}"
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


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Replace a routing rule identified by its ID, or restore it from the current production version. Stages a new version with the modified route.

```sql
UPDATE vercel.project_routes.routes
SET 
route = '{{ route }}',
restore = {{ restore }}
WHERE 
project_id = '{{ project_id }}' --required
AND route_id = '{{ route_id }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
route,
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

Stage routing rules for a project. Set `overwrite` to true to replace all existing rules, or omit it to merge with existing rules by ID. Returns the new staged version.

```sql
REPLACE vercel.project_routes.routes
SET 
overwrite = {{ overwrite }},
routes = '{{ routes }}'
WHERE 
project_id = '{{ project_id }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
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

Delete one or more routing rules from a project by ID. Stages a new version with the routes removed.

```sql
DELETE FROM vercel.project_routes.routes
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
    defaultValue="generate"
    values={[
        { label: 'generate', value: 'generate' }
    ]}
>
<TabItem value="generate">

Generate a routing rule configuration from a natural language description. Returns a suggested route configuration that can be reviewed and saved.

```sql
EXEC vercel.project_routes.routes.generate 
@project_id='{{ project_id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"prompt": "{{ prompt }}", 
"currentRoute": "{{ currentRoute }}"
}'
;
```
</TabItem>
</Tabs>
