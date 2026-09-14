--- 
title: records
hide_title: false
hide_table_of_contents: false
keywords:
  - records
  - dns
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

Creates, updates, deletes, gets or lists a <code>records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.dns.records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' },
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="list">

Successful response retrieving a list of paginated DNS records.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mx_priority" /></td>
    <td><code>number</code></td>
    <td> (wire: mxPriority)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (A, AAAA, ALIAS, CAA, CNAME, HTTPS, MX, NS, SRV, TXT)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td> (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="record_type" /></td>
    <td><code>string</code></td>
    <td> (A, AAAA, ALIAS, CAA, CNAME, HTTPS, MX, NS, SRV, TXT) (wire: recordType)</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (A, AAAA, ALIAS, CAA, CNAME, HTTPS, MX, NS, SRV, TXT)</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
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
    <td><a href="#parameter-domain"><code>domain</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieves a list of DNS records created for a domain name. By default it returns 20 records if no limit is provided. The rest can be retrieved using the pagination options.</td>
</tr>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-record_id"><code>record_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-value"><code>value</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-mx_priority"><code>mx_priority</code></a>, <a href="#parameter-srv"><code>srv</code></a>, <a href="#parameter-https"><code>https</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Creates a DNS record for a domain.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-record_id"><code>record_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Updates an existing DNS record for a domain name.</td>
</tr>
<tr>
    <td><a href="#replace"><CopyableCode code="replace" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-record_id"><code>record_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Removes an existing DNS record from a domain name.</td>
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
<tr id="parameter-record_id">
    <td><CopyableCode code="record_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>string</code></td>
    <td>Maximum number of records to list from a request.</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string</code></td>
    <td>Get records created after this JavaScript timestamp.</td>
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
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code>string</code></td>
    <td>Get records created before this JavaScript timestamp.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' },
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="list">

Retrieves a list of DNS records created for a domain name. By default it returns 20 records if no limit is provided. The rest can be retrieved using the pagination options.

```sql
SELECT
id,
name,
comment,
created,
created_at,
creator,
mx_priority,
priority,
slug,
ttl,
type,
updated,
updated_at,
value
FROM vercel.dns.records
WHERE domain = '{{ domain }}' -- required
AND limit = '{{ limit }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="get">

No description available.

```sql
SELECT
id,
name,
comment,
created_at,
creator,
domain,
record_type,
ttl,
type,
value
FROM vercel.dns.records
WHERE record_id = '{{ record_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a DNS record for a domain.

```sql
INSERT INTO vercel.dns.records (
type,
name,
ttl,
value,
comment,
mx_priority,
srv,
https,
domain,
team_id,
slug
)
SELECT 
'{{ type }}' /* required */,
'{{ name }}' /* required */,
{{ ttl }},
'{{ value }}' /* required */,
'{{ comment }}',
{{ mx_priority }} /* required */,
'{{ srv }}' /* required */,
'{{ https }}' /* required */,
'{{ domain }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
uid,
updated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: records
  props:
    - name: domain
      value: "{{ domain }}"
      description: Required parameter for the records resource.
    - name: type
      value: "{{ type }}"
      description: |
        The type of record, it could be one of the valid DNS records.
      valid_values: ['A', 'AAAA', 'ALIAS', 'CAA', 'CNAME', 'HTTPS', 'MX', 'SRV', 'TXT', 'NS']
    - name: name
      value: "{{ name }}"
      description: |
        A subdomain name or an empty string for the root domain.
    - name: ttl
      value: {{ ttl }}
      description: |
        The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
    - name: value
      value: "{{ value }}"
      description: |
        The record value must be a valid IPv4 address.
    - name: comment
      value: "{{ comment }}"
      description: |
        A comment to add context on what this DNS record is for
    - name: mx_priority
      value: {{ mx_priority }}
    - name: srv
      value:
        priority: "{{ priority }}"
        weight: "{{ weight }}"
        port: "{{ port }}"
        target: "{{ target }}"
    - name: https
      value:
        priority: "{{ priority }}"
        target: "{{ target }}"
        params: "{{ params }}"
    - name: team_id
      value: "{{ team_id }}"
      description: The Team identifier to perform the request on behalf of.
      description: The Team identifier to perform the request on behalf of.
    - name: slug
      value: "{{ slug }}"
      description: The Team slug to perform the request on behalf of.
      description: The Team slug to perform the request on behalf of.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates an existing DNS record for a domain name.

```sql
UPDATE vercel.dns.records
SET 
name = '{{ name }}',
value = '{{ value }}',
type = '{{ type }}',
ttl = {{ ttl }},
mx_priority = {{ mx_priority }},
srv = '{{ srv }}',
https = '{{ https }}',
comment = '{{ comment }}'
WHERE 
record_id = '{{ record_id }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
id,
name,
comment,
created_at,
creator,
domain,
record_type,
ttl,
type,
value;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="replace"
    values={[
        { label: 'replace', value: 'replace' }
    ]}
>
<TabItem value="replace">

No description available.

```sql
REPLACE vercel.dns.records
SET 
-- No updatable properties
WHERE 
domain = '{{ domain }}' --required
RETURNING
record_ids;
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

Removes an existing DNS record from a domain name.

```sql
DELETE FROM vercel.dns.records
WHERE domain = '{{ domain }}' --required
AND record_id = '{{ record_id }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
