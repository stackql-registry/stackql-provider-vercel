--- 
title: session_files
hide_title: false
hide_table_of_contents: false
keywords:
  - session_files
  - sandboxes
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

Creates, updates, deletes, gets or lists a <code>session_files</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="session_files" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.sandboxes.session_files" /></td></tr>
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
    <td><a href="#read"><CopyableCode code="read" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-path"><code>path</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Downloads the contents of a file from a session's filesystem. The file content is returned as a binary stream with appropriate Content-Disposition headers for file download.</td>
</tr>
<tr>
    <td><a href="#mkdir"><CopyableCode code="mkdir" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-path"><code>path</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Creates a new directory in a session's filesystem. By default, parent directories are created recursively if they don't exist (similar to `mkdir -p`).</td>
</tr>
<tr>
    <td><a href="#write"><CopyableCode code="write" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-session_id"><code>session_id</code></a></td>
    <td><a href="#parameter-x-cwd"><code>x-cwd</code></a>, <a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Uploads and extracts files to a session's filesystem. Files must be uploaded as a gzipped tarball (`.tar.gz`) with the `Content-Type` header set to `application/gzip`. The tarball contents are extracted to the session's working directory, or to a custom directory specified via the `x-cwd` header.</td>
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
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the session to write files to.</td>
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
<tr id="parameter-x-cwd">
    <td><CopyableCode code="x-cwd" /></td>
    <td><code>string</code></td>
    <td>The target directory where the tarball contents will be extracted. If not specified, files are extracted to the sandbox home directory.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="read"
    values={[
        { label: 'read', value: 'read' },
        { label: 'mkdir', value: 'mkdir' },
        { label: 'write', value: 'write' }
    ]}
>
<TabItem value="read">

Downloads the contents of a file from a session's filesystem. The file content is returned as a binary stream with appropriate Content-Disposition headers for file download.

```sql
EXEC vercel.sandboxes.session_files.read 
@session_id='{{ session_id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"cwd": "{{ cwd }}", 
"path": "{{ path }}"
}'
;
```
</TabItem>
<TabItem value="mkdir">

Creates a new directory in a session's filesystem. By default, parent directories are created recursively if they don't exist (similar to `mkdir -p`).

```sql
EXEC vercel.sandboxes.session_files.mkdir 
@session_id='{{ session_id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"cwd": "{{ cwd }}", 
"path": "{{ path }}", 
"recursive": {{ recursive }}
}'
;
```
</TabItem>
<TabItem value="write">

Uploads and extracts files to a session's filesystem. Files must be uploaded as a gzipped tarball (`.tar.gz`) with the `Content-Type` header set to `application/gzip`. The tarball contents are extracted to the session's working directory, or to a custom directory specified via the `x-cwd` header.

```sql
EXEC vercel.sandboxes.session_files.write 
@session_id='{{ session_id }}' --required, 
@x-cwd='{{ x-cwd }}', 
@teamId='{{ teamId }}', 
@slug='{{ slug }}'
;
```
</TabItem>
</Tabs>
