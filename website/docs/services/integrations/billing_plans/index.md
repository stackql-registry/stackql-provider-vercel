--- 
title: billing_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_plans
  - integrations
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

Creates, updates, deletes, gets or lists a <code>billing_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="billing_plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.integrations.billing_plans" /></td></tr>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cost" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td> (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="effective_date" /></td>
    <td><code>string</code></td>
    <td> (wire: effectiveDate)</td>
</tr>
<tr>
    <td><CopyableCode code="highlighted_details" /></td>
    <td><code>array</code></td>
    <td> (wire: highlightedDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="initial_charge" /></td>
    <td><code>string</code></td>
    <td> (wire: initialCharge)</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_amount" /></td>
    <td><code>string</code></td>
    <td> (wire: maximumAmount)</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_amount_auto_purchase_per_period" /></td>
    <td><code>string</code></td>
    <td> (wire: maximumAmountAutoPurchasePerPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="minimum_amount" /></td>
    <td><code>string</code></td>
    <td> (wire: minimumAmount)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_method_required" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: paymentMethodRequired)</td>
</tr>
<tr>
    <td><CopyableCode code="preauthorization_amount" /></td>
    <td><code>number</code></td>
    <td> (wire: preauthorizationAmount)</td>
</tr>
<tr>
    <td><CopyableCode code="quote" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td> (installation, resource)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (prepayment, subscription)</td>
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
    <td><a href="#parameter-integration_id_or_slug"><code>integration_id_or_slug</code></a>, <a href="#parameter-product_id_or_slug"><code>product_id_or_slug</code></a></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-metadata"><code>metadata</code></a>, <a href="#parameter-source"><code>source</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Get a list of billing plans for an integration and product.</td>
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
<tr id="parameter-integration_id_or_slug">
    <td><CopyableCode code="integration_id_or_slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-product_id_or_slug">
    <td><CopyableCode code="product_id_or_slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-integration_configuration_id">
    <td><CopyableCode code="integration_configuration_id" /></td>
    <td><code>string</code></td>
    <td> (wire: integrationConfigurationId)</td>
</tr>
<tr id="parameter-metadata">
    <td><CopyableCode code="metadata" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team slug to perform the request on behalf of.</td>
</tr>
<tr id="parameter-source">
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td></td>
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

Get a list of billing plans for an integration and product.

```sql
SELECT
id,
name,
cost,
description,
details,
disabled,
effective_date,
highlighted_details,
initial_charge,
maximum_amount,
maximum_amount_auto_purchase_per_period,
minimum_amount,
payment_method_required,
preauthorization_amount,
quote,
scope,
type
FROM vercel.integrations.billing_plans
WHERE integration_id_or_slug = '{{ integration_id_or_slug }}' -- required
AND product_id_or_slug = '{{ product_id_or_slug }}' -- required
AND integration_configuration_id = '{{ integration_configuration_id }}'
AND metadata = '{{ metadata }}'
AND source = '{{ source }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
