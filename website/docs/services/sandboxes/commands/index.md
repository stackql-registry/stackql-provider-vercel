--- 
title: commands
hide_title: false
hide_table_of_contents: false
keywords:
  - commands
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

Creates, updates, deletes, gets or lists a <code>commands</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="commands" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.sandboxes.commands" /></td></tr>
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

The command data along with the exit code if the command did finish.

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
    <td>The ID of the command. (example: cmd_123a6c5209bc3778245d011443644c8d27dc2c50)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the command. (example: npm)</td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the session associated with the command. (example: sbx_123a6c5209bc3778245d011443644c8d27dc2c50) (wire: sessionId)</td>
</tr>
<tr>
    <td><CopyableCode code="args" /></td>
    <td><code>array</code></td>
    <td>The arguments of the command.</td>
</tr>
<tr>
    <td><CopyableCode code="cwd" /></td>
    <td><code>string</code></td>
    <td>The current working directory of the command. (example: /vercel/sandbox)</td>
</tr>
<tr>
    <td><CopyableCode code="duration_ms" /></td>
    <td><code>number</code></td>
    <td>Duration of the command execution in milliseconds. (wire: durationMs)</td>
</tr>
<tr>
    <td><CopyableCode code="exit_code" /></td>
    <td><code>number</code></td>
    <td>If the command did finish, the exit code. (wire: exitCode)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>number</code></td>
    <td>When the command was started, in milliseconds since the epoch. (wire: startedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The list of commands executed in the session.

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
    <td>The ID of the command. (example: cmd_123a6c5209bc3778245d011443644c8d27dc2c50)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the command. (example: npm)</td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the session associated with the command. (example: sbx_123a6c5209bc3778245d011443644c8d27dc2c50) (wire: sessionId)</td>
</tr>
<tr>
    <td><CopyableCode code="args" /></td>
    <td><code>array</code></td>
    <td>The arguments of the command.</td>
</tr>
<tr>
    <td><CopyableCode code="cwd" /></td>
    <td><code>string</code></td>
    <td>The current working directory of the command. (example: /vercel/sandbox)</td>
</tr>
<tr>
    <td><CopyableCode code="duration_ms" /></td>
    <td><code>number</code></td>
    <td>Duration of the command execution in milliseconds. (wire: durationMs)</td>
</tr>
<tr>
    <td><CopyableCode code="exit_code" /></td>
    <td><code>number</code></td>
    <td>If the command did finish, the exit code. (wire: exitCode)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>number</code></td>
    <td>When the command was started, in milliseconds since the epoch. (wire: startedAt)</td>
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
    <td><a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-cmd_id"><code>cmd_id</code></a></td>
    <td><a href="#parameter-wait"><code>wait</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieves the current status and details of a command executed in a session. Use the `wait` parameter to block until the command finishes execution.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-session_id"><code>session_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieves a list of all commands that have been executed in a session, including their current status, exit codes, and execution times, ordered from the most recent to the oldest.</td>
</tr>
<tr>
    <td><a href="#run"><CopyableCode code="run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-cmdId"><code>cmdId</code></a>, <a href="#parameter-command"><code>command</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Executes a shell command inside a running session. The command runs asynchronously and returns immediately with a command ID that can be used to track its progress and retrieve its output. Optionally, use the `wait` parameter to stream the command status until completion.</td>
</tr>
<tr>
    <td><a href="#kill"><CopyableCode code="kill" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cmd_id"><code>cmd_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-signal"><code>signal</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Sends a signal to terminate a running command in a session. The signal can be used to gracefully stop (SIGTERM) or forcefully kill (SIGKILL) the process. The command must still be running for this operation to succeed.</td>
</tr>
<tr>
    <td><a href="#get_logs"><CopyableCode code="get_logs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-cmd_id"><code>cmd_id</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Streams the output of a command in real-time using newline-delimited JSON (ND-JSON). Each entry includes the output data and stream type. Stream types include `stdout`, `stderr`, and `error` (for stream failures).</td>
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
<tr id="parameter-cmdId">
    <td><CopyableCode code="cmdId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the command to stream logs for.</td>
</tr>
<tr id="parameter-cmd_id">
    <td><CopyableCode code="cmd_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the command to stream logs for.</td>
</tr>
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the session containing the command.</td>
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
<tr id="parameter-wait">
    <td><CopyableCode code="wait" /></td>
    <td><code>string</code></td>
    <td>If set to "true", the request will block until the command finishes execution. Useful for synchronously waiting for command completion.</td>
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

Retrieves the current status and details of a command executed in a session. Use the `wait` parameter to block until the command finishes execution.

```sql
SELECT
id,
name,
session_id,
args,
cwd,
duration_ms,
exit_code,
started_at
FROM vercel.sandboxes.commands
WHERE session_id = '{{ session_id }}' -- required
AND cmd_id = '{{ cmd_id }}' -- required
AND wait = '{{ wait }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Retrieves a list of all commands that have been executed in a session, including their current status, exit codes, and execution times, ordered from the most recent to the oldest.

```sql
SELECT
id,
name,
session_id,
args,
cwd,
duration_ms,
exit_code,
started_at
FROM vercel.sandboxes.commands
WHERE session_id = '{{ session_id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="run"
    values={[
        { label: 'run', value: 'run' },
        { label: 'kill', value: 'kill' },
        { label: 'get_logs', value: 'get_logs' }
    ]}
>
<TabItem value="run">

Executes a shell command inside a running session. The command runs asynchronously and returns immediately with a command ID that can be used to track its progress and retrieve its output. Optionally, use the `wait` parameter to stream the command status until completion.

```sql
EXEC vercel.sandboxes.commands.run 
@session_id='{{ session_id }}' --required, 
@cmdId='{{ cmdId }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"command": "{{ command }}", 
"args": "{{ args }}", 
"cwd": "{{ cwd }}", 
"env": "{{ env }}", 
"sudo": {{ sudo }}, 
"wait": {{ wait }}, 
"logs": {{ logs }}, 
"timeout": {{ timeout }}
}'
;
```
</TabItem>
<TabItem value="kill">

Sends a signal to terminate a running command in a session. The signal can be used to gracefully stop (SIGTERM) or forcefully kill (SIGKILL) the process. The command must still be running for this operation to succeed.

```sql
EXEC vercel.sandboxes.commands.kill 
@cmd_id='{{ cmd_id }}' --required, 
@session_id='{{ session_id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"signal": {{ signal }}
}'
;
```
</TabItem>
<TabItem value="get_logs">

Streams the output of a command in real-time using newline-delimited JSON (ND-JSON). Each entry includes the output data and stream type. Stream types include `stdout`, `stderr`, and `error` (for stream failures).

```sql
EXEC vercel.sandboxes.commands.get_logs 
@session_id='{{ session_id }}' --required, 
@cmd_id='{{ cmd_id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}'
;
```
</TabItem>
</Tabs>
