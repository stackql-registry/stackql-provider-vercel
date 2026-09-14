--- 
title: files
hide_title: false
hide_table_of_contents: false
keywords:
  - files
  - deployments
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

Creates, updates, deletes, gets or lists a <code>files</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="files" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.deployments.files" /></td></tr>
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
    <td><a href="#upload"><CopyableCode code="upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-value"><code>value</code></a></td>
    <td><a href="#parameter-Content-Length"><code>Content-Length</code></a>, <a href="#parameter-x-vercel-digest"><code>x-vercel-digest</code></a>, <a href="#parameter-x-now-digest"><code>x-now-digest</code></a>, <a href="#parameter-x-now-size"><code>x-now-size</code></a>, <a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Before you create a deployment you need to upload the required files for that deployment. To do it, you need to first upload each file to this endpoint. Once that's completed, you can create a new deployment with the uploaded files. The file content must be placed inside the body of the request. In the case of a successful response you'll receive a status code 200 with an empty body.</td>
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
<tr id="parameter-Content-Length">
    <td><CopyableCode code="Content-Length" /></td>
    <td><code>number</code></td>
    <td>The file size in bytes</td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team slug to perform the request on behalf of.</td>
</tr>
<tr id="parameter-teamId">
    <td><CopyableCode code="teamId" /></td>
    <td><code>string</code></td>
    <td>The Team identifier to perform the request on behalf of.</td>
</tr>
<tr id="parameter-x-now-digest">
    <td><CopyableCode code="x-now-digest" /></td>
    <td><code>string</code></td>
    <td>The file SHA1 used to check the integrity</td>
</tr>
<tr id="parameter-x-now-size">
    <td><CopyableCode code="x-now-size" /></td>
    <td><code>number</code></td>
    <td>The file size as an alternative to `Content-Length`</td>
</tr>
<tr id="parameter-x-vercel-digest">
    <td><CopyableCode code="x-vercel-digest" /></td>
    <td><code>string</code></td>
    <td>The file SHA1 used to check the integrity</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="upload"
    values={[
        { label: 'upload', value: 'upload' }
    ]}
>
<TabItem value="upload">

Before you create a deployment you need to upload the required files for that deployment. To do it, you need to first upload each file to this endpoint. Once that's completed, you can create a new deployment with the uploaded files. The file content must be placed inside the body of the request. In the case of a successful response you'll receive a status code 200 with an empty body.

```sql
EXEC vercel.deployments.files.upload 
@Content-Length='{{ Content-Length }}', 
@x-vercel-digest='{{ x-vercel-digest }}', 
@x-now-digest='{{ x-now-digest }}', 
@x-now-size='{{ x-now-size }}', 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"value": "{{ value }}"
}'
;
```
</TabItem>
</Tabs>
