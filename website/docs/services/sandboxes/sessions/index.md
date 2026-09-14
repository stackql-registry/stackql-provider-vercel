--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
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

Creates, updates, deletes, gets or lists a <code>sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.sandboxes.sessions" /></td></tr>
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

The session was retrieved successfully.

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
    <td>The unique identifier of the sandbox. (example: sbx_123a6c5209bc3778245d011443644c8d27dc2c50)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the project associated with this session. (example: prj_123a6c5209bc3778245d011443644c8d27dc2c50) (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="source_snapshot_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the snapshot associated with this sandbox, if any. (example: snap_123a6c5209bc3778245d011443644c8d27dc2c50) (wire: sourceSnapshotId)</td>
</tr>
<tr>
    <td><CopyableCode code="source_sandbox_name" /></td>
    <td><code>string</code></td>
    <td>The name of the source sandbox. (example: my-sandbox) (wire: sourceSandboxName)</td>
</tr>
<tr>
    <td><CopyableCode code="aborted_at" /></td>
    <td><code>number</code></td>
    <td>The time when the sandbox was aborted, in milliseconds since the epoch. (wire: abortedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="active_cpu_duration_ms" /></td>
    <td><code>number</code></td>
    <td>The amount of CPU time the sandbox consumed, if available, in milliseconds. This value is only available once the sandbox is stopped, and only if it stopped successfully. (wire: activeCpuDurationMs)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>The time when the sandbox was created, in milliseconds since the epoch. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="cwd" /></td>
    <td><code>string</code></td>
    <td>The working directory of the sandbox. (example: /vercel/sandbox)</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>number</code></td>
    <td>The duration of the sandbox in milliseconds.</td>
</tr>
<tr>
    <td><CopyableCode code="memory" /></td>
    <td><code>number</code></td>
    <td>Memory allocated to this sandbox in MB.</td>
</tr>
<tr>
    <td><CopyableCode code="network_policy" /></td>
    <td><code>object</code></td>
    <td>The network policy applied to this sandbox, if any. (wire: networkPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="network_transfer" /></td>
    <td><code>object</code></td>
    <td>The quantity of data transfered to and from the sandbox, in bytes. This value is only available once the sandbox is stopped, and only if it stopped successfully. (wire: networkTransfer)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region where the sandbox is hosted. (example: iad1)</td>
</tr>
<tr>
    <td><CopyableCode code="requested_at" /></td>
    <td><code>number</code></td>
    <td>The time when the sandbox was requested, in milliseconds since the epoch. (wire: requestedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="requested_stop_at" /></td>
    <td><code>number</code></td>
    <td>The time when the sandbox was requested to stop, in milliseconds since the epoch. (wire: requestedStopAt)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime" /></td>
    <td><code>string</code></td>
    <td>The runtime of the sandbox. (example: node22)</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotted_at" /></td>
    <td><code>number</code></td>
    <td>The time when a snapshot was requested, in milliseconds since the epoch. (wire: snapshottedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>number</code></td>
    <td>The time when the sandbox was started, in milliseconds since the epoch. (wire: startedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the sandbox. (aborted, failed, pending, running, snapshotting, stopped, stopping) (example: running)</td>
</tr>
<tr>
    <td><CopyableCode code="stopped_at" /></td>
    <td><code>number</code></td>
    <td>The time when the sandbox was stopped, in milliseconds since the epoch. (wire: stoppedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>number</code></td>
    <td>The maximum amount of time the sandbox will run for in milliseconds.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>The last time the sandbox was updated, in milliseconds since the epoch. (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="vcpus" /></td>
    <td><code>number</code></td>
    <td>Number of vCPUs allocated to this sandbox.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The list of sessions matching the request filters.

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
    <td>The unique identifier of the sandbox. (example: sbx_123a6c5209bc3778245d011443644c8d27dc2c50)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the project associated with this session. (example: prj_123a6c5209bc3778245d011443644c8d27dc2c50) (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="source_snapshot_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the snapshot associated with this sandbox, if any. (example: snap_123a6c5209bc3778245d011443644c8d27dc2c50) (wire: sourceSnapshotId)</td>
</tr>
<tr>
    <td><CopyableCode code="source_sandbox_name" /></td>
    <td><code>string</code></td>
    <td>The name of the source sandbox. (example: my-sandbox) (wire: sourceSandboxName)</td>
</tr>
<tr>
    <td><CopyableCode code="aborted_at" /></td>
    <td><code>number</code></td>
    <td>The time when the sandbox was aborted, in milliseconds since the epoch. (wire: abortedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="active_cpu_duration_ms" /></td>
    <td><code>number</code></td>
    <td>The amount of CPU time the sandbox consumed, if available, in milliseconds. This value is only available once the sandbox is stopped, and only if it stopped successfully. (wire: activeCpuDurationMs)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>The time when the sandbox was created, in milliseconds since the epoch. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="cwd" /></td>
    <td><code>string</code></td>
    <td>The working directory of the sandbox. (example: /vercel/sandbox)</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>number</code></td>
    <td>The duration of the sandbox in milliseconds.</td>
</tr>
<tr>
    <td><CopyableCode code="memory" /></td>
    <td><code>number</code></td>
    <td>Memory allocated to this sandbox in MB.</td>
</tr>
<tr>
    <td><CopyableCode code="network_policy" /></td>
    <td><code>object</code></td>
    <td>The network policy applied to this sandbox, if any. (wire: networkPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="network_transfer" /></td>
    <td><code>object</code></td>
    <td>The quantity of data transfered to and from the sandbox, in bytes. This value is only available once the sandbox is stopped, and only if it stopped successfully. (wire: networkTransfer)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region where the sandbox is hosted. (example: iad1)</td>
</tr>
<tr>
    <td><CopyableCode code="requested_at" /></td>
    <td><code>number</code></td>
    <td>The time when the sandbox was requested, in milliseconds since the epoch. (wire: requestedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="requested_stop_at" /></td>
    <td><code>number</code></td>
    <td>The time when the sandbox was requested to stop, in milliseconds since the epoch. (wire: requestedStopAt)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime" /></td>
    <td><code>string</code></td>
    <td>The runtime of the sandbox. (example: node22)</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotted_at" /></td>
    <td><code>number</code></td>
    <td>The time when a snapshot was requested, in milliseconds since the epoch. (wire: snapshottedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>number</code></td>
    <td>The time when the sandbox was started, in milliseconds since the epoch. (wire: startedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the sandbox. (aborted, failed, pending, running, snapshotting, stopped, stopping) (example: running)</td>
</tr>
<tr>
    <td><CopyableCode code="stopped_at" /></td>
    <td><code>number</code></td>
    <td>The time when the sandbox was stopped, in milliseconds since the epoch. (wire: stoppedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>number</code></td>
    <td>The maximum amount of time the sandbox will run for in milliseconds.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>The last time the sandbox was updated, in milliseconds since the epoch. (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="vcpus" /></td>
    <td><code>number</code></td>
    <td>Number of vCPUs allocated to this sandbox.</td>
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
    <td><a href="#parameter-session_id"><code>session_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieves detailed information about a specific session, including its current status, resource configuration, and exposed routes.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-sort_order"><code>sort_order</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieves a paginated list of sessions belonging to a specific sandbox. Results are sorted by creation time and paginated using an opaque cursor.</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-session_id"><code>session_id</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Stops a running session and releases its allocated resources. All running processes within the session will be terminated. This action cannot be undone. A stopped session cannot be restarted.</td>
</tr>
<tr>
    <td><a href="#extend_timeout"><CopyableCode code="extend_timeout" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-duration"><code>duration</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Extends the maximum execution time of a running session. The session must be active and able to accept commands. The total timeout cannot exceed the maximum allowed limit for your account.</td>
</tr>
<tr>
    <td><a href="#update_network_policy"><CopyableCode code="update_network_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-mode"><code>mode</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Replaces the network access policy of a running session. Use this to control which external hosts the session can communicate with. This is a full replacement. Any previously configured network rules will be overwritten.</td>
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
    <td>The unique identifier of the session to update the network policy for.</td>
</tr>
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>Opaque pagination cursor from a previous response.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>number</code></td>
    <td>Maximum number of sessions to return in the response. Used for pagination.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filter sessions by sandbox name. Only sessions belonging to the specified sandbox are returned.</td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td>The unique identifier or name of the project to list sessions for.</td>
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

Retrieves detailed information about a specific session, including its current status, resource configuration, and exposed routes.

```sql
SELECT
id,
project_id,
source_snapshot_id,
source_sandbox_name,
aborted_at,
active_cpu_duration_ms,
created_at,
cwd,
duration,
memory,
network_policy,
network_transfer,
region,
requested_at,
requested_stop_at,
runtime,
snapshotted_at,
started_at,
status,
stopped_at,
timeout,
updated_at,
vcpus
FROM vercel.sandboxes.sessions
WHERE session_id = '{{ session_id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Retrieves a paginated list of sessions belonging to a specific sandbox. Results are sorted by creation time and paginated using an opaque cursor.

```sql
SELECT
id,
project_id,
source_snapshot_id,
source_sandbox_name,
aborted_at,
active_cpu_duration_ms,
created_at,
cwd,
duration,
memory,
network_policy,
network_transfer,
region,
requested_at,
requested_stop_at,
runtime,
snapshotted_at,
started_at,
status,
stopped_at,
timeout,
updated_at,
vcpus
FROM vercel.sandboxes.sessions
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


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="stop"
    values={[
        { label: 'stop', value: 'stop' },
        { label: 'extend_timeout', value: 'extend_timeout' },
        { label: 'update_network_policy', value: 'update_network_policy' }
    ]}
>
<TabItem value="stop">

Stops a running session and releases its allocated resources. All running processes within the session will be terminated. This action cannot be undone. A stopped session cannot be restarted.

```sql
EXEC vercel.sandboxes.sessions.stop 
@session_id='{{ session_id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}'
;
```
</TabItem>
<TabItem value="extend_timeout">

Extends the maximum execution time of a running session. The session must be active and able to accept commands. The total timeout cannot exceed the maximum allowed limit for your account.

```sql
EXEC vercel.sandboxes.sessions.extend_timeout 
@session_id='{{ session_id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"duration": {{ duration }}
}'
;
```
</TabItem>
<TabItem value="update_network_policy">

Replaces the network access policy of a running session. Use this to control which external hosts the session can communicate with. This is a full replacement. Any previously configured network rules will be overwritten.

```sql
EXEC vercel.sandboxes.sessions.update_network_policy 
@session_id='{{ session_id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"mode": "{{ mode }}", 
"allowedDomains": "{{ allowedDomains }}", 
"allowedCIDRs": "{{ allowedCIDRs }}", 
"deniedCIDRs": "{{ deniedCIDRs }}", 
"injectionRules": "{{ injectionRules }}", 
"allow": "{{ allow }}", 
"subnets": "{{ subnets }}"
}'
;
```
</TabItem>
</Tabs>
