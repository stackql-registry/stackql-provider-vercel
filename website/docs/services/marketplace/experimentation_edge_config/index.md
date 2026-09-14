--- 
title: experimentation_edge_config
hide_title: false
hide_table_of_contents: false
keywords:
  - experimentation_edge_config
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

Creates, updates, deletes, gets or lists an <code>experimentation_edge_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="experimentation_edge_config" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.marketplace.experimentation_edge_config" /></td></tr>
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

The Global Config data

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
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
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a></td>
    <td></td>
    <td>When the user enabled Global Config syncing, then this endpoint can be used by the partner to fetch the contents of the Global Config.</td>
</tr>
<tr>
    <td><a href="#replace"><CopyableCode code="replace" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>When the user enabled Global Config syncing, then this endpoint can be used by the partner to push their configuration data into the relevant Global Config.</td>
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
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
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

When the user enabled Global Config syncing, then this endpoint can be used by the partner to fetch the contents of the Global Config.

```sql
SELECT
*
FROM vercel.marketplace.experimentation_edge_config
WHERE integration_configuration_id = '{{ integration_configuration_id }}' -- required
AND resource_id = '{{ resource_id }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="replace"
    values={[
        { label: 'replace', value: 'replace' }
    ]}
>
<TabItem value="replace">

When the user enabled Global Config syncing, then this endpoint can be used by the partner to push their configuration data into the relevant Global Config.

```sql
REPLACE vercel.marketplace.experimentation_edge_config
SET 
data = '{{ data }}'
WHERE 
integration_configuration_id = '{{ integration_configuration_id }}' --required
AND resource_id = '{{ resource_id }}' --required
AND data = '{{ data }}' --required
RETURNING
digest,
items,
purpose,
updated_at;
```
</TabItem>
</Tabs>
