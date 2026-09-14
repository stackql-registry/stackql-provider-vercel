--- 
title: issuer_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - issuer_policies
  - kms
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

Creates, updates, deletes, gets or lists an <code>issuer_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="issuer_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.kms.issuer_policies" /></td></tr>
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
    <td><a href="#parameter-issuer_id"><code>issuer_id</code></a>, <a href="#parameter-kind"><code>kind</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-environments"><code>environments</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Attach a policy to a KMS issuer that grants a project's deployments permission to sign with it.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-issuer_id"><code>issuer_id</code></a>, <a href="#parameter-kind"><code>kind</code></a>, <a href="#parameter-policy_key"><code>policy_key</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Update an existing KMS issuer policy's environments or token claims.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-issuer_id"><code>issuer_id</code></a>, <a href="#parameter-kind"><code>kind</code></a>, <a href="#parameter-policy_key"><code>policy_key</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Remove a policy from a KMS issuer.</td>
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
<tr id="parameter-issuer_id">
    <td><CopyableCode code="issuer_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the issuer.</td>
</tr>
<tr id="parameter-kind">
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The issuer policy kind.</td>
</tr>
<tr id="parameter-policy_key">
    <td><CopyableCode code="policy_key" /></td>
    <td><code>string</code></td>
    <td>The policy identifier.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Attach a policy to a KMS issuer that grants a project's deployments permission to sign with it.

```sql
INSERT INTO vercel.kms.issuer_policies (
kind,
project_id,
environments,
token_claims,
issuer_id,
team_id,
slug
)
SELECT 
'{{ kind }}' /* required */,
'{{ project_id }}' /* required */,
'{{ environments }}' /* required */,
'{{ token_claims }}',
'{{ issuer_id }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
client_id,
project_id,
team_id,
created_at,
environments,
kind,
token_claims,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: issuer_policies
  props:
    - name: issuer_id
      value: "{{ issuer_id }}"
      description: Required parameter for the issuer_policies resource.
    - name: kind
      value: "{{ kind }}"
      valid_values: ['project-grant']
    - name: project_id
      value: "{{ project_id }}"
      description: |
        The project ID for the project grant policy.
    - name: environments
      value:
        - "{{ environments }}"
      description: |
        The environments for the project grant policy. Each entry is a system environment (production, preview, development) or a custom environment ID (env_...).
    - name: token_claims
      value: "{{ token_claims }}"
      description: |
        The claims that KMS should include in signed JWTs for this policy.
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

Update an existing KMS issuer policy's environments or token claims.

```sql
UPDATE vercel.kms.issuer_policies
SET 
environments = '{{ environments }}',
token_claims = '{{ token_claims }}'
WHERE 
issuer_id = '{{ issuer_id }}' --required
AND kind = '{{ kind }}' --required
AND policy_key = '{{ policy_key }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
client_id,
project_id,
team_id,
created_at,
environments,
kind,
token_claims,
updated_at;
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

Remove a policy from a KMS issuer.

```sql
DELETE FROM vercel.kms.issuer_policies
WHERE issuer_id = '{{ issuer_id }}' --required
AND kind = '{{ kind }}' --required
AND policy_key = '{{ policy_key }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
