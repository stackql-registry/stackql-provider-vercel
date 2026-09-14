--- 
title: orders
hide_title: false
hide_table_of_contents: false
keywords:
  - orders
  - domains_registrar
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

Creates, updates, deletes, gets or lists an <code>orders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="orders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.domains_registrar.orders" /></td></tr>
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
    <td><CopyableCode code="order_id" /></td>
    <td><code>string</code></td>
    <td>A valid order ID (wire: orderId)</td>
</tr>
<tr>
    <td><CopyableCode code="domains" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (draft, purchasing, completed, failed)</td>
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
    <td><a href="#parameter-order_id"><code>order_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td>Get information about a domain order by its ID</td>
</tr>
<tr>
    <td><a href="#buy_domain"><CopyableCode code="buy_domain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-autoRenew"><code>autoRenew</code></a>, <a href="#parameter-years"><code>years</code></a>, <a href="#parameter-expectedPrice"><code>expectedPrice</code></a>, <a href="#parameter-contactInformation"><code>contactInformation</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a></td>
    <td>Buy a domain</td>
</tr>
<tr>
    <td><a href="#buy_domains"><CopyableCode code="buy_domains" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domains"><code>domains</code></a>, <a href="#parameter-contactInformation"><code>contactInformation</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a></td>
    <td>Buy multiple domains at once</td>
</tr>
<tr>
    <td><a href="#transfer_in_domain"><CopyableCode code="transfer_in_domain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-authCode"><code>authCode</code></a>, <a href="#parameter-autoRenew"><code>autoRenew</code></a>, <a href="#parameter-years"><code>years</code></a>, <a href="#parameter-expectedPrice"><code>expectedPrice</code></a>, <a href="#parameter-contactInformation"><code>contactInformation</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a></td>
    <td>Transfer a domain in from another registrar</td>
</tr>
<tr>
    <td><a href="#renew_domain"><CopyableCode code="renew_domain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-years"><code>years</code></a>, <a href="#parameter-expectedPrice"><code>expectedPrice</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a></td>
    <td>Renew a domain</td>
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
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-order_id">
    <td><CopyableCode code="order_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-teamId">
    <td><CopyableCode code="teamId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td> (wire: teamId)</td>
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

Get information about a domain order by its ID

```sql
SELECT
order_id,
domains,
error,
status
FROM vercel.domains_registrar.orders
WHERE order_id = '{{ order_id }}' -- required
AND team_id = '{{ team_id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="buy_domain"
    values={[
        { label: 'buy_domain', value: 'buy_domain' },
        { label: 'buy_domains', value: 'buy_domains' },
        { label: 'transfer_in_domain', value: 'transfer_in_domain' },
        { label: 'renew_domain', value: 'renew_domain' }
    ]}
>
<TabItem value="buy_domain">

Buy a domain

```sql
EXEC vercel.domains_registrar.orders.buy_domain 
@domain='{{ domain }}' --required, 
@teamId='{{ teamId }}' 
@@json=
'{
"autoRenew": {{ autoRenew }}, 
"years": {{ years }}, 
"expectedPrice": {{ expectedPrice }}, 
"contactInformation": "{{ contactInformation }}", 
"languageCode": "{{ languageCode }}"
}'
;
```
</TabItem>
<TabItem value="buy_domains">

Buy multiple domains at once

```sql
EXEC vercel.domains_registrar.orders.buy_domains 
@teamId='{{ teamId }}' 
@@json=
'{
"domains": "{{ domains }}", 
"contactInformation": "{{ contactInformation }}"
}'
;
```
</TabItem>
<TabItem value="transfer_in_domain">

Transfer a domain in from another registrar

```sql
EXEC vercel.domains_registrar.orders.transfer_in_domain 
@domain='{{ domain }}' --required, 
@teamId='{{ teamId }}' 
@@json=
'{
"authCode": "{{ authCode }}", 
"autoRenew": {{ autoRenew }}, 
"years": {{ years }}, 
"expectedPrice": {{ expectedPrice }}, 
"contactInformation": "{{ contactInformation }}"
}'
;
```
</TabItem>
<TabItem value="renew_domain">

Renew a domain

```sql
EXEC vercel.domains_registrar.orders.renew_domain 
@domain='{{ domain }}' --required, 
@teamId='{{ teamId }}' 
@@json=
'{
"years": {{ years }}, 
"expectedPrice": {{ expectedPrice }}, 
"contactInformation": "{{ contactInformation }}"
}'
;
```
</TabItem>
</Tabs>
