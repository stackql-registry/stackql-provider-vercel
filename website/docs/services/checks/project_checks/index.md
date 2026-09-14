--- 
title: project_checks
hide_title: false
hide_table_of_contents: false
keywords:
  - project_checks
  - checks
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

Creates, updates, deletes, gets or lists a <code>project_checks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="project_checks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.checks.project_checks" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
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
    <td><CopyableCode code="source_integration_configuration_id" /></td>
    <td><code>string</code></td>
    <td> (wire: sourceIntegrationConfigurationId)</td>
</tr>
<tr>
    <td><CopyableCode code="blocks" /></td>
    <td><code>string</code></td>
    <td> (build-start, deployment-alias, deployment-promotion, deployment-start, none)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>number</code></td>
    <td> (wire: deletedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="is_rerequestable" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: isRerequestable)</td>
</tr>
<tr>
    <td><CopyableCode code="requires" /></td>
    <td><code>string</code></td>
    <td> (build-ready, deployment-url, none)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source_kind" /></td>
    <td><code>string</code></td>
    <td> (git-provider, integration, vercel, webhook, integration, webhook, git-provider) (wire: sourceKind)</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td> (wire: updatedAt)</td>
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
    <td><CopyableCode code="name" /></td>
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
    <td><CopyableCode code="source_integration_configuration_id" /></td>
    <td><code>string</code></td>
    <td> (wire: sourceIntegrationConfigurationId)</td>
</tr>
<tr>
    <td><CopyableCode code="blocks" /></td>
    <td><code>string</code></td>
    <td> (build-start, deployment-alias, deployment-promotion, deployment-start, none)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>number</code></td>
    <td> (wire: deletedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="is_rerequestable" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: isRerequestable)</td>
</tr>
<tr>
    <td><CopyableCode code="requires" /></td>
    <td><code>string</code></td>
    <td> (build-ready, deployment-url, none)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source_kind" /></td>
    <td><code>string</code></td>
    <td> (git-provider, integration, vercel, webhook, integration, webhook, git-provider) (wire: sourceKind)</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td> (wire: updatedAt)</td>
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
    <td><a href="#parameter-project_id_or_name"><code>project_id_or_name</code></a>, <a href="#parameter-check_id"><code>check_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Return a detailed response for a single check.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id_or_name"><code>project_id_or_name</code></a></td>
    <td><a href="#parameter-blocks"><code>blocks</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>List all checks for a project, optionally filtered by target.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_id_or_name"><code>project_id_or_name</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-requires"><code>requires</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Creates a new check for a project.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project_id_or_name"><code>project_id_or_name</code></a>, <a href="#parameter-check_id"><code>check_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Update an existing check.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project_id_or_name"><code>project_id_or_name</code></a>, <a href="#parameter-check_id"><code>check_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Delete an existing check and all of its runs.</td>
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
<tr id="parameter-check_id">
    <td><CopyableCode code="check_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project_id_or_name">
    <td><CopyableCode code="project_id_or_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-blocks">
    <td><CopyableCode code="blocks" /></td>
    <td><code>string</code></td>
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

Return a detailed response for a single check.

```sql
SELECT
id,
name,
owner_id,
project_id,
source_integration_configuration_id,
blocks,
created_at,
deleted_at,
is_rerequestable,
requires,
source,
source_kind,
targets,
timeout,
updated_at
FROM vercel.checks.project_checks
WHERE project_id_or_name = '{{ project_id_or_name }}' -- required
AND check_id = '{{ check_id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

List all checks for a project, optionally filtered by target.

```sql
SELECT
id,
name,
owner_id,
project_id,
source_integration_configuration_id,
blocks,
created_at,
deleted_at,
is_rerequestable,
requires,
source,
source_kind,
targets,
timeout,
updated_at
FROM vercel.checks.project_checks
WHERE project_id_or_name = '{{ project_id_or_name }}' -- required
AND blocks = '{{ blocks }}'
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

Creates a new check for a project.

```sql
INSERT INTO vercel.checks.project_checks (
name,
is_rerequestable,
requires,
targets,
blocks,
source,
timeout,
project_id_or_name,
team_id,
slug
)
SELECT 
'{{ name }}' /* required */,
{{ is_rerequestable }},
'{{ requires }}' /* required */,
'{{ targets }}',
'{{ blocks }}',
'{{ source }}',
{{ timeout }},
'{{ project_id_or_name }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
id,
name,
owner_id,
project_id,
source_integration_configuration_id,
blocks,
created_at,
deleted_at,
is_rerequestable,
requires,
source,
source_kind,
targets,
timeout,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: project_checks
  props:
    - name: project_id_or_name
      value: "{{ project_id_or_name }}"
      description: Required parameter for the project_checks resource.
    - name: name
      value: "{{ name }}"
    - name: is_rerequestable
      value: {{ is_rerequestable }}
    - name: requires
      value: "{{ requires }}"
      valid_values: ['build-ready', 'deployment-url', 'none']
      default: deployment-url
    - name: targets
      value:
        - "{{ targets }}"
    - name: blocks
      value: "{{ blocks }}"
      valid_values: ['build-start', 'deployment-start', 'deployment-alias', 'deployment-promotion', 'none']
      default: deployment-alias
    - name: source
      value:
        kind: "{{ kind }}"
        externalResourceId: "{{ externalResourceId }}"
        webhookId: "{{ webhookId }}"
        externalCheckName: "{{ externalCheckName }}"
        provider: "{{ provider }}"
    - name: timeout
      value: {{ timeout }}
      default: 300
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

Update an existing check.

```sql
UPDATE vercel.checks.project_checks
SET 
name = '{{ name }}',
is_rerequestable = {{ is_rerequestable }},
requires = '{{ requires }}',
targets = '{{ targets }}',
blocks = '{{ blocks }}',
timeout = {{ timeout }}
WHERE 
project_id_or_name = '{{ project_id_or_name }}' --required
AND check_id = '{{ check_id }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
id,
name,
owner_id,
project_id,
source_integration_configuration_id,
blocks,
created_at,
deleted_at,
is_rerequestable,
requires,
source,
source_kind,
targets,
timeout,
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

Delete an existing check and all of its runs.

```sql
DELETE FROM vercel.checks.project_checks
WHERE project_id_or_name = '{{ project_id_or_name }}' --required
AND check_id = '{{ check_id }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
