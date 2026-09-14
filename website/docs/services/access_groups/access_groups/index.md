--- 
title: access_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - access_groups
  - access_groups
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

Creates, updates, deletes, gets or lists an <code>access_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.access_groups.access_groups" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this access group. (example: my-access-group)</td>
</tr>
<tr>
    <td><CopyableCode code="access_group_id" /></td>
    <td><code>string</code></td>
    <td>ID of the access group. (example: ag_123a6c5209bc3778245d011443644c8d27dc2c50) (wire: accessGroupId)</td>
</tr>
<tr>
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>ID of the team that this access group belongs to. (example: team_123a6c5209bc3778245d011443644c8d27dc2c50) (wire: teamId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>Timestamp in milliseconds when the access group was created. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="entitlements" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_dsync_managed" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: isDsyncManaged)</td>
</tr>
<tr>
    <td><CopyableCode code="members_count" /></td>
    <td><code>number</code></td>
    <td>Number of members in the access group. (wire: membersCount)</td>
</tr>
<tr>
    <td><CopyableCode code="projects_count" /></td>
    <td><code>number</code></td>
    <td>Number of projects in the access group. (wire: projectsCount)</td>
</tr>
<tr>
    <td><CopyableCode code="team_permissions" /></td>
    <td><code>array</code></td>
    <td> (wire: teamPermissions)</td>
</tr>
<tr>
    <td><CopyableCode code="team_roles" /></td>
    <td><code>array</code></td>
    <td>Roles that the team has in the access group. (wire: teamRoles)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td>Timestamp in milliseconds when the access group was last updated. (wire: updatedAt)</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this access group. (example: my-access-group)</td>
</tr>
<tr>
    <td><CopyableCode code="access_group_id" /></td>
    <td><code>string</code></td>
    <td>ID of the access group. (example: ag_123a6c5209bc3778245d011443644c8d27dc2c50) (wire: accessGroupId)</td>
</tr>
<tr>
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>ID of the team that this access group belongs to. (example: team_123a6c5209bc3778245d011443644c8d27dc2c50) (wire: teamId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>Timestamp in milliseconds when the access group was created. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="entitlements" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_dsync_managed" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: isDsyncManaged)</td>
</tr>
<tr>
    <td><CopyableCode code="members" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="members_count" /></td>
    <td><code>number</code></td>
    <td>Number of members in the access group. (wire: membersCount)</td>
</tr>
<tr>
    <td><CopyableCode code="projects" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="projects_count" /></td>
    <td><code>number</code></td>
    <td>Number of projects in the access group. (wire: projectsCount)</td>
</tr>
<tr>
    <td><CopyableCode code="team_permissions" /></td>
    <td><code>array</code></td>
    <td> (wire: teamPermissions)</td>
</tr>
<tr>
    <td><CopyableCode code="team_roles" /></td>
    <td><code>array</code></td>
    <td>Roles that the team has in the access group. (wire: teamRoles)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td>Timestamp in milliseconds when the access group was last updated. (wire: updatedAt)</td>
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
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Allows to read an access group</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-search"><code>search</code></a>, <a href="#parameter-members_limit"><code>members_limit</code></a>, <a href="#parameter-projects_limit"><code>projects_limit</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-next"><code>next</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>List access groups</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Allows to create an access group</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Allows to update an access group metadata</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Allows to delete an access group</td>
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
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Limit how many access group should be returned.</td>
</tr>
<tr id="parameter-members_limit">
    <td><CopyableCode code="members_limit" /></td>
    <td><code>integer</code></td>
    <td>Number of members to include in the response. (wire: membersLimit)</td>
</tr>
<tr id="parameter-next">
    <td><CopyableCode code="next" /></td>
    <td><code>string</code></td>
    <td>Continuation cursor to retrieve the next page of results.</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Filter access groups by project. (wire: projectId)</td>
</tr>
<tr id="parameter-projects_limit">
    <td><CopyableCode code="projects_limit" /></td>
    <td><code>integer</code></td>
    <td>Number of projects to include in the response. (wire: projectsLimit)</td>
</tr>
<tr id="parameter-search">
    <td><CopyableCode code="search" /></td>
    <td><code>string</code></td>
    <td>Search for access groups by name.</td>
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

Allows to read an access group

```sql
SELECT
name,
access_group_id,
team_id,
created_at,
entitlements,
is_dsync_managed,
members_count,
projects_count,
team_permissions,
team_roles,
updated_at
FROM vercel.access_groups.access_groups
WHERE id_or_name = '{{ id_or_name }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

List access groups

```sql
SELECT
name,
access_group_id,
team_id,
created_at,
entitlements,
is_dsync_managed,
members,
members_count,
projects,
projects_count,
team_permissions,
team_roles,
updated_at
FROM vercel.access_groups.access_groups
WHERE project_id = '{{ project_id }}'
AND search = '{{ search }}'
AND members_limit = '{{ members_limit }}'
AND projects_limit = '{{ projects_limit }}'
AND limit = '{{ limit }}'
AND next = '{{ next }}'
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

Allows to create an access group

```sql
INSERT INTO vercel.access_groups.access_groups (
name,
projects,
members_to_add,
team_id,
slug
)
SELECT 
'{{ name }}' /* required */,
'{{ projects }}',
'{{ members_to_add }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
name,
access_group_id,
team_id,
created_at,
entitlements,
members_count,
projects_count,
team_permissions,
team_roles,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_groups
  props:
    - name: name
      value: "{{ name }}"
      description: |
        The name of the access group
    - name: projects
      value:
        - projectId: "{{ projectId }}"
          role: "{{ role }}"
    - name: members_to_add
      value:
        - "{{ members_to_add }}"
      description: |
        List of members to add to the access group.
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

Allows to update an access group metadata

```sql
UPDATE vercel.access_groups.access_groups
SET 
name = '{{ name }}',
projects = '{{ projects }}',
members_to_add = '{{ members_to_add }}',
members_to_remove = '{{ members_to_remove }}'
WHERE 
id_or_name = '{{ id_or_name }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
name,
access_group_id,
team_id,
created_at,
entitlements,
members_count,
projects_count,
team_permissions,
team_roles,
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

Allows to delete an access group

```sql
DELETE FROM vercel.access_groups.access_groups
WHERE id_or_name = '{{ id_or_name }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
