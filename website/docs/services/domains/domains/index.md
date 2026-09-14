--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - domains
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

Creates, updates, deletes, gets or lists a <code>domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.domains.domains" /></td></tr>
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

Successful response retrieving an information for a specific domains.

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
    <td>The unique identifier of the domain. (example: EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The domain name. (example: example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td> (wire: teamId)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td> (wire: userId)</td>
</tr>
<tr>
    <td><CopyableCode code="bought_at" /></td>
    <td><code>number</code></td>
    <td>If it was purchased through Vercel, the timestamp in milliseconds when it was purchased. (wire: boughtAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp in milliseconds when the domain was created in the registry. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>An object containing information of the domain creator, including the user's id, username, and email.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_nameservers" /></td>
    <td><code>array</code></td>
    <td>A list of custom nameservers for the domain to point to. Only applies to domains purchased with Vercel. (wire: customNameservers)</td>
</tr>
<tr>
    <td><CopyableCode code="ech_mode" /></td>
    <td><code>string</code></td>
    <td>Whether the domain is enrolled in Encrypted Client Hello. `auto` leaves the decision to Vercel, `enabled` always enrolls, and `disabled` never enrolls and opts out of automatic enrollment. (auto, disabled, enabled) (example: auto) (wire: echMode)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp in milliseconds at which the domain is set to expire. null if not bought with Vercel. (wire: expiresAt)</td>
</tr>
<tr>
    <td><CopyableCode code="intended_nameservers" /></td>
    <td><code>array</code></td>
    <td>A list of the intended nameservers for the domain to point to Vercel DNS. (wire: intendedNameservers)</td>
</tr>
<tr>
    <td><CopyableCode code="nameservers" /></td>
    <td><code>array</code></td>
    <td>A list of the current nameservers of the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="renew" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the domain is set to automatically renew. (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available. (external, na, zeit.world) (example: zeit.world) (wire: serviceType)</td>
</tr>
<tr>
    <td><CopyableCode code="suffix" /></td>
    <td><code>boolean</code></td>
    <td> (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="transfer_started_at" /></td>
    <td><code>number</code></td>
    <td>If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated. (wire: transferStartedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="transferred_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp in milliseconds at which the domain was successfully transferred into Vercel. `null` if the transfer is still processing or was never transferred in. (wire: transferredAt)</td>
</tr>
<tr>
    <td><CopyableCode code="verified" /></td>
    <td><code>boolean</code></td>
    <td>If the domain has the ownership verified. (false, true)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Successful response retrieving a list of domains.

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
    <td>The unique identifier of the domain. (example: EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The domain name. (example: example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td> (wire: teamId)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td> (wire: userId)</td>
</tr>
<tr>
    <td><CopyableCode code="bought_at" /></td>
    <td><code>number</code></td>
    <td>If it was purchased through Vercel, the timestamp in milliseconds when it was purchased. (wire: boughtAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp in milliseconds when the domain was created in the registry. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>An object containing information of the domain creator, including the user's id, username, and email.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_nameservers" /></td>
    <td><code>array</code></td>
    <td>A list of custom nameservers for the domain to point to. Only applies to domains purchased with Vercel. (wire: customNameservers)</td>
</tr>
<tr>
    <td><CopyableCode code="ech_mode" /></td>
    <td><code>string</code></td>
    <td>Whether the domain is enrolled in Encrypted Client Hello. `auto` leaves the decision to Vercel, `enabled` always enrolls, and `disabled` never enrolls and opts out of automatic enrollment. (auto, disabled, enabled) (example: auto) (wire: echMode)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp in milliseconds at which the domain is set to expire. null if not bought with Vercel. (wire: expiresAt)</td>
</tr>
<tr>
    <td><CopyableCode code="intended_nameservers" /></td>
    <td><code>array</code></td>
    <td>A list of the intended nameservers for the domain to point to Vercel DNS. (wire: intendedNameservers)</td>
</tr>
<tr>
    <td><CopyableCode code="nameservers" /></td>
    <td><code>array</code></td>
    <td>A list of the current nameservers of the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="renew" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the domain is set to automatically renew. (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available. (external, na, zeit.world) (example: zeit.world) (wire: serviceType)</td>
</tr>
<tr>
    <td><CopyableCode code="transfer_started_at" /></td>
    <td><code>number</code></td>
    <td>If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated. (wire: transferStartedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="transferred_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp in milliseconds at which the domain was successfully transferred into Vercel. `null` if the transfer is still processing or was never transferred in. (wire: transferredAt)</td>
</tr>
<tr>
    <td><CopyableCode code="verified" /></td>
    <td><code>boolean</code></td>
    <td>If the domain has the ownership verified. (false, true)</td>
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
    <td><a href="#parameter-domain"><code>domain</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Get information for a single domain in an account or team.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieves a list of domains registered for the authenticated user or team. By default it returns the last 20 domains if no limit is provided.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-method"><code>method</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>This endpoint is used for adding a new apex domain name with Vercel for the authenticating user. Note: This endpoint is no longer used for initiating domain transfers from external registrars to Vercel. For this, please use the endpoint &#91;Transfer-in a domain&#93;(https:​//vercel.com/docs/rest-api/reference/endpoints/domains-registrar/transfer-in-a-domain).</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Update or move apex domain. Note: This endpoint is no longer used for updating auto-renew or nameservers. For this, please use the endpoints &#91;Update auto-renew for a domain&#93;(https:​//vercel.com/docs/rest-api/reference/endpoints/domains-registrar/update-auto-renew-for-a-domain) and &#91;Update nameservers for a domain&#93;(https:​//vercel.com/docs/rest-api/reference/endpoints/domains-registrar/update-nameservers-for-a-domain).</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Delete a previously registered domain name from Vercel. Deleting a domain will automatically remove any associated aliases.</td>
</tr>
<tr>
    <td><a href="#claim_ownership"><CopyableCode code="claim_ownership" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Claim ownership of a domain for the authenticated team by verifying a TXT record. The caller must first add a TXT record to `_vercel.&#123;domain&#125;` (obtained from GET /domains/:domain/verification), then call this endpoint to complete the ownership transfer. If the TXT record is verified, the domain ownership will be transferred to the caller's team, even if the domain is currently owned by another user or team.</td>
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
    <td>The domain name to claim ownership of</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>number</code></td>
    <td>Maximum number of domains to list from a request.</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>number</code></td>
    <td>Get domains created after this JavaScript timestamp.</td>
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
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code>number</code></td>
    <td>Get domains created before this JavaScript timestamp.</td>
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

Get information for a single domain in an account or team.

```sql
SELECT
id,
name,
team_id,
user_id,
bought_at,
created_at,
creator,
custom_nameservers,
ech_mode,
expires_at,
intended_nameservers,
nameservers,
renew,
service_type,
suffix,
transfer_started_at,
transferred_at,
verified
FROM vercel.domains.domains
WHERE domain = '{{ domain }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Retrieves a list of domains registered for the authenticated user or team. By default it returns the last 20 domains if no limit is provided.

```sql
SELECT
id,
name,
team_id,
user_id,
bought_at,
created_at,
creator,
custom_nameservers,
ech_mode,
expires_at,
intended_nameservers,
nameservers,
renew,
service_type,
transfer_started_at,
transferred_at,
verified
FROM vercel.domains.domains
WHERE limit = '{{ limit }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
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

This endpoint is used for adding a new apex domain name with Vercel for the authenticating user. Note: This endpoint is no longer used for initiating domain transfers from external registrars to Vercel. For this, please use the endpoint [Transfer-in a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/transfer-in-a-domain).

```sql
INSERT INTO vercel.domains.domains (
method,
name,
cdn_enabled,
zone,
token,
team_id,
slug
)
SELECT 
'{{ method }}' /* required */,
'{{ name }}' /* required */,
{{ cdn_enabled }},
{{ zone }},
'{{ token }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
domain
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domains
  props:
    - name: method
      value: "{{ method }}"
      description: |
        The domain operation to perform. It can be either \`add\` or \`move-in\`.
    - name: name
      value: "{{ name }}"
      description: |
        The domain name you want to add.
    - name: cdn_enabled
      value: {{ cdn_enabled }}
      description: |
        Whether the domain has the Vercel CDN enabled or not.
    - name: zone
      value: {{ zone }}
      description: |
        Whether to create a DNS zone on Vercel. Set \`true\` if using Vercel nameservers.
    - name: token
      value: "{{ token }}"
      description: |
        The move-in token from Move Requested email.
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

Update or move apex domain. Note: This endpoint is no longer used for updating auto-renew or nameservers. For this, please use the endpoints [Update auto-renew for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/update-auto-renew-for-a-domain) and [Update nameservers for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/update-nameservers-for-a-domain).

```sql
UPDATE vercel.domains.domains
SET 
op = '{{ op }}',
renew = {{ renew }},
custom_nameservers = '{{ custom_nameservers }}',
zone = {{ zone }},
ech_mode = '{{ ech_mode }}',
destination = '{{ destination }}'
WHERE 
domain = '{{ domain }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
custom_nameservers,
ech_mode,
moved,
renew,
token,
zone;
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

Delete a previously registered domain name from Vercel. Deleting a domain will automatically remove any associated aliases.

```sql
DELETE FROM vercel.domains.domains
WHERE domain = '{{ domain }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="claim_ownership"
    values={[
        { label: 'claim_ownership', value: 'claim_ownership' }
    ]}
>
<TabItem value="claim_ownership">

Claim ownership of a domain for the authenticated team by verifying a TXT record. The caller must first add a TXT record to `_vercel.&#123;domain&#125;` (obtained from GET /domains/:domain/verification), then call this endpoint to complete the ownership transfer. If the TXT record is verified, the domain ownership will be transferred to the caller's team, even if the domain is currently owned by another user or team.

```sql
EXEC vercel.domains.domains.claim_ownership 
@domain='{{ domain }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}'
;
```
</TabItem>
</Tabs>
