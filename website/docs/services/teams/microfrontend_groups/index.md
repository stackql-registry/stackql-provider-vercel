--- 
title: microfrontend_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - microfrontend_groups
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

Creates, updates, deletes, gets or lists a <code>microfrontend_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="microfrontend_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.teams.microfrontend_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-team_id"><code>team_id</code></a></td>
    <td><a href="#parameter-slug"><code>slug</code></a></td>
    <td>Updates a microfrontends group's settings.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-team_id"><code>team_id</code></a></td>
    <td><a href="#parameter-slug"><code>slug</code></a></td>
    <td>Deletes a microfrontends group from the team associated with the group ID.</td>
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
<tr id="parameter-group_id">
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The microfrontend group ID to delete.</td>
</tr>
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The Team identifier to perform the request on behalf of.</td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team slug to perform the request on behalf of.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates a microfrontends group's settings.

```sql
UPDATE vercel.teams.microfrontend_groups
SET 
name = '{{ name }}',
fallback_environment = '{{ fallback_environment }}',
enable_polyrepo_branch_routing = {{ enable_polyrepo_branch_routing }}
WHERE 
group_id = '{{ group_id }}' --required
AND team_id = '{{ team_id }}' --required
AND slug = '{{ slug}}'
RETURNING
updated_microfrontends_group;
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

Deletes a microfrontends group from the team associated with the group ID.

```sql
DELETE FROM vercel.teams.microfrontend_groups
WHERE group_id = '{{ group_id }}' --required
AND team_id = '{{ team_id }}' --required
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
