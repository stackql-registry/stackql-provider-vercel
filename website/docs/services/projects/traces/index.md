--- 
title: traces
hide_title: false
hide_table_of_contents: false
keywords:
  - traces
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

Creates, updates, deletes, gets or lists a <code>traces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="traces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.projects.traces" /></td></tr>
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
    <td><CopyableCode code="root_span_id" /></td>
    <td><code>string</code></td>
    <td> (wire: rootSpanId)</td>
</tr>
<tr>
    <td><CopyableCode code="trace_id" /></td>
    <td><code>string</code></td>
    <td> (wire: traceId)</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="spans" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-request_id"><code>request_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Returns the OTEL trace for a given Vercel CLI request.</td>
</tr>
<tr>
    <td><a href="#create_session"><CopyableCode code="create_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectId"><code>projectId</code></a>, <a href="#parameter-hostname"><code>hostname</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Mints a short-lived HS256 JWT scoped to a deployment hostname. The Vercel CLI presents this JWT to the Vercel proxy on requests it wants traced.</td>
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
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The project ID (wire: projectId)</td>
</tr>
<tr id="parameter-request_id">
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Vercel CLI request ID associated with the trace (wire: requestId)</td>
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

Returns the OTEL trace for a given Vercel CLI request.

```sql
SELECT
root_span_id,
trace_id,
resources,
spans
FROM vercel.projects.traces
WHERE project_id = '{{ project_id }}' -- required
AND request_id = '{{ request_id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="create_session"
    values={[
        { label: 'create_session', value: 'create_session' }
    ]}
>
<TabItem value="create_session">

Mints a short-lived HS256 JWT scoped to a deployment hostname. The Vercel CLI presents this JWT to the Vercel proxy on requests it wants traced.

```sql
EXEC vercel.projects.traces.create_session 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"projectId": "{{ projectId }}", 
"hostname": "{{ hostname }}"
}'
;
```
</TabItem>
</Tabs>
