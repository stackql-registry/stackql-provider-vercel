--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - vcr
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.vcr.tags" /></td></tr>
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

A tag pointing at an image in a Vercel Container Registry repository, enriched with the backing image's metadata and VHS-readiness status.

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
    <td><CopyableCode code="image_id" /></td>
    <td><code>string</code></td>
    <td>Internal identifier of the image the tag points at. (example: img_a1b2c3d4e5f6) (wire: imageId)</td>
</tr>
<tr>
    <td><CopyableCode code="arch" /></td>
    <td><code>string</code></td>
    <td>CPU architecture the manifest targets. Only present for single-platform manifests. (example: amd64)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>ISO 8601 timestamp of when the tag was created. (example: 2026-06-30T10:00:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. (attestation, index, manifest)</td>
</tr>
<tr>
    <td><CopyableCode code="manifest_digest" /></td>
    <td><code>string</code></td>
    <td>SHA-256 digest of the image manifest the tag points at. (example: sha256:2c4e8f3a1b9d0e5c7a6f4b2d8e1c9a0b3d5f7e9c1a2b4d6f8e0c2a4b6d8f0e2c) (wire: manifestDigest)</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>Operating system the manifest targets. Only present for single-platform manifests. (example: linux)</td>
</tr>
<tr>
    <td><CopyableCode code="pushed_by" /></td>
    <td><code>string</code></td>
    <td>Identifier of the actor that pushed the image. (wire: pushedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="size_in_bytes" /></td>
    <td><code>number</code></td>
    <td>Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry. (wire: sizeInBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>VHS-readiness status, or `null` for a multi-platform index. (preparing, ready, unoptimized, )</td>
</tr>
<tr>
    <td><CopyableCode code="tag" /></td>
    <td><code>string</code></td>
    <td>The tag name. (example: latest)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td>ISO 8601 timestamp of when the tag was last updated. (example: 2026-06-30T10:00:00.000Z) (wire: updatedAt)</td>
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
    <td><CopyableCode code="image_id" /></td>
    <td><code>string</code></td>
    <td> (wire: imageId)</td>
</tr>
<tr>
    <td><CopyableCode code="arch" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td> (attestation, index, manifest)</td>
</tr>
<tr>
    <td><CopyableCode code="manifest_digest" /></td>
    <td><code>string</code></td>
    <td> (wire: manifestDigest)</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pushed_by" /></td>
    <td><code>string</code></td>
    <td> (wire: pushedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="size_in_bytes" /></td>
    <td><code>number</code></td>
    <td> (wire: sizeInBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (preparing, ready, unoptimized, )</td>
</tr>
<tr>
    <td><CopyableCode code="tag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td> (wire: updatedAt)</td>
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
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-tag"><code>tag</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Fetch a single tag from a repository, including the backing image's metadata and VHS-readiness status.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a>, <a href="#parameter-sort_order"><code>sort_order</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>List a repository's tags.</td>
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
<tr id="parameter-id_or_name">
    <td><CopyableCode code="id_or_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Project ID. Missing or empty values return HTTP 400. (wire: projectId)</td>
</tr>
<tr id="parameter-tag">
    <td><CopyableCode code="tag" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team slug to perform the request on behalf of.</td>
</tr>
<tr id="parameter-sort_by">
    <td><CopyableCode code="sort_by" /></td>
    <td><code>string</code></td>
    <td>Field to sort the non-pinned tags by. (wire: sortBy)</td>
</tr>
<tr id="parameter-sort_order">
    <td><CopyableCode code="sort_order" /></td>
    <td><code>string</code></td>
    <td>Sort direction. Defaults to desc. (wire: sortOrder)</td>
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
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Fetch a single tag from a repository, including the backing image's metadata and VHS-readiness status.

```sql
SELECT
image_id,
arch,
created_at,
kind,
manifest_digest,
platform,
pushed_by,
size_in_bytes,
status,
tag,
updated_at
FROM vercel.vcr.tags
WHERE project_id = '{{ project_id }}' -- required
AND id_or_name = '{{ id_or_name }}' -- required
AND tag = '{{ tag }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

List a repository's tags.

```sql
SELECT
image_id,
arch,
created_at,
kind,
manifest_digest,
platform,
pushed_by,
size_in_bytes,
status,
tag,
updated_at
FROM vercel.vcr.tags
WHERE project_id = '{{ project_id }}' -- required
AND id_or_name = '{{ id_or_name }}' -- required
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
AND sort_by = '{{ sort_by }}'
AND sort_order = '{{ sort_order }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
