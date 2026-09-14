--- 
title: members
hide_title: false
hide_table_of_contents: false
keywords:
  - members
  - teams
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
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.teams.members" /></td></tr>
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
    <td><CopyableCode code="access_requested_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp in milliseconds for when this team member was accepted by an owner. (wire: accessRequestedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="avatar" /></td>
    <td><code>string</code></td>
    <td>ID of the file for the Avatar of this member. (example: 123a6c5209bc3778245d011443644c8d27dc2c50)</td>
</tr>
<tr>
    <td><CopyableCode code="bitbucket" /></td>
    <td><code>object</code></td>
    <td>Information about the Bitbucket account of this user.</td>
</tr>
<tr>
    <td><CopyableCode code="confirmed" /></td>
    <td><code>boolean</code></td>
    <td>Boolean that indicates if this member was confirmed by an owner. (false, true)</td>
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
    <td><CopyableCode code="github" /></td>
    <td><code>object</code></td>
    <td>Information about the GitHub account for this user.</td>
</tr>
<tr>
    <td><CopyableCode code="gitlab" /></td>
    <td><code>object</code></td>
    <td>Information about the GitLab account of this user.</td>
</tr>
<tr>
    <td><CopyableCode code="is_enterprise_managed" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the user is managed by an enterprise. (false, true) (wire: isEnterpriseManaged)</td>
</tr>
<tr>
    <td><CopyableCode code="joined_from" /></td>
    <td><code>object</code></td>
    <td>Map with information about the members origin if they joined by requesting access. (wire: joinedFrom)</td>
</tr>
<tr>
    <td><CopyableCode code="projects" /></td>
    <td><code>array</code></td>
    <td>Array of project memberships</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Role of this user in the team. (BILLING, CONTRIBUTOR, DEVELOPER, MEMBER, OWNER, SECURITY, VIEWER, VIEWER_FOR_PLUS) (example: OWNER)</td>
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
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-search"><code>search</code></a>, <a href="#parameter-role"><code>role</code></a>, <a href="#parameter-exclude_project"><code>exclude_project</code></a>, <a href="#parameter-eligible_members_for_project_id"><code>eligible_members_for_project_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Get a paginated list of team members for the provided team.</td>
</tr>
<tr>
    <td><a href="#invite"><CopyableCode code="invite" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td><a href="#parameter-slug"><code>slug</code></a></td>
    <td>Invite a user to join the team specified in the URL. The authenticated user needs to be an `OWNER` in order to successfully invoke this endpoint. The user to be invited must be specified by email.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-uid"><code>uid</code></a>, <a href="#parameter-team_id"><code>team_id</code></a></td>
    <td></td>
    <td>Update the membership of a Team Member on the Team specified by `teamId`, such as changing the _role_ of the member, or confirming a request to join the Team for an unconfirmed member. The authenticated user must be an `OWNER` of the Team.</td>
</tr>
<tr>
    <td><a href="#remove"><CopyableCode code="remove" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-uid"><code>uid</code></a>, <a href="#parameter-team_id"><code>team_id</code></a></td>
    <td><a href="#parameter-new_default_team_id"><code>new_default_team_id</code></a></td>
    <td>Remove a Team Member from the Team, or dismiss a user that requested access, or leave a team. Directory Sync members can be removed when their directory email is absent or does not match the user's primary or verified secondary emails.</td>
</tr>
<tr>
    <td><a href="#delete_invite"><CopyableCode code="delete_invite" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-invite_id"><code>invite_id</code></a>, <a href="#parameter-team_id"><code>team_id</code></a></td>
    <td></td>
    <td>Delete an active Team invite code.</td>
</tr>
<tr>
    <td><a href="#join"><CopyableCode code="join" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td></td>
    <td>Join a team with a provided invite code or team ID.</td>
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
<tr id="parameter-invite_id">
    <td><CopyableCode code="invite_id" /></td>
    <td><code>string</code></td>
    <td>The Team invite code ID.</td>
</tr>
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-uid">
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>The user ID of the member.</td>
</tr>
<tr id="parameter-eligible_members_for_project_id">
    <td><CopyableCode code="eligible_members_for_project_id" /></td>
    <td><code>string</code></td>
    <td>Include team members who are eligible to be members of the specified project. (wire: eligibleMembersForProjectId)</td>
</tr>
<tr id="parameter-exclude_project">
    <td><CopyableCode code="exclude_project" /></td>
    <td><code>string</code></td>
    <td>Exclude members who belong to the specified project. (wire: excludeProject)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>number</code></td>
    <td>Limit how many teams should be returned</td>
</tr>
<tr id="parameter-new_default_team_id">
    <td><CopyableCode code="new_default_team_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the team to set as the new default team for the Northstar user. (wire: newDefaultTeamId)</td>
</tr>
<tr id="parameter-role">
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Only return members with the specified team role.</td>
</tr>
<tr id="parameter-search">
    <td><CopyableCode code="search" /></td>
    <td><code>string</code></td>
    <td>Search team members by their name, username, and email.</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>number</code></td>
    <td>Timestamp in milliseconds to only include members added since then.</td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team slug to perform the request on behalf of.</td>
</tr>
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code>number</code></td>
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

Get a paginated list of team members for the provided team.

```sql
SELECT
name,
access_requested_at,
avatar,
bitbucket,
confirmed,
created_at,
email,
github,
gitlab,
is_enterprise_managed,
joined_from,
projects,
role,
uid,
username
FROM vercel.teams.members
WHERE team_id = '{{ team_id }}' -- required
AND limit = '{{ limit }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
AND search = '{{ search }}'
AND role = '{{ role }}'
AND exclude_project = '{{ exclude_project }}'
AND eligible_members_for_project_id = '{{ eligible_members_for_project_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="invite"
    values={[
        { label: 'invite', value: 'invite' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="invite">

Invite a user to join the team specified in the URL. The authenticated user needs to be an `OWNER` in order to successfully invoke this endpoint. The user to be invited must be specified by email.

```sql
INSERT INTO vercel.teams.members (
team_id,
slug
)
SELECT 
'{{ team_id }}',
'{{ slug }}'
RETURNING
email,
role,
team_permissions,
team_roles,
uid,
username
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: members
  props:
    - name: team_id
      value: "{{ team_id }}"
      description: Required parameter for the members resource.
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

Update the membership of a Team Member on the Team specified by `teamId`, such as changing the _role_ of the member, or confirming a request to join the Team for an unconfirmed member. The authenticated user must be an `OWNER` of the Team.

```sql
UPDATE vercel.teams.members
SET 
confirmed = {{ confirmed }},
role = '{{ role }}',
team_permissions = '{{ team_permissions }}',
projects = '{{ projects }}',
joined_from = '{{ joined_from }}'
WHERE 
uid = '{{ uid }}' --required
AND team_id = '{{ team_id }}' --required
RETURNING
id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove"
    values={[
        { label: 'remove', value: 'remove' },
        { label: 'delete_invite', value: 'delete_invite' }
    ]}
>
<TabItem value="remove">

Remove a Team Member from the Team, or dismiss a user that requested access, or leave a team. Directory Sync members can be removed when their directory email is absent or does not match the user's primary or verified secondary emails.

```sql
DELETE FROM vercel.teams.members
WHERE uid = '{{ uid }}' --required
AND team_id = '{{ team_id }}' --required
AND new_default_team_id = '{{ new_default_team_id }}'
;
```
</TabItem>
<TabItem value="delete_invite">

Delete an active Team invite code.

```sql
DELETE FROM vercel.teams.members
WHERE invite_id = '{{ invite_id }}' --required
AND team_id = '{{ team_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="join"
    values={[
        { label: 'join', value: 'join' }
    ]}
>
<TabItem value="join">

Join a team with a provided invite code or team ID.

```sql
EXEC vercel.teams.members.join 
@team_id='{{ team_id }}' --required 
@@json=
'{
"inviteCode": "{{ inviteCode }}"
}'
;
```
</TabItem>
</Tabs>
