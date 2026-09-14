--- 
title: log_drains
hide_title: false
hide_table_of_contents: false
keywords:
  - log_drains
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

Creates, updates, deletes, gets or lists a <code>log_drains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="log_drains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.log_drains.log_drains" /></td></tr>
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
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td> (wire: clientId)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_id" /></td>
    <td><code>string</code></td>
    <td> (wire: configurationId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_from" /></td>
    <td><code>string</code></td>
    <td> (wire: createdFrom)</td>
</tr>
<tr>
    <td><CopyableCode code="integration_configuration_uri" /></td>
    <td><code>string</code></td>
    <td> (wire: integrationConfigurationUri)</td>
</tr>
<tr>
    <td><CopyableCode code="integration_icon" /></td>
    <td><code>string</code></td>
    <td> (wire: integrationIcon)</td>
</tr>
<tr>
    <td><CopyableCode code="integration_website" /></td>
    <td><code>string</code></td>
    <td> (wire: integrationWebsite)</td>
</tr>
<tr>
    <td><CopyableCode code="projects_metadata" /></td>
    <td><code>array</code></td>
    <td> (wire: projectsMetadata)</td>
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
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td> (wire: clientId)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_id" /></td>
    <td><code>string</code></td>
    <td> (wire: configurationId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_from" /></td>
    <td><code>string</code></td>
    <td> (wire: createdFrom)</td>
</tr>
<tr>
    <td><CopyableCode code="integration_configuration_uri" /></td>
    <td><code>string</code></td>
    <td> (wire: integrationConfigurationUri)</td>
</tr>
<tr>
    <td><CopyableCode code="integration_icon" /></td>
    <td><code>string</code></td>
    <td> (wire: integrationIcon)</td>
</tr>
<tr>
    <td><CopyableCode code="integration_website" /></td>
    <td><code>string</code></td>
    <td> (wire: integrationWebsite)</td>
</tr>
<tr>
    <td><CopyableCode code="projects_metadata" /></td>
    <td><code>array</code></td>
    <td> (wire: projectsMetadata)</td>
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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieves a Configurable Log Drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated team can be accessed.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-project_id_or_name"><code>project_id_or_name</code></a>, <a href="#parameter-include_metadata"><code>include_metadata</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieves a list of all the Log Drains owned by the account. This endpoint must be called with an account AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated account can be accessed.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-delivery_format"><code>delivery_format</code></a>, <a href="#parameter-url"><code>url</code></a>, <a href="#parameter-sources"><code>sources</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Creates a configurable log drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Deletes a Configurable Log Drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated team can be deleted.</td>
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
    <td></td>
</tr>
<tr id="parameter-include_metadata">
    <td><CopyableCode code="include_metadata" /></td>
    <td><code>boolean</code></td>
    <td> (wire: includeMetadata)</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td> (wire: projectId)</td>
</tr>
<tr id="parameter-project_id_or_name">
    <td><CopyableCode code="project_id_or_name" /></td>
    <td><code>string</code></td>
    <td> (wire: projectIdOrName)</td>
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

Retrieves a Configurable Log Drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated team can be accessed.

```sql
SELECT
client_id,
configuration_id,
created_from,
integration_configuration_uri,
integration_icon,
integration_website,
projects_metadata
FROM vercel.log_drains.log_drains
WHERE id = '{{ id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Retrieves a list of all the Log Drains owned by the account. This endpoint must be called with an account AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated account can be accessed.

```sql
SELECT
client_id,
configuration_id,
created_from,
integration_configuration_uri,
integration_icon,
integration_website,
projects_metadata
FROM vercel.log_drains.log_drains
WHERE project_id = '{{ project_id }}'
AND project_id_or_name = '{{ project_id_or_name }}'
AND include_metadata = '{{ include_metadata }}'
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

Creates a configurable log drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed)

```sql
INSERT INTO vercel.log_drains.log_drains (
delivery_format,
url,
headers,
project_ids,
sources,
environments,
secret,
sampling_rate,
name,
team_id,
slug
)
SELECT 
'{{ delivery_format }}' /* required */,
'{{ url }}' /* required */,
'{{ headers }}',
'{{ project_ids }}',
'{{ sources }}' /* required */,
'{{ environments }}',
'{{ secret }}',
{{ sampling_rate }},
'{{ name }}',
'{{ team_id }}',
'{{ slug }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: log_drains
  props:
    - name: delivery_format
      value: "{{ delivery_format }}"
      description: |
        The delivery log format
      valid_values: ['json', 'ndjson']
    - name: url
      value: "{{ url }}"
      description: |
        The log drain url
    - name: headers
      value: "{{ headers }}"
      description: |
        Headers to be sent together with the request
    - name: project_ids
      value:
        - "{{ project_ids }}"
    - name: sources
      value:
        - "{{ sources }}"
    - name: environments
      value:
        - "{{ environments }}"
    - name: secret
      value: "{{ secret }}"
      description: |
        Custom secret of log drain
    - name: sampling_rate
      value: {{ sampling_rate }}
      description: |
        The sampling rate for this log drain. It should be a percentage rate between 0 and 100. With max 2 decimal points
    - name: name
      value: "{{ name }}"
      description: |
        The custom name of this log drain.
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

Deletes a Configurable Log Drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated team can be deleted.

```sql
DELETE FROM vercel.log_drains.log_drains
WHERE id = '{{ id }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
