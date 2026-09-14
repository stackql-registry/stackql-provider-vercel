--- 
title: git_namespaces
hide_title: false
hide_table_of_contents: false
keywords:
  - git_namespaces
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

Creates, updates, deletes, gets or lists a <code>git_namespaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="git_namespaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.integrations.git_namespaces" /></td></tr>
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
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="installation_id" /></td>
    <td><code>number</code></td>
    <td> (wire: installationId)</td>
</tr>
<tr>
    <td><CopyableCode code="is_access_restricted" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: isAccessRestricted)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_type" /></td>
    <td><code>string</code></td>
    <td> (wire: ownerType)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="require_reauth" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: requireReauth)</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="viewer" /></td>
    <td><code>object</code></td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-host"><code>host</code></a>, <a href="#parameter-provider"><code>provider</code></a>, <a href="#parameter-viewer_metadata"><code>viewer_metadata</code></a></td>
    <td>Lists git namespaces for a supported provider. Supported providers are `github`, `gitlab` and `bitbucket`. If the provider is not provided, it will try to obtain it from the user that authenticated the request.</td>
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
<tr id="parameter-host">
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>The custom Git host if using a custom Git provider, like GitHub Enterprise Server</td>
</tr>
<tr id="parameter-provider">
    <td><CopyableCode code="provider" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr id="parameter-viewer_metadata">
    <td><CopyableCode code="viewer_metadata" /></td>
    <td><code>boolean</code></td>
    <td>When true, includes the viewer object for each namespace. (wire: viewerMetadata)</td>
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

Lists git namespaces for a supported provider. Supported providers are `github`, `gitlab` and `bitbucket`. If the provider is not provided, it will try to obtain it from the user that authenticated the request.

```sql
SELECT
id,
name,
installation_id,
is_access_restricted,
owner_type,
provider,
require_reauth,
slug,
viewer
FROM vercel.integrations.git_namespaces
WHERE host = '{{ host }}'
AND provider = '{{ provider }}'
AND viewer_metadata = '{{ viewer_metadata }}'
;
```
</TabItem>
</Tabs>
