--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
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

Creates, updates, deletes, gets or lists a <code>domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.projects.domains" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="custom_environment_id" /></td>
    <td><code>string</code></td>
    <td> (wire: customEnvironmentId)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td> (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="apex_name" /></td>
    <td><code>string</code></td>
    <td> (wire: apexName)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="git_branch" /></td>
    <td><code>string</code></td>
    <td> (wire: gitBranch)</td>
</tr>
<tr>
    <td><CopyableCode code="redirect" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="redirect_status_code" /></td>
    <td><code>number</code></td>
    <td> (301, 302, 307, 308, ) (wire: redirectStatusCode)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td> (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="verification" /></td>
    <td><code>array</code></td>
    <td>A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.</td>
</tr>
<tr>
    <td><CopyableCode code="verified" /></td>
    <td><code>boolean</code></td>
    <td>`true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed. (false, true)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Successful response retrieving a list of domains

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="custom_environment_id" /></td>
    <td><code>string</code></td>
    <td> (wire: customEnvironmentId)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td> (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="apex_name" /></td>
    <td><code>string</code></td>
    <td> (wire: apexName)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="git_branch" /></td>
    <td><code>string</code></td>
    <td> (wire: gitBranch)</td>
</tr>
<tr>
    <td><CopyableCode code="redirect" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="redirect_status_code" /></td>
    <td><code>number</code></td>
    <td> (301, 302, 307, 308, ) (wire: redirectStatusCode)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td> (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="verification" /></td>
    <td><code>array</code></td>
    <td>A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.</td>
</tr>
<tr>
    <td><CopyableCode code="verified" /></td>
    <td><code>boolean</code></td>
    <td>`true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed. (false, true)</td>
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
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Get project domain by project id/name and domain name.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-production"><code>production</code></a>, <a href="#parameter-target"><code>target</code></a>, <a href="#parameter-custom_environment_id"><code>custom_environment_id</code></a>, <a href="#parameter-git_branch"><code>git_branch</code></a>, <a href="#parameter-redirects"><code>redirects</code></a>, <a href="#parameter-redirect"><code>redirect</code></a>, <a href="#parameter-verified"><code>verified</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-order"><code>order</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieve the domains associated with a given project by passing either the project `id` or `name` in the URL.</td>
</tr>
<tr>
    <td><a href="#add"><CopyableCode code="add" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Add a domain to the project by passing its domain name and by specifying the project by either passing the project `id` or `name` in the URL. If the domain is not yet verified to be used on this project, the request will return `verified = false`, and the domain will need to be verified according to the `verification` challenge via `POST /projects/:idOrName/domains/:domain/verify`. If the domain already exists on the project, the request will fail with a `400` status code.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Update a project domain's configuration, including the name, git branch and redirect of the domain.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Remove a domain from a project by passing the domain name and by specifying the project by either passing the project `id` or `name` in the URL.</td>
</tr>
<tr>
    <td><a href="#move"><CopyableCode code="move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-projectId"><code>projectId</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Move one project's domain to another project. Also allows the move of all redirects pointed to that domain in the same project.</td>
</tr>
<tr>
    <td><a href="#verify"><CopyableCode code="verify" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Attempts to verify a project domain with `verified = false` by checking the correctness of the project domain's `verification` challenge.</td>
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
    <td>The domain name you want to verify</td>
</tr>
<tr id="parameter-id_or_name">
    <td><CopyableCode code="id_or_name" /></td>
    <td><code>string</code></td>
    <td>The unique project identifier or the project name</td>
</tr>
<tr id="parameter-custom_environment_id">
    <td><CopyableCode code="custom_environment_id" /></td>
    <td><code>string</code></td>
    <td>The unique custom environment identifier within the project (wire: customEnvironmentId)</td>
</tr>
<tr id="parameter-git_branch">
    <td><CopyableCode code="git_branch" /></td>
    <td><code>string</code></td>
    <td>Filters domains based on specific branch. (wire: gitBranch)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>number</code></td>
    <td>Maximum number of domains to list from a request (max 100).</td>
</tr>
<tr id="parameter-order">
    <td><CopyableCode code="order" /></td>
    <td><code></code></td>
    <td>Domains sort order by createdAt</td>
</tr>
<tr id="parameter-production">
    <td><CopyableCode code="production" /></td>
    <td><code></code></td>
    <td>Filters only production domains when set to `true`.</td>
</tr>
<tr id="parameter-redirect">
    <td><CopyableCode code="redirect" /></td>
    <td><code>string</code></td>
    <td>Filters domains based on their redirect target.</td>
</tr>
<tr id="parameter-redirects">
    <td><CopyableCode code="redirects" /></td>
    <td><code></code></td>
    <td>Excludes redirect project domains when "false". Includes redirect project domains when "true" (default).</td>
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
<tr id="parameter-target">
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>Filters on the target of the domain. Can be either "production", "preview"</td>
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
<tr id="parameter-verified">
    <td><CopyableCode code="verified" /></td>
    <td><code></code></td>
    <td>Filters domains based on their verification status.</td>
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

Get project domain by project id/name and domain name.

```sql
SELECT
name,
custom_environment_id,
project_id,
apex_name,
created_at,
git_branch,
redirect,
redirect_status_code,
updated_at,
verification,
verified
FROM vercel.projects.domains
WHERE id_or_name = '{{ id_or_name }}' -- required
AND domain = '{{ domain }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Retrieve the domains associated with a given project by passing either the project `id` or `name` in the URL.

```sql
SELECT
name,
custom_environment_id,
project_id,
apex_name,
created_at,
git_branch,
redirect,
redirect_status_code,
updated_at,
verification,
verified
FROM vercel.projects.domains
WHERE id_or_name = '{{ id_or_name }}' -- required
AND production = '{{ production }}'
AND target = '{{ target }}'
AND custom_environment_id = '{{ custom_environment_id }}'
AND git_branch = '{{ git_branch }}'
AND redirects = '{{ redirects }}'
AND redirect = '{{ redirect }}'
AND verified = '{{ verified }}'
AND limit = '{{ limit }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
AND order = '{{ order }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add"
    values={[
        { label: 'add', value: 'add' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add">

Add a domain to the project by passing its domain name and by specifying the project by either passing the project `id` or `name` in the URL. If the domain is not yet verified to be used on this project, the request will return `verified = false`, and the domain will need to be verified according to the `verification` challenge via `POST /projects/:idOrName/domains/:domain/verify`. If the domain already exists on the project, the request will fail with a `400` status code.

```sql
INSERT INTO vercel.projects.domains (
name,
git_branch,
custom_environment_id,
redirect,
redirect_status_code,
id_or_name,
team_id,
slug
)
SELECT 
'{{ name }}' /* required */,
'{{ git_branch }}',
'{{ custom_environment_id }}',
'{{ redirect }}',
{{ redirect_status_code }},
'{{ id_or_name }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
name,
custom_environment_id,
project_id,
apex_name,
created_at,
git_branch,
redirect,
redirect_status_code,
updated_at,
verification,
verified
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domains
  props:
    - name: id_or_name
      value: "{{ id_or_name }}"
      description: Required parameter for the domains resource.
    - name: name
      value: "{{ name }}"
      description: |
        The project domain name
    - name: git_branch
      value: "{{ git_branch }}"
      description: |
        Git branch to link the project domain
    - name: custom_environment_id
      value: "{{ custom_environment_id }}"
      description: |
        The unique custom environment identifier within the project
    - name: redirect
      value: "{{ redirect }}"
      description: |
        Target destination domain for redirect
    - name: redirect_status_code
      value: {{ redirect_status_code }}
      description: |
        Status code for domain redirect
      valid_values: ['', '301', '302', '307', '308']
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

Update a project domain's configuration, including the name, git branch and redirect of the domain.

```sql
UPDATE vercel.projects.domains
SET 
git_branch = '{{ git_branch }}',
redirect = '{{ redirect }}',
redirect_status_code = {{ redirect_status_code }}
WHERE 
id_or_name = '{{ id_or_name }}' --required
AND domain = '{{ domain }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
name,
custom_environment_id,
project_id,
apex_name,
created_at,
git_branch,
redirect,
redirect_status_code,
updated_at,
verification,
verified;
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

Remove a domain from a project by passing the domain name and by specifying the project by either passing the project `id` or `name` in the URL.

```sql
DELETE FROM vercel.projects.domains
WHERE id_or_name = '{{ id_or_name }}' --required
AND domain = '{{ domain }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="move"
    values={[
        { label: 'move', value: 'move' },
        { label: 'verify', value: 'verify' }
    ]}
>
<TabItem value="move">

Move one project's domain to another project. Also allows the move of all redirects pointed to that domain in the same project.

```sql
EXEC vercel.projects.domains.move 
@id_or_name='{{ id_or_name }}' --required, 
@domain='{{ domain }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"projectId": "{{ projectId }}", 
"gitBranch": "{{ gitBranch }}", 
"redirect": "{{ redirect }}", 
"redirectStatusCode": {{ redirectStatusCode }}
}'
;
```
</TabItem>
<TabItem value="verify">

Attempts to verify a project domain with `verified = false` by checking the correctness of the project domain's `verification` challenge.

```sql
EXEC vercel.projects.domains.verify 
@id_or_name='{{ id_or_name }}' --required, 
@domain='{{ domain }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}'
;
```
</TabItem>
</Tabs>
