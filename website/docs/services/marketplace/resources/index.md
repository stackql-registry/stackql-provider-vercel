--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.marketplace.resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID provided by the 3rd party provider for the given resource</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource as it is recorded in Vercel</td>
</tr>
<tr>
    <td><CopyableCode code="billing_plan_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the billing plan the resource is subscribed to, if applicable (wire: billingPlanId)</td>
</tr>
<tr>
    <td><CopyableCode code="internal_id" /></td>
    <td><code>string</code></td>
    <td>The ID assigned by Vercel for the given resource (wire: internalId)</td>
</tr>
<tr>
    <td><CopyableCode code="product_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the product the resource is derived from (wire: productId)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The configured metadata for the resource as defined by its product's Metadata Schema</td>
</tr>
<tr>
    <td><CopyableCode code="notification" /></td>
    <td><code>object</code></td>
    <td>The notification, if set, displayed to the user when viewing the resource in Vercel</td>
</tr>
<tr>
    <td><CopyableCode code="protocol_settings" /></td>
    <td><code>object</code></td>
    <td>Any settings provided for the resource to support its product's protocols (wire: protocolSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the resource (error, onboarding, pending, ready, resumed, suspended, uninstalled)</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource as it is recorded in Vercel</td>
</tr>
<tr>
    <td><CopyableCode code="billing_plan_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the billing plan the resource is subscribed to, if applicable (wire: billingPlanId)</td>
</tr>
<tr>
    <td><CopyableCode code="internal_id" /></td>
    <td><code>string</code></td>
    <td>The ID assigned by Vercel for the given resource (wire: internalId)</td>
</tr>
<tr>
    <td><CopyableCode code="partner_id" /></td>
    <td><code>string</code></td>
    <td>The ID provided by the partner for the given resource (wire: partnerId)</td>
</tr>
<tr>
    <td><CopyableCode code="product_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the product the resource is derived from (wire: productId)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The configured metadata for the resource as defined by its product's Metadata Schema</td>
</tr>
<tr>
    <td><CopyableCode code="notification" /></td>
    <td><code>object</code></td>
    <td>The notification, if set, displayed to the user when viewing the resource in Vercel</td>
</tr>
<tr>
    <td><CopyableCode code="protocol_settings" /></td>
    <td><code>object</code></td>
    <td>Any settings provided for the resource to support its product's protocols (wire: protocolSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the resource (error, onboarding, pending, ready, resumed, suspended, uninstalled)</td>
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
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a></td>
    <td></td>
    <td>Get a resource by its partner ID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a></td>
    <td></td>
    <td>Get all resources for a given installation ID.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a></td>
    <td></td>
    <td>This endpoint updates an existing resource in the installation. All parameters are optional, allowing partial updates.</td>
</tr>
<tr>
    <td><a href="#import"><CopyableCode code="import" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-product_id"><code>product_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>This endpoint imports (upserts) a resource to Vercel's installation. This may be needed if resources can be independently created on the partner's side and need to be synchronized to Vercel. When importing as part of the user-initiated import flow, call this endpoint before redirecting the user back to Vercel. See the &#91;Import existing resources flow&#93;(https:​//vercel.com/docs/integrations/create-integration/marketplace-flows#import-existing-resources-flow) for the full contract.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a></td>
    <td></td>
    <td>Delete a resource owned by the selected installation ID.</td>
</tr>
<tr>
    <td><a href="#update_secrets"><CopyableCode code="update_secrets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-integration_product_id_or_slug"><code>integration_product_id_or_slug</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-secrets"><code>secrets</code></a></td>
    <td></td>
    <td>This endpoint is deprecated and replaced with the endpoint &#91;Update Resource Secrets&#93;(#update-resource-secrets). &lt;br /&gt; This endpoint updates the secrets of a resource. If a resource has projects connected, the connected secrets are updated with the new secrets. The old secrets may still be used by existing connected projects because they are not automatically redeployed. Redeployment is a manual action and must be completed by the user. All new project connections will use the new secrets.&lt;br /&gt; &lt;br /&gt; Use cases for this endpoint:&lt;br /&gt; &lt;br /&gt; - Resetting the credentials of a database in the partner. If the user requests the credentials to be updated in the partner’s application, the partner post the new set of secrets to Vercel, the user should redeploy their application and the expire the old credentials.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update_secrets_by_id"><CopyableCode code="update_secrets_by_id" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-secrets"><code>secrets</code></a></td>
    <td></td>
    <td>This endpoint updates the secrets of a resource. If a resource has projects connected, the connected secrets are updated with the new secrets. The old secrets may still be used by existing connected projects because they are not automatically redeployed. Redeployment is a manual action and must be completed by the user. All new project connections will use the new secrets.&lt;br /&gt; &lt;br /&gt; Use cases for this endpoint:&lt;br /&gt; &lt;br /&gt; - Resetting the credentials of a database in the partner. If the user requests the credentials to be updated in the partner’s application, the partner post the new set of secrets to Vercel, the user should redeploy their application and the expire the old credentials.&lt;br /&gt;</td>
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
<tr id="parameter-integration_product_id_or_slug">
    <td><CopyableCode code="integration_product_id_or_slug" /></td>
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
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get a resource by its partner ID.

```sql
SELECT
id,
name,
billing_plan_id,
internal_id,
product_id,
metadata,
notification,
protocol_settings,
status
FROM vercel.marketplace.resources
WHERE integration_configuration_id = '{{ integration_configuration_id }}' -- required
AND resource_id = '{{ resource_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Get all resources for a given installation ID.

```sql
SELECT
name,
billing_plan_id,
internal_id,
partner_id,
product_id,
metadata,
notification,
protocol_settings,
status
FROM vercel.marketplace.resources
WHERE integration_configuration_id = '{{ integration_configuration_id }}' -- required
;
```
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

This endpoint updates an existing resource in the installation. All parameters are optional, allowing partial updates.

```sql
UPDATE vercel.marketplace.resources
SET 
ownership = '{{ ownership }}',
name = '{{ name }}',
status = '{{ status }}',
metadata = '{{ metadata }}',
billing_plan = '{{ billing_plan }}',
notification = '{{ notification }}',
extras = '{{ extras }}',
secrets = '{{ secrets }}'
WHERE 
integration_configuration_id = '{{ integration_configuration_id }}' --required
AND resource_id = '{{ resource_id }}' --required
RETURNING
name;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="import"
    values={[
        { label: 'import', value: 'import' }
    ]}
>
<TabItem value="import">

This endpoint imports (upserts) a resource to Vercel's installation. This may be needed if resources can be independently created on the partner's side and need to be synchronized to Vercel. When importing as part of the user-initiated import flow, call this endpoint before redirecting the user back to Vercel. See the [Import existing resources flow](https://vercel.com/docs/integrations/create-integration/marketplace-flows#import-existing-resources-flow) for the full contract.

```sql
REPLACE vercel.marketplace.resources
SET 
ownership = '{{ ownership }}',
product_id = '{{ product_id }}',
name = '{{ name }}',
status = '{{ status }}',
metadata = '{{ metadata }}',
billing_plan = '{{ billing_plan }}',
notification = '{{ notification }}',
extras = '{{ extras }}',
secrets = '{{ secrets }}'
WHERE 
integration_configuration_id = '{{ integration_configuration_id }}' --required
AND resource_id = '{{ resource_id }}' --required
AND product_id = '{{ product_id }}' --required
AND name = '{{ name }}' --required
AND status = '{{ status }}' --required
RETURNING
name;
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

Delete a resource owned by the selected installation ID.

```sql
DELETE FROM vercel.marketplace.resources
WHERE integration_configuration_id = '{{ integration_configuration_id }}' --required
AND resource_id = '{{ resource_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="update_secrets"
    values={[
        { label: 'update_secrets', value: 'update_secrets' },
        { label: 'update_secrets_by_id', value: 'update_secrets_by_id' }
    ]}
>
<TabItem value="update_secrets">

This endpoint is deprecated and replaced with the endpoint &#91;Update Resource Secrets&#93;(#update-resource-secrets). &lt;br /&gt; This endpoint updates the secrets of a resource. If a resource has projects connected, the connected secrets are updated with the new secrets. The old secrets may still be used by existing connected projects because they are not automatically redeployed. Redeployment is a manual action and must be completed by the user. All new project connections will use the new secrets.&lt;br /&gt; &lt;br /&gt; Use cases for this endpoint:&lt;br /&gt; &lt;br /&gt; - Resetting the credentials of a database in the partner. If the user requests the credentials to be updated in the partner’s application, the partner post the new set of secrets to Vercel, the user should redeploy their application and the expire the old credentials.&lt;br /&gt;

```sql
EXEC vercel.marketplace.resources.update_secrets 
@integration_configuration_id='{{ integration_configuration_id }}' --required, 
@integration_product_id_or_slug='{{ integration_product_id_or_slug }}' --required, 
@resource_id='{{ resource_id }}' --required 
@@json=
'{
"secrets": "{{ secrets }}", 
"partial": {{ partial }}
}'
;
```
</TabItem>
<TabItem value="update_secrets_by_id">

This endpoint updates the secrets of a resource. If a resource has projects connected, the connected secrets are updated with the new secrets. The old secrets may still be used by existing connected projects because they are not automatically redeployed. Redeployment is a manual action and must be completed by the user. All new project connections will use the new secrets.&lt;br /&gt; &lt;br /&gt; Use cases for this endpoint:&lt;br /&gt; &lt;br /&gt; - Resetting the credentials of a database in the partner. If the user requests the credentials to be updated in the partner’s application, the partner post the new set of secrets to Vercel, the user should redeploy their application and the expire the old credentials.&lt;br /&gt;

```sql
EXEC vercel.marketplace.resources.update_secrets_by_id 
@integration_configuration_id='{{ integration_configuration_id }}' --required, 
@resource_id='{{ resource_id }}' --required 
@@json=
'{
"secrets": "{{ secrets }}", 
"partial": {{ partial }}
}'
;
```
</TabItem>
</Tabs>
