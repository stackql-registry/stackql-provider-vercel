--- 
title: configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - configurations
  - integrations
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

Creates, updates, deletes, gets or lists a <code>configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.integrations.configurations" /></td></tr>
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

The configuration with the provided id

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
    <td>The unique identifier of the configuration (example: icfg_3bwCLgxL8qt5kjRLcv2Dit7F)</td>
</tr>
<tr>
    <td><CopyableCode code="accepted_policies_inherited_from_installation_id" /></td>
    <td><code>string</code></td>
    <td>Historical parent installation from which acceptedPolicies were inherited. This is immutable provenance, not current authorization or relationship truth. (wire: acceptedPoliciesInheritedFromInstallationId)</td>
</tr>
<tr>
    <td><CopyableCode code="external_id" /></td>
    <td><code>string</code></td>
    <td>An external identifier defined by the integration vendor. (wire: externalId)</td>
</tr>
<tr>
    <td><CopyableCode code="integration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the app the configuration was created for (example: oac_xzpVzcUOgcB1nrVlirtKhbWV) (wire: integrationId)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The user or team ID that owns the configuration (example: kr1PsOIzqEL5Xg6M4VZcZosf) (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>When the configuration was created for a team, this will show the ID of the team. (example: team_nLlpyC6RE1qxydlFKbrxDlud) (wire: teamId)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user that created the configuration. (example: kr1PsOIzqEL5Xg6M4VZcZosf) (wire: userId)</td>
</tr>
<tr>
    <td><CopyableCode code="can_configure_open_telemetry" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: canConfigureOpenTelemetry)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>number</code></td>
    <td>A timestamp that tells you when the configuration was installed successfully (wire: completedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>A timestamp that tells you when the configuration was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="customer_delete_requested_at" /></td>
    <td><code>number</code></td>
    <td>Record when the customer initited deletion, independent of whether `deleteRequestedAt` gets set. (wire: customerDeleteRequestedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="delete_requested_at" /></td>
    <td><code>number</code></td>
    <td>A timestamp that tells you when the configuration deletion has been started for cases when the deletion needs to be settled/approved by partners, such as when marketplace invoices have been paid. (wire: deleteRequestedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>number</code></td>
    <td>A timestamp that tells you when the configuration was deleted. (wire: deletedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled_at" /></td>
    <td><code>number</code></td>
    <td>A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team. (wire: disabledAt)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled_reason" /></td>
    <td><code>string</code></td>
    <td> (account-plan-downgrade, disabled-by-admin, disabled-by-owner, feature-not-available, original-owner-left-the-team, original-owner-role-downgraded) (wire: disabledReason)</td>
</tr>
<tr>
    <td><CopyableCode code="installation_type" /></td>
    <td><code>string</code></td>
    <td>Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external' (external, marketplace) (wire: installationType)</td>
</tr>
<tr>
    <td><CopyableCode code="notification" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="project_selection" /></td>
    <td><code>string</code></td>
    <td>A string representing the permission for projects. Possible values are `all` or `selected`. (all, selected) (example: all) (wire: projectSelection)</td>
</tr>
<tr>
    <td><CopyableCode code="projects" /></td>
    <td><code>array</code></td>
    <td>When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>The resources that are allowed to be accessed by the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The slug of the integration the configuration is created for. (example: slack)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics. (backoffice, cli, deploy-button, external, import-recommended-integrations, marketplace, oauth, organization, resource-claims, v0) (example: marketplace)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The configuration status. Optional. If not defined, assume 'ready'. (error, onboarding, pending, ready, resumed, suspended, uninstalled)</td>
</tr>
<tr>
    <td><CopyableCode code="transfer_request" /></td>
    <td><code></code></td>
    <td> (wire: transferRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (integration-configuration)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>A timestamp that tells you when the configuration was updated. (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The list of configurations for the authenticated user

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
    <td>The unique identifier of the configuration (example: icfg_3bwCLgxL8qt5kjRLcv2Dit7F)</td>
</tr>
<tr>
    <td><CopyableCode code="accepted_policies_inherited_from_installation_id" /></td>
    <td><code>string</code></td>
    <td>Historical parent installation from which acceptedPolicies were inherited. This is immutable provenance, not current authorization or relationship truth. (wire: acceptedPoliciesInheritedFromInstallationId)</td>
</tr>
<tr>
    <td><CopyableCode code="external_id" /></td>
    <td><code>string</code></td>
    <td>An external identifier defined by the integration vendor. (wire: externalId)</td>
</tr>
<tr>
    <td><CopyableCode code="integration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the app the configuration was created for (example: oac_xzpVzcUOgcB1nrVlirtKhbWV) (wire: integrationId)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The user or team ID that owns the configuration (example: kr1PsOIzqEL5Xg6M4VZcZosf) (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>When the configuration was created for a team, this will show the ID of the team. (example: team_nLlpyC6RE1qxydlFKbrxDlud) (wire: teamId)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user that created the configuration. (example: kr1PsOIzqEL5Xg6M4VZcZosf) (wire: userId)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>number</code></td>
    <td>A timestamp that tells you when the configuration was installed successfully (wire: completedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>A timestamp that tells you when the configuration was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="customer_delete_requested_at" /></td>
    <td><code>number</code></td>
    <td>Record when the customer initited deletion, independent of whether `deleteRequestedAt` gets set. (wire: customerDeleteRequestedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="delete_requested_at" /></td>
    <td><code>number</code></td>
    <td>A timestamp that tells you when the configuration deletion has been started for cases when the deletion needs to be settled/approved by partners, such as when marketplace invoices have been paid. (wire: deleteRequestedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>number</code></td>
    <td>A timestamp that tells you when the configuration was deleted. (wire: deletedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled_at" /></td>
    <td><code>number</code></td>
    <td>A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team. (wire: disabledAt)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled_reason" /></td>
    <td><code>string</code></td>
    <td> (account-plan-downgrade, disabled-by-admin, disabled-by-owner, feature-not-available, original-owner-left-the-team, original-owner-role-downgraded) (wire: disabledReason)</td>
</tr>
<tr>
    <td><CopyableCode code="installation_type" /></td>
    <td><code>string</code></td>
    <td>Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external' (external, marketplace) (wire: installationType)</td>
</tr>
<tr>
    <td><CopyableCode code="projects" /></td>
    <td><code>array</code></td>
    <td>When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>The resources that are allowed to be accessed by the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The slug of the integration the configuration is created for. (example: slack)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics. (backoffice, cli, deploy-button, external, import-recommended-integrations, marketplace, oauth, organization, resource-claims, v0) (example: marketplace)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The configuration status. Optional. If not defined, assume 'ready'. (error, onboarding, pending, ready, resumed, suspended, uninstalled)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (integration-configuration)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>A timestamp that tells you when the configuration was updated. (wire: updatedAt)</td>
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
    <td>Allows to retrieve a the configuration with the provided id in case it exists. The authenticated user or team must be the owner of the config in order to access it.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td><a href="#parameter-installation_type"><code>installation_type</code></a>, <a href="#parameter-integration_id_or_slug"><code>integration_id_or_slug</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Allows to retrieve all configurations for an authenticated integration. When the `project` view is used, configurations generated for the authorization flow will be filtered out of the results.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Allows to remove the configuration with the `id` provided in the parameters. The configuration and all of its resources will be removed. This includes Webhooks, LogDrains and Project Env variables.</td>
</tr>
<tr>
    <td><a href="#connect_resource_to_project"><CopyableCode code="connect_resource_to_project" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-projectId"><code>projectId</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Connects an integration resource to a Vercel project. This endpoint establishes a connection between a provisioned integration resource (from storage APIs like `POST /v1/storage/stores/integration/direct`) and a specific Vercel project.</td>
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
<tr id="parameter-integration_configuration_id">
    <td><CopyableCode code="integration_configuration_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-installation_type">
    <td><CopyableCode code="installation_type" /></td>
    <td><code>string</code></td>
    <td> (wire: installationType)</td>
</tr>
<tr id="parameter-integration_id_or_slug">
    <td><CopyableCode code="integration_id_or_slug" /></td>
    <td><code>string</code></td>
    <td>ID of the integration (wire: integrationIdOrSlug)</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Allows to retrieve a the configuration with the provided id in case it exists. The authenticated user or team must be the owner of the config in order to access it.

```sql
SELECT
id,
accepted_policies_inherited_from_installation_id,
external_id,
integration_id,
owner_id,
team_id,
user_id,
can_configure_open_telemetry,
completed_at,
created_at,
customer_delete_requested_at,
delete_requested_at,
deleted_at,
disabled_at,
disabled_reason,
installation_type,
notification,
project_selection,
projects,
scopes,
slug,
source,
status,
transfer_request,
type,
updated_at
FROM vercel.integrations.configurations
WHERE id = '{{ id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Allows to retrieve all configurations for an authenticated integration. When the `project` view is used, configurations generated for the authorization flow will be filtered out of the results.

```sql
SELECT
id,
accepted_policies_inherited_from_installation_id,
external_id,
integration_id,
owner_id,
team_id,
user_id,
completed_at,
created_at,
customer_delete_requested_at,
delete_requested_at,
deleted_at,
disabled_at,
disabled_reason,
installation_type,
projects,
scopes,
slug,
source,
status,
type,
updated_at
FROM vercel.integrations.configurations
WHERE view = '{{ view }}' -- required
AND installation_type = '{{ installation_type }}'
AND integration_id_or_slug = '{{ integration_id_or_slug }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
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

Allows to remove the configuration with the `id` provided in the parameters. The configuration and all of its resources will be removed. This includes Webhooks, LogDrains and Project Env variables.

```sql
DELETE FROM vercel.integrations.configurations
WHERE id = '{{ id }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="connect_resource_to_project"
    values={[
        { label: 'connect_resource_to_project', value: 'connect_resource_to_project' }
    ]}
>
<TabItem value="connect_resource_to_project">

Connects an integration resource to a Vercel project. This endpoint establishes a connection between a provisioned integration resource (from storage APIs like `POST /v1/storage/stores/integration/direct`) and a specific Vercel project.

```sql
EXEC vercel.integrations.configurations.connect_resource_to_project 
@integration_configuration_id='{{ integration_configuration_id }}' --required, 
@resource_id='{{ resource_id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"projectId": "{{ projectId }}", 
"envVarEnvironments": "{{ envVarEnvironments }}", 
"makeEnvVarsSensitive": {{ makeEnvVarsSensitive }}
}'
;
```
</TabItem>
</Tabs>
