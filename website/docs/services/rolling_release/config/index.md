--- 
title: config
hide_title: false
hide_table_of_contents: false
keywords:
  - config
  - rolling_release
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

Creates, updates, deletes, gets or lists a <code>config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="config" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.rolling_release.config" /></td></tr>
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

Project-level rolling release configuration that defines how deployments should be gradually rolled out

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
    <td><CopyableCode code="canary_response_header" /></td>
    <td><code>boolean</code></td>
    <td>Whether the request served by a canary deployment should return a header indicating a canary was served. Defaults to `false` when omitted. (false, true) (wire: canaryResponseHeader)</td>
</tr>
<tr>
    <td><CopyableCode code="gate" /></td>
    <td><code>object</code></td>
    <td>Automated gating configuration. Omitted (the default) means no gating is configured, which is equivalent to `enabled: false`.</td>
</tr>
<tr>
    <td><CopyableCode code="stages" /></td>
    <td><code>array</code></td>
    <td>An array of all the stages required during a deployment release. Each stage defines a target percentage and advancement rules. The final stage must always have targetPercentage: 100.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>The environment that the release targets, currently only supports production. Adding in case we want to configure with alias groups or custom environments. (example: production)</td>
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
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Get the Rolling Releases configuration for a project. The project-level config is simply a template that will be used for any future rolling release, and not the configuration for any active rolling release.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Update (or disable) Rolling Releases for a project. When disabling with the resolve-on-disable feature flag enabled, any active rolling release document is resolved using the disableRolloutAction parameter: "abort" to roll back (default), or "complete" to promote the canary to production. When enabling or updating config, changes only affect the next production deployment and do not alter a rollout that's already in-flight. Note: Enabling Rolling Releases automatically enables skew protection on the project with the default value if it wasn't configured already.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Disable Rolling Releases for a project means that future deployments will not undergo a rolling release. Changing the config never alters a rollout that's already in-flight—it only affects the next production deployment. If you want to also stop the current rollout, call this endpoint to disable the feature, and then call either the /complete or /abort endpoint.</td>
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
<tr id="parameter-id_or_name">
    <td><CopyableCode code="id_or_name" /></td>
    <td><code>string</code></td>
    <td>Project ID or project name (URL-encoded)</td>
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
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get the Rolling Releases configuration for a project. The project-level config is simply a template that will be used for any future rolling release, and not the configuration for any active rolling release.

```sql
SELECT
canary_response_header,
gate,
stages,
target
FROM vercel.rolling_release.config
WHERE id_or_name = '{{ id_or_name }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
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

Update (or disable) Rolling Releases for a project. When disabling with the resolve-on-disable feature flag enabled, any active rolling release document is resolved using the disableRolloutAction parameter: "abort" to roll back (default), or "complete" to promote the canary to production. When enabling or updating config, changes only affect the next production deployment and do not alter a rollout that's already in-flight. Note: Enabling Rolling Releases automatically enables skew protection on the project with the default value if it wasn't configured already.

```sql
UPDATE vercel.rolling_release.config
SET 
-- No updatable properties
WHERE 
id_or_name = '{{ id_or_name }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
rolling_release;
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

Disable Rolling Releases for a project means that future deployments will not undergo a rolling release. Changing the config never alters a rollout that's already in-flight—it only affects the next production deployment. If you want to also stop the current rollout, call this endpoint to disable the feature, and then call either the /complete or /abort endpoint.

```sql
DELETE FROM vercel.rolling_release.config
WHERE id_or_name = '{{ id_or_name }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
