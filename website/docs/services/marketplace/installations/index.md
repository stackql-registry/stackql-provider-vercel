--- 
title: installations
hide_title: false
hide_table_of_contents: false
keywords:
  - installations
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

Creates, updates, deletes, gets or lists an <code>installations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="installations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.marketplace.installations" /></td></tr>
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
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a></td>
    <td></td>
    <td>This endpoint updates an integration installation.</td>
</tr>
<tr>
    <td><a href="#rotate_credential"><CopyableCode code="rotate_credential" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-client_secret"><code>client_secret</code></a></td>
    <td></td>
    <td>Issues a replacement access token for an installation, so a partner can rotate a credential it believes is compromised without the customer having to reinstall. Authenticated by the credential being replaced plus the integration's client secret: a leaked access token on its own cannot rotate itself, which would otherwise let an attacker take over the installation and lock the partner out. The previous credential intentionally stays valid so in-flight requests keep working. Retiring it is a separate, explicit operation — a partner is never left mid-rotation without a working credential.</td>
</tr>
<tr>
    <td><a href="#revoke_credential"><CopyableCode code="revoke_credential" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-token"><code>token</code></a>, <a href="#parameter-client_secret"><code>client_secret</code></a></td>
    <td></td>
    <td>Retires a superseded installation credential, so a partner can complete a rotation it started with `POST /credentials/rotate` — the leaked credential stops working without the customer having to reinstall. Authenticated by a live installation credential plus the integration's client secret. The credential to retire is named in the body rather than being the one that authenticates, so the ordinary flow is: rotate, store the replacement, then authenticate with the replacement and revoke the old one. Refuses to retire an installation's last live credential. Rotation exists so remediation is not customer-visible; revoking the only credential would undo that and leave the install needing a reinstall.</td>
</tr>
<tr>
    <td><a href="#finalize"><CopyableCode code="finalize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a></td>
    <td></td>
    <td>This endpoint allows the partner to mark an installation as finalized. This means you will not send any more invoices for the installation. Use this after a customer has requested uninstall and you have sent any remaining invoices. This will allow the uninstall process to proceed immediately after all invoices have been paid. &lt;br /&gt; Use the `credentials.access_token` we provided in the &#91;Upsert Installation&#93;(#upsert-installation) body to authorize this request.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

This endpoint updates an integration installation.

```sql
UPDATE vercel.marketplace.installations
SET 
status = '{{ status }}',
external_id = '{{ external_id }}',
billing_plan = '{{ billing_plan }}',
notification = '{{ notification }}'
WHERE 
integration_configuration_id = '{{ integration_configuration_id }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="rotate_credential"
    values={[
        { label: 'rotate_credential', value: 'rotate_credential' },
        { label: 'revoke_credential', value: 'revoke_credential' },
        { label: 'finalize', value: 'finalize' }
    ]}
>
<TabItem value="rotate_credential">

Issues a replacement access token for an installation, so a partner can rotate a credential it believes is compromised without the customer having to reinstall. Authenticated by the credential being replaced plus the integration's client secret: a leaked access token on its own cannot rotate itself, which would otherwise let an attacker take over the installation and lock the partner out. The previous credential intentionally stays valid so in-flight requests keep working. Retiring it is a separate, explicit operation — a partner is never left mid-rotation without a working credential.

```sql
EXEC vercel.marketplace.installations.rotate_credential 
@integration_configuration_id='{{ integration_configuration_id }}' --required 
@@json=
'{
"client_secret": "{{ client_secret }}", 
"client_id": "{{ client_id }}"
}'
;
```
</TabItem>
<TabItem value="revoke_credential">

Retires a superseded installation credential, so a partner can complete a rotation it started with `POST /credentials/rotate` — the leaked credential stops working without the customer having to reinstall. Authenticated by a live installation credential plus the integration's client secret. The credential to retire is named in the body rather than being the one that authenticates, so the ordinary flow is: rotate, store the replacement, then authenticate with the replacement and revoke the old one. Refuses to retire an installation's last live credential. Rotation exists so remediation is not customer-visible; revoking the only credential would undo that and leave the install needing a reinstall.

```sql
EXEC vercel.marketplace.installations.revoke_credential 
@integration_configuration_id='{{ integration_configuration_id }}' --required 
@@json=
'{
"token": "{{ token }}", 
"client_secret": "{{ client_secret }}", 
"client_id": "{{ client_id }}"
}'
;
```
</TabItem>
<TabItem value="finalize">

This endpoint allows the partner to mark an installation as finalized. This means you will not send any more invoices for the installation. Use this after a customer has requested uninstall and you have sent any remaining invoices. This will allow the uninstall process to proceed immediately after all invoices have been paid. &lt;br /&gt; Use the `credentials.access_token` we provided in the &#91;Upsert Installation&#93;(#upsert-installation) body to authorize this request.

```sql
EXEC vercel.marketplace.installations.finalize 
@integration_configuration_id='{{ integration_configuration_id }}' --required
;
```
</TabItem>
</Tabs>
