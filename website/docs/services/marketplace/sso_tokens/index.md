--- 
title: sso_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - sso_tokens
  - marketplace
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

Creates, updates, deletes, gets or lists a <code>sso_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sso_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.marketplace.sso_tokens" /></td></tr>
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
    <td><a href="#exchange"><CopyableCode code="exchange" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-code"><code>code</code></a>, <a href="#parameter-client_id"><code>client_id</code></a>, <a href="#parameter-client_secret"><code>client_secret</code></a>, <a href="#parameter-grant_type"><code>grant_type</code></a>, <a href="#parameter-refresh_token"><code>refresh_token</code></a></td>
    <td></td>
    <td>During the autorization process, Vercel sends the user to the provider &#91;redirectLoginUrl&#93;(https:​//vercel.com/docs/integrations/create-integration/submit-integration#redirect-login-url), that includes the OAuth authorization `code` parameter. The provider then calls the SSO Token Exchange endpoint with the sent code and receives the OIDC token. They log the user in based on this token and redirects the user back to the Vercel account using deep-link parameters included the redirectLoginUrl. Providers should not persist the returned `id_token` in a database since the token will expire. See &#91;**Authentication with SSO**&#93;(https:​//vercel.com/docs/integrations/create-integration/marketplace-api#authentication-with-sso) for more details.</td>
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

## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="exchange"
    values={[
        { label: 'exchange', value: 'exchange' }
    ]}
>
<TabItem value="exchange">

During the autorization process, Vercel sends the user to the provider [redirectLoginUrl](https://vercel.com/docs/integrations/create-integration/submit-integration#redirect-login-url), that includes the OAuth authorization `code` parameter. The provider then calls the SSO Token Exchange endpoint with the sent code and receives the OIDC token. They log the user in based on this token and redirects the user back to the Vercel account using deep-link parameters included the redirectLoginUrl. Providers should not persist the returned `id_token` in a database since the token will expire. See [**Authentication with SSO**](https://vercel.com/docs/integrations/create-integration/marketplace-api#authentication-with-sso) for more details.

```sql
EXEC vercel.marketplace.sso_tokens.exchange 
@@json=
'{
"code": "{{ code }}", 
"state": "{{ state }}", 
"client_id": "{{ client_id }}", 
"client_secret": "{{ client_secret }}", 
"redirect_uri": "{{ redirect_uri }}", 
"grant_type": "{{ grant_type }}", 
"refresh_token": "{{ refresh_token }}"
}'
;
```
</TabItem>
</Tabs>
