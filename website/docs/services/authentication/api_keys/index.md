--- 
title: api_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - api_keys
  - authentication
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

Creates, updates, deletes, gets or lists an <code>api_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="api_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.authentication.api_keys" /></td></tr>
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
    <td><a href="#parameter-purpose"><code>purpose</code></a></td>
    <td></td>
    <td></td>
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

No description available.

```sql
INSERT INTO vercel.authentication.api_keys (
purpose,
project_id,
name,
expires_at,
ai_gateway_quota,
metadata
)
SELECT 
'{{ purpose }}' /* required */,
'{{ project_id }}',
'{{ name }}',
{{ expires_at }},
'{{ ai_gateway_quota }}',
'{{ metadata }}'
RETURNING
api_key,
api_key_string
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: api_keys
  props:
    - name: purpose
      value: "{{ purpose }}"
      description: |
        The API key's purpose, which restricts how it can be used.
    - name: project_id
      value: "{{ project_id }}"
      description: |
        An optional project to restrict the API key to.
    - name: name
      value: "{{ name }}"
      description: |
        An optional name for the API key.
    - name: expires_at
      value: {{ expires_at }}
      description: |
        The API key's expiration, expressed as a UNIX timestamp in milliseconds.
    - name: ai_gateway_quota
      description: |
        Optional AI Gateway quota configuration for the API key.
      value:
        limitAmount: {{ limitAmount }}
        includeByokInQuota: {{ includeByokInQuota }}
        refreshPeriod: "{{ refreshPeriod }}"
        alertThresholds:
          - {{ alertThresholds }}
    - name: metadata
      value: "{{ metadata }}"
      description: |
        Optional generic metadata for the API key. The accepted shape depends on the key's \`purpose\` and is validated on creation; for \`ai-gateway\` keys this accepts \`environment\`.
`}</CodeBlock>

</TabItem>
</Tabs>
