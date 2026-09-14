--- 
title: privatelink_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - privatelink_endpoints
  - networking
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

Creates, updates, deletes, gets or lists a <code>privatelink_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="privatelink_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.networking.privatelink_endpoints" /></td></tr>
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

The requested PrivateLink endpoint.

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
    <td>The name of the PrivateLink endpoint, shown in the Vercel dashboard. (example: payments-db)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the PrivateLink endpoint. (example: ple_a1b2c3d4e5f6g7h8) (wire: endpointId)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the project the PrivateLink endpoint belongs to. (example: prj_a1b2c3d4e5f6g7h8) (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the team that owns the PrivateLink endpoint. (example: team_a1b2c3d4e5f6g7h8) (wire: teamId)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the underlying AWS VPC endpoint. Absent until AWS has created the endpoint. (example: vpce-0123456789abcdef0) (wire: vpcEndpointId)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_service_name" /></td>
    <td><code>string</code></td>
    <td>The AWS VPC endpoint service the endpoint connects to. (example: com.amazonaws.vpce.us-east-1.vpce-svc-0123456789abcdef0) (wire: awsServiceName)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_dns_entries" /></td>
    <td><code>array</code></td>
    <td>The regional DNS names assigned to the endpoint by AWS. Use these to reach the service when private DNS is not enabled. (wire: awsDnsEntries)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp in milliseconds since the UNIX epoch for when the endpoint was created. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="private_dns_names" /></td>
    <td><code>array</code></td>
    <td>The private DNS names of the endpoint service, populated when private DNS is enabled for the endpoint. (wire: privateDnsNames)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current state of the endpoint. - `creating`: the endpoint is being created. - `pending-acceptance`: waiting for the endpoint service owner to accept the connection. Only occurs for services that require manual acceptance. - `provisioning`: the connection was accepted and AWS is finishing setup. - `available`: the endpoint is fully provisioned and ready to use. - `rejected`: the endpoint service owner rejected the connection. - `failed`: the endpoint could not be provisioned. - `deleting`: the endpoint is being deleted. (available, creating, deleting, failed, pending-acceptance, provisioning, rejected) (example: available)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A human-readable explanation of why the endpoint could not be provisioned. Only set when `status` is `failed`, and absent for every other status including `rejected`, since AWS does not report a rejection reason. (example: Endpoint did not become available in time. Try deleting and recreating, or visit https:​//vercel.com/help if the issue persists.) (wire: statusMessage)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp in milliseconds since the UNIX epoch for when the endpoint was last updated. (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="vercel_region" /></td>
    <td><code>string</code></td>
    <td>The Vercel region the endpoint is provisioned in. (example: iad1) (wire: vercelRegion)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A PrivateLink endpoint, which connects a project to an AWS VPC endpoint service in a single region so that traffic reaches the service over AWS PrivateLink rather than the public internet.

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
    <td>The name of the PrivateLink endpoint, shown in the Vercel dashboard. (example: payments-db)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the PrivateLink endpoint. (example: ple_a1b2c3d4e5f6g7h8) (wire: endpointId)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the project the PrivateLink endpoint belongs to. (example: prj_a1b2c3d4e5f6g7h8) (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the team that owns the PrivateLink endpoint. (example: team_a1b2c3d4e5f6g7h8) (wire: teamId)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the underlying AWS VPC endpoint. Absent until AWS has created the endpoint. (example: vpce-0123456789abcdef0) (wire: vpcEndpointId)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_service_name" /></td>
    <td><code>string</code></td>
    <td>The AWS VPC endpoint service the endpoint connects to. (example: com.amazonaws.vpce.us-east-1.vpce-svc-0123456789abcdef0) (wire: awsServiceName)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_dns_entries" /></td>
    <td><code>array</code></td>
    <td>The regional DNS names assigned to the endpoint by AWS. Use these to reach the service when private DNS is not enabled. (wire: awsDnsEntries)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp in milliseconds since the UNIX epoch for when the endpoint was created. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="private_dns_names" /></td>
    <td><code>array</code></td>
    <td>The private DNS names of the endpoint service, populated when private DNS is enabled for the endpoint. (wire: privateDnsNames)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current state of the endpoint. - `creating`: the endpoint is being created. - `pending-acceptance`: waiting for the endpoint service owner to accept the connection. Only occurs for services that require manual acceptance. - `provisioning`: the connection was accepted and AWS is finishing setup. - `available`: the endpoint is fully provisioned and ready to use. - `rejected`: the endpoint service owner rejected the connection. - `failed`: the endpoint could not be provisioned. - `deleting`: the endpoint is being deleted. (available, creating, deleting, failed, pending-acceptance, provisioning, rejected) (example: available)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A human-readable explanation of why the endpoint could not be provisioned. Only set when `status` is `failed`, and absent for every other status including `rejected`, since AWS does not report a rejection reason. (example: Endpoint did not become available in time. Try deleting and recreating, or visit https:​//vercel.com/help if the issue persists.) (wire: statusMessage)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp in milliseconds since the UNIX epoch for when the endpoint was last updated. (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="vercel_region" /></td>
    <td><code>string</code></td>
    <td>The Vercel region the endpoint is provisioned in. (example: iad1) (wire: vercelRegion)</td>
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
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-endpoint_id"><code>endpoint_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Reads a single PrivateLink endpoint.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Lists all PrivateLink endpoints for a project.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-vercel_region"><code>vercel_region</code></a>, <a href="#parameter-aws_service_name"><code>aws_service_name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Creates a PrivateLink endpoint for a project.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-endpoint_id"><code>endpoint_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Updates a PrivateLink endpoint (name, privateDns).</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-endpoint_id"><code>endpoint_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Deletes a PrivateLink endpoint.</td>
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
<tr id="parameter-endpoint_id">
    <td><CopyableCode code="endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the PrivateLink endpoint.</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The project ID the PrivateLink endpoint belongs to. (wire: projectId)</td>
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

Reads a single PrivateLink endpoint.

```sql
SELECT
name,
endpoint_id,
project_id,
team_id,
vpc_endpoint_id,
aws_service_name,
aws_dns_entries,
created_at,
private_dns_names,
status,
status_message,
updated_at,
vercel_region
FROM vercel.networking.privatelink_endpoints
WHERE project_id = '{{ project_id }}' -- required
AND endpoint_id = '{{ endpoint_id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Lists all PrivateLink endpoints for a project.

```sql
SELECT
name,
endpoint_id,
project_id,
team_id,
vpc_endpoint_id,
aws_service_name,
aws_dns_entries,
created_at,
private_dns_names,
status,
status_message,
updated_at,
vercel_region
FROM vercel.networking.privatelink_endpoints
WHERE project_id = '{{ project_id }}' -- required
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

Creates a PrivateLink endpoint for a project.

```sql
INSERT INTO vercel.networking.privatelink_endpoints (
project_id,
name,
vercel_region,
aws_service_name,
enable_private_dns,
team_id,
slug
)
SELECT 
'{{ project_id }}' /* required */,
'{{ name }}' /* required */,
'{{ vercel_region }}' /* required */,
'{{ aws_service_name }}' /* required */,
{{ enable_private_dns }},
'{{ team_id }}',
'{{ slug }}'
RETURNING
name,
endpoint_id,
project_id,
team_id,
vpc_endpoint_id,
aws_service_name,
aws_dns_entries,
created_at,
private_dns_names,
status,
status_message,
updated_at,
vercel_region
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: privatelink_endpoints
  props:
    - name: project_id
      value: "{{ project_id }}"
      description: |
        The project ID to create the PrivateLink endpoint for.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the PrivateLink endpoint, used as its label in the Vercel dashboard.
    - name: vercel_region
      value: "{{ vercel_region }}"
      description: |
        The Vercel region to provision the endpoint in. Advanced Networking must be enabled for the project in that region. The endpoint service itself may live in another AWS region.
    - name: aws_service_name
      value: "{{ aws_service_name }}"
      description: |
        The name of the AWS VPC endpoint service to connect to. Its AWS region is read from the name; when that region differs from the one behind \`vercelRegion\`, the service must allow cross-region access.
    - name: enable_private_dns
      value: {{ enable_private_dns }}
      description: |
        Whether to resolve the endpoint service through its private DNS names, which are then returned in \`privateDnsNames\`. Defaults to \`false\`, in which case the endpoint is reachable through the DNS names in \`awsDnsEntries\`.
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

Updates a PrivateLink endpoint (name, privateDns).

```sql
UPDATE vercel.networking.privatelink_endpoints
SET 
name = '{{ name }}',
enable_private_dns = {{ enable_private_dns }}
WHERE 
project_id = '{{ project_id }}' --required
AND endpoint_id = '{{ endpoint_id }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
name,
endpoint_id,
project_id,
team_id,
vpc_endpoint_id,
aws_service_name,
aws_dns_entries,
created_at,
private_dns_names,
status,
status_message,
updated_at,
vercel_region;
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

Deletes a PrivateLink endpoint.

```sql
DELETE FROM vercel.networking.privatelink_endpoints
WHERE project_id = '{{ project_id }}' --required
AND endpoint_id = '{{ endpoint_id }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
