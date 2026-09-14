--- 
title: images
hide_title: false
hide_table_of_contents: false
keywords:
  - images
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

Creates, updates, deletes, gets or lists an <code>images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.vcr.images" /></td></tr>
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

A single image with its tags, status and resolved Dockerfile layer history.

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
    <td>Internal identifier of the image. (example: img_a1b2c3d4e5f6)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the repository the image belongs to. (example: repo_a1b2c3d4e5f6) (wire: repositoryId)</td>
</tr>
<tr>
    <td><CopyableCode code="arch" /></td>
    <td><code>string</code></td>
    <td>CPU architecture the manifest targets. Only present for single-platform manifests. (example: amd64)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>ISO 8601 timestamp of when the image was created. (example: 2026-06-30T10:00:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. (attestation, index, manifest)</td>
</tr>
<tr>
    <td><CopyableCode code="layers" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="manifest_digest" /></td>
    <td><code>string</code></td>
    <td>SHA-256 digest of the image manifest. (example: sha256:2c4e8f3a1b9d0e5c7a6f4b2d8e1c9a0b3d5f7e9c1a2b4d6f8e0c2a4b6d8f0e2c) (wire: manifestDigest)</td>
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
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Tags pointing at this image's manifest.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An image enriched with its tags and VHS-readiness status, as returned when listing a repository's images.

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
    <td>Internal identifier of the image. (example: img_a1b2c3d4e5f6)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the repository the image belongs to. (example: repo_a1b2c3d4e5f6) (wire: repositoryId)</td>
</tr>
<tr>
    <td><CopyableCode code="arch" /></td>
    <td><code>string</code></td>
    <td>CPU architecture the manifest targets. Only present for single-platform manifests. (example: amd64)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>ISO 8601 timestamp of when the image was created. (example: 2026-06-30T10:00:00.000Z) (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation. (attestation, index, manifest)</td>
</tr>
<tr>
    <td><CopyableCode code="manifest_digest" /></td>
    <td><code>string</code></td>
    <td>SHA-256 digest of the image manifest. (example: sha256:2c4e8f3a1b9d0e5c7a6f4b2d8e1c9a0b3d5f7e9c1a2b4d6f8e0c2a4b6d8f0e2c) (wire: manifestDigest)</td>
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
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Tags pointing at this image's manifest.</td>
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
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-image_id_or_digest"><code>image_id_or_digest</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Fetch an individual image from a repository, including its tags and Dockerfile history entries with discriminated layer details for UI rendering. The image may be addressed by its internal id (`image_...`) or by its manifest digest (`sha256:...`).</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-untagged"><code>untagged</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>List images for a container registry repository, including their tags.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-image_id"><code>image_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Schedule an image for deletion. The image is marked so it disappears from list/get immediately; subscriber-vcr reclaims the manifest, blobs, tags and row asynchronously via the VcrManifestRemoved event.</td>
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
<tr id="parameter-image_id">
    <td><CopyableCode code="image_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-image_id_or_digest">
    <td><CopyableCode code="image_id_or_digest" /></td>
    <td><code>string</code></td>
    <td>The internal image id (`image_...`) or the image manifest digest (`sha256:...`).</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Project ID. Missing or empty values return HTTP 400. (wire: projectId)</td>
</tr>
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>Opaque pagination cursor returned by a previous list response.</td>
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
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The Team identifier to perform the request on behalf of. (wire: teamId)</td>
</tr>
<tr id="parameter-untagged">
    <td><CopyableCode code="untagged" /></td>
    <td><code>boolean</code></td>
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

Fetch an individual image from a repository, including its tags and Dockerfile history entries with discriminated layer details for UI rendering. The image may be addressed by its internal id (`image_...`) or by its manifest digest (`sha256:...`).

```sql
SELECT
id,
repository_id,
arch,
created_at,
kind,
layers,
manifest_digest,
platform,
pushed_by,
size_in_bytes,
status,
tags
FROM vercel.vcr.images
WHERE project_id = '{{ project_id }}' -- required
AND id_or_name = '{{ id_or_name }}' -- required
AND image_id_or_digest = '{{ image_id_or_digest }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

List images for a container registry repository, including their tags.

```sql
SELECT
id,
repository_id,
arch,
created_at,
kind,
manifest_digest,
platform,
pushed_by,
size_in_bytes,
status,
tags
FROM vercel.vcr.images
WHERE project_id = '{{ project_id }}' -- required
AND id_or_name = '{{ id_or_name }}' -- required
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
AND untagged = '{{ untagged }}'
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

Schedule an image for deletion. The image is marked so it disappears from list/get immediately; subscriber-vcr reclaims the manifest, blobs, tags and row asynchronously via the VcrManifestRemoved event.

```sql
DELETE FROM vercel.vcr.images
WHERE project_id = '{{ project_id }}' --required
AND id_or_name = '{{ id_or_name }}' --required
AND image_id = '{{ image_id }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
