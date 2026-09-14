--- 
title: firewall_events
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_events
  - security
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

Creates, updates, deletes, gets or lists a <code>firewall_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.security.firewall_events" /></td></tr>
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
    <td><CopyableCode code="actions" /></td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-start_timestamp"><code>start_timestamp</code></a>, <a href="#parameter-end_timestamp"><code>end_timestamp</code></a>, <a href="#parameter-hosts"><code>hosts</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieve firewall actions for a project Rule names are resolved against the project's *current* active firewall configuration and the team's active rulesets, so a rule that has since been renamed reports its new name and one that has been deleted reports `null`. System rules such as `sys_dos_mitigation` and `ip_blocking` have no configured name and always report `null`.</td>
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
    <td> (wire: projectId)</td>
</tr>
<tr id="parameter-end_timestamp">
    <td><CopyableCode code="end_timestamp" /></td>
    <td><code>number</code></td>
    <td> (wire: endTimestamp)</td>
</tr>
<tr id="parameter-hosts">
    <td><CopyableCode code="hosts" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team slug to perform the request on behalf of.</td>
</tr>
<tr id="parameter-start_timestamp">
    <td><CopyableCode code="start_timestamp" /></td>
    <td><code>number</code></td>
    <td> (wire: startTimestamp)</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Retrieve firewall actions for a project Rule names are resolved against the project's *current* active firewall configuration and the team's active rulesets, so a rule that has since been renamed reports its new name and one that has been deleted reports `null`. System rules such as `sys_dos_mitigation` and `ip_blocking` have no configured name and always report `null`.

```sql
SELECT
actions
FROM vercel.security.firewall_events
WHERE project_id = '{{ project_id }}' -- required
AND start_timestamp = '{{ start_timestamp }}'
AND end_timestamp = '{{ end_timestamp }}'
AND hosts = '{{ hosts }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
