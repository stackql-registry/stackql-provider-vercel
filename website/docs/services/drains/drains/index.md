--- 
title: drains
hide_title: false
hide_table_of_contents: false
keywords:
  - drains
  - drains
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

Creates, updates, deletes, gets or lists a <code>drains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="drains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.drains.drains" /></td></tr>
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
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td> (wire: teamId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="delivery" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="disabled_at" /></td>
    <td><code>number</code></td>
    <td> (wire: disabledAt)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled_by" /></td>
    <td><code>string</code></td>
    <td> (wire: disabledBy)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled_reason" /></td>
    <td><code>string</code></td>
    <td> (account-plan-downgrade, disabled-by-admin, disabled-by-owner, feature-not-available, limits-exceeded) (wire: disabledReason)</td>
</tr>
<tr>
    <td><CopyableCode code="filter_v2" /></td>
    <td><code>object</code></td>
    <td> (wire: filterV2)</td>
</tr>
<tr>
    <td><CopyableCode code="first_error_timestamp" /></td>
    <td><code>number</code></td>
    <td> (wire: firstErrorTimestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="integration_configuration_uri" /></td>
    <td><code>string</code></td>
    <td> (wire: integrationConfigurationUri)</td>
</tr>
<tr>
    <td><CopyableCode code="integration_icon" /></td>
    <td><code>string</code></td>
    <td> (wire: integrationIcon)</td>
</tr>
<tr>
    <td><CopyableCode code="integration_website" /></td>
    <td><code>string</code></td>
    <td> (wire: integrationWebsite)</td>
</tr>
<tr>
    <td><CopyableCode code="project_access" /></td>
    <td><code></code></td>
    <td> (wire: projectAccess)</td>
</tr>
<tr>
    <td><CopyableCode code="project_ids" /></td>
    <td><code>array</code></td>
    <td> (wire: projectIds)</td>
</tr>
<tr>
    <td><CopyableCode code="sampling" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="schemas" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (disabled, enabled, errored)</td>
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
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td> (wire: teamId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="delivery" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="disabled_at" /></td>
    <td><code>number</code></td>
    <td> (wire: disabledAt)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled_by" /></td>
    <td><code>string</code></td>
    <td> (wire: disabledBy)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled_reason" /></td>
    <td><code>string</code></td>
    <td> (account-plan-downgrade, disabled-by-admin, disabled-by-owner, feature-not-available, limits-exceeded) (wire: disabledReason)</td>
</tr>
<tr>
    <td><CopyableCode code="filter_v2" /></td>
    <td><code>object</code></td>
    <td> (wire: filterV2)</td>
</tr>
<tr>
    <td><CopyableCode code="first_error_timestamp" /></td>
    <td><code>number</code></td>
    <td> (wire: firstErrorTimestamp)</td>
</tr>
<tr>
    <td><CopyableCode code="integration_configuration_uri" /></td>
    <td><code>string</code></td>
    <td> (wire: integrationConfigurationUri)</td>
</tr>
<tr>
    <td><CopyableCode code="integration_icon" /></td>
    <td><code>string</code></td>
    <td> (wire: integrationIcon)</td>
</tr>
<tr>
    <td><CopyableCode code="integration_website" /></td>
    <td><code>string</code></td>
    <td> (wire: integrationWebsite)</td>
</tr>
<tr>
    <td><CopyableCode code="project_access" /></td>
    <td><code></code></td>
    <td> (wire: projectAccess)</td>
</tr>
<tr>
    <td><CopyableCode code="project_ids" /></td>
    <td><code>array</code></td>
    <td> (wire: projectIds)</td>
</tr>
<tr>
    <td><CopyableCode code="sampling" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="schemas" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (disabled, enabled, errored)</td>
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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Get the information for a specific Drain by passing the drain id in the URL.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-include_metadata"><code>include_metadata</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Allows to retrieve the list of Drains of the authenticated team.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-projects"><code>projects</code></a>, <a href="#parameter-schemas"><code>schemas</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Create a new Drain with the provided configuration.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Update the configuration of an existing drain.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Delete a specific Drain by passing the drain id in the URL.</td>
</tr>
<tr>
    <td><a href="#test"><CopyableCode code="test" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-schemas"><code>schemas</code></a>, <a href="#parameter-delivery"><code>delivery</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Validate the delivery configuration of a Drain using sample events.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-include_metadata">
    <td><CopyableCode code="include_metadata" /></td>
    <td><code>boolean</code></td>
    <td> (wire: includeMetadata)</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td> (wire: projectId)</td>
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

Get the information for a specific Drain by passing the drain id in the URL.

```sql
SELECT
id,
name,
owner_id,
team_id,
created_at,
delivery,
disabled_at,
disabled_by,
disabled_reason,
filter_v2,
first_error_timestamp,
integration_configuration_uri,
integration_icon,
integration_website,
project_access,
project_ids,
sampling,
schemas,
source,
status,
updated_at
FROM vercel.drains.drains
WHERE id = '{{ id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Allows to retrieve the list of Drains of the authenticated team.

```sql
SELECT
id,
name,
owner_id,
team_id,
created_at,
delivery,
disabled_at,
disabled_by,
disabled_reason,
filter_v2,
first_error_timestamp,
integration_configuration_uri,
integration_icon,
integration_website,
project_access,
project_ids,
sampling,
schemas,
source,
status,
updated_at
FROM vercel.drains.drains
WHERE project_id = '{{ project_id }}'
AND include_metadata = '{{ include_metadata }}'
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

Create a new Drain with the provided configuration.

```sql
INSERT INTO vercel.drains.drains (
name,
projects,
project_ids,
filter,
schemas,
delivery,
sampling,
transforms,
source,
team_id,
slug
)
SELECT 
'{{ name }}' /* required */,
'{{ projects }}' /* required */,
'{{ project_ids }}',
'{{ filter }}',
'{{ schemas }}' /* required */,
'{{ delivery }}',
'{{ sampling }}',
'{{ transforms }}',
'{{ source }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
id,
name,
owner_id,
team_id,
created_at,
delivery,
disabled_at,
disabled_by,
disabled_reason,
filter_v2,
first_error_timestamp,
integration_configuration_uri,
integration_icon,
integration_website,
project_access,
project_ids,
sampling,
schemas,
source,
status,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: drains
  props:
    - name: name
      value: "{{ name }}"
    - name: projects
      value: "{{ projects }}"
      valid_values: ['some', 'all']
    - name: project_ids
      value:
        - "{{ project_ids }}"
    - name: filter
      value:
        version: "{{ version }}"
        filter: "{{ filter }}"
    - name: schemas
      value: "{{ schemas }}"
    - name: delivery
      value:
        type: "{{ type }}"
        endpoint: "{{ endpoint }}"
        compression: "{{ compression }}"
        encoding: "{{ encoding }}"
        headers: "{{ headers }}"
        secret: "{{ secret }}"
        fileStructure: "{{ fileStructure }}"
        roleArn: "{{ roleArn }}"
        region: "{{ region }}"
        serverSideEncryption: "{{ serverSideEncryption }}"
        objectAcl: "{{ objectAcl }}"
    - name: sampling
      value:
        - type: "{{ type }}"
          rate: {{ rate }}
          env: "{{ env }}"
          requestPath: "{{ requestPath }}"
    - name: transforms
      value:
        - id: "{{ id }}"
    - name: source
      value:
        kind: "{{ kind }}"
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

Update the configuration of an existing drain.

```sql
UPDATE vercel.drains.drains
SET 
name = '{{ name }}',
projects = '{{ projects }}',
project_ids = '{{ project_ids }}',
filter = '{{ filter }}',
schemas = '{{ schemas }}',
delivery = '{{ delivery }}',
sampling = '{{ sampling }}',
transforms = '{{ transforms }}',
status = '{{ status }}',
source = '{{ source }}'
WHERE 
id = '{{ id }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
id,
name,
owner_id,
team_id,
created_at,
delivery,
disabled_at,
disabled_by,
disabled_reason,
filter_v2,
first_error_timestamp,
integration_configuration_uri,
integration_icon,
integration_website,
project_access,
project_ids,
sampling,
schemas,
source,
status,
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

Delete a specific Drain by passing the drain id in the URL.

```sql
DELETE FROM vercel.drains.drains
WHERE id = '{{ id }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="test"
    values={[
        { label: 'test', value: 'test' }
    ]}
>
<TabItem value="test">

Validate the delivery configuration of a Drain using sample events.

```sql
EXEC vercel.drains.drains.test 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"schemas": "{{ schemas }}", 
"delivery": "{{ delivery }}"
}'
;
```
</TabItem>
</Tabs>
