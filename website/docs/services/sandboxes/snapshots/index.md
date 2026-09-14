--- 
title: snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshots
  - sandboxes
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

Creates, updates, deletes, gets or lists a <code>snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.sandboxes.snapshots" /></td></tr>
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

This object contains information related to a Snapshot of a Vercel Sandbox session (v2 API).

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
    <td>The unique identifier of the snapshot. (example: snap_123a6c5209bc3778245d011443644c8d27dc2c50)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the parent snapshot, if this snapshot was created from another snapshot. (example: snap_parent123) (wire: parentId)</td>
</tr>
<tr>
    <td><CopyableCode code="source_session_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the session from which the snapshot was created. (example: sbx_123a6c5209bc3778245d011443644c8d27dc2c50) (wire: sourceSessionId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>The time when the snapshot was created, in milliseconds since the epoch. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_method" /></td>
    <td><code>string</code></td>
    <td>The method used to create the snapshot. (automatic, manual) (example: manual) (wire: creationMethod)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>number</code></td>
    <td>The time when the snapshot will expire, in milliseconds since the epoch. If not set, the snapshot does not have any expiration. (wire: expiresAt)</td>
</tr>
<tr>
    <td><CopyableCode code="last_used_at" /></td>
    <td><code>number</code></td>
    <td>The last time the snapshot was used (e.g. to resume or create a sandbox), in milliseconds since the epoch. Falls back to `createdAt` for older snapshots that predate this field. (wire: lastUsedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region where the snapshot is stored. (example: iad1)</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>The regions where the snapshot is available.</td>
</tr>
<tr>
    <td><CopyableCode code="size_bytes" /></td>
    <td><code>number</code></td>
    <td>The size of the snapshot in bytes. (wire: sizeBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the snapshot. (created, deleted, failed) (example: created)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>The last time the snapshot was updated, in milliseconds since the epoch. (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

This object contains information related to a Snapshot of a Vercel Sandbox session (v2 API).

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
    <td>The unique identifier of the snapshot. (example: snap_123a6c5209bc3778245d011443644c8d27dc2c50)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the parent snapshot, if this snapshot was created from another snapshot. (example: snap_parent123) (wire: parentId)</td>
</tr>
<tr>
    <td><CopyableCode code="source_session_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the session from which the snapshot was created. (example: sbx_123a6c5209bc3778245d011443644c8d27dc2c50) (wire: sourceSessionId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>The time when the snapshot was created, in milliseconds since the epoch. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_method" /></td>
    <td><code>string</code></td>
    <td>The method used to create the snapshot. (automatic, manual) (example: manual) (wire: creationMethod)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>number</code></td>
    <td>The time when the snapshot will expire, in milliseconds since the epoch. If not set, the snapshot does not have any expiration. (wire: expiresAt)</td>
</tr>
<tr>
    <td><CopyableCode code="last_used_at" /></td>
    <td><code>number</code></td>
    <td>The last time the snapshot was used (e.g. to resume or create a sandbox), in milliseconds since the epoch. Falls back to `createdAt` for older snapshots that predate this field. (wire: lastUsedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region where the snapshot is stored. (example: iad1)</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>The regions where the snapshot is available.</td>
</tr>
<tr>
    <td><CopyableCode code="size_bytes" /></td>
    <td><code>number</code></td>
    <td>The size of the snapshot in bytes. (wire: sizeBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the snapshot. (created, deleted, failed) (example: created)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>The last time the snapshot was updated, in milliseconds since the epoch. (wire: updatedAt)</td>
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
    <td><a href="#parameter-snapshot_id"><code>snapshot_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieves detailed information about a specific snapshot, including its creation time, size, expiration date, and the source session it was created from.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-sort_order"><code>sort_order</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieves a paginated list of snapshots for a specific project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-session_id"><code>session_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Creates a point-in-time snapshot of a running session's filesystem. Snapshots can be used to quickly restore a session to a previous state or to create new sessions with pre-configured environments. The session must be running and able to accept commands for a snapshot to be created. The session will be terminated after the snapshot is created. Unlike v2, snapshots expire after 7 days when neither the request nor the sandbox configuration specifies an expiration.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-snapshot_id"><code>snapshot_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Permanently deletes a snapshot and frees its associated storage. This action cannot be undone. After deletion, the snapshot can no longer be used to create new sessions.</td>
</tr>
<tr>
    <td><a href="#create_v2"><CopyableCode code="create_v2" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-session_id"><code>session_id</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Creates a point-in-time snapshot of a running session's filesystem. Snapshots can be used to quickly restore a session to a previous state or to create new sessions with pre-configured environments. The session must be running and able to accept commands for a snapshot to be created. The session will be terminated after the snapshot is created.</td>
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
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the session to snapshot.</td>
</tr>
<tr id="parameter-snapshot_id">
    <td><CopyableCode code="snapshot_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the snapshot to delete.</td>
</tr>
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>Opaque pagination cursor from a previous response.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>number</code></td>
    <td>Maximum number of snapshots to return in the response. Used for pagination.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name for the sandbox. Must be unique per project and URL-safe (alphanumeric, hyphens, underscores).</td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td>The unique identifier or name of the project to list snapshots for.</td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team slug to perform the request on behalf of.</td>
</tr>
<tr id="parameter-sort_order">
    <td><CopyableCode code="sort_order" /></td>
    <td><code>string</code></td>
    <td>Sort direction for results by creation time. (wire: sortOrder)</td>
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

Retrieves detailed information about a specific snapshot, including its creation time, size, expiration date, and the source session it was created from.

```sql
SELECT
id,
parent_id,
source_session_id,
created_at,
creation_method,
expires_at,
last_used_at,
region,
regions,
size_bytes,
status,
updated_at
FROM vercel.sandboxes.snapshots
WHERE snapshot_id = '{{ snapshot_id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Retrieves a paginated list of snapshots for a specific project.

```sql
SELECT
id,
parent_id,
source_session_id,
created_at,
creation_method,
expires_at,
last_used_at,
region,
regions,
size_bytes,
status,
updated_at
FROM vercel.sandboxes.snapshots
WHERE project = '{{ project }}'
AND name = '{{ name }}'
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
AND sort_order = '{{ sort_order }}'
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

Creates a point-in-time snapshot of a running session's filesystem. Snapshots can be used to quickly restore a session to a previous state or to create new sessions with pre-configured environments. The session must be running and able to accept commands for a snapshot to be created. The session will be terminated after the snapshot is created. Unlike v2, snapshots expire after 7 days when neither the request nor the sandbox configuration specifies an expiration.

```sql
INSERT INTO vercel.sandboxes.snapshots (
expiration,
session_id,
team_id,
slug
)
SELECT 
{{ expiration }},
'{{ session_id }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
session,
snapshot
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: snapshots
  props:
    - name: session_id
      value: "{{ session_id }}"
      description: Required parameter for the snapshots resource.
    - name: expiration
      value: {{ expiration }}
      description: |
        The number of milliseconds after which the snapshot will expire and be deleted. Defaults to 7 days when neither this field nor the sandbox configuration specifies an expiration. Use 0 for no expiration.
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

Permanently deletes a snapshot and frees its associated storage. This action cannot be undone. After deletion, the snapshot can no longer be used to create new sessions.

```sql
DELETE FROM vercel.sandboxes.snapshots
WHERE snapshot_id = '{{ snapshot_id }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="create_v2"
    values={[
        { label: 'create_v2', value: 'create_v2' }
    ]}
>
<TabItem value="create_v2">

Creates a point-in-time snapshot of a running session's filesystem. Snapshots can be used to quickly restore a session to a previous state or to create new sessions with pre-configured environments. The session must be running and able to accept commands for a snapshot to be created. The session will be terminated after the snapshot is created.

```sql
EXEC vercel.sandboxes.snapshots.create_v2 
@session_id='{{ session_id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"expiration": {{ expiration }}
}'
;
```
</TabItem>
</Tabs>
