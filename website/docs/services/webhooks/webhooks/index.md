--- 
title: webhooks
hide_title: false
hide_table_of_contents: false
keywords:
  - webhooks
  - webhooks
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

Creates, updates, deletes, gets or lists a <code>webhooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="webhooks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.webhooks.webhooks" /></td></tr>
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
    <td>The webhook id (example: account_hook_GflD6EYyo7F4ViYS)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the team the webhook belongs to (example: ZspSRT4ljIEEmMHgoDwKWDei) (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="alert_rule_ids" /></td>
    <td><code>array</code></td>
    <td> (wire: alertRuleIds)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>A number containing the date when the webhook was created in in milliseconds (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>The webhooks events (example: deployment.created)</td>
</tr>
<tr>
    <td><CopyableCode code="project_ids" /></td>
    <td><code>array</code></td>
    <td>The ID of the projects the webhook is associated with (wire: projectIds)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>A number containing the date when the webhook was updated in in milliseconds (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>A string with the URL of the webhook (example: https:​//my-webhook.com)</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The webhook id (example: account_hook_GflD6EYyo7F4ViYS)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the team the webhook belongs to (example: ZspSRT4ljIEEmMHgoDwKWDei) (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="alert_rule_ids" /></td>
    <td><code>array</code></td>
    <td> (wire: alertRuleIds)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>A number containing the date when the webhook was created in in milliseconds (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>The webhooks events (example: deployment.created)</td>
</tr>
<tr>
    <td><CopyableCode code="project_ids" /></td>
    <td><code>array</code></td>
    <td>The ID of the projects the webhook is associated with (wire: projectIds)</td>
</tr>
<tr>
    <td><CopyableCode code="projects_metadata" /></td>
    <td><code>array</code></td>
    <td> (wire: projectsMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>A number containing the date when the webhook was updated in in milliseconds (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>A string with the URL of the webhook (example: https:​//my-webhook.com)</td>
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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Get a webhook</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Get a list of webhooks</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-url"><code>url</code></a>, <a href="#parameter-events"><code>events</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Creates a webhook</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Deletes a webhook</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td> (wire: projectId)</td>
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

Get a webhook

```sql
SELECT
id,
owner_id,
alert_rule_ids,
created_at,
events,
project_ids,
updated_at,
url
FROM vercel.webhooks.webhooks
WHERE id = '{{ id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Get a list of webhooks

```sql
SELECT
id,
owner_id,
alert_rule_ids,
created_at,
events,
project_ids,
projects_metadata,
updated_at,
url
FROM vercel.webhooks.webhooks
WHERE project_id = '{{ project_id }}'
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

Creates a webhook

```sql
INSERT INTO vercel.webhooks.webhooks (
url,
events,
project_ids,
team_id,
slug
)
SELECT 
'{{ url }}' /* required */,
'{{ events }}' /* required */,
'{{ project_ids }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
id,
owner_id,
alert_rule_ids,
created_at,
events,
project_ids,
secret,
updated_at,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: webhooks
  props:
    - name: url
      value: "{{ url }}"
    - name: events
      value:
        - "{{ events }}"
    - name: project_ids
      value:
        - "{{ project_ids }}"
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

Deletes a webhook

```sql
DELETE FROM vercel.webhooks.webhooks
WHERE id = '{{ id }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
