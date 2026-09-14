--- 
title: integration_log_drains
hide_title: false
hide_table_of_contents: false
keywords:
  - integration_log_drains
  - log_drains
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

Creates, updates, deletes, gets or lists an <code>integration_log_drains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integration_log_drains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.log_drains.integration_log_drains" /></td></tr>
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
    <td><code>string</code></td>
    <td>The unique identifier of the log drain. Always prefixed with `ld_` (example: ld_nBuA7zCID8g4QZ8g)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the log drain (example: My first log drain)</td>
</tr>
<tr>
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>The oauth2 client application id that created this log drain (example: oac_xRhY4LAB7yLhUADD69EvV7ct) (wire: clientId)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_id" /></td>
    <td><code>string</code></td>
    <td>The client configuration this log drain was created with (example: icfg_3bwCLgxL8qt5kjRLcv2Dit7F) (wire: configurationId)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the team or user whose events will trigger the log drain (example: kr1PsOIzqEL5Xg6M4VZcZosf) (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td> (example: AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb) (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td>The branch regexp of log drain (example: feature/*)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>A timestamp that tells you when the log drain was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_from" /></td>
    <td><code>string</code></td>
    <td>Whether the log drain was created by an integration or by a user (integration, self-served) (example: integration) (wire: createdFrom)</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_format" /></td>
    <td><code>string</code></td>
    <td>The delivery log format (json, ndjson, protobuf) (example: json) (wire: deliveryFormat)</td>
</tr>
<tr>
    <td><CopyableCode code="environments" /></td>
    <td><code>array</code></td>
    <td>The environment of log drain</td>
</tr>
<tr>
    <td><CopyableCode code="headers" /></td>
    <td><code>object</code></td>
    <td>The headers to send with the request (example: &#123;"Authorization": "Bearer 123"&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="project_ids" /></td>
    <td><code>array</code></td>
    <td>The identifier of the projects this log drain is associated with (example: AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb) (wire: projectIds)</td>
</tr>
<tr>
    <td><CopyableCode code="sampling_rate" /></td>
    <td><code>number</code></td>
    <td>The sampling rate of log drain (wire: samplingRate)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>The sources from which logs are currently being delivered to this log drain.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The URL to call when logs are generated (example: https:​//example.com/log-drain)</td>
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
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieves a list of all Integration log drains that are defined for the authenticated user or team. When using an OAuth2 token, the list is limited to log drains created by the authenticated integration.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-url"><code>url</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Creates an Integration log drain. This endpoint must be called with an OAuth2 client (integration), since log drains are tied to integrations. If it is called with a different token type it will produce a 400 error.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Deletes the Integration log drain with the provided `id`. When using an OAuth2 Token, the log drain can be deleted only if the integration owns it.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>ID of the log drain to be deleted</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Retrieves a list of all Integration log drains that are defined for the authenticated user or team. When using an OAuth2 token, the list is limited to log drains created by the authenticated integration.

```sql
SELECT
id,
name,
client_id,
configuration_id,
owner_id,
project_id,
branch,
created_at,
created_from,
delivery_format,
environments,
headers,
project_ids,
sampling_rate,
source,
sources,
url
FROM vercel.log_drains.integration_log_drains
WHERE team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
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

Creates an Integration log drain. This endpoint must be called with an OAuth2 client (integration), since log drains are tied to integrations. If it is called with a different token type it will produce a 400 error.

```sql
INSERT INTO vercel.log_drains.integration_log_drains (
name,
project_ids,
secret,
delivery_format,
url,
sources,
headers,
environments,
team_id,
slug
)
SELECT 
'{{ name }}' /* required */,
'{{ project_ids }}',
'{{ secret }}',
'{{ delivery_format }}',
'{{ url }}' /* required */,
'{{ sources }}',
'{{ headers }}',
'{{ environments }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
id,
name,
client_id,
configuration_id,
owner_id,
project_id,
branch,
created_at,
created_from,
delivery_format,
environments,
headers,
project_ids,
sampling_rate,
source,
sources,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: integration_log_drains
  props:
    - name: name
      value: "{{ name }}"
      description: |
        The name of the log drain
    - name: project_ids
      value:
        - "{{ project_ids }}"
    - name: secret
      value: "{{ secret }}"
      description: |
        A secret to sign log drain notification headers so a consumer can verify their authenticity
    - name: delivery_format
      value: "{{ delivery_format }}"
      description: |
        The delivery log format
      valid_values: ['json', 'ndjson']
    - name: url
      value: "{{ url }}"
      description: |
        The url where you will receive logs. The protocol must be \`https://\` or \`http://\` when type is \`json\` and \`ndjson\`.
    - name: sources
      value:
        - "{{ sources }}"
    - name: headers
      value: "{{ headers }}"
      description: |
        Headers to be sent together with the request
    - name: environments
      value:
        - "{{ environments }}"
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


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes the Integration log drain with the provided `id`. When using an OAuth2 Token, the log drain can be deleted only if the integration owns it.

```sql
DELETE FROM vercel.log_drains.integration_log_drains
WHERE id = '{{ id }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
