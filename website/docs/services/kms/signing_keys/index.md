--- 
title: signing_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - signing_keys
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

Creates, updates, deletes, gets or lists a <code>signing_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="signing_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.kms.signing_keys" /></td></tr>
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
    <td><a href="#parameter-issuer_id"><code>issuer_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Create a new signing key for a KMS issuer. Depending on the activation mode, the key is activated automatically once its public key has propagated, or manually via the activate endpoint.</td>
</tr>
<tr>
    <td><a href="#activate"><CopyableCode code="activate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-issuer_id"><code>issuer_id</code></a>, <a href="#parameter-key_id"><code>key_id</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Activate a pending signing key so the issuer starts signing with it.</td>
</tr>
<tr>
    <td><a href="#revoke"><CopyableCode code="revoke" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-issuer_id"><code>issuer_id</code></a>, <a href="#parameter-key_id"><code>key_id</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Immediately revoke a signing key that is already scheduled for revocation.</td>
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
<tr id="parameter-key_id">
    <td><CopyableCode code="key_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the signing key to revoke immediately. The key must already be scheduled for revocation.</td>
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

Create a new signing key for a KMS issuer. Depending on the activation mode, the key is activated automatically once its public key has propagated, or manually via the activate endpoint.

```sql
INSERT INTO vercel.kms.signing_keys (
activation,
revoke_previous_after_hours,
revoke_previous_at,
import_key,
import_key_id,
issuer_id,
team_id,
slug
)
SELECT 
'{{ activation }}',
{{ revoke_previous_after_hours }},
'{{ revoke_previous_at }}',
'{{ import_key }}',
'{{ import_key_id }}',
'{{ issuer_id }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
import_key_id,
issuer_id,
key_id,
activate_at,
activated_at,
algorithm,
certificate_pem,
created_at,
public_key,
public_key_fingerprint,
public_key_pem,
revoke_at,
status,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: signing_keys
  props:
    - name: issuer_id
      value: "{{ issuer_id }}"
      description: Required parameter for the signing_keys resource.
    - name: activation
      value: "{{ activation }}"
      description: |
        Whether the new key is activated automatically after its public key has propagated, or manually via the activate endpoint. Defaults to \`automatic\`.
      valid_values: ['automatic', 'manual']
    - name: revoke_previous_after_hours
      value: {{ revoke_previous_after_hours }}
      description: |
        For automatic activation, how many hours after activation the previous signing key should stop being used. Defaults to a 1 hour grace period so already-issued tokens keep verifying.
    - name: revoke_previous_at
      value: "{{ revoke_previous_at }}"
      description: |
        Deprecated. The ISO date string or timestamp when the previous signing key should stop being used. Converted to a relative grace and applied at activation, not creation. Prefer revokePreviousAfterHours.
    - name: import_key
      value: "{{ import_key }}"
      description: |
        The PEM-encoded private key to use for the issuer.
    - name: import_key_id
      value: "{{ import_key_id }}"
      description: |
        The key id to use as the imported key's JWT/JWKS \`kid\`. Only allowed when \`importKey\` is provided. Not required to be unique; the addressable key id is the server-minted \`keyId\` returned in the response.
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
    defaultValue="activate"
    values={[
        { label: 'activate', value: 'activate' },
        { label: 'revoke', value: 'revoke' }
    ]}
>
<TabItem value="activate">

Activate a pending signing key so the issuer starts signing with it.

```sql
EXEC vercel.kms.signing_keys.activate 
@issuer_id='{{ issuer_id }}' --required, 
@key_id='{{ key_id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"revokePreviousAfterHours": {{ revokePreviousAfterHours }}
}'
;
```
</TabItem>
<TabItem value="revoke">

Immediately revoke a signing key that is already scheduled for revocation.

```sql
EXEC vercel.kms.signing_keys.revoke 
@issuer_id='{{ issuer_id }}' --required, 
@key_id='{{ key_id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}'
;
```
</TabItem>
</Tabs>
