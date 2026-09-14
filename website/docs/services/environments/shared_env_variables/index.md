--- 
title: shared_env_variables
hide_title: false
hide_table_of_contents: false
keywords:
  - shared_env_variables
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

Creates, updates, deletes, gets or lists a <code>shared_env_variables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="shared_env_variables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.environments.shared_env_variables" /></td></tr>
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
    <td>The unique identifier of the Shared Env Var. (example: env_XCG7t7AIHuO2SBA8667zNUiM)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the owner (team) the Shared Env Var was created for. (example: team_LLHUOMOoDlqOp8wPE4kFo9pE) (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>array</code></td>
    <td>The unique identifiers of the projects which the Shared Env Var is linked to. (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="last_edited_by_display_name" /></td>
    <td><code>string</code></td>
    <td>The last editor full name or username. (wire: lastEditedByDisplayName)</td>
</tr>
<tr>
    <td><CopyableCode code="apply_to_all_custom_environments" /></td>
    <td><code>boolean</code></td>
    <td>whether or not this env varible applies to custom environments (false, true) (wire: applyToAllCustomEnvironments)</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>A user provided comment that describes what this Shared Env Var is for.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the Shared Env Var was created. (example: 2021-02-10T13:11:49.180Z)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp for when the Shared Env Var was created. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the user who created the Shared Env Var. (example: 2qDDuGFTWXBLDNnqZfWPDp1A) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_environment_ids" /></td>
    <td><code>array</code></td>
    <td>The custom environment IDs that this Shared Env Var is scoped to. (wire: customEnvironmentIds)</td>
</tr>
<tr>
    <td><CopyableCode code="decrypted" /></td>
    <td><code>boolean</code></td>
    <td>whether or not this env variable is decrypted (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp for when the Shared Env Var was (soft) deleted. (wire: deletedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_by" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the user who deleted the Shared Env Var. (example: 2qDDuGFTWXBLDNnqZfWPDp1A) (wire: deletedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The name of the Shared Env Var. (example: my-api-key)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>array</code></td>
    <td>environments this env variable targets (example: production)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of this cosmos doc instance, if blank, assume secret. (encrypted, plain, sensitive, system) (example: encrypted)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp for when the Shared Env Var was last updated. (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the user who last updated the Shared Env Var. (example: 2qDDuGFTWXBLDNnqZfWPDp1A) (wire: updatedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value of the Shared Env Var.</td>
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
    <td>The unique identifier of the Shared Env Var. (example: env_XCG7t7AIHuO2SBA8667zNUiM)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the owner (team) the Shared Env Var was created for. (example: team_LLHUOMOoDlqOp8wPE4kFo9pE) (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>array</code></td>
    <td>The unique identifiers of the projects which the Shared Env Var is linked to. (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="last_edited_by_display_name" /></td>
    <td><code>string</code></td>
    <td>The last editor full name or username. (wire: lastEditedByDisplayName)</td>
</tr>
<tr>
    <td><CopyableCode code="apply_to_all_custom_environments" /></td>
    <td><code>boolean</code></td>
    <td>whether or not this env varible applies to custom environments (false, true) (wire: applyToAllCustomEnvironments)</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>A user provided comment that describes what this Shared Env Var is for.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the Shared Env Var was created. (example: 2021-02-10T13:11:49.180Z)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp for when the Shared Env Var was created. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the user who created the Shared Env Var. (example: 2qDDuGFTWXBLDNnqZfWPDp1A) (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_environment_ids" /></td>
    <td><code>array</code></td>
    <td>The custom environment IDs that this Shared Env Var is scoped to. (wire: customEnvironmentIds)</td>
</tr>
<tr>
    <td><CopyableCode code="decrypted" /></td>
    <td><code>boolean</code></td>
    <td>whether or not this env variable is decrypted (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp for when the Shared Env Var was (soft) deleted. (wire: deletedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_by" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the user who deleted the Shared Env Var. (example: 2qDDuGFTWXBLDNnqZfWPDp1A) (wire: deletedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The name of the Shared Env Var. (example: my-api-key)</td>
</tr>
<tr>
    <td><CopyableCode code="security_issues" /></td>
    <td><code>array</code></td>
    <td> (wire: securityIssues)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>array</code></td>
    <td>environments this env variable targets (example: production)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of this cosmos doc instance, if blank, assume secret. (encrypted, plain, sensitive, system) (example: encrypted)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp for when the Shared Env Var was last updated. (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the user who last updated the Shared Env Var. (example: 2qDDuGFTWXBLDNnqZfWPDp1A) (wire: updatedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value of the Shared Env Var.</td>
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
    <td>Retrieve the decrypted value of a Shared Environment Variable by id.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-search"><code>search</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-ids"><code>ids</code></a>, <a href="#parameter-exclude_ids"><code>exclude_ids</code></a>, <a href="#parameter-exclude-ids"><code>exclude-ids</code></a>, <a href="#parameter-exclude_projectId"><code>exclude_projectId</code></a>, <a href="#parameter-exclude-project_id"><code>exclude-project_id</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Lists all Shared Environment Variables for a team, taking into account optional filters.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-evs"><code>evs</code></a>, <a href="#parameter-target"><code>target</code></a>, <a href="#parameter-applyToAllCustomEnvironments"><code>applyToAllCustomEnvironments</code></a>, <a href="#parameter-customEnvironmentIds"><code>customEnvironmentIds</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Creates shared environment variable(s) for a team.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-updates"><code>updates</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Updates a given Shared Environment Variable for a Team.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Deletes one or many Shared Environment Variables for a given team.</td>
</tr>
<tr>
    <td><a href="#unlink"><CopyableCode code="unlink" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Disconnects a shared environment variable for a given project</td>
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
    <td>The unique ID for the Shared Environment Variable to unlink from the project.</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-exclude-ids">
    <td><CopyableCode code="exclude-ids" /></td>
    <td><code>string</code></td>
    <td>Filter SharedEnvVariables based on comma separated ids</td>
</tr>
<tr id="parameter-exclude-project_id">
    <td><CopyableCode code="exclude-project_id" /></td>
    <td><code>string</code></td>
    <td>Filter SharedEnvVariables that belong to a project (wire: exclude-projectId)</td>
</tr>
<tr id="parameter-exclude_ids">
    <td><CopyableCode code="exclude_ids" /></td>
    <td><code>string</code></td>
    <td>Filter SharedEnvVariables based on comma separated ids</td>
</tr>
<tr id="parameter-exclude_projectId">
    <td><CopyableCode code="exclude_projectId" /></td>
    <td><code>string</code></td>
    <td>Filter SharedEnvVariables that belong to a project</td>
</tr>
<tr id="parameter-ids">
    <td><CopyableCode code="ids" /></td>
    <td><code>string</code></td>
    <td>Filter SharedEnvVariables based on comma separated ids</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Filter SharedEnvVariables that belong to a project (wire: projectId)</td>
</tr>
<tr id="parameter-search">
    <td><CopyableCode code="search" /></td>
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

Retrieve the decrypted value of a Shared Environment Variable by id.

```sql
SELECT
id,
owner_id,
project_id,
last_edited_by_display_name,
apply_to_all_custom_environments,
comment,
created,
created_at,
created_by,
custom_environment_ids,
decrypted,
deleted_at,
deleted_by,
key,
target,
type,
updated_at,
updated_by,
value
FROM vercel.environments.shared_env_variables
WHERE id = '{{ id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Lists all Shared Environment Variables for a team, taking into account optional filters.

```sql
SELECT
id,
owner_id,
project_id,
last_edited_by_display_name,
apply_to_all_custom_environments,
comment,
created,
created_at,
created_by,
custom_environment_ids,
decrypted,
deleted_at,
deleted_by,
key,
security_issues,
target,
type,
updated_at,
updated_by,
value
FROM vercel.environments.shared_env_variables
WHERE search = '{{ search }}'
AND project_id = '{{ project_id }}'
AND ids = '{{ ids }}'
AND exclude_ids = '{{ exclude_ids }}'
AND exclude-ids = '{{ exclude-ids }}'
AND exclude_projectId = '{{ exclude_projectId }}'
AND exclude-project_id = '{{ exclude-project_id }}'
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

Creates shared environment variable(s) for a team.

```sql
INSERT INTO vercel.environments.shared_env_variables (
evs,
type,
target,
project_id,
team_id,
slug
)
SELECT 
'{{ evs }}' /* required */,
'{{ type }}',
'{{ target }}' /* required */,
'{{ project_id }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
created,
failed
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: shared_env_variables
  props:
    - name: evs
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
          comment: "{{ comment }}"
    - name: type
      value: "{{ type }}"
      description: |
        The type of environment variable
      valid_values: ['encrypted', 'sensitive']
    - name: target
      value: "{{ target }}"
      description: |
        The target environment of the Shared Environment Variable
    - name: project_id
      value:
        - "{{ project_id }}"
      description: |
        Associate a Shared Environment Variable to projects.
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

Updates a given Shared Environment Variable for a Team.

```sql
UPDATE vercel.environments.shared_env_variables
SET 
updates = '{{ updates }}'
WHERE 
updates = '{{ updates }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
failed,
updated;
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

Deletes one or many Shared Environment Variables for a given team.

```sql
DELETE FROM vercel.environments.shared_env_variables
WHERE team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="unlink"
    values={[
        { label: 'unlink', value: 'unlink' }
    ]}
>
<TabItem value="unlink">

Disconnects a shared environment variable for a given project

```sql
EXEC vercel.environments.shared_env_variables.unlink 
@id='{{ id }}' --required, 
@project_id='{{ project_id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}'
;
```
</TabItem>
</Tabs>
