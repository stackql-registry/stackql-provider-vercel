--- 
title: check_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - check_runs
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

Creates, updates, deletes, gets or lists a <code>check_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="check_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.checks.check_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_for_check"
    values={[
        { label: 'list_for_check', value: 'list_for_check' },
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list_for_check">

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
<TabItem value="get">

Check run backed by a project-level `check` definition.

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
    <td><CopyableCode code="check_id" /></td>
    <td><code>string</code></td>
    <td> (wire: checkId)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td> (wire: deploymentId)</td>
</tr>
<tr>
    <td><CopyableCode code="external_id" /></td>
    <td><code>string</code></td>
    <td> (wire: externalId)</td>
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
    <td><CopyableCode code="blocks" /></td>
    <td><code>string</code></td>
    <td> (build-start, deployment-alias, deployment-promotion, deployment-start, none)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>number</code></td>
    <td> (wire: completedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="conclusion" /></td>
    <td><code>string</code></td>
    <td> (canceled, failed, neutral, skipped, succeeded, timeout)</td>
</tr>
<tr>
    <td><CopyableCode code="conclusion_text" /></td>
    <td><code>string</code></td>
    <td> (wire: conclusionText)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="external_url" /></td>
    <td><code>string</code></td>
    <td> (wire: externalUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="output" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (completed, queued, running)</td>
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
    <td><a href="#list_for_check"><CopyableCode code="list_for_check" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id_or_name"><code>project_id_or_name</code></a>, <a href="#parameter-check_id"><code>check_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>List all runs associated with a given check.</td>
</tr>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-check_run_id"><code>check_run_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Return a detailed response for a single check run.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>List all check runs for a deployment.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-check_id"><code>check_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Creates a new check run for a deployment.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-check_run_id"><code>check_run_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Update an existing check run for a deployment.</td>
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
    <td>The ID of the resource that will be updated.</td>
</tr>
<tr id="parameter-check_run_id">
    <td><CopyableCode code="check_run_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deployment_id">
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project_id_or_name">
    <td><CopyableCode code="project_id_or_name" /></td>
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
    defaultValue="list_for_check"
    values={[
        { label: 'list_for_check', value: 'list_for_check' },
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list_for_check">

List all runs associated with a given check.

```sql
SELECT
*
FROM vercel.checks.check_runs
WHERE project_id_or_name = '{{ project_id_or_name }}' -- required
AND check_id = '{{ check_id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="get">

Return a detailed response for a single check run.

```sql
SELECT
id,
name,
check_id,
deployment_id,
external_id,
owner_id,
project_id,
blocks,
completed_at,
conclusion,
conclusion_text,
created_at,
external_url,
output,
requires,
source,
status,
targets,
timeout,
updated_at
FROM vercel.checks.check_runs
WHERE deployment_id = '{{ deployment_id }}' -- required
AND check_run_id = '{{ check_run_id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

List all check runs for a deployment.

```sql
SELECT
*
FROM vercel.checks.check_runs
WHERE deployment_id = '{{ deployment_id }}' -- required
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

Creates a new check run for a deployment.

```sql
INSERT INTO vercel.checks.check_runs (
check_id,
deployment_id,
team_id,
slug
)
SELECT 
'{{ check_id }}' /* required */,
'{{ deployment_id }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
id,
name,
check_id,
deployment_id,
external_id,
owner_id,
project_id,
blocks,
completed_at,
conclusion,
conclusion_text,
created_at,
external_url,
output,
requires,
source,
status,
targets,
timeout,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: check_runs
  props:
    - name: deployment_id
      value: "{{ deployment_id }}"
      description: Required parameter for the check_runs resource.
    - name: check_id
      value: "{{ check_id }}"
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

Update an existing check run for a deployment.

```sql
UPDATE vercel.checks.check_runs
SET 
external_id = '{{ external_id }}',
external_url = '{{ external_url }}',
status = '{{ status }}',
output = '{{ output }}',
completed_at = {{ completed_at }},
conclusion = '{{ conclusion }}',
conclusion_text = '{{ conclusion_text }}'
WHERE 
deployment_id = '{{ deployment_id }}' --required
AND check_run_id = '{{ check_run_id }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
id,
name,
check_id,
deployment_id,
external_id,
owner_id,
project_id,
blocks,
completed_at,
conclusion,
conclusion_text,
created_at,
external_url,
output,
requires,
source,
status,
targets,
timeout,
updated_at;
```
</TabItem>
</Tabs>
