--- 
title: billing
hide_title: false
hide_table_of_contents: false
keywords:
  - billing
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

Creates, updates, deletes, gets or lists a <code>billing</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="billing" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.marketplace.billing" /></td></tr>
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
    <td><a href="#submit"><CopyableCode code="submit" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-timestamp"><code>timestamp</code></a>, <a href="#parameter-eod"><code>eod</code></a>, <a href="#parameter-period"><code>period</code></a>, <a href="#parameter-billing"><code>billing</code></a>, <a href="#parameter-usage"><code>usage</code></a></td>
    <td></td>
    <td>Sends the billing and usage data. The partner should do this at least once a day and ideally once per hour. &lt;br /&gt; Use the `credentials.access_token` we provided in the &#91;Upsert Installation&#93;(#upsert-installation) body to authorize this request.</td>
</tr>
<tr>
    <td><a href="#submit_prepayment_balances"><CopyableCode code="submit_prepayment_balances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-timestamp"><code>timestamp</code></a>, <a href="#parameter-balances"><code>balances</code></a></td>
    <td></td>
    <td>Sends the prepayment balances. The partner should do this at least once a day and ideally once per hour. &lt;br /&gt; Use the `credentials.access_token` we provided in the &#91;Upsert Installation&#93;(#upsert-installation) body to authorize this request.</td>
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
</tbody>
</table>

## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="submit"
    values={[
        { label: 'submit', value: 'submit' },
        { label: 'submit_prepayment_balances', value: 'submit_prepayment_balances' }
    ]}
>
<TabItem value="submit">

Sends the billing and usage data. The partner should do this at least once a day and ideally once per hour. &lt;br /&gt; Use the `credentials.access_token` we provided in the &#91;Upsert Installation&#93;(#upsert-installation) body to authorize this request.

```sql
EXEC vercel.marketplace.billing.submit 
@integration_configuration_id='{{ integration_configuration_id }}' --required 
@@json=
'{
"timestamp": "{{ timestamp }}", 
"eod": "{{ eod }}", 
"period": "{{ period }}", 
"billing": "{{ billing }}", 
"usage": "{{ usage }}"
}'
;
```
</TabItem>
<TabItem value="submit_prepayment_balances">

Sends the prepayment balances. The partner should do this at least once a day and ideally once per hour. &lt;br /&gt; Use the `credentials.access_token` we provided in the &#91;Upsert Installation&#93;(#upsert-installation) body to authorize this request.

```sql
EXEC vercel.marketplace.billing.submit_prepayment_balances 
@integration_configuration_id='{{ integration_configuration_id }}' --required 
@@json=
'{
"timestamp": "{{ timestamp }}", 
"balances": "{{ balances }}"
}'
;
```
</TabItem>
</Tabs>
