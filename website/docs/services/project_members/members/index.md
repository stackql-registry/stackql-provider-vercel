--- 
title: members
hide_title: false
hide_table_of_contents: false
keywords:
  - members
  - project_members
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

Creates, updates, deletes, gets or lists a <code>members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="members" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.project_members.members" /></td></tr>
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

Paginated list of members for the project.

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
    <td>The name of this user. (example: Jane Doe)</td>
</tr>
<tr>
    <td><CopyableCode code="avatar" /></td>
    <td><code>string</code></td>
    <td>ID of the file for the Avatar of this member. (example: 123a6c5209bc3778245d011443644c8d27dc2c50)</td>
</tr>
<tr>
    <td><CopyableCode code="computed_project_role" /></td>
    <td><code>string</code></td>
    <td>Role of this user in the project. (ADMIN, PROJECT_DEVELOPER, PROJECT_GUEST, PROJECT_VIEWER) (example: ADMIN) (wire: computedProjectRole)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp in milliseconds when this member was added. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The email of this member. (example: jane.doe@example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Role of this user in the project. (ADMIN, PROJECT_DEVELOPER, PROJECT_GUEST, PROJECT_VIEWER) (example: ADMIN)</td>
</tr>
<tr>
    <td><CopyableCode code="team_role" /></td>
    <td><code>string</code></td>
    <td>The role of this user in the team. (BILLING, CONTRIBUTOR, DEVELOPER, MEMBER, OWNER, SECURITY, VIEWER, VIEWER_FOR_PLUS) (example: CONTRIBUTOR) (wire: teamRole)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>The ID of this user. (example: zTuNVUXEAvvnNN3IaqinkyMw)</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The unique username of this user. (example: jane-doe)</td>
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
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-search"><code>search</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Lists all members of a project.</td>
</tr>
<tr>
    <td><a href="#add"><CopyableCode code="add" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-role"><code>role</code></a>, <a href="#parameter-uid"><code>uid</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-email"><code>email</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Adds a new member to the project.</td>
</tr>
<tr>
    <td><a href="#remove"><CopyableCode code="remove" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-uid"><code>uid</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Remove a member from a specific project</td>
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
    <td>The ID or name of the Project.</td>
</tr>
<tr id="parameter-uid">
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>The user ID of the member.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Limit how many project members should be returned</td>
</tr>
<tr id="parameter-search">
    <td><CopyableCode code="search" /></td>
    <td><code>string</code></td>
    <td>Search project members by their name, username, and email.</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>integer</code></td>
    <td>Timestamp in milliseconds to only include members added since then.</td>
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
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code>integer</code></td>
    <td>Timestamp in milliseconds to only include members added until then.</td>
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

Lists all members of a project.

```sql
SELECT
name,
avatar,
computed_project_role,
created_at,
email,
role,
team_role,
uid,
username
FROM vercel.project_members.members
WHERE id_or_name = '{{ id_or_name }}' -- required
AND limit = '{{ limit }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
AND search = '{{ search }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add"
    values={[
        { label: 'add', value: 'add' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add">

Adds a new member to the project.

```sql
INSERT INTO vercel.project_members.members (
uid,
username,
email,
role,
id_or_name,
team_id,
slug
)
SELECT 
'{{ uid }}' /* required */,
'{{ username }}' /* required */,
'{{ email }}' /* required */,
'{{ role }}' /* required */,
'{{ id_or_name }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: members
  props:
    - name: id_or_name
      value: "{{ id_or_name }}"
      description: Required parameter for the members resource.
    - name: uid
      value: "{{ uid }}"
      description: |
        The ID of the team member that should be added to this project.
    - name: username
      value: "{{ username }}"
      description: |
        The username of the team member that should be added to this project.
    - name: email
      value: "{{ email }}"
      description: |
        The email of the team member that should be added to this project.
    - name: role
      value: "{{ role }}"
      description: |
        The project role of the member that will be added.
      valid_values: ['ADMIN', 'PROJECT_VIEWER', 'PROJECT_DEVELOPER']
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


## `DELETE` examples

<Tabs
    defaultValue="remove"
    values={[
        { label: 'remove', value: 'remove' }
    ]}
>
<TabItem value="remove">

Remove a member from a specific project

```sql
DELETE FROM vercel.project_members.members
WHERE id_or_name = '{{ id_or_name }}' --required
AND uid = '{{ uid }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
