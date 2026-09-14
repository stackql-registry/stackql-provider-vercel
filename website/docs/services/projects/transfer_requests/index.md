--- 
title: transfer_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - transfer_requests
  - projects
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

Creates, updates, deletes, gets or lists a <code>transfer_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transfer_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.projects.transfer_requests" /></td></tr>
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
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Initiates a project transfer request from one team to another. &lt;br /&gt; Returns a `code` that remains valid for 24 hours and can be used to accept the transfer request by another team using the `PUT /projects/transfer-request/:code` endpoint. &lt;br /&gt; Users can also accept the project transfer request using the claim URL: `https:​//vercel.com/claim-deployment?code=&lt;code&gt;&returnUrl=&lt;returnUrl&gt;`. &lt;br /&gt; The `code` parameter specifies the project transfer request code generated using this endpoint. &lt;br /&gt; The `returnUrl` parameter redirects users to a specific page of the application if the claim URL is invalid or expired.</td>
</tr>
<tr>
    <td><a href="#accept"><CopyableCode code="accept" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-code"><code>code</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Accept a project transfer request initated by another team. &lt;br /&gt; The `code` is generated using the `POST /projects/:idOrName/transfer-request` endpoint.</td>
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
<tr id="parameter-code">
    <td><CopyableCode code="code" /></td>
    <td><code>string</code></td>
    <td>The code of the project transfer request.</td>
</tr>
<tr id="parameter-id_or_name">
    <td><CopyableCode code="id_or_name" /></td>
    <td><code>string</code></td>
    <td>The ID or name of the project to transfer.</td>
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
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The Team identifier to perform the request on behalf of. (wire: teamId)</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Initiates a project transfer request from one team to another. &lt;br /&gt; Returns a `code` that remains valid for 24 hours and can be used to accept the transfer request by another team using the `PUT /projects/transfer-request/:code` endpoint. &lt;br /&gt; Users can also accept the project transfer request using the claim URL: `https:​//vercel.com/claim-deployment?code=&lt;code&gt;&returnUrl=&lt;returnUrl&gt;`. &lt;br /&gt; The `code` parameter specifies the project transfer request code generated using this endpoint. &lt;br /&gt; The `returnUrl` parameter redirects users to a specific page of the application if the claim URL is invalid or expired.

```sql
INSERT INTO vercel.projects.transfer_requests (
callback_url,
callback_secret,
id_or_name,
team_id,
slug
)
SELECT 
'{{ callback_url }}',
'{{ callback_secret }}',
'{{ id_or_name }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
code
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transfer_requests
  props:
    - name: id_or_name
      value: "{{ id_or_name }}"
      description: Required parameter for the transfer_requests resource.
    - name: callback_url
      value: "{{ callback_url }}"
      description: |
        The URL to send a webhook to when the transfer is accepted.
    - name: callback_secret
      value: "{{ callback_secret }}"
      description: |
        The secret to use to sign the webhook payload with HMAC-SHA256.
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


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="accept"
    values={[
        { label: 'accept', value: 'accept' }
    ]}
>
<TabItem value="accept">

Accept a project transfer request initated by another team. &lt;br /&gt; The `code` is generated using the `POST /projects/:idOrName/transfer-request` endpoint.

```sql
EXEC vercel.projects.transfer_requests.accept 
@code='{{ code }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"newProjectName": "{{ newProjectName }}", 
"paidFeatures": "{{ paidFeatures }}", 
"acceptedPolicies": "{{ acceptedPolicies }}"
}'
;
```
</TabItem>
</Tabs>
