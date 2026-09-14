--- 
title: stores
hide_title: false
hide_table_of_contents: false
keywords:
  - stores
  - storage
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

Creates, updates, deletes, gets or lists a <code>stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.storage.stores" /></td></tr>
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
    <td><CopyableCode code="project_filter" /></td>
    <td><code>object</code></td>
    <td> (wire: projectFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="projects_metadata" /></td>
    <td><code>array</code></td>
    <td> (wire: projectsMetadata)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (available, error, initializing, limits-exceeded-suspended, limits-exceeded-suspended-store-count, onboarding, suspended, uninstalled, )</td>
</tr>
<tr>
    <td><CopyableCode code="total_connected_projects" /></td>
    <td><code>number</code></td>
    <td> (wire: totalConnectedProjects)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_quota_exceeded" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: usageQuotaExceeded)</td>
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
    <td><a href="#parameter-skip-metadata"><code>skip-metadata</code></a>, <a href="#parameter-include-guides"><code>include-guides</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#create_blob"><CopyableCode code="create_blob" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#delete_blob"><CopyableCode code="delete_blob" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td></td>
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
<tr id="parameter-include-guides">
    <td><CopyableCode code="include-guides" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-skip-metadata">
    <td><CopyableCode code="skip-metadata" /></td>
    <td><code>boolean</code></td>
    <td></td>
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

No description available.

```sql
SELECT
project_filter,
projects_metadata,
status,
total_connected_projects,
usage_quota_exceeded
FROM vercel.storage.stores
WHERE id = '{{ id }}' -- required
AND skip-metadata = '{{ skip-metadata }}'
AND include-guides = '{{ include-guides }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_blob"
    values={[
        { label: 'create_blob', value: 'create_blob' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_blob">

No description available.

```sql
INSERT INTO vercel.storage.stores (
name,
region,
access,
project_id
)
SELECT 
'{{ name }}' /* required */,
'{{ region }}',
'{{ access }}',
'{{ project_id }}'
RETURNING
store
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stores
  props:
    - name: name
      value: "{{ name }}"
    - name: region
      value: "{{ region }}"
      valid_values: ['arn1', 'bom1', 'cdg1', 'cle1', 'cpt1', 'dub1', 'dxb1', 'fra1', 'gru1', 'hkg1', 'hnd1', 'iad1', 'icn1', 'kix1', 'lhr1', 'pdx1', 'sfo1', 'sin1', 'syd1', 'yul1']
    - name: access
      value: "{{ access }}"
      valid_values: ['public', 'private']
      default: public
    - name: project_id
      value: "{{ project_id }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_blob"
    values={[
        { label: 'delete_blob', value: 'delete_blob' }
    ]}
>
<TabItem value="delete_blob">

No description available.

```sql
DELETE FROM vercel.storage.stores
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
