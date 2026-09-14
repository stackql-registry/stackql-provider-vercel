--- 
title: tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - tokens
  - authentication
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

Creates, updates, deletes, gets or lists a <code>tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.authentication.tokens" /></td></tr>
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

Successful response.

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
    <td>The unique identifier of the token. (example: 5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the token.</td>
</tr>
<tr>
    <td><CopyableCode code="active_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp (in milliseconds) of when the token was most recently used. (wire: activeAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp (in milliseconds) of when the token was created. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp (in milliseconds) of when the token expires. (wire: expiresAt)</td>
</tr>
<tr>
    <td><CopyableCode code="leaked_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp (in milliseconds) of when the token was marked as leaked. (wire: leakedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="leaked_url" /></td>
    <td><code>string</code></td>
    <td>URL where the token was discovered as leaked. (wire: leakedUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td>The origin of how the token was created. (example: github)</td>
</tr>
<tr>
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>The token's prefix, for identification purposes. (example: vcp_)</td>
</tr>
<tr>
    <td><CopyableCode code="revoked_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp (in milliseconds) of when the token was revoked. (wire: revokedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>The access scopes granted to the token.</td>
</tr>
<tr>
    <td><CopyableCode code="suffix" /></td>
    <td><code>string</code></td>
    <td>The last few characters of the token, for identification purposes. (example: abc123)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the token. (example: oauth2-token)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Authentication token metadata.

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
    <td>The unique identifier of the token. (example: 5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the token.</td>
</tr>
<tr>
    <td><CopyableCode code="active_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp (in milliseconds) of when the token was most recently used. (wire: activeAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp (in milliseconds) of when the token was created. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp (in milliseconds) of when the token expires. (wire: expiresAt)</td>
</tr>
<tr>
    <td><CopyableCode code="leaked_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp (in milliseconds) of when the token was marked as leaked. (wire: leakedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="leaked_url" /></td>
    <td><code>string</code></td>
    <td>URL where the token was discovered as leaked. (wire: leakedUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td>The origin of how the token was created. (example: github)</td>
</tr>
<tr>
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>The token's prefix, for identification purposes. (example: vcp_)</td>
</tr>
<tr>
    <td><CopyableCode code="revoked_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp (in milliseconds) of when the token was revoked. (wire: revokedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>The access scopes granted to the token.</td>
</tr>
<tr>
    <td><CopyableCode code="suffix" /></td>
    <td><code>string</code></td>
    <td>The last few characters of the token, for identification purposes. (example: abc123)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the token. (example: oauth2-token)</td>
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
    <td><a href="#parameter-token_id"><code>token_id</code></a></td>
    <td></td>
    <td>Retrieve metadata about an authentication token belonging to the currently authenticated User.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Retrieve a list of the current User's authentication tokens.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Creates and returns a new authentication token for the currently authenticated User. The `bearerToken` property is only provided once, in the response body, so be sure to save it on the client for use with API requests.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-token_id"><code>token_id</code></a></td>
    <td></td>
    <td>Invalidate an authentication token, such that it will no longer be valid for future HTTP requests.</td>
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
<tr id="parameter-token_id">
    <td><CopyableCode code="token_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the token to invalidate. The special value "current" may be supplied, which invalidates the token that the HTTP request was authenticated with.</td>
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

Retrieve metadata about an authentication token belonging to the currently authenticated User.

```sql
SELECT
id,
name,
active_at,
created_at,
expires_at,
leaked_at,
leaked_url,
origin,
prefix,
revoked_at,
scopes,
suffix,
type
FROM vercel.authentication.tokens
WHERE token_id = '{{ token_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieve a list of the current User's authentication tokens.

```sql
SELECT
id,
name,
active_at,
created_at,
expires_at,
leaked_at,
leaked_url,
origin,
prefix,
revoked_at,
scopes,
suffix,
type
FROM vercel.authentication.tokens
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

Creates and returns a new authentication token for the currently authenticated User. The `bearerToken` property is only provided once, in the response body, so be sure to save it on the client for use with API requests.

```sql
INSERT INTO vercel.authentication.tokens (
name,
expires_at,
project_id,
team_id,
slug
)
SELECT 
'{{ name }}' /* required */,
{{ expires_at }},
'{{ project_id }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
bearer_token,
token
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tokens
  props:
    - name: name
      value: "{{ name }}"
    - name: expires_at
      value: {{ expires_at }}
    - name: project_id
      value: "{{ project_id }}"
      description: |
        The ID of the project to scope this token to
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
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Invalidate an authentication token, such that it will no longer be valid for future HTTP requests.

```sql
DELETE FROM vercel.authentication.tokens
WHERE token_id = '{{ token_id }}' --required
;
```
</TabItem>
</Tabs>
