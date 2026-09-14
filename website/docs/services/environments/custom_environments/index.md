--- 
title: custom_environments
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_environments
  - environments
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

Creates, updates, deletes, gets or lists a <code>custom_environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.environments.custom_environments" /></td></tr>
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

Internal representation of a custom environment with all required properties

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
    <td>Unique identifier for the custom environment (format: env_*)</td>
</tr>
<tr>
    <td><CopyableCode code="branch_matcher" /></td>
    <td><code>object</code></td>
    <td>Configuration for matching git branches to this environment (wire: branchMatcher)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp when the environment was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_deployment_aliases" /></td>
    <td><code>array</code></td>
    <td>List of aliases for the current deployment (wire: currentDeploymentAliases)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional description of the environment's purpose</td>
</tr>
<tr>
    <td><CopyableCode code="domains" /></td>
    <td><code>array</code></td>
    <td>List of domains associated with this environment</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>URL-friendly name of the environment</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of environment (production, preview, or development) (development, preview, production)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp when the environment was last updated (wire: updatedAt)</td>
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
    <td>Unique identifier for the custom environment (format: env_*)</td>
</tr>
<tr>
    <td><CopyableCode code="branch_matcher" /></td>
    <td><code>object</code></td>
    <td>Configuration for matching git branches to this environment (wire: branchMatcher)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp when the environment was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_deployment_aliases" /></td>
    <td><code>array</code></td>
    <td>List of aliases for the current deployment (wire: currentDeploymentAliases)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional description of the environment's purpose</td>
</tr>
<tr>
    <td><CopyableCode code="domains" /></td>
    <td><code>array</code></td>
    <td>List of domains associated with this environment</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>URL-friendly name of the environment</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of environment (production, preview, or development) (development, preview, production)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp when the environment was last updated (wire: updatedAt)</td>
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
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-environment_slug_or_id"><code>environment_slug_or_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieve a custom environment for the project. Must not be named 'Production' or 'Preview'.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-git_branch"><code>git_branch</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieve custom environments for the project. Must not be named 'Production' or 'Preview'.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td>Creates a custom environment for the current project. Cannot be named 'Production' or 'Preview'.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-environment_slug_or_id"><code>environment_slug_or_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td>Update a custom environment for the project. Must not be named 'Production' or 'Preview'.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-environment_slug_or_id"><code>environment_slug_or_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Remove a custom environment for the project. Must not be named 'Production' or 'Preview'.</td>
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
<tr id="parameter-environment_slug_or_id">
    <td><CopyableCode code="environment_slug_or_id" /></td>
    <td><code>string</code></td>
    <td>The unique custom environment identifier within the project</td>
</tr>
<tr id="parameter-id_or_name">
    <td><CopyableCode code="id_or_name" /></td>
    <td><code>string</code></td>
    <td>The unique project identifier or the project name</td>
</tr>
<tr id="parameter-git_branch">
    <td><CopyableCode code="git_branch" /></td>
    <td><code>string</code></td>
    <td>Fetch custom environments for a specific git branch (wire: gitBranch)</td>
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

Retrieve a custom environment for the project. Must not be named 'Production' or 'Preview'.

```sql
SELECT
id,
branch_matcher,
created_at,
current_deployment_aliases,
description,
domains,
slug,
type,
updated_at
FROM vercel.environments.custom_environments
WHERE id_or_name = '{{ id_or_name }}' -- required
AND environment_slug_or_id = '{{ environment_slug_or_id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Retrieve custom environments for the project. Must not be named 'Production' or 'Preview'.

```sql
SELECT
id,
branch_matcher,
created_at,
current_deployment_aliases,
description,
domains,
slug,
type,
updated_at
FROM vercel.environments.custom_environments
WHERE id_or_name = '{{ id_or_name }}' -- required
AND git_branch = '{{ git_branch }}'
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

Creates a custom environment for the current project. Cannot be named 'Production' or 'Preview'.

```sql
INSERT INTO vercel.environments.custom_environments (
slug,
description,
branch_matcher,
copy_env_vars_from,
id_or_name,
team_id
)
SELECT 
'{{ slug }}',
'{{ description }}',
'{{ branch_matcher }}',
'{{ copy_env_vars_from }}',
'{{ id_or_name }}',
'{{ team_id }}'
RETURNING
id,
branch_matcher,
created_at,
current_deployment_aliases,
description,
domains,
slug,
type,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_environments
  props:
    - name: id_or_name
      value: "{{ id_or_name }}"
      description: Required parameter for the custom_environments resource.
    - name: slug
      value: "{{ slug }}"
      description: |
        The slug of the custom environment to create.
    - name: description
      value: "{{ description }}"
      description: |
        Description of the custom environment. This is optional.
    - name: branch_matcher
      description: |
        How we want to determine a matching branch. This is optional.
      value:
        type: "{{ type }}"
        pattern: "{{ pattern }}"
    - name: copy_env_vars_from
      value: "{{ copy_env_vars_from }}"
      description: |
        Where to copy environment variables from. This is optional.
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

Update a custom environment for the project. Must not be named 'Production' or 'Preview'.

```sql
UPDATE vercel.environments.custom_environments
SET 
slug = '{{ slug }}',
description = '{{ description }}',
branch_matcher = '{{ branch_matcher }}'
WHERE 
id_or_name = '{{ id_or_name }}' --required
AND environment_slug_or_id = '{{ environment_slug_or_id }}' --required
AND team_id = '{{ team_id}}'
RETURNING
id,
branch_matcher,
created_at,
current_deployment_aliases,
description,
domains,
slug,
type,
updated_at;
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

Remove a custom environment for the project. Must not be named 'Production' or 'Preview'.

```sql
DELETE FROM vercel.environments.custom_environments
WHERE id_or_name = '{{ id_or_name }}' --required
AND environment_slug_or_id = '{{ environment_slug_or_id }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
