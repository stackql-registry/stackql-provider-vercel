--- 
title: stores
hide_title: false
hide_table_of_contents: false
keywords:
  - stores
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

Creates, updates, deletes, gets or lists a <code>stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.integrations.stores" /></td></tr>
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
    <td><a href="#create_direct"><CopyableCode code="create_direct" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-integration_product_id_or_slug"><code>integration_product_id_or_slug</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Creates an integration store with automatic billing plan handling. For free resources, omit `billingPlanId` to auto-discover free plans. For paid resources, provide a `billingPlanId` from the billing plans endpoint.</td>
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
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The Team identifier to perform the request on behalf of. (wire: teamId)</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_direct"
    values={[
        { label: 'create_direct', value: 'create_direct' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_direct">

Creates an integration store with automatic billing plan handling. For free resources, omit `billingPlanId` to auto-discover free plans. For paid resources, provide a `billingPlanId` from the billing plans endpoint.

```sql
INSERT INTO vercel.integrations.stores (
name,
integration_configuration_id,
integration_product_id_or_slug,
metadata,
external_id,
protocol_settings,
source,
billing_plan_id,
payment_method_id,
prepayment_amount_cents,
team_id,
slug
)
SELECT 
'{{ name }}' /* required */,
'{{ integration_configuration_id }}' /* required */,
'{{ integration_product_id_or_slug }}' /* required */,
'{{ metadata }}',
'{{ external_id }}',
'{{ protocol_settings }}',
'{{ source }}',
'{{ billing_plan_id }}',
'{{ payment_method_id }}',
{{ prepayment_amount_cents }},
'{{ team_id }}',
'{{ slug }}'
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
      description: |
        Human-readable name for the storage resource
    - name: integration_configuration_id
      value: "{{ integration_configuration_id }}"
      description: |
        ID of your integration configuration. Get this from GET /v1/integrations/configurations
    - name: integration_product_id_or_slug
      value: "{{ integration_product_id_or_slug }}"
      description: |
        ID or slug of the integration product. Get available products from GET /v1/integrations/configuration/{id}/products
    - name: metadata
      value: "{{ metadata }}"
      description: |
        Optional key-value pairs for resource metadata
    - name: external_id
      value: "{{ external_id }}"
      description: |
        Optional external identifier for tracking purposes
    - name: protocol_settings
      value: "{{ protocol_settings }}"
      description: |
        Protocol-specific configuration settings
    - name: source
      value: "{{ source }}"
      description: |
        Source of the store creation request
      valid_values: ['marketplace', 'deploy-button', 'external', 'v0', 'resource-claims', 'cli', 'oauth', 'backoffice', 'import-recommended-integrations', 'organization']
      default: marketplace
    - name: billing_plan_id
      value: "{{ billing_plan_id }}"
      description: |
        ID of the billing plan for paid resources. Get available plans from GET /integrations/integration/{id}/products/{productId}/plans. If not provided, automatically discovers free billing plans.
    - name: payment_method_id
      value: "{{ payment_method_id }}"
      description: |
        Payment method ID for paid resources. Optional - uses default payment method if not provided.
    - name: prepayment_amount_cents
      value: {{ prepayment_amount_cents }}
      description: |
        Amount in cents for prepayment billing plans. Required only for prepayment plans with variable amounts.
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
