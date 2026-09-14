--- 
title: deployment_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - deployment_aliases
  - aliases
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

Creates, updates, deletes, gets or lists a <code>deployment_aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployment_aliases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.aliases.deployment_aliases" /></td></tr>
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

The list of aliases assigned to the deployment

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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The alias name, it could be a `.vercel.app` subdomain or a custom domain (example: my-alias.vercel.app)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the alias was created (example: 2017-04-26T23:00:34.232Z)</td>
</tr>
<tr>
    <td><CopyableCode code="protection_bypass" /></td>
    <td><code>object</code></td>
    <td>The protection bypass for the alias (wire: protectionBypass)</td>
</tr>
<tr>
    <td><CopyableCode code="redirect" /></td>
    <td><code>string</code></td>
    <td>Target destination domain for redirect when the alias is a redirect</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the alias (example: 2WjyKQmM8ZnGcJsPWMrHRHrE)</td>
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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieves all Aliases for the Deployment with the given ID. The authenticated user or team must own the deployment.</td>
</tr>
<tr>
    <td><a href="#assign"><CopyableCode code="assign" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Creates a new alias for the deployment resolved from the given deployment or alias ID or URL. The authenticated user or team must own this deployment. If the desired alias is already assigned to another deployment, then it will be removed from the old deployment and assigned to the new one.</td>
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
    <td><code></code></td>
    <td>The deployment or alias ID or URL to assign from</td>
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

Retrieves all Aliases for the Deployment with the given ID. The authenticated user or team must own the deployment.

```sql
SELECT
alias,
created,
protection_bypass,
redirect,
uid
FROM vercel.aliases.deployment_aliases
WHERE id = '{{ id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="assign"
    values={[
        { label: 'assign', value: 'assign' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="assign">

Creates a new alias for the deployment resolved from the given deployment or alias ID or URL. The authenticated user or team must own this deployment. If the desired alias is already assigned to another deployment, then it will be removed from the old deployment and assigned to the new one.

```sql
INSERT INTO vercel.aliases.deployment_aliases (
alias,
redirect,
id,
team_id,
slug
)
SELECT 
'{{ alias }}',
'{{ redirect }}',
'{{ id }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
old_deployment_id,
alias,
created,
uid
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: deployment_aliases
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the deployment_aliases resource.
    - name: alias
      value: "{{ alias }}"
      description: |
        The alias we want to assign to the deployment defined in the URL
    - name: redirect
      value: "{{ redirect }}"
      description: |
        The redirect property will take precedence over the deployment id from the URL and consists of a hostname (like test.com) to which the alias should redirect using status code 307
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
