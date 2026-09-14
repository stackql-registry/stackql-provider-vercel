--- 
title: experimentation_items
hide_title: false
hide_table_of_contents: false
keywords:
  - experimentation_items
  - marketplace
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

Creates, updates, deletes, gets or lists an <code>experimentation_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="experimentation_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.marketplace.experimentation_items" /></td></tr>
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
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-items"><code>items</code></a></td>
    <td></td>
    <td>Create one or multiple experimentation items</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-item_id"><code>item_id</code></a>, <a href="#parameter-slug"><code>slug</code></a>, <a href="#parameter-origin"><code>origin</code></a></td>
    <td></td>
    <td>Patch an existing experimentation item</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-item_id"><code>item_id</code></a></td>
    <td></td>
    <td>Delete an existing experimentation item</td>
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
<tr id="parameter-integration_configuration_id">
    <td><CopyableCode code="integration_configuration_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-item_id">
    <td><CopyableCode code="item_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Create one or multiple experimentation items

```sql
INSERT INTO vercel.marketplace.experimentation_items (
items,
integration_configuration_id,
resource_id
)
SELECT 
'{{ items }}' /* required */,
'{{ integration_configuration_id }}',
'{{ resource_id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: experimentation_items
  props:
    - name: integration_configuration_id
      value: "{{ integration_configuration_id }}"
      description: Required parameter for the experimentation_items resource.
    - name: resource_id
      value: "{{ resource_id }}"
      description: Required parameter for the experimentation_items resource.
    - name: items
      value:
        - id: "{{ id }}"
          slug: "{{ slug }}"
          origin: "{{ origin }}"
          category: "{{ category }}"
          name: "{{ name }}"
          description: "{{ description }}"
          isArchived: {{ isArchived }}
          createdAt: {{ createdAt }}
          updatedAt: {{ updatedAt }}
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

Patch an existing experimentation item

```sql
UPDATE vercel.marketplace.experimentation_items
SET 
slug = '{{ slug }}',
origin = '{{ origin }}',
name = '{{ name }}',
category = '{{ category }}',
description = '{{ description }}',
is_archived = {{ is_archived }},
created_at = {{ created_at }},
updated_at = {{ updated_at }}
WHERE 
integration_configuration_id = '{{ integration_configuration_id }}' --required
AND resource_id = '{{ resource_id }}' --required
AND item_id = '{{ item_id }}' --required
AND slug = '{{ slug }}' --required
AND origin = '{{ origin }}' --required;
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

Delete an existing experimentation item

```sql
DELETE FROM vercel.marketplace.experimentation_items
WHERE integration_configuration_id = '{{ integration_configuration_id }}' --required
AND resource_id = '{{ resource_id }}' --required
AND item_id = '{{ item_id }}' --required
;
```
</TabItem>
</Tabs>
