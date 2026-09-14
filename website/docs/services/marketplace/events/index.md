--- 
title: events
hide_title: false
hide_table_of_contents: false
keywords:
  - events
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

Creates, updates, deletes, gets or lists an <code>events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.marketplace.events" /></td></tr>
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
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-event"><code>event</code></a></td>
    <td></td>
    <td>Partner notifies Vercel of any changes made to an Installation or a Resource. Vercel is expected to use `list-resources` and other read APIs to get the new state.&lt;br /&gt; &lt;br /&gt; `resource.updated` event should be dispatched when any state of a resource linked to Vercel is modified by the partner.&lt;br /&gt; `installation.updated` event should be dispatched when an installation's billing plan is changed via the provider instead of Vercel.&lt;br /&gt; &lt;br /&gt; Resource update use cases: &lt;br /&gt; &lt;br /&gt; - The user renames a database in the partner’s application. The partner should dispatch a `resource.updated` event to notify Vercel to update the resource in Vercel’s datastores.&lt;br /&gt; - A resource has been suspended due to a lack of use. The partner should dispatch a `resource.updated` event to notify Vercel to update the resource's status in Vercel's datastores.&lt;br /&gt;</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Partner notifies Vercel of any changes made to an Installation or a Resource. Vercel is expected to use `list-resources` and other read APIs to get the new state.&lt;br /&gt; &lt;br /&gt; `resource.updated` event should be dispatched when any state of a resource linked to Vercel is modified by the partner.&lt;br /&gt; `installation.updated` event should be dispatched when an installation's billing plan is changed via the provider instead of Vercel.&lt;br /&gt; &lt;br /&gt; Resource update use cases: &lt;br /&gt; &lt;br /&gt; - The user renames a database in the partner’s application. The partner should dispatch a `resource.updated` event to notify Vercel to update the resource in Vercel’s datastores.&lt;br /&gt; - A resource has been suspended due to a lack of use. The partner should dispatch a `resource.updated` event to notify Vercel to update the resource's status in Vercel's datastores.&lt;br /&gt;

```sql
INSERT INTO vercel.marketplace.events (
event,
integration_configuration_id
)
SELECT 
'{{ event }}' /* required */,
'{{ integration_configuration_id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: events
  props:
    - name: integration_configuration_id
      value: "{{ integration_configuration_id }}"
      description: Required parameter for the events resource.
    - name: event
      value:
        type: "{{ type }}"
        billingPlanId: "{{ billingPlanId }}"
        productId: "{{ productId }}"
        resourceId: "{{ resourceId }}"
`}</CodeBlock>

</TabItem>
</Tabs>
