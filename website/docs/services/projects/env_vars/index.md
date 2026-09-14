--- 
title: env_vars
hide_title: false
hide_table_of_contents: false
keywords:
  - env_vars
  - projects
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

Creates, updates, deletes, gets or lists an <code>env_vars</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="env_vars" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.projects.env_vars" /></td></tr>
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
    <td><CopyableCode code="configuration_id" /></td>
    <td><code>string</code></td>
    <td> (wire: configurationId)</td>
</tr>
<tr>
    <td><CopyableCode code="edge_config_id" /></td>
    <td><code>string</code></td>
    <td> (wire: edgeConfigId)</td>
</tr>
<tr>
    <td><CopyableCode code="edge_config_token_id" /></td>
    <td><code>string</code></td>
    <td> (wire: edgeConfigTokenId)</td>
</tr>
<tr>
    <td><CopyableCode code="sunset_secret_id" /></td>
    <td><code>string</code></td>
    <td>This is used to identify variables that have been migrated from type secret to sensitive. (wire: sunsetSecretId)</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="content_hint" /></td>
    <td><code></code></td>
    <td> (wire: contentHint)</td>
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
    <td><CopyableCode code="custom_environment_ids" /></td>
    <td><code>array</code></td>
    <td> (wire: customEnvironmentIds)</td>
</tr>
<tr>
    <td><CopyableCode code="decrypted" /></td>
    <td><code>boolean</code></td>
    <td> (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="git_branch" /></td>
    <td><code>string</code></td>
    <td> (wire: gitBranch)</td>
</tr>
<tr>
    <td><CopyableCode code="internal_content_hint" /></td>
    <td><code>object</code></td>
    <td>Similar to `contentHints`, but should not be exposed to the user. (wire: internalContentHint)</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="legacy_value" /></td>
    <td><code>string</code></td>
    <td>Legacy now-encryption ciphertext, present after migration swaps value/vsmValue (wire: legacyValue)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (encrypted, plain, secret, sensitive, system)</td>
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
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>User-facing config/secret model. When set, authoritative for new code paths when the env-var-config-secret-ui flag is enabled. Legacy rows omit this field; legacy rows omit it and callers fall back to existing `type` behavior. (config, secret)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The list of environment variables for the given project

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
    <td><CopyableCode code="configuration_id" /></td>
    <td><code>string</code></td>
    <td> (wire: configurationId)</td>
</tr>
<tr>
    <td><CopyableCode code="edge_config_id" /></td>
    <td><code>string</code></td>
    <td> (wire: edgeConfigId)</td>
</tr>
<tr>
    <td><CopyableCode code="edge_config_token_id" /></td>
    <td><code>string</code></td>
    <td> (wire: edgeConfigTokenId)</td>
</tr>
<tr>
    <td><CopyableCode code="sunset_secret_id" /></td>
    <td><code>string</code></td>
    <td>This is used to identify variables that have been migrated from type secret to sensitive. (wire: sunsetSecretId)</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="content_hint" /></td>
    <td><code></code></td>
    <td> (wire: contentHint)</td>
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
    <td><CopyableCode code="custom_environment_ids" /></td>
    <td><code>array</code></td>
    <td> (wire: customEnvironmentIds)</td>
</tr>
<tr>
    <td><CopyableCode code="decrypted" /></td>
    <td><code>boolean</code></td>
    <td> (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="git_branch" /></td>
    <td><code>string</code></td>
    <td> (wire: gitBranch)</td>
</tr>
<tr>
    <td><CopyableCode code="internal_content_hint" /></td>
    <td><code>object</code></td>
    <td>Similar to `contentHints`, but should not be exposed to the user. (wire: internalContentHint)</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="legacy_value" /></td>
    <td><code>string</code></td>
    <td>Legacy now-encryption ciphertext, present after migration swaps value/vsmValue (wire: legacyValue)</td>
</tr>
<tr>
    <td><CopyableCode code="security_issues" /></td>
    <td><code>array</code></td>
    <td> (wire: securityIssues)</td>
</tr>
<tr>
    <td><CopyableCode code="system" /></td>
    <td><code>boolean</code></td>
    <td> (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (encrypted, plain, secret, sensitive, system)</td>
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
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>User-facing config/secret model. When set, authoritative for new code paths when the env-var-config-secret-ui flag is enabled. Legacy rows omit this field; legacy rows omit it and callers fall back to existing `type` behavior. (config, secret)</td>
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
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieve the environment variable for a given project.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-git_branch"><code>git_branch</code></a>, <a href="#parameter-decrypt"><code>decrypt</code></a>, <a href="#parameter-source"><code>source</code></a>, <a href="#parameter-custom_environment_id"><code>custom_environment_id</code></a>, <a href="#parameter-custom_environment_slug"><code>custom_environment_slug</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieve the environment variables for a given project by passing either the project `id` or `name` in the URL.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-target"><code>target</code></a></td>
    <td><a href="#parameter-upsert"><code>upsert</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Create one or more environment variables for a project by passing its `key`, `value`, `type` and `target` and by specifying the project by either passing the project `id` or `name` in the URL. If you include `upsert=true` as a query parameter, a new environment variable will not be created if it already exists but, the existing variable's value will be updated.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Edit a specific environment variable for a given project by passing the environment variable identifier and either passing the project `id` or `name` in the URL.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-custom_environment_id"><code>custom_environment_id</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Delete a specific environment variable for a given project by passing the environment variable identifier and either passing the project `id` or `name` in the URL.</td>
</tr>
<tr>
    <td><a href="#batch_delete"><CopyableCode code="batch_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Delete multiple environment variables for a given project in a single batch operation.</td>
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
    <td>The unique environment variable identifier</td>
</tr>
<tr id="parameter-id_or_name">
    <td><CopyableCode code="id_or_name" /></td>
    <td><code>string</code></td>
    <td>The unique project identifier or the project name</td>
</tr>
<tr id="parameter-custom_environment_id">
    <td><CopyableCode code="custom_environment_id" /></td>
    <td><code>string</code></td>
    <td>The unique custom environment identifier within the project (wire: customEnvironmentId)</td>
</tr>
<tr id="parameter-custom_environment_slug">
    <td><CopyableCode code="custom_environment_slug" /></td>
    <td><code>string</code></td>
    <td>The custom environment slug (name) within the project (wire: customEnvironmentSlug)</td>
</tr>
<tr id="parameter-decrypt">
    <td><CopyableCode code="decrypt" /></td>
    <td><code>string</code></td>
    <td>If true, the environment variable value will be decrypted</td>
</tr>
<tr id="parameter-git_branch">
    <td><CopyableCode code="git_branch" /></td>
    <td><code>string</code></td>
    <td>If defined, the git branch of the environment variable to filter the results (must have target=preview) (wire: gitBranch)</td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team slug to perform the request on behalf of.</td>
</tr>
<tr id="parameter-source">
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The source that is calling the endpoint.</td>
</tr>
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The Team identifier to perform the request on behalf of. (wire: teamId)</td>
</tr>
<tr id="parameter-upsert">
    <td><CopyableCode code="upsert" /></td>
    <td><code>string</code></td>
    <td>Allow override of environment variable if it already exists</td>
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

Retrieve the environment variable for a given project.

```sql
SELECT
id,
configuration_id,
edge_config_id,
edge_config_token_id,
sunset_secret_id,
comment,
content_hint,
created_at,
created_by,
custom_environment_ids,
decrypted,
git_branch,
internal_content_hint,
key,
legacy_value,
target,
type,
updated_at,
updated_by,
value,
visibility
FROM vercel.projects.env_vars
WHERE id_or_name = '{{ id_or_name }}' -- required
AND id = '{{ id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Retrieve the environment variables for a given project by passing either the project `id` or `name` in the URL.

```sql
SELECT
id,
configuration_id,
edge_config_id,
edge_config_token_id,
sunset_secret_id,
comment,
content_hint,
created_at,
created_by,
custom_environment_ids,
decrypted,
git_branch,
internal_content_hint,
key,
legacy_value,
security_issues,
system,
target,
type,
updated_at,
updated_by,
value,
visibility
FROM vercel.projects.env_vars
WHERE id_or_name = '{{ id_or_name }}' -- required
AND git_branch = '{{ git_branch }}'
AND decrypt = '{{ decrypt }}'
AND source = '{{ source }}'
AND custom_environment_id = '{{ custom_environment_id }}'
AND custom_environment_slug = '{{ custom_environment_slug }}'
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

Create one or more environment variables for a project by passing its `key`, `value`, `type` and `target` and by specifying the project by either passing the project `id` or `name` in the URL. If you include `upsert=true` as a query parameter, a new environment variable will not be created if it already exists but, the existing variable's value will be updated.

```sql
INSERT INTO vercel.projects.env_vars (
key,
value,
type,
target,
git_branch,
comment,
custom_environment_ids,
id_or_name,
upsert,
team_id,
slug
)
SELECT 
'{{ key }}',
'{{ value }}',
'{{ type }}',
'{{ target }}' /* required */,
'{{ git_branch }}',
'{{ comment }}',
'{{ custom_environment_ids }}',
'{{ id_or_name }}',
'{{ upsert }}',
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
- name: env_vars
  props:
    - name: id_or_name
      value: "{{ id_or_name }}"
      description: Required parameter for the env_vars resource.
    - name: key
      value: "{{ key }}"
      description: |
        The name of the environment variable
    - name: value
      value: "{{ value }}"
      description: |
        The value of the environment variable
    - name: type
      value: "{{ type }}"
      description: |
        The type of environment variable
      valid_values: ['system', 'encrypted', 'plain', 'sensitive']
    - name: target
      value: "{{ target }}"
      description: |
        The target environment of the environment variable
    - name: git_branch
      value: "{{ git_branch }}"
      description: |
        If defined, the git branch of the environment variable (must have target=preview)
    - name: comment
      value: "{{ comment }}"
      description: |
        A comment to add context on what this environment variable is for
    - name: custom_environment_ids
      value:
        - "{{ custom_environment_ids }}"
      description: |
        The custom environment IDs associated with the environment variable
    - name: upsert
      value: "{{ upsert }}"
      description: Allow override of environment variable if it already exists
      description: Allow override of environment variable if it already exists
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

Edit a specific environment variable for a given project by passing the environment variable identifier and either passing the project `id` or `name` in the URL.

```sql
UPDATE vercel.projects.env_vars
SET 
key = '{{ key }}',
target = '{{ target }}',
git_branch = '{{ git_branch }}',
type = '{{ type }}',
value = '{{ value }}',
custom_environment_ids = '{{ custom_environment_ids }}',
comment = '{{ comment }}'
WHERE 
id_or_name = '{{ id_or_name }}' --required
AND id = '{{ id }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
id,
configuration_id,
edge_config_id,
edge_config_token_id,
sunset_secret_id,
comment,
content_hint,
created_at,
created_by,
custom_environment_ids,
decrypted,
git_branch,
internal_content_hint,
key,
legacy_value,
target,
type,
updated_at,
updated_by,
value,
visibility;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' },
        { label: 'batch_delete', value: 'batch_delete' }
    ]}
>
<TabItem value="delete">

Delete a specific environment variable for a given project by passing the environment variable identifier and either passing the project `id` or `name` in the URL.

```sql
DELETE FROM vercel.projects.env_vars
WHERE id_or_name = '{{ id_or_name }}' --required
AND id = '{{ id }}' --required
AND custom_environment_id = '{{ custom_environment_id }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="batch_delete">

Delete multiple environment variables for a given project in a single batch operation.

```sql
DELETE FROM vercel.projects.env_vars
WHERE id_or_name = '{{ id_or_name }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
