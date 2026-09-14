--- 
title: cache
hide_title: false
hide_table_of_contents: false
keywords:
  - cache
  - edge_cache
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

Creates, updates, deletes, gets or lists a <code>cache</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cache" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.edge_cache.cache" /></td></tr>
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
    <td><a href="#invalidate_by_tags"><CopyableCode code="invalidate_by_tags" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectIdOrName"><code>projectIdOrName</code></a>, <a href="#parameter-tags"><code>tags</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Marks a cache tag as stale, causing cache entries associated with that tag to be revalidated in the background on the next request.</td>
</tr>
<tr>
    <td><a href="#delete_by_tags"><CopyableCode code="delete_by_tags" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectIdOrName"><code>projectIdOrName</code></a>, <a href="#parameter-tags"><code>tags</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Marks a cache tag as deleted, causing cache entries associated with that tag to be revalidated in the foreground on the next request. Use this method with caution because one tag can be associated with many paths and deleting the cache can cause many concurrent requests to the origin leading to cache stampede problem. This method is for advanced use cases and is not recommended; prefer using `invalidateByTag` instead.</td>
</tr>
<tr>
    <td><a href="#invalidate_by_src_images"><CopyableCode code="invalidate_by_src_images" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectIdOrName"><code>projectIdOrName</code></a>, <a href="#parameter-srcImages"><code>srcImages</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Marks a source image as stale, causing its corresponding transformed images to be revalidated in the background on the next request.</td>
</tr>
<tr>
    <td><a href="#delete_by_src_images"><CopyableCode code="delete_by_src_images" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-projectIdOrName"><code>projectIdOrName</code></a>, <a href="#parameter-srcImages"><code>srcImages</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Marks a source image as deleted, causing cache entries associated with that source image to be revalidated in the foreground on the next request. Use this method with caution because one source image can be associated with many paths and deleting the cache can cause many concurrent requests to the origin leading to cache stampede problem. This method is for advanced use cases and is not recommended; prefer using `invalidateBySrcImage` instead.</td>
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
<tr id="parameter-projectIdOrName">
    <td><CopyableCode code="projectIdOrName" /></td>
    <td><code>string</code></td>
    <td></td>
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
</tbody>
</table>

## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="invalidate_by_tags"
    values={[
        { label: 'invalidate_by_tags', value: 'invalidate_by_tags' },
        { label: 'delete_by_tags', value: 'delete_by_tags' },
        { label: 'invalidate_by_src_images', value: 'invalidate_by_src_images' },
        { label: 'delete_by_src_images', value: 'delete_by_src_images' }
    ]}
>
<TabItem value="invalidate_by_tags">

Marks a cache tag as stale, causing cache entries associated with that tag to be revalidated in the background on the next request.

```sql
EXEC vercel.edge_cache.cache.invalidate_by_tags 
@projectIdOrName='{{ projectIdOrName }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"tags": "{{ tags }}", 
"target": "{{ target }}"
}'
;
```
</TabItem>
<TabItem value="delete_by_tags">

Marks a cache tag as deleted, causing cache entries associated with that tag to be revalidated in the foreground on the next request. Use this method with caution because one tag can be associated with many paths and deleting the cache can cause many concurrent requests to the origin leading to cache stampede problem. This method is for advanced use cases and is not recommended; prefer using `invalidateByTag` instead.

```sql
EXEC vercel.edge_cache.cache.delete_by_tags 
@projectIdOrName='{{ projectIdOrName }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"revalidationDeadlineSeconds": {{ revalidationDeadlineSeconds }}, 
"tags": "{{ tags }}", 
"target": "{{ target }}"
}'
;
```
</TabItem>
<TabItem value="invalidate_by_src_images">

Marks a source image as stale, causing its corresponding transformed images to be revalidated in the background on the next request.

```sql
EXEC vercel.edge_cache.cache.invalidate_by_src_images 
@projectIdOrName='{{ projectIdOrName }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"srcImages": "{{ srcImages }}"
}'
;
```
</TabItem>
<TabItem value="delete_by_src_images">

Marks a source image as deleted, causing cache entries associated with that source image to be revalidated in the foreground on the next request. Use this method with caution because one source image can be associated with many paths and deleting the cache can cause many concurrent requests to the origin leading to cache stampede problem. This method is for advanced use cases and is not recommended; prefer using `invalidateBySrcImage` instead.

```sql
EXEC vercel.edge_cache.cache.delete_by_src_images 
@projectIdOrName='{{ projectIdOrName }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"revalidationDeadlineSeconds": {{ revalidationDeadlineSeconds }}, 
"srcImages": "{{ srcImages }}"
}'
;
```
</TabItem>
</Tabs>
