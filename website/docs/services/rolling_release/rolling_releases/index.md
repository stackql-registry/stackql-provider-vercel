--- 
title: rolling_releases
hide_title: false
hide_table_of_contents: false
keywords:
  - rolling_releases
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

Creates, updates, deletes, gets or lists a <code>rolling_releases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rolling_releases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.rolling_release.rolling_releases" /></td></tr>
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

Rolling release information including configuration and document details, or null if no rolling release exists

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
    <td><CopyableCode code="queued_deployment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a deployment queued for the next rolling release (example: dpl_ghi789) (wire: queuedDeploymentId)</td>
</tr>
<tr>
    <td><CopyableCode code="active_stage" /></td>
    <td><code>object</code></td>
    <td>The currently active stage, null if the rollout is aborted (wire: activeStage)</td>
</tr>
<tr>
    <td><CopyableCode code="advancement_type" /></td>
    <td><code>string</code></td>
    <td>The advancement type of the rolling release (automatic, manual-approval) (example: manual-approval) (wire: advancementType)</td>
</tr>
<tr>
    <td><CopyableCode code="canary_deployment" /></td>
    <td><code>object</code></td>
    <td>The canary deployment being rolled out (wire: canaryDeployment)</td>
</tr>
<tr>
    <td><CopyableCode code="current_canary_percentage" /></td>
    <td><code>number</code></td>
    <td>When set (for example while &#123;@link substate&#125; is `PAUSED`), the canary traffic percentage persisted on the rollout document — use for dashboard display when linear shift is active. (wire: currentCanaryPercentage)</td>
</tr>
<tr>
    <td><CopyableCode code="current_deployment" /></td>
    <td><code>object</code></td>
    <td>The current deployment receiving production traffic (wire: currentDeployment)</td>
</tr>
<tr>
    <td><CopyableCode code="next_stage" /></td>
    <td><code>object</code></td>
    <td>The next stage to be activated, null if not in ACTIVE state (wire: nextStage)</td>
</tr>
<tr>
    <td><CopyableCode code="stages" /></td>
    <td><code>array</code></td>
    <td>All stages configured for this rolling release</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>number</code></td>
    <td>Unix timestamp in milliseconds when the rolling release started (wire: startedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the rolling release (ABORTED, ACTIVE, COMPLETE) (example: ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="substate" /></td>
    <td><code>string</code></td>
    <td>When set to `PAUSED`, the rollout is frozen at the current percentage until continued. (PAUSED, )</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>Unix timestamp in milliseconds when the rolling release was last updated (wire: updatedAt)</td>
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
    <td><a href="#parameter-state"><code>state</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Return the Rolling Release for a project, regardless of whether the rollout is active, aborted, or completed. If the feature is enabled but no deployment has occurred yet, null will be returned.</td>
</tr>
<tr>
    <td><a href="#approve_stage"><CopyableCode code="approve_stage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-nextStageIndex"><code>nextStageIndex</code></a>, <a href="#parameter-canaryDeploymentId"><code>canaryDeploymentId</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Advance a rollout to the next stage. This is only needed when rolling releases is configured to require manual approval.</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-canaryDeploymentId"><code>canaryDeploymentId</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Start a rolling release for a deployment. If a rolling release is already active for the same canary deployment, returns the current state without side effects.</td>
</tr>
<tr>
    <td><a href="#complete"><CopyableCode code="complete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-canaryDeploymentId"><code>canaryDeploymentId</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Force-complete a Rolling Release. The canary deployment will begin serving 100% of the traffic.</td>
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
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Filter by rolling release state</td>
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

Return the Rolling Release for a project, regardless of whether the rollout is active, aborted, or completed. If the feature is enabled but no deployment has occurred yet, null will be returned.

```sql
SELECT
queued_deployment_id,
active_stage,
advancement_type,
canary_deployment,
current_canary_percentage,
current_deployment,
next_stage,
stages,
started_at,
state,
substate,
updated_at
FROM vercel.rolling_release.rolling_releases
WHERE id_or_name = '{{ id_or_name }}' -- required
AND state = '{{ state }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="approve_stage"
    values={[
        { label: 'approve_stage', value: 'approve_stage' },
        { label: 'start', value: 'start' },
        { label: 'complete', value: 'complete' }
    ]}
>
<TabItem value="approve_stage">

Advance a rollout to the next stage. This is only needed when rolling releases is configured to require manual approval.

```sql
EXEC vercel.rolling_release.rolling_releases.approve_stage 
@id_or_name='{{ id_or_name }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"nextStageIndex": {{ nextStageIndex }}, 
"canaryDeploymentId": "{{ canaryDeploymentId }}"
}'
;
```
</TabItem>
<TabItem value="start">

Start a rolling release for a deployment. If a rolling release is already active for the same canary deployment, returns the current state without side effects.

```sql
EXEC vercel.rolling_release.rolling_releases.start 
@id_or_name='{{ id_or_name }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"canaryDeploymentId": "{{ canaryDeploymentId }}"
}'
;
```
</TabItem>
<TabItem value="complete">

Force-complete a Rolling Release. The canary deployment will begin serving 100% of the traffic.

```sql
EXEC vercel.rolling_release.rolling_releases.complete 
@id_or_name='{{ id_or_name }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"canaryDeploymentId": "{{ canaryDeploymentId }}"
}'
;
```
</TabItem>
</Tabs>
