--- 
title: permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - permissions
  - vcr
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

Creates, updates, deletes, gets or lists a <code>permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.vcr.permissions" /></td></tr>
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

A team's access grant to a Vercel Container Registry repository.

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
    <td><CopyableCode code="repository_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the repository the permission grants access to. (example: repo_a1b2c3d4e5f6) (wire: repositoryId)</td>
</tr>
<tr>
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the team that is granted access to the repository. (example: team_a1b2c3d4e5f6) (wire: teamId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>ISO 8601 timestamp of when the permission was created. (example: 2026-06-30T10:00:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="team_slug" /></td>
    <td><code>string</code></td>
    <td>Slug of the team that is granted access to the repository. (example: my-team) (wire: teamSlug)</td>
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
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>List the teams a VCR repository is shared with.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-slug"><code>slug</code></a></td>
    <td>Grant a team access to a VCR repository. Sharing applies to the whole repository.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-slug"><code>slug</code></a></td>
    <td>Revoke a team's access to a VCR repository.</td>
</tr>
<tr>
    <td><a href="#clear"><CopyableCode code="clear" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Revoke every team's access to a VCR repository. Clearing an unshared repository is a no-op.</td>
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
<tr id="parameter-id_or_name">
    <td><CopyableCode code="id_or_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>Project ID. Missing or empty values return HTTP 400.</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Project ID. Missing or empty values return HTTP 400. (wire: projectId)</td>
</tr>
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>Opaque pagination cursor returned by a previous list response.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
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

List the teams a VCR repository is shared with.

```sql
SELECT
repository_id,
team_id,
created_at,
team_slug
FROM vercel.vcr.permissions
WHERE project_id = '{{ project_id }}' -- required
AND id_or_name = '{{ id_or_name }}' -- required
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
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

Grant a team access to a VCR repository. Sharing applies to the whole repository.

```sql
INSERT INTO vercel.vcr.permissions (
team_id,
team_slug,
project_id,
id_or_name,
slug
)
SELECT 
'{{ team_id }}',
'{{ team_slug }}',
'{{ project_id }}',
'{{ id_or_name }}',
'{{ slug }}'
RETURNING
permission
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: permissions
  props:
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the permissions resource.
    - name: id_or_name
      value: "{{ id_or_name }}"
      description: Required parameter for the permissions resource.
    - name: team_id
      value: "{{ team_id }}"
      description: |
        ID of a team that is granted access to a repository.
    - name: team_slug
      value: "{{ team_slug }}"
      description: |
        Slug of a team that is granted access to a repository.
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

Revoke a team's access to a VCR repository.

```sql
DELETE FROM vercel.vcr.permissions
WHERE project_id = '{{ project_id }}' --required
AND id_or_name = '{{ id_or_name }}' --required
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="clear"
    values={[
        { label: 'clear', value: 'clear' }
    ]}
>
<TabItem value="clear">

Revoke every team's access to a VCR repository. Clearing an unshared repository is a no-op.

```sql
EXEC vercel.vcr.permissions.clear 
@projectId='{{ projectId }}' --required, 
@id_or_name='{{ id_or_name }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}'
;
```
</TabItem>
</Tabs>
