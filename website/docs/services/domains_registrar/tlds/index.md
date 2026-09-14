--- 
title: tlds
hide_title: false
hide_table_of_contents: false
keywords:
  - tlds
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

Creates, updates, deletes, gets or lists a <code>tlds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tlds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.domains_registrar.tlds" /></td></tr>
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
    <td><CopyableCode code="supported_language_codes" /></td>
    <td><code>object</code></td>
    <td>The language codes that are supported for the TLD. The key is the language code, and the value is the name of the language. (wire: supportedLanguageCodes)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A valid TLD name

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
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
    <td><a href="#parameter-tld"><code>tld</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td>Get the metadata for a specific TLD.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td>Get a list of TLDs supported by Vercel</td>
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
<tr id="parameter-tld">
    <td><CopyableCode code="tld" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td> (wire: teamId)</td>
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

Get the metadata for a specific TLD.

```sql
SELECT
supported_language_codes
FROM vercel.domains_registrar.tlds
WHERE tld = '{{ tld }}' -- required
AND team_id = '{{ team_id }}'
;
```
</TabItem>
<TabItem value="list">

Get a list of TLDs supported by Vercel

```sql
SELECT
*
FROM vercel.domains_registrar.tlds
WHERE team_id = '{{ team_id }}'
;
```
</TabItem>
</Tabs>
