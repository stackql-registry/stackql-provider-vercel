--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
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

Creates, updates, deletes, gets or lists a <code>domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.domains_registrar.domains" /></td></tr>
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
    <td><a href="#update_auto_renew"><CopyableCode code="update_auto_renew" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-autoRenew"><code>autoRenew</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a></td>
    <td>Update the auto-renew setting for a domain</td>
</tr>
<tr>
    <td><a href="#update_nameservers"><CopyableCode code="update_nameservers" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-nameservers"><code>nameservers</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a></td>
    <td>Update the nameservers for a domain. Pass an empty array to use Vercel's default nameservers.</td>
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
<tr id="parameter-teamId">
    <td><CopyableCode code="teamId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="update_auto_renew"
    values={[
        { label: 'update_auto_renew', value: 'update_auto_renew' },
        { label: 'update_nameservers', value: 'update_nameservers' }
    ]}
>
<TabItem value="update_auto_renew">

Update the auto-renew setting for a domain

```sql
EXEC vercel.domains_registrar.domains.update_auto_renew 
@domain='{{ domain }}' --required, 
@teamId='{{ teamId }}' 
@@json=
'{
"autoRenew": {{ autoRenew }}
}'
;
```
</TabItem>
<TabItem value="update_nameservers">

Update the nameservers for a domain. Pass an empty array to use Vercel's default nameservers.

```sql
EXEC vercel.domains_registrar.domains.update_nameservers 
@domain='{{ domain }}' --required, 
@teamId='{{ teamId }}' 
@@json=
'{
"nameservers": "{{ nameservers }}"
}'
;
```
</TabItem>
</Tabs>
