--- 
title: networks
hide_title: false
hide_table_of_contents: false
keywords:
  - networks
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

Creates, updates, deletes, gets or lists a <code>networks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="networks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.networking.networks" /></td></tr>
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
    <td>The unique identifier of the Network.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the network.</td>
</tr>
<tr>
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the AWS Account in which the network exists. (wire: awsAccountId)</td>
</tr>
<tr>
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Team that owns the Network. (wire: teamId)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC which hosts the network. (wire: vpcId)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_availability_zone_ids" /></td>
    <td><code>array</code></td>
    <td>The IDs of the AWS Availability Zones in which the network exists, if specified during creation. (wire: awsAvailabilityZoneIds)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_region" /></td>
    <td><code>string</code></td>
    <td>The AWS Region in which the network exists. (wire: awsRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="cidr" /></td>
    <td><code>string</code></td>
    <td>The CIDR range of the Network.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>The date at which the Network was created, represented as a UNIX timestamp since EPOCH. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="egress_ip_addresses" /></td>
    <td><code>array</code></td>
    <td> (wire: egressIpAddresses)</td>
</tr>
<tr>
    <td><CopyableCode code="hosted_zones" /></td>
    <td><code>object</code></td>
    <td>Metadata about any AWS Route53 Hosted Zones associated with the Network. (wire: hostedZones)</td>
</tr>
<tr>
    <td><CopyableCode code="peering_connections" /></td>
    <td><code>object</code></td>
    <td>Metadata about any AWS Route53 Hosted Zones associated with the Network. (wire: peeringConnections)</td>
</tr>
<tr>
    <td><CopyableCode code="projects" /></td>
    <td><code>object</code></td>
    <td>Metadata about any projects associated with the Network.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Vercel region in which the Network exists.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Network. (create_in_progress, delete_in_progress, error, ready)</td>
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
    <td>The unique identifier of the Network.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the network.</td>
</tr>
<tr>
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the AWS Account in which the network exists. (wire: awsAccountId)</td>
</tr>
<tr>
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Team that owns the Network. (wire: teamId)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC which hosts the network. (wire: vpcId)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_availability_zone_ids" /></td>
    <td><code>array</code></td>
    <td>The IDs of the AWS Availability Zones in which the network exists, if specified during creation. (wire: awsAvailabilityZoneIds)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_region" /></td>
    <td><code>string</code></td>
    <td>The AWS Region in which the network exists. (wire: awsRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="cidr" /></td>
    <td><code>string</code></td>
    <td>The CIDR range of the Network.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>The date at which the Network was created, represented as a UNIX timestamp since EPOCH. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="egress_ip_addresses" /></td>
    <td><code>array</code></td>
    <td> (wire: egressIpAddresses)</td>
</tr>
<tr>
    <td><CopyableCode code="hosted_zones" /></td>
    <td><code>object</code></td>
    <td>Metadata about any AWS Route53 Hosted Zones associated with the Network. (wire: hostedZones)</td>
</tr>
<tr>
    <td><CopyableCode code="peering_connections" /></td>
    <td><code>object</code></td>
    <td>Metadata about any AWS Route53 Hosted Zones associated with the Network. (wire: peeringConnections)</td>
</tr>
<tr>
    <td><CopyableCode code="projects" /></td>
    <td><code>object</code></td>
    <td>Metadata about any projects associated with the Network.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Vercel region in which the Network exists.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Network. (create_in_progress, delete_in_progress, error, ready)</td>
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
    <td><a href="#parameter-network_id"><code>network_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Allows to read a Secure Compute network.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-include_hosted_zones"><code>include_hosted_zones</code></a>, <a href="#parameter-include_peering_connections"><code>include_peering_connections</code></a>, <a href="#parameter-include_projects"><code>include_projects</code></a>, <a href="#parameter-search"><code>search</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Allows to list Secure Compute networks.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cidr"><code>cidr</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Allows to create a Secure Compute network.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Allows to update a Secure Compute network.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Allows to delete a Secure Compute network.</td>
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
<tr id="parameter-network_id">
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the network to delete</td>
</tr>
<tr id="parameter-include_hosted_zones">
    <td><CopyableCode code="include_hosted_zones" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include Hosted Zones in the response (wire: includeHostedZones)</td>
</tr>
<tr id="parameter-include_peering_connections">
    <td><CopyableCode code="include_peering_connections" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include VPC Peering connections in the response (wire: includePeeringConnections)</td>
</tr>
<tr id="parameter-include_projects">
    <td><CopyableCode code="include_projects" /></td>
    <td><code>boolean</code></td>
    <td>Whether to include projects in the response (wire: includeProjects)</td>
</tr>
<tr id="parameter-search">
    <td><CopyableCode code="search" /></td>
    <td><code>string</code></td>
    <td>The query to use as a filter for returned networks</td>
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

Allows to read a Secure Compute network.

```sql
SELECT
id,
name,
aws_account_id,
team_id,
vpc_id,
aws_availability_zone_ids,
aws_region,
cidr,
created_at,
egress_ip_addresses,
hosted_zones,
peering_connections,
projects,
region,
status
FROM vercel.networking.networks
WHERE network_id = '{{ network_id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Allows to list Secure Compute networks.

```sql
SELECT
id,
name,
aws_account_id,
team_id,
vpc_id,
aws_availability_zone_ids,
aws_region,
cidr,
created_at,
egress_ip_addresses,
hosted_zones,
peering_connections,
projects,
region,
status
FROM vercel.networking.networks
WHERE include_hosted_zones = '{{ include_hosted_zones }}'
AND include_peering_connections = '{{ include_peering_connections }}'
AND include_projects = '{{ include_projects }}'
AND search = '{{ search }}'
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

Allows to create a Secure Compute network.

```sql
INSERT INTO vercel.networking.networks (
aws_availability_zone_ids,
cidr,
name,
region,
team_id,
slug
)
SELECT 
'{{ aws_availability_zone_ids }}',
'{{ cidr }}' /* required */,
'{{ name }}' /* required */,
'{{ region }}' /* required */,
'{{ team_id }}',
'{{ slug }}'
RETURNING
id,
name,
aws_account_id,
team_id,
vpc_id,
aws_availability_zone_ids,
aws_region,
cidr,
created_at,
egress_ip_addresses,
hosted_zones,
peering_connections,
projects,
region,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: networks
  props:
    - name: aws_availability_zone_ids
      value:
        - "{{ aws_availability_zone_ids }}"
    - name: cidr
      value: "{{ cidr }}"
      description: |
        The CIDR block of the network
    - name: name
      value: "{{ name }}"
      description: |
        The name of the network
    - name: region
      value: "{{ region }}"
      description: |
        The region where the network will be created
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

Allows to update a Secure Compute network.

```sql
UPDATE vercel.networking.networks
SET 
name = '{{ name }}'
WHERE 
network_id = '{{ network_id }}' --required
AND name = '{{ name }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
id,
name,
aws_account_id,
team_id,
vpc_id,
aws_availability_zone_ids,
aws_region,
cidr,
created_at,
egress_ip_addresses,
hosted_zones,
peering_connections,
projects,
region,
status;
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

Allows to delete a Secure Compute network.

```sql
DELETE FROM vercel.networking.networks
WHERE network_id = '{{ network_id }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
