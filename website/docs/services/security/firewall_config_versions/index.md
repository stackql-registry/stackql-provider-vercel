--- 
title: firewall_config_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_config_versions
  - security
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

Creates, updates, deletes, gets or lists a <code>firewall_config_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_config_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.security.firewall_config_versions" /></td></tr>
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

If the firewall configuration includes a [custom managed ruleset](https://vercel.com/docs/security/vercel-waf/managed-rulesets), it will include a `crs` item that has the following values: sd: Scanner Detection ma: Multipart Attack lfi: Local File Inclusion Attack rfi: Remote File Inclusion Attack rce: Remote Execution Attack php: PHP Attack gen: Generic Attack xss: XSS Attack sqli: SQL Injection Attack sf: Session Fixation Attack java: Java Attack

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
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td> (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_id_enabled" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: botIdEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="changes" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="crs" /></td>
    <td><code>object</code></td>
    <td>Custom Ruleset</td>
</tr>
<tr>
    <td><CopyableCode code="firewall_enabled" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: firewallEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="ips" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="log_headers" /></td>
    <td><code>array</code></td>
    <td> (*) (wire: logHeaders)</td>
</tr>
<tr>
    <td><CopyableCode code="managed_rules" /></td>
    <td><code>object</code></td>
    <td> (wire: managedRules)</td>
</tr>
<tr>
    <td><CopyableCode code="project_key" /></td>
    <td><code>string</code></td>
    <td> (wire: projectKey)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="rulesets" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td> (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>number</code></td>
    <td></td>
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
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-config_version"><code>config_version</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieve the specified firewall configuration for a project. The deployed configVersion will be `active`</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-config_version"><code>config_version</code></a></td>
    <td></td>
    <td>Promotes a draft WAF config to an active config</td>
</tr>
<tr>
    <td><a href="#activate"><CopyableCode code="activate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-config_version"><code>config_version</code></a></td>
    <td></td>
    <td>Promotes a draft WAF config to an active config</td>
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
<tr id="parameter-config_version">
    <td><CopyableCode code="config_version" /></td>
    <td><code>string</code></td>
    <td>The deployed configVersion for the firewall configuration</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td> (wire: projectId)</td>
</tr>
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

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Retrieve the specified firewall configuration for a project. The deployed configVersion will be `active`

```sql
SELECT
id,
owner_id,
bot_id_enabled,
changes,
conditions,
crs,
firewall_enabled,
ips,
log_headers,
managed_rules,
project_key,
rules,
rulesets,
updated_at,
version
FROM vercel.security.firewall_config_versions
WHERE project_id = '{{ project_id }}' -- required
AND config_version = '{{ config_version }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
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

Promotes a draft WAF config to an active config

```sql
DELETE FROM vercel.security.firewall_config_versions
WHERE config_version = '{{ config_version }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="activate"
    values={[
        { label: 'activate', value: 'activate' }
    ]}
>
<TabItem value="activate">

Promotes a draft WAF config to an active config

```sql
EXEC vercel.security.firewall_config_versions.activate 
@config_version='{{ config_version }}' --required
;
```
</TabItem>
</Tabs>
