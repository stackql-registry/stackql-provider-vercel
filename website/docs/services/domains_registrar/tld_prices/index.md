--- 
title: tld_prices
hide_title: false
hide_table_of_contents: false
keywords:
  - tld_prices
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

Creates, updates, deletes, gets or lists a <code>tld_prices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tld_prices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.domains_registrar.tld_prices" /></td></tr>
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
    <td><CopyableCode code="purchase_price" /></td>
    <td><code>number</code></td>
    <td> (wire: purchasePrice)</td>
</tr>
<tr>
    <td><CopyableCode code="renewal_price" /></td>
    <td><code>number</code></td>
    <td> (wire: renewalPrice)</td>
</tr>
<tr>
    <td><CopyableCode code="transfer_price" /></td>
    <td><code>number</code></td>
    <td> (wire: transferPrice)</td>
</tr>
<tr>
    <td><CopyableCode code="years" /></td>
    <td><code>number</code></td>
    <td>The number of years the returned price is for.</td>
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
    <td><a href="#parameter-tld"><code>tld</code></a></td>
    <td><a href="#parameter-years"><code>years</code></a>, <a href="#parameter-team_id"><code>team_id</code></a></td>
    <td>Get price data for a specific TLD. This only reflects base prices for the given TLD. Premium domains may have different prices. Use the &#91;Get price data for a domain&#93;(https:​//vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-price-data-for-a-domain) endpoint to get the price data for a specific domain.</td>
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
<tr id="parameter-tld">
    <td><CopyableCode code="tld" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td> (wire: teamId)</td>
</tr>
<tr id="parameter-years">
    <td><CopyableCode code="years" /></td>
    <td><code>string</code></td>
    <td>The number of years to get the price for. If not provided, the minimum number of years for the TLD will be used.</td>
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

Get price data for a specific TLD. This only reflects base prices for the given TLD. Premium domains may have different prices. Use the [Get price data for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-price-data-for-a-domain) endpoint to get the price data for a specific domain.

```sql
SELECT
purchase_price,
renewal_price,
transfer_price,
years
FROM vercel.domains_registrar.tld_prices
WHERE tld = '{{ tld }}' -- required
AND years = '{{ years }}'
AND team_id = '{{ team_id }}'
;
```
</TabItem>
</Tabs>
