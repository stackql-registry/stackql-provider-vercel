--- 
title: sandboxes
hide_title: false
hide_table_of_contents: false
keywords:
  - sandboxes
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

Creates, updates, deletes, gets or lists a <code>sandboxes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sandboxes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.sandboxes.sandboxes" /></td></tr>
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

This object contains information related to a Vercel NamedSandbox.

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
    <td>The unique identifier of the sandbox. (example: my-sandbox)</td>
</tr>
<tr>
    <td><CopyableCode code="current_session_id" /></td>
    <td><code>string</code></td>
    <td>Current session ID the sandbox is pointing to. (wire: currentSessionId)</td>
</tr>
<tr>
    <td><CopyableCode code="current_snapshot_id" /></td>
    <td><code>string</code></td>
    <td>Current snapshot ID that the named sandbox is pointing to. (wire: currentSnapshotId)</td>
</tr>
<tr>
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The Connect network id for the target Secure Compute private network. (wire: networkId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>The time when the named sandbox was created, in milliseconds since the epoch. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="cwd" /></td>
    <td><code>string</code></td>
    <td>The working directory of the sandbox. (example: /vercel/sandbox)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>number</code></td>
    <td>The time at which the currently running sandbox will time out, in milliseconds since the epoch. Only present while a session is running. (wire: expiresAt)</td>
</tr>
<tr>
    <td><CopyableCode code="failover_regions" /></td>
    <td><code>array</code></td>
    <td>The regions the sandbox fails over to. Empty when it does not fail over. (wire: failoverRegions)</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>string</code></td>
    <td>Digest-pinned reference of the container image the sandbox was created from, when it was created from an image ("&#123;repository&#125;@&#123;manifestDigest&#125;"). (example: my-repo@sha256:2c4e8f9a1b3d5e7f091a2b3c4d5e6f708192a3b4c5d6e7f8091a2b3c4d5e6f708)</td>
</tr>
<tr>
    <td><CopyableCode code="keep_last_snapshots" /></td>
    <td><code>object</code></td>
    <td>Keep-last snapshot configuration. (wire: keepLastSnapshots)</td>
</tr>
<tr>
    <td><CopyableCode code="memory" /></td>
    <td><code>number</code></td>
    <td>Memory allocated in MB.</td>
</tr>
<tr>
    <td><CopyableCode code="mounts" /></td>
    <td><code>object</code></td>
    <td>Key-value pairs of mount path and drive.</td>
</tr>
<tr>
    <td><CopyableCode code="network_policy" /></td>
    <td><code>object</code></td>
    <td>Network policy configuration. (wire: networkPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="persistent" /></td>
    <td><code>boolean</code></td>
    <td>Whether the sandbox persists its state across restarts via automatic snapshots. (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region the sandbox is pinned to: the region stored on the sandbox, otherwise the platform default. Where a running session actually landed is reported by `session.region`. (example: iad1)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime" /></td>
    <td><code>string</code></td>
    <td>Runtime identifier. (example: node22)</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_expiration" /></td>
    <td><code>number</code></td>
    <td>Default snapshot expiration time in milliseconds. 0 means no expiration. (wire: snapshotExpiration)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the current sandbox. (running, stopped, stopping) (example: running)</td>
</tr>
<tr>
    <td><CopyableCode code="status_updated_at" /></td>
    <td><code>number</code></td>
    <td>The time when the sandbox status was last updated, in milliseconds since the epoch. (wire: statusUpdatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Key-value tags attached to the named sandbox.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>number</code></td>
    <td>Timeout in milliseconds.</td>
</tr>
<tr>
    <td><CopyableCode code="total_active_cpu_duration_ms" /></td>
    <td><code>number</code></td>
    <td>Cumulative active CPU duration in milliseconds across all sandbox runs. (wire: totalActiveCpuDurationMs)</td>
</tr>
<tr>
    <td><CopyableCode code="total_duration_ms" /></td>
    <td><code>number</code></td>
    <td>Cumulative wall-clock duration in milliseconds across all sandbox runs. (wire: totalDurationMs)</td>
</tr>
<tr>
    <td><CopyableCode code="total_egress_bytes" /></td>
    <td><code>number</code></td>
    <td>Cumulative egress bytes across all sandbox runs. (wire: totalEgressBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="total_ingress_bytes" /></td>
    <td><code>number</code></td>
    <td>Cumulative ingress bytes across all sandbox runs. (wire: totalIngressBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>The time when the named sandbox was last updated, in milliseconds since the epoch. (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="vcpus" /></td>
    <td><code>number</code></td>
    <td>Number of virtual CPUs allocated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

This object contains information related to a Vercel NamedSandbox.

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
    <td>The unique identifier of the sandbox. (example: my-sandbox)</td>
</tr>
<tr>
    <td><CopyableCode code="current_session_id" /></td>
    <td><code>string</code></td>
    <td>Current session ID the sandbox is pointing to. (wire: currentSessionId)</td>
</tr>
<tr>
    <td><CopyableCode code="current_snapshot_id" /></td>
    <td><code>string</code></td>
    <td>Current snapshot ID that the named sandbox is pointing to. (wire: currentSnapshotId)</td>
</tr>
<tr>
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The Connect network id for the target Secure Compute private network. (wire: networkId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>The time when the named sandbox was created, in milliseconds since the epoch. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="cwd" /></td>
    <td><code>string</code></td>
    <td>The working directory of the sandbox. (example: /vercel/sandbox)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>number</code></td>
    <td>The time at which the currently running sandbox will time out, in milliseconds since the epoch. Only present while a session is running. (wire: expiresAt)</td>
</tr>
<tr>
    <td><CopyableCode code="failover_regions" /></td>
    <td><code>array</code></td>
    <td>The regions the sandbox fails over to. Empty when it does not fail over. (wire: failoverRegions)</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>string</code></td>
    <td>Digest-pinned reference of the container image the sandbox was created from, when it was created from an image ("&#123;repository&#125;@&#123;manifestDigest&#125;"). (example: my-repo@sha256:2c4e8f9a1b3d5e7f091a2b3c4d5e6f708192a3b4c5d6e7f8091a2b3c4d5e6f708)</td>
</tr>
<tr>
    <td><CopyableCode code="keep_last_snapshots" /></td>
    <td><code>object</code></td>
    <td>Keep-last snapshot configuration. (wire: keepLastSnapshots)</td>
</tr>
<tr>
    <td><CopyableCode code="memory" /></td>
    <td><code>number</code></td>
    <td>Memory allocated in MB.</td>
</tr>
<tr>
    <td><CopyableCode code="mounts" /></td>
    <td><code>object</code></td>
    <td>Key-value pairs of mount path and drive.</td>
</tr>
<tr>
    <td><CopyableCode code="network_policy" /></td>
    <td><code>object</code></td>
    <td>Network policy configuration. (wire: networkPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="persistent" /></td>
    <td><code>boolean</code></td>
    <td>Whether the sandbox persists its state across restarts via automatic snapshots. (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region the sandbox is pinned to: the region stored on the sandbox, otherwise the platform default. Where a running session actually landed is reported by `session.region`. (example: iad1)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime" /></td>
    <td><code>string</code></td>
    <td>Runtime identifier. (example: node22)</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_expiration" /></td>
    <td><code>number</code></td>
    <td>Default snapshot expiration time in milliseconds. 0 means no expiration. (wire: snapshotExpiration)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the current sandbox. (running, stopped, stopping) (example: running)</td>
</tr>
<tr>
    <td><CopyableCode code="status_updated_at" /></td>
    <td><code>number</code></td>
    <td>The time when the sandbox status was last updated, in milliseconds since the epoch. (wire: statusUpdatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Key-value tags attached to the named sandbox.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>number</code></td>
    <td>Timeout in milliseconds.</td>
</tr>
<tr>
    <td><CopyableCode code="total_active_cpu_duration_ms" /></td>
    <td><code>number</code></td>
    <td>Cumulative active CPU duration in milliseconds across all sandbox runs. (wire: totalActiveCpuDurationMs)</td>
</tr>
<tr>
    <td><CopyableCode code="total_duration_ms" /></td>
    <td><code>number</code></td>
    <td>Cumulative wall-clock duration in milliseconds across all sandbox runs. (wire: totalDurationMs)</td>
</tr>
<tr>
    <td><CopyableCode code="total_egress_bytes" /></td>
    <td><code>number</code></td>
    <td>Cumulative egress bytes across all sandbox runs. (wire: totalEgressBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="total_ingress_bytes" /></td>
    <td><code>number</code></td>
    <td>Cumulative ingress bytes across all sandbox runs. (wire: totalIngressBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>The time when the named sandbox was last updated, in milliseconds since the epoch. (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="vcpus" /></td>
    <td><code>number</code></td>
    <td>Number of virtual CPUs allocated.</td>
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
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-resume"><code>resume</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieves a named sandbox by name, including its current sandbox and routes. If the sandbox is stopped and resume is true, a new sandbox will be created from the most recent snapshot.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-project"><code>project</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a>, <a href="#parameter-name_prefix"><code>name_prefix</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-sort_order"><code>sort_order</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-tags"><code>tags</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieves a paginated list of named sandboxes belonging to a specific project. Results can be sorted by creation time or name, and optionally filtered by name prefix or status.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Creates a named sandbox environment. Named sandboxes have a unique name within a project and support automatic snapshotting on shutdown. When no `image` is provided (and the sandbox is not restored from a snapshot), the sandbox is created from the default universal image. Unlike v3, snapshots expire after 7 days by default and persistent sandboxes keep only their most recent snapshot unless `keepLastSnapshots` is configured otherwise (or set to `null` to disable the limit).</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-resume"><code>resume</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Updates the configuration of a sandbox. Only the provided fields will be modified; omitted fields remain unchanged.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-delete_orphan_snapshots"><code>delete_orphan_snapshots</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Deletes a sandbox by name. If sandboxes are currently running, they will be stopped first. This operation deletes all sandbox entities with the given name and the named sandbox metadata.</td>
</tr>
<tr>
    <td><a href="#create_v2"><CopyableCode code="create_v2" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Creates a named sandbox environment. Named sandboxes have a unique name within a project and support automatic snapshotting on shutdown.</td>
</tr>
<tr>
    <td><a href="#fork_v2"><CopyableCode code="fork_v2" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Forks a named sandbox, creating a new named sandbox from the source's configuration. Resources, timeout, ports, tags, network policy, mounts, Connect network, image, persistence, snapshot settings and — unlike the SDK-side fork — environment variables are copied from the source automatically (`interactive` is not). When the source has a snapshot the fork starts from it; otherwise it starts from the source's runtime/image. Any field provided in the request body overrides the value copied from the source.</td>
</tr>
<tr>
    <td><a href="#create_v3"><CopyableCode code="create_v3" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Creates a named sandbox environment. Named sandboxes have a unique name within a project and support automatic snapshotting on shutdown. Unlike v2, this version has no `runtime` parameter: when no `image` is provided (and the sandbox is not restored from a snapshot), the sandbox is created from the default universal image.</td>
</tr>
<tr>
    <td><a href="#fork"><CopyableCode code="fork" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Forks a named sandbox, creating a new named sandbox from the source's configuration. Resources, timeout, ports, tags, network policy, mounts, Connect network, image, persistence, snapshot settings and — unlike the SDK-side fork — environment variables are copied from the source automatically (`interactive` is not). When the source has a snapshot the fork starts from it; otherwise it starts from the source's runtime/image. Any field provided in the request body overrides the value copied from the source. Unlike v2, when neither the body nor the source provides a value, snapshots expire after 7 days by default and persistent sandboxes keep only their most recent snapshot (`keepLastSnapshots: null` disables the limit).</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the source sandbox to fork.</td>
</tr>
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>Opaque pagination cursor from a previous response.</td>
</tr>
<tr id="parameter-delete_orphan_snapshots">
    <td><CopyableCode code="delete_orphan_snapshots" /></td>
    <td><code>boolean</code></td>
    <td>When true, snapshots of the deleted sandbox that are not referenced by any other sandbox are also deleted asynchronously. Defaults to false. (wire: deleteOrphanSnapshots)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>number</code></td>
    <td>Maximum number of named sandboxes to return in the response. Used for pagination.</td>
</tr>
<tr id="parameter-name_prefix">
    <td><CopyableCode code="name_prefix" /></td>
    <td><code>string</code></td>
    <td>Filter named sandboxes whose name starts with this prefix. Only valid when sortBy=name. (wire: namePrefix)</td>
</tr>
<tr id="parameter-project">
    <td><CopyableCode code="project" /></td>
    <td><code>string</code></td>
    <td>The unique identifier or name of the project to list named sandboxes for.</td>
</tr>
<tr id="parameter-projectId">
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the project the source sandbox belongs to. Required unless authenticating with an OIDC token.</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The project ID that owns the named sandbox. When provided, takes precedence over OIDC project context. (wire: projectId)</td>
</tr>
<tr id="parameter-resume">
    <td><CopyableCode code="resume" /></td>
    <td><code>boolean</code></td>
    <td>Whether to automatically resume a stopped named sandbox by creating a new instance from its snapshot. Defaults to false.</td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team slug to perform the request on behalf of.</td>
</tr>
<tr id="parameter-sort_by">
    <td><CopyableCode code="sort_by" /></td>
    <td><code>string</code></td>
    <td>Field to sort by. (wire: sortBy)</td>
</tr>
<tr id="parameter-sort_order">
    <td><CopyableCode code="sort_order" /></td>
    <td><code>string</code></td>
    <td>Sort direction. Defaults to desc. (wire: sortOrder)</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter named sandboxes by status. Only valid when sortBy is createdAt.</td>
</tr>
<tr id="parameter-tags">
    <td><CopyableCode code="tags" /></td>
    <td><code></code></td>
    <td>Filter sandboxes by tag. Format: \"key:value\". Only one tag filter is supported at a time.</td>
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

Retrieves a named sandbox by name, including its current sandbox and routes. If the sandbox is stopped and resume is true, a new sandbox will be created from the most recent snapshot.

```sql
SELECT
name,
current_session_id,
current_snapshot_id,
network_id,
created_at,
cwd,
expires_at,
failover_regions,
image,
keep_last_snapshots,
memory,
mounts,
network_policy,
persistent,
region,
runtime,
snapshot_expiration,
status,
status_updated_at,
tags,
timeout,
total_active_cpu_duration_ms,
total_duration_ms,
total_egress_bytes,
total_ingress_bytes,
updated_at,
vcpus
FROM vercel.sandboxes.sandboxes
WHERE name = '{{ name }}' -- required
AND project_id = '{{ project_id }}'
AND resume = '{{ resume }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Retrieves a paginated list of named sandboxes belonging to a specific project. Results can be sorted by creation time or name, and optionally filtered by name prefix or status.

```sql
SELECT
name,
current_session_id,
current_snapshot_id,
network_id,
created_at,
cwd,
expires_at,
failover_regions,
image,
keep_last_snapshots,
memory,
mounts,
network_policy,
persistent,
region,
runtime,
snapshot_expiration,
status,
status_updated_at,
tags,
timeout,
total_active_cpu_duration_ms,
total_duration_ms,
total_egress_bytes,
total_ingress_bytes,
updated_at,
vcpus
FROM vercel.sandboxes.sandboxes
WHERE project = '{{ project }}'
AND limit = '{{ limit }}'
AND sort_by = '{{ sort_by }}'
AND name_prefix = '{{ name_prefix }}'
AND cursor = '{{ cursor }}'
AND sort_order = '{{ sort_order }}'
AND status = '{{ status }}'
AND tags = '{{ tags }}'
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

Creates a named sandbox environment. Named sandboxes have a unique name within a project and support automatic snapshotting on shutdown. When no `image` is provided (and the sandbox is not restored from a snapshot), the sandbox is created from the default universal image. Unlike v3, snapshots expire after 7 days by default and persistent sandboxes keep only their most recent snapshot unless `keepLastSnapshots` is configured otherwise (or set to `null` to disable the limit).

```sql
INSERT INTO vercel.sandboxes.sandboxes (
network_policy,
resources,
source,
project_id,
ports,
image,
timeout,
env,
mounts,
region,
failover_regions,
network_id,
name,
persistent,
snapshot_expiration,
keep_last_snapshots,
tags,
team_id,
slug
)
SELECT 
'{{ network_policy }}',
'{{ resources }}',
'{{ source }}',
'{{ project_id }}',
'{{ ports }}',
'{{ image }}',
{{ timeout }},
'{{ env }}',
'{{ mounts }}',
'{{ region }}',
'{{ failover_regions }}',
'{{ network_id }}',
'{{ name }}',
{{ persistent }},
{{ snapshot_expiration }},
'{{ keep_last_snapshots }}',
'{{ tags }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
routes,
sandbox,
session
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sandboxes
  props:
    - name: network_policy
      description: |
        Network access policy for the sandbox.\n    Controls which external hosts the sandbox can communicate with.\n    Use \"allow-all\" mode to allow all traffic, \"deny-all\" to block all traffic or \"custom\" to provide specific rules.
      value:
        mode: "{{ mode }}"
        allowedDomains:
          - "{{ allowedDomains }}"
        allowedCIDRs:
          - "{{ allowedCIDRs }}"
        deniedCIDRs:
          - "{{ deniedCIDRs }}"
        injectionRules:
          - domain: "{{ domain }}"
            headers: "{{ headers }}"
            match:
              path:
                exact: "{{ exact }}"
                startsWith: "{{ startsWith }}"
              method:
                - "{{ method }}"
              queryString:
                - key:
                    exact: "{{ exact }}"
                    startsWith: "{{ startsWith }}"
                  value:
                    exact: "{{ exact }}"
                    startsWith: "{{ startsWith }}"
              headers:
                - key:
                    exact: "{{ exact }}"
                    startsWith: "{{ startsWith }}"
                  value:
                    exact: "{{ exact }}"
                    startsWith: "{{ startsWith }}"
        allow: "{{ allow }}"
        subnets:
          allow:
            - "{{ allow }}"
          deny:
            - "{{ deny }}"
    - name: resources
      description: |
        Resources to define the VM
      value:
        vcpus: {{ vcpus }}
        memory: {{ memory }}
    - name: source
      description: |
        The source from which to initialize the sandbox filesystem. Can be a Git repository, a tarball URL, or an existing snapshot.
      value:
        type: "{{ type }}"
        url: "{{ url }}"
        username: "{{ username }}"
        password: "{{ password }}"
        depth: {{ depth }}
        revision: "{{ revision }}"
        snapshotId: "{{ snapshotId }}"
    - name: project_id
      value: "{{ project_id }}"
      description: |
        The target project slug or ID in which the sandbox will be assigned to.
    - name: ports
      value:
        - {{ ports }}
      description: |
        List of ports to expose from the sandbox. Each port will be accessible via a unique URL. Maximum of 15 ports can be exposed.
    - name: image
      value: "{{ image }}"
      description: |
        Image to use for the sandbox.
    - name: timeout
      value: {{ timeout }}
      description: |
        Maximum duration in milliseconds that the sandbox can run before being automatically stopped.
    - name: env
      value: "{{ env }}"
      description: |
        Default environment variables for the sandbox. These are inherited by all commands unless overridden.
      default: [object Object]
    - name: mounts
      value: "{{ mounts }}"
      description: |
        List of drives to mount to the sandbox at the provided path.
    - name: region
      value: "{{ region }}"
      description: |
        The Vercel region in which to create the sandbox.
      valid_values: ['iad1', 'sfo1', 'cle1', 'cdg1', 'fra1', 'arn1', 'sin1', 'pdx1', 'lhr1', 'icn1', 'bom1', 'cpt1', 'dub1', 'gru1', 'hkg1', 'syd1', 'yul1', 'hnd1', 'kix1']
      default: iad1,sfo1,cle1,cdg1,fra1,arn1,sin1,pdx1,lhr1,icn1,bom1,cpt1,dub1,gru1,hkg1,syd1,yul1,hnd1,kix1
    - name: failover_regions
      value:
        - "{{ failover_regions }}"
      description: |
        The regions the sandbox falls back to when it cannot be created in \`region\`.
    - name: network_id
      value: "{{ network_id }}"
      description: |
        The Connect network id for the target Secure Compute private network.
    - name: name
      value: "{{ name }}"
      description: |
        Name for the sandbox. Must be unique per project and URL-safe (alphanumeric, hyphens, underscores).
    - name: persistent
      value: {{ persistent }}
      description: |
        Whether the sandbox persists its state across restarts via automatic snapshots. Defaults to true.
      default: true
    - name: snapshot_expiration
      value: {{ snapshot_expiration }}
      description: |
        Default snapshot expiration time in milliseconds. Defaults to 7 days. Set to 0 to disable expiration. When set, this value is used as the default expiration for all snapshots created for this sandbox.
    - name: keep_last_snapshots
      value: "{{ keep_last_snapshots }}"
      description: |
        Protect the N most recent snapshots with different expiration/deletion behavior. Persistent sandboxes default to keeping only the last snapshot (evicted snapshots are deleted). Set to null to disable the limit.
    - name: tags
      value: "{{ tags }}"
      description: |
        Key-value tags to associate with the sandbox. Maximum 5 tags.
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

Updates the configuration of a sandbox. Only the provided fields will be modified; omitted fields remain unchanged.

```sql
UPDATE vercel.sandboxes.sandboxes
SET 
resources = '{{ resources }}',
runtime = '{{ runtime }}',
timeout = {{ timeout }},
persistent = {{ persistent }},
snapshot_expiration = {{ snapshot_expiration }},
keep_last_snapshots = '{{ keep_last_snapshots }}',
network_policy = '{{ network_policy }}',
region = '{{ region }}',
failover_regions = '{{ failover_regions }}',
mounts = '{{ mounts }}',
network_id = '{{ network_id }}',
env = '{{ env }}',
ports = '{{ ports }}',
current_snapshot_id = '{{ current_snapshot_id }}',
tags = '{{ tags }}'
WHERE 
name = '{{ name }}' --required
AND project_id = '{{ project_id}}'
AND resume = {{ resume}}
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
resumed,
routes,
sandbox,
session;
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

Deletes a sandbox by name. If sandboxes are currently running, they will be stopped first. This operation deletes all sandbox entities with the given name and the named sandbox metadata.

```sql
DELETE FROM vercel.sandboxes.sandboxes
WHERE name = '{{ name }}' --required
AND project_id = '{{ project_id }}'
AND delete_orphan_snapshots = '{{ delete_orphan_snapshots }}'
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
        { label: 'create_v2', value: 'create_v2' },
        { label: 'fork_v2', value: 'fork_v2' },
        { label: 'create_v3', value: 'create_v3' },
        { label: 'fork', value: 'fork' }
    ]}
>
<TabItem value="create_v2">

Creates a named sandbox environment. Named sandboxes have a unique name within a project and support automatic snapshotting on shutdown.

```sql
EXEC vercel.sandboxes.sandboxes.create_v2 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"networkPolicy": "{{ networkPolicy }}", 
"runtime": "{{ runtime }}", 
"resources": "{{ resources }}", 
"source": "{{ source }}", 
"projectId": "{{ projectId }}", 
"ports": "{{ ports }}", 
"image": "{{ image }}", 
"timeout": {{ timeout }}, 
"env": "{{ env }}", 
"mounts": "{{ mounts }}", 
"region": "{{ region }}", 
"failoverRegions": "{{ failoverRegions }}", 
"networkId": "{{ networkId }}", 
"name": "{{ name }}", 
"persistent": {{ persistent }}, 
"snapshotExpiration": {{ snapshotExpiration }}, 
"keepLastSnapshots": "{{ keepLastSnapshots }}", 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
<TabItem value="fork_v2">

Forks a named sandbox, creating a new named sandbox from the source's configuration. Resources, timeout, ports, tags, network policy, mounts, Connect network, image, persistence, snapshot settings and — unlike the SDK-side fork — environment variables are copied from the source automatically (`interactive` is not). When the source has a snapshot the fork starts from it; otherwise it starts from the source's runtime/image. Any field provided in the request body overrides the value copied from the source.

```sql
EXEC vercel.sandboxes.sandboxes.fork_v2 
@name='{{ name }}' --required, 
@projectId='{{ projectId }}', 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"networkPolicy": "{{ networkPolicy }}", 
"resources": "{{ resources }}", 
"ports": "{{ ports }}", 
"image": "{{ image }}", 
"timeout": {{ timeout }}, 
"env": "{{ env }}", 
"mounts": "{{ mounts }}", 
"region": "{{ region }}", 
"failoverRegions": "{{ failoverRegions }}", 
"networkId": "{{ networkId }}", 
"name": "{{ name }}", 
"persistent": {{ persistent }}, 
"snapshotExpiration": {{ snapshotExpiration }}, 
"keepLastSnapshots": "{{ keepLastSnapshots }}", 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
<TabItem value="create_v3">

Creates a named sandbox environment. Named sandboxes have a unique name within a project and support automatic snapshotting on shutdown. Unlike v2, this version has no `runtime` parameter: when no `image` is provided (and the sandbox is not restored from a snapshot), the sandbox is created from the default universal image.

```sql
EXEC vercel.sandboxes.sandboxes.create_v3 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"networkPolicy": "{{ networkPolicy }}", 
"resources": "{{ resources }}", 
"source": "{{ source }}", 
"projectId": "{{ projectId }}", 
"ports": "{{ ports }}", 
"image": "{{ image }}", 
"timeout": {{ timeout }}, 
"env": "{{ env }}", 
"mounts": "{{ mounts }}", 
"region": "{{ region }}", 
"failoverRegions": "{{ failoverRegions }}", 
"networkId": "{{ networkId }}", 
"name": "{{ name }}", 
"persistent": {{ persistent }}, 
"snapshotExpiration": {{ snapshotExpiration }}, 
"keepLastSnapshots": "{{ keepLastSnapshots }}", 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
<TabItem value="fork">

Forks a named sandbox, creating a new named sandbox from the source's configuration. Resources, timeout, ports, tags, network policy, mounts, Connect network, image, persistence, snapshot settings and — unlike the SDK-side fork — environment variables are copied from the source automatically (`interactive` is not). When the source has a snapshot the fork starts from it; otherwise it starts from the source's runtime/image. Any field provided in the request body overrides the value copied from the source. Unlike v2, when neither the body nor the source provides a value, snapshots expire after 7 days by default and persistent sandboxes keep only their most recent snapshot (`keepLastSnapshots: null` disables the limit).

```sql
EXEC vercel.sandboxes.sandboxes.fork 
@name='{{ name }}' --required, 
@projectId='{{ projectId }}', 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"networkPolicy": "{{ networkPolicy }}", 
"resources": "{{ resources }}", 
"ports": "{{ ports }}", 
"image": "{{ image }}", 
"timeout": {{ timeout }}, 
"env": "{{ env }}", 
"mounts": "{{ mounts }}", 
"region": "{{ region }}", 
"failoverRegions": "{{ failoverRegions }}", 
"networkId": "{{ networkId }}", 
"name": "{{ name }}", 
"persistent": {{ persistent }}, 
"snapshotExpiration": {{ snapshotExpiration }}, 
"keepLastSnapshots": "{{ keepLastSnapshots }}", 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
</Tabs>
