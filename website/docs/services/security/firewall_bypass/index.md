--- 
title: firewall_bypass
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_bypass
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

Creates, updates, deletes, gets or lists a <code>firewall_bypass</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_bypass" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.security.firewall_bypass" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td> (wire: Id)</td>
</tr>
<tr>
    <td><CopyableCode code="actor_id" /></td>
    <td><code>string</code></td>
    <td> (wire: ActorId)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td> (wire: OwnerId)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td> (wire: ProjectId)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td> (block, bypass) (wire: Action)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td> (wire: CreatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string</code></td>
    <td> (wire: DeletedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td> (wire: Domain)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>number</code></td>
    <td> (wire: ExpiresAt)</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string</code></td>
    <td> (wire: Ip)</td>
</tr>
<tr>
    <td><CopyableCode code="is_project_rule" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: IsProjectRule)</td>
</tr>
<tr>
    <td><CopyableCode code="note" /></td>
    <td><code>string</code></td>
    <td> (wire: Note)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td> (wire: UpdatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at_hour" /></td>
    <td><code>string</code></td>
    <td> (wire: UpdatedAtHour)</td>
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
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-source_ip"><code>source_ip</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-project_scope"><code>project_scope</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieve the system bypass rules configured for the specified project</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-project_scope"><code>project_scope</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Create new system bypass rules</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Remove system bypass rules</td>
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
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Filter by domain</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>number</code></td>
    <td></td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>string</code></td>
    <td>Used for pagination. Retrieves results after the provided id</td>
</tr>
<tr id="parameter-project_scope">
    <td><CopyableCode code="project_scope" /></td>
    <td><code>boolean</code></td>
    <td>Filter by project scoped rules (wire: projectScope)</td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team slug to perform the request on behalf of.</td>
</tr>
<tr id="parameter-source_ip">
    <td><CopyableCode code="source_ip" /></td>
    <td><code>string</code></td>
    <td>Filter by source IP (wire: sourceIp)</td>
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

Retrieve the system bypass rules configured for the specified project

```sql
SELECT
id,
actor_id,
owner_id,
project_id,
action,
created_at,
deleted_at,
domain,
expires_at,
ip,
is_project_rule,
note,
updated_at,
updated_at_hour
FROM vercel.security.firewall_bypass
WHERE project_id = '{{ project_id }}' -- required
AND limit = '{{ limit }}'
AND source_ip = '{{ source_ip }}'
AND domain = '{{ domain }}'
AND project_scope = '{{ project_scope }}'
AND offset = '{{ offset }}'
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

Create new system bypass rules

```sql
INSERT INTO vercel.security.firewall_bypass (
domain,
project_scope,
source_ip,
all_sources,
ttl,
note,
project_id,
team_id,
slug
)
SELECT 
'{{ domain }}' /* required */,
{{ project_scope }} /* required */,
'{{ source_ip }}',
{{ all_sources }},
{{ ttl }},
'{{ note }}',
'{{ project_id }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
ok,
pagination,
result
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: firewall_bypass
  props:
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the firewall_bypass resource.
    - name: domain
      value: "{{ domain }}"
    - name: project_scope
      value: {{ project_scope }}
      description: |
        If the specified bypass will apply to all domains for a project.
    - name: source_ip
      value: "{{ source_ip }}"
    - name: all_sources
      value: {{ all_sources }}
    - name: ttl
      value: {{ ttl }}
      description: |
        Time to live in milliseconds
    - name: note
      value: "{{ note }}"
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

Remove system bypass rules

```sql
DELETE FROM vercel.security.firewall_bypass
WHERE project_id = '{{ project_id }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
