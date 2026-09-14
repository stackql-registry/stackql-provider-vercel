--- 
title: deployment_checks
hide_title: false
hide_table_of_contents: false
keywords:
  - deployment_checks
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

Creates, updates, deletes, gets or lists a <code>deployment_checks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployment_checks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.checks.deployment_checks" /></td></tr>
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
    <td><CopyableCode code="integration_id" /></td>
    <td><code>string</code></td>
    <td> (wire: integrationId)</td>
</tr>
<tr>
    <td><CopyableCode code="blocking" /></td>
    <td><code>boolean</code></td>
    <td> (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>number</code></td>
    <td> (wire: completedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="conclusion" /></td>
    <td><code>string</code></td>
    <td> (canceled, failed, neutral, skipped, stale, succeeded)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="details_url" /></td>
    <td><code>string</code></td>
    <td> (wire: detailsUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="output" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="rerequestable" /></td>
    <td><code>boolean</code></td>
    <td> (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>number</code></td>
    <td> (wire: startedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (completed, registered, running)</td>
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
    <td><CopyableCode code="integration_id" /></td>
    <td><code>string</code></td>
    <td> (wire: integrationId)</td>
</tr>
<tr>
    <td><CopyableCode code="blocking" /></td>
    <td><code>boolean</code></td>
    <td> (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>number</code></td>
    <td> (wire: completedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="conclusion" /></td>
    <td><code>string</code></td>
    <td> (canceled, failed, neutral, skipped, stale, succeeded)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="details_url" /></td>
    <td><code>string</code></td>
    <td> (wire: detailsUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="output" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="rerequestable" /></td>
    <td><code>boolean</code></td>
    <td> (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>number</code></td>
    <td> (wire: startedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (completed, registered, running)</td>
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
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-check_id"><code>check_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Return a detailed response for a single check.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>List all of the checks created for a deployment.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-blocking"><code>blocking</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Creates a new check. This endpoint must be called with an OAuth2 or it will produce a 400 error.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-check_id"><code>check_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Update an existing check. This endpoint must be called with an OAuth2 or it will produce a 400 error.</td>
</tr>
<tr>
    <td><a href="#rerequest"><CopyableCode code="rerequest" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-check_id"><code>check_id</code></a></td>
    <td><a href="#parameter-autoUpdate"><code>autoUpdate</code></a>, <a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Rerequest a selected check that has failed.</td>
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
    <td>The check to rerun</td>
</tr>
<tr id="parameter-deployment_id">
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>The deployment to rerun the check for.</td>
</tr>
<tr id="parameter-autoUpdate">
    <td><CopyableCode code="autoUpdate" /></td>
    <td><code>boolean</code></td>
    <td>Mark the check as running</td>
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
deployment_id,
external_id,
integration_id,
blocking,
completed_at,
conclusion,
created_at,
details_url,
output,
path,
rerequestable,
started_at,
status,
updated_at
FROM vercel.checks.deployment_checks
WHERE deployment_id = '{{ deployment_id }}' -- required
AND check_id = '{{ check_id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

List all of the checks created for a deployment.

```sql
SELECT
id,
name,
integration_id,
blocking,
completed_at,
conclusion,
created_at,
details_url,
output,
path,
rerequestable,
started_at,
status,
updated_at
FROM vercel.checks.deployment_checks
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

Creates a new check. This endpoint must be called with an OAuth2 or it will produce a 400 error.

```sql
INSERT INTO vercel.checks.deployment_checks (
name,
path,
blocking,
details_url,
external_id,
rerequestable,
deployment_id,
team_id,
slug
)
SELECT 
'{{ name }}' /* required */,
'{{ path }}',
{{ blocking }} /* required */,
'{{ details_url }}',
'{{ external_id }}',
{{ rerequestable }},
'{{ deployment_id }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
id,
name,
deployment_id,
external_id,
integration_id,
blocking,
completed_at,
conclusion,
created_at,
details_url,
output,
path,
rerequestable,
started_at,
status,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: deployment_checks
  props:
    - name: deployment_id
      value: "{{ deployment_id }}"
      description: Required parameter for the deployment_checks resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the check being created
    - name: path
      value: "{{ path }}"
      description: |
        Path of the page that is being checked
    - name: blocking
      value: {{ blocking }}
      description: |
        Whether the check should block a deployment from succeeding
    - name: details_url
      value: "{{ details_url }}"
      description: |
        URL to display for further details
    - name: external_id
      value: "{{ external_id }}"
      description: |
        An identifier that can be used as an external reference
    - name: rerequestable
      value: {{ rerequestable }}
      description: |
        Whether a user should be able to request for the check to be rerun if it fails
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

Update an existing check. This endpoint must be called with an OAuth2 or it will produce a 400 error.

```sql
UPDATE vercel.checks.deployment_checks
SET 
name = '{{ name }}',
path = '{{ path }}',
status = '{{ status }}',
conclusion = '{{ conclusion }}',
details_url = '{{ details_url }}',
output = '{{ output }}',
external_id = '{{ external_id }}'
WHERE 
deployment_id = '{{ deployment_id }}' --required
AND check_id = '{{ check_id }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
id,
name,
deployment_id,
external_id,
integration_id,
blocking,
completed_at,
conclusion,
created_at,
details_url,
output,
path,
rerequestable,
started_at,
status,
updated_at;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="rerequest"
    values={[
        { label: 'rerequest', value: 'rerequest' }
    ]}
>
<TabItem value="rerequest">

Rerequest a selected check that has failed.

```sql
EXEC vercel.checks.deployment_checks.rerequest 
@deployment_id='{{ deployment_id }}' --required, 
@check_id='{{ check_id }}' --required, 
@autoUpdate={{ autoUpdate }}, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}'
;
```
</TabItem>
</Tabs>
