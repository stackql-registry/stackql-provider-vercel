--- 
title: access_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - access_requests
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

Creates, updates, deletes, gets or lists an <code>access_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.teams.access_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Successfully

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
    <td><CopyableCode code="team_name" /></td>
    <td><code>string</code></td>
    <td>The name of the team. (example: My Team) (wire: teamName)</td>
</tr>
<tr>
    <td><CopyableCode code="access_requested_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp in milliseconds when the user requested access to the team. (wire: accessRequestedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="bitbucket" /></td>
    <td><code>object</code></td>
    <td>Map of the connected Bitbucket account.</td>
</tr>
<tr>
    <td><CopyableCode code="confirmed" /></td>
    <td><code>boolean</code></td>
    <td>Current status of the membership. Will be `true` if confirmed, if pending it'll be `false`. (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="github" /></td>
    <td><code>object</code></td>
    <td>Map of the connected GitHub account.</td>
</tr>
<tr>
    <td><CopyableCode code="gitlab" /></td>
    <td><code>object</code></td>
    <td>Map of the connected GitLab account.</td>
</tr>
<tr>
    <td><CopyableCode code="joined_from" /></td>
    <td><code>object</code></td>
    <td>A map that describes the origin from where the user joined. (wire: joinedFrom)</td>
</tr>
<tr>
    <td><CopyableCode code="team_slug" /></td>
    <td><code>string</code></td>
    <td>The slug of the team. (example: my-team) (wire: teamSlug)</td>
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
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-team_id"><code>team_id</code></a></td>
    <td></td>
    <td>Check the status of a join request. It'll respond with a 404 if the request has been declined. If no `userId` path segment was provided, this endpoint will instead return the status of the authenticated user.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-joined_from"><code>joined_from</code></a></td>
    <td></td>
    <td>Request access to a team as a member. An owner has to approve the request. Only 100 users can request access to a team at the same time.</td>
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
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Check the status of a join request. It'll respond with a 404 if the request has been declined. If no `userId` path segment was provided, this endpoint will instead return the status of the authenticated user.

```sql
SELECT
team_name,
access_requested_at,
bitbucket,
confirmed,
github,
gitlab,
joined_from,
team_slug
FROM vercel.teams.access_requests
WHERE user_id = '{{ user_id }}' -- required
AND team_id = '{{ team_id }}' -- required
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

Request access to a team as a member. An owner has to approve the request. Only 100 users can request access to a team at the same time.

```sql
INSERT INTO vercel.teams.access_requests (
joined_from,
team_id
)
SELECT 
'{{ joined_from }}' /* required */,
'{{ team_id }}'
RETURNING
team_name,
access_requested_at,
bitbucket,
confirmed,
github,
gitlab,
joined_from,
team_slug
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_requests
  props:
    - name: team_id
      value: "{{ team_id }}"
      description: Required parameter for the access_requests resource.
    - name: joined_from
      value:
        origin: "{{ origin }}"
        commitId: "{{ commitId }}"
        repoId: "{{ repoId }}"
        repoPath: "{{ repoPath }}"
        gitUserId: "{{ gitUserId }}"
        gitUserLogin: "{{ gitUserLogin }}"
`}</CodeBlock>

</TabItem>
</Tabs>
