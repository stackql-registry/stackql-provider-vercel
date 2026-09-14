--- 
title: invoices
hide_title: false
hide_table_of_contents: false
keywords:
  - invoices
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

Creates, updates, deletes, gets or lists an <code>invoices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="invoices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.marketplace.invoices" /></td></tr>
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
    <td><CopyableCode code="external_id" /></td>
    <td><code>string</code></td>
    <td>Partner-supplied Invoice ID, if applicable. (wire: externalId)</td>
</tr>
<tr>
    <td><CopyableCode code="invoice_id" /></td>
    <td><code>string</code></td>
    <td>Vercel Marketplace Invoice ID. (wire: invoiceId)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string</code></td>
    <td>System creation date. ISO 8601 timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="discounts" /></td>
    <td><code>array</code></td>
    <td>Invoice discounts.</td>
</tr>
<tr>
    <td><CopyableCode code="invoice_date" /></td>
    <td><code>string</code></td>
    <td>Invoice date. ISO 8601 timestamp. (wire: invoiceDate)</td>
</tr>
<tr>
    <td><CopyableCode code="invoice_number" /></td>
    <td><code>string</code></td>
    <td>User-readable invoice number. (wire: invoiceNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>Invoice items.</td>
</tr>
<tr>
    <td><CopyableCode code="memo" /></td>
    <td><code>string</code></td>
    <td>Additional memo for the invoice.</td>
</tr>
<tr>
    <td><CopyableCode code="paid_at" /></td>
    <td><code>string</code></td>
    <td>Moment the invoice was paid. ISO 8601 timestamp. (wire: paidAt)</td>
</tr>
<tr>
    <td><CopyableCode code="period" /></td>
    <td><code>object</code></td>
    <td>Subscription period for this billing cycle. ISO 8601 timestamps.</td>
</tr>
<tr>
    <td><CopyableCode code="refund_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for refund. Only applicable for states "refunded" or "refund_request". (wire: refundReason)</td>
</tr>
<tr>
    <td><CopyableCode code="refund_total" /></td>
    <td><code>string</code></td>
    <td>Refund amount. Only applicable for states "refunded" or "refund_request". A dollar-based decimal string. (wire: refundTotal)</td>
</tr>
<tr>
    <td><CopyableCode code="refunded_at" /></td>
    <td><code>string</code></td>
    <td>Most recent moment the invoice was refunded. ISO 8601 timestamp. (wire: refundedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Invoice state. (draft, invoiced, notpaid, overdue, paid, pending, refund_requested, refunded, scheduled)</td>
</tr>
<tr>
    <td><CopyableCode code="test" /></td>
    <td><code>boolean</code></td>
    <td>Whether the invoice is in the testmode (no real transaction created). (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="total" /></td>
    <td><code>string</code></td>
    <td>Invoice total amount. A dollar-based decimal string.</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string</code></td>
    <td>System update date. ISO 8601 timestamp.</td>
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
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-invoice_id"><code>invoice_id</code></a></td>
    <td></td>
    <td>Get Invoice details and status for a given invoice ID.&lt;br /&gt; &lt;br /&gt; See &#91;Billing Events with Webhooks documentation&#93;(https:​//vercel.com/docs/integrations/create-integration/marketplace-api#working-with-billing-events-through-webhooks) on how to receive invoice events. This endpoint is used to retrieve the invoice details.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-invoice_date"><code>invoice_date</code></a>, <a href="#parameter-period"><code>period</code></a>, <a href="#parameter-items"><code>items</code></a></td>
    <td></td>
    <td>This endpoint allows the partner to submit an invoice to Vercel. The invoice is created in Vercel's billing system and sent to the customer. Depending on the type of billing plan, the invoice can be sent at a time of signup, at the start of the billing period, or at the end of the billing period.&lt;br /&gt; &lt;br /&gt; Use the `credentials.access_token` we provided in the &#91;Upsert Installation&#93;(#upsert-installation) body to authorize this request. &lt;br /&gt; There are several limitations to the invoice submission:&lt;br /&gt; &lt;br /&gt; 1. A resource can only be billed once per the billing period and the billing plan.&lt;br /&gt; 2. The billing plan used to bill the resource must have been active for this resource during the billing period.&lt;br /&gt; 3. The billing plan used must be a subscription plan.&lt;br /&gt; 4. The interim usage data must be sent hourly for all types of subscriptions. See &#91;Send subscription billing and usage data&#93;(#send-subscription-billing-and-usage-data) API on how to send interim billing and usage data.&lt;br /&gt; 5. If provided, `externalId` must be unique for the installation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-invoice_id"><code>invoice_id</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-reason"><code>reason</code></a>, <a href="#parameter-total"><code>total</code></a></td>
    <td></td>
    <td>This endpoint allows the partner to request a refund for an invoice to Vercel. The invoice is created using the &#91;Submit Invoice API&#93;(#submit-invoice-api).</td>
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
<tr id="parameter-invoice_id">
    <td><CopyableCode code="invoice_id" /></td>
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

Get Invoice details and status for a given invoice ID.&lt;br /&gt; &lt;br /&gt; See &#91;Billing Events with Webhooks documentation&#93;(https:​//vercel.com/docs/integrations/create-integration/marketplace-api#working-with-billing-events-through-webhooks) on how to receive invoice events. This endpoint is used to retrieve the invoice details.

```sql
SELECT
external_id,
invoice_id,
created,
discounts,
invoice_date,
invoice_number,
items,
memo,
paid_at,
period,
refund_reason,
refund_total,
refunded_at,
state,
test,
total,
updated
FROM vercel.marketplace.invoices
WHERE integration_configuration_id = '{{ integration_configuration_id }}' -- required
AND invoice_id = '{{ invoice_id }}' -- required
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

This endpoint allows the partner to submit an invoice to Vercel. The invoice is created in Vercel's billing system and sent to the customer. Depending on the type of billing plan, the invoice can be sent at a time of signup, at the start of the billing period, or at the end of the billing period.&lt;br /&gt; &lt;br /&gt; Use the `credentials.access_token` we provided in the &#91;Upsert Installation&#93;(#upsert-installation) body to authorize this request. &lt;br /&gt; There are several limitations to the invoice submission:&lt;br /&gt; &lt;br /&gt; 1. A resource can only be billed once per the billing period and the billing plan.&lt;br /&gt; 2. The billing plan used to bill the resource must have been active for this resource during the billing period.&lt;br /&gt; 3. The billing plan used must be a subscription plan.&lt;br /&gt; 4. The interim usage data must be sent hourly for all types of subscriptions. See &#91;Send subscription billing and usage data&#93;(#send-subscription-billing-and-usage-data) API on how to send interim billing and usage data.&lt;br /&gt; 5. If provided, `externalId` must be unique for the installation.&lt;br /&gt;

```sql
INSERT INTO vercel.marketplace.invoices (
external_id,
invoice_date,
memo,
period,
items,
discounts,
final,
test,
integration_configuration_id
)
SELECT 
'{{ external_id }}',
'{{ invoice_date }}' /* required */,
'{{ memo }}',
'{{ period }}' /* required */,
'{{ items }}' /* required */,
'{{ discounts }}',
{{ final }},
'{{ test }}',
'{{ integration_configuration_id }}'
RETURNING
invoice_id,
test,
validation_errors
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: invoices
  props:
    - name: integration_configuration_id
      value: "{{ integration_configuration_id }}"
      description: Required parameter for the invoices resource.
    - name: external_id
      value: "{{ external_id }}"
      description: |
        Partner-provided invoice identifier. If provided, it must be unique for this installation.
    - name: invoice_date
      value: "{{ invoice_date }}"
      description: |
        Invoice date. Must be within the period's start and end.
    - name: memo
      value: "{{ memo }}"
      description: |
        Additional memo for the invoice.
    - name: period
      description: |
        Subscription period for this billing cycle.
      value:
        start: "{{ start }}"
        end: "{{ end }}"
    - name: items
      value:
        - resourceId: "{{ resourceId }}"
          billingPlanId: "{{ billingPlanId }}"
          start: "{{ start }}"
          end: "{{ end }}"
          name: "{{ name }}"
          details: "{{ details }}"
          price: "{{ price }}"
          quantity: {{ quantity }}
          units: "{{ units }}"
          total: "{{ total }}"
    - name: discounts
      value:
        - resourceId: "{{ resourceId }}"
          billingPlanId: "{{ billingPlanId }}"
          start: "{{ start }}"
          end: "{{ end }}"
          name: "{{ name }}"
          details: "{{ details }}"
          amount: "{{ amount }}"
    - name: final
      value: {{ final }}
      description: |
        Set this to \`true\` if this is the final invoice for the installation. Can only be set when the installation is pending deletion.
    - name: test
      description: |
        Test mode
      value:
        validate: {{ validate }}
        result: "{{ result }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

This endpoint allows the partner to request a refund for an invoice to Vercel. The invoice is created using the [Submit Invoice API](#submit-invoice-api).

```sql
EXEC vercel.marketplace.invoices.update 
@integration_configuration_id='{{ integration_configuration_id }}' --required, 
@invoice_id='{{ invoice_id }}' --required 
@@json=
'{
"action": "{{ action }}", 
"reason": "{{ reason }}", 
"total": "{{ total }}"
}'
;
```
</TabItem>
</Tabs>
