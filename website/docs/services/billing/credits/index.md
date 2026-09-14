--- 
title: credits
hide_title: false
hide_table_of_contents: false
keywords:
  - credits
  - billing
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

Creates, updates, deletes, gets or lists a <code>credits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="credits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.billing.credits" /></td></tr>
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
    <td><a href="#buy"><CopyableCode code="buy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-item"><code>item</code></a></td>
    <td><a href="#parameter-source"><code>source</code></a>, <a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Purchases credits for a Vercel team using the default payment method on file. The purchase is charged immediately via Stripe invoice. Supported credit types are `v0`, `gateway`, and `agent`. The `amount` field specifies the number of credits to purchase and must be a positive integer. An optional `source` query parameter can be provided to identify the caller. Defaults to `api` if not specified. This is only available for Owner, Member, Developer, Security, and Billing roles for the supplied team.</td>
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
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team slug to perform the request on behalf of.</td>
</tr>
<tr id="parameter-source">
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The source of the purchase request. Defaults to `api` if not specified.</td>
</tr>
<tr id="parameter-teamId">
    <td><CopyableCode code="teamId" /></td>
    <td><code>string</code></td>
    <td>The Team identifier to perform the request on behalf of.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="buy"
    values={[
        { label: 'buy', value: 'buy' }
    ]}
>
<TabItem value="buy">

Purchases credits for a Vercel team using the default payment method on file. The purchase is charged immediately via Stripe invoice. Supported credit types are `v0`, `gateway`, and `agent`. The `amount` field specifies the number of credits to purchase and must be a positive integer. An optional `source` query parameter can be provided to identify the caller. Defaults to `api` if not specified. This is only available for Owner, Member, Developer, Security, and Billing roles for the supplied team.

```sql
EXEC vercel.billing.credits.buy 
@source='{{ source }}', 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"item": "{{ item }}"
}'
;
```
</TabItem>
</Tabs>
