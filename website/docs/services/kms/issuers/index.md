--- 
title: issuers
hide_title: false
hide_table_of_contents: false
keywords:
  - issuers
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

Creates, updates, deletes, gets or lists an <code>issuers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="issuers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.kms.issuers" /></td></tr>
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
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td> (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm" /></td>
    <td><code>string</code></td>
    <td> (ES256, ES384, ES512, EdDSA, PS256, PS384, PS512, RS256, RS384, RS512)</td>
</tr>
<tr>
    <td><CopyableCode code="claims_schema" /></td>
    <td><code>object</code></td>
    <td> (wire: claimsSchema)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="managed_by" /></td>
    <td><code>string</code></td>
    <td> (wire: managedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td> (external, vercel)</td>
</tr>
<tr>
    <td><CopyableCode code="policies" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="signing_keys" /></td>
    <td><code>array</code></td>
    <td> (wire: signingKeys)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td> (wire: updatedAt)</td>
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
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td> (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm" /></td>
    <td><code>string</code></td>
    <td> (ES256, ES384, ES512, EdDSA, PS256, PS384, PS512, RS256, RS384, RS512)</td>
</tr>
<tr>
    <td><CopyableCode code="claims_schema" /></td>
    <td><code>object</code></td>
    <td> (wire: claimsSchema)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="managed_by" /></td>
    <td><code>string</code></td>
    <td> (wire: managedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td> (external, vercel)</td>
</tr>
<tr>
    <td><CopyableCode code="policies" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="signing_keys" /></td>
    <td><code>array</code></td>
    <td> (wire: signingKeys)</td>
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
    <td><a href="#parameter-issuer_id"><code>issuer_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieve a single KMS issuer by its ID. Accepts either a team bearer token (existing path) or an OIDC token authorized by one of the issuer's policies (e.g. a connex-grant token). The OIDC path returns the issuer without policies, since a policy token only proves signing access, not management access.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-next"><code>next</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieve the list of KMS issuers that belong to the authenticated team. The results are paginated.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Create a new KMS issuer for the authenticated team. An issuer owns the asymmetric signing keys that are used to sign tokens and messages.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-issuer_id"><code>issuer_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Update a KMS issuer's name or claims schema.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-issuer_id"><code>issuer_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Delete a KMS issuer and its signing keys.</td>
</tr>
<tr>
    <td><a href="#sign_message"><CopyableCode code="sign_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-issuer_id"><code>issuer_id</code></a>, <a href="#parameter-message"><code>message</code></a></td>
    <td></td>
    <td>Sign a raw message with a KMS issuer's active signing key. Authenticate the request with a Vercel OIDC token in the `Authorization: Bearer` header; the issuer's policies decide which workloads are allowed to sign.</td>
</tr>
<tr>
    <td><a href="#sign_token"><CopyableCode code="sign_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-issuer_id"><code>issuer_id</code></a></td>
    <td></td>
    <td>Sign a JWT with a KMS issuer's active signing key. Authenticate the request with a Vercel OIDC token in the `Authorization: Bearer` header; the issuer's policies decide which workloads are allowed to sign.</td>
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
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of issuers to return.</td>
</tr>
<tr id="parameter-next">
    <td><CopyableCode code="next" /></td>
    <td><code>string</code></td>
    <td>Continuation cursor to retrieve the next page of results.</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Retrieve a single KMS issuer by its ID. Accepts either a team bearer token (existing path) or an OIDC token authorized by one of the issuer's policies (e.g. a connex-grant token). The OIDC path returns the issuer without policies, since a policy token only proves signing access, not management access.

```sql
SELECT
id,
name,
owner_id,
algorithm,
claims_schema,
created_at,
managed_by,
origin,
policies,
signing_keys,
updated_at
FROM vercel.kms.issuers
WHERE issuer_id = '{{ issuer_id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Retrieve the list of KMS issuers that belong to the authenticated team. The results are paginated.

```sql
SELECT
id,
name,
owner_id,
algorithm,
claims_schema,
created_at,
managed_by,
origin,
policies,
signing_keys,
updated_at
FROM vercel.kms.issuers
WHERE limit = '{{ limit }}'
AND next = '{{ next }}'
AND team_id = '{{ team_id }}'
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

Create a new KMS issuer for the authenticated team. An issuer owns the asymmetric signing keys that are used to sign tokens and messages.

```sql
INSERT INTO vercel.kms.issuers (
name,
algorithm,
claims_schema,
policy,
import_key,
import_key_id,
team_id,
slug
)
SELECT 
'{{ name }}' /* required */,
'{{ algorithm }}',
'{{ claims_schema }}',
'{{ policy }}',
'{{ import_key }}',
'{{ import_key_id }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
id,
name,
owner_id,
algorithm,
claims_schema,
created_at,
managed_by,
origin,
policies,
signing_keys,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: issuers
  props:
    - name: name
      value: "{{ name }}"
      description: |
        The name of the issuer.
    - name: algorithm
      value: "{{ algorithm }}"
      description: |
        The signing algorithm to use for the issuer. EdDSA is not accepted for new issuers.
      valid_values: ['RS256', 'RS384', 'RS512', 'PS256', 'PS384', 'PS512', 'ES256', 'ES384', 'ES512']
      default: RS512
    - name: claims_schema
      value: "{{ claims_schema }}"
      description: |
        A JSON Schema used to validate the resolved token claims when signing tokens for this issuer.
    - name: policy
      value:
        kind: "{{ kind }}"
        teamId: "{{ teamId }}"
        projectId: "{{ projectId }}"
        environments:
          - "{{ environments }}"
        tokenClaims: "{{ tokenClaims }}"
        clientId: "{{ clientId }}"
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


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Update a KMS issuer's name or claims schema.

```sql
UPDATE vercel.kms.issuers
SET 
name = '{{ name }}',
claims_schema = '{{ claims_schema }}'
WHERE 
issuer_id = '{{ issuer_id }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
id,
name,
owner_id,
algorithm,
claims_schema,
created_at,
managed_by,
origin,
policies,
signing_keys,
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

Delete a KMS issuer and its signing keys.

```sql
DELETE FROM vercel.kms.issuers
WHERE issuer_id = '{{ issuer_id }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="sign_message"
    values={[
        { label: 'sign_message', value: 'sign_message' },
        { label: 'sign_token', value: 'sign_token' }
    ]}
>
<TabItem value="sign_message">

Sign a raw message with a KMS issuer's active signing key. Authenticate the request with a Vercel OIDC token in the `Authorization: Bearer` header; the issuer's policies decide which workloads are allowed to sign.

```sql
EXEC vercel.kms.issuers.sign_message 
@issuer_id='{{ issuer_id }}' --required 
@@json=
'{
"message": "{{ message }}"
}'
;
```
</TabItem>
<TabItem value="sign_token">

Sign a JWT with a KMS issuer's active signing key. Authenticate the request with a Vercel OIDC token in the `Authorization: Bearer` header; the issuer's policies decide which workloads are allowed to sign.

```sql
EXEC vercel.kms.issuers.sign_token 
@issuer_id='{{ issuer_id }}' --required 
@@json=
'{
"claims": "{{ claims }}", 
"headers": "{{ headers }}", 
"ttl": {{ ttl }}
}'
;
```
</TabItem>
</Tabs>
