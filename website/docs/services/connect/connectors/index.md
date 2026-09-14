--- 
title: connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - connectors
  - connect
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

Creates, updates, deletes, gets or lists a <code>connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.connect.connectors" /></td></tr>
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

The connector.

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
    <td>Stable `scl_` connector ID. Use this value directly in `&#123;connector&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Connector name within the owning team.</td>
</tr>
<tr>
    <td><CopyableCode code="default_installation_id" /></td>
    <td><code>string</code></td>
    <td>Installation used when a token request does not specify an installation. (wire: defaultInstallationId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human-readable connector name. (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="type_name" /></td>
    <td><code>string</code></td>
    <td>Human-readable name of the connector type. (wire: typeName)</td>
</tr>
<tr>
    <td><CopyableCode code="accent_color" /></td>
    <td><code>string</code></td>
    <td>Hex accent color (e.g., `#000000`) for branding. (wire: accentColor)</td>
</tr>
<tr>
    <td><CopyableCode code="app_tokens" /></td>
    <td><code>object</code></td>
    <td>App-token capabilities and known grants for the connector. (wire: appTokens)</td>
</tr>
<tr>
    <td><CopyableCode code="background_color" /></td>
    <td><code>string</code></td>
    <td>Hex background color (e.g., `#000000`) for branding. (wire: backgroundColor)</td>
</tr>
<tr>
    <td><CopyableCode code="client_url" /></td>
    <td><code>string</code></td>
    <td>Provider-side URL for viewing or managing the resource represented by the connector. The destination can be an app, account, phone line, or service instance, depending on the connector type. (wire: clientUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="connection_method" /></td>
    <td><code>string</code></td>
    <td>The connection method this connector was created from, when the create request named one. (wire: connectionMethod)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>Creation time in epoch milliseconds. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Principal that created the connector. (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_mode" /></td>
    <td><code>string</code></td>
    <td>How the connector row was originally created. New create paths stamp this explicitly; older rows may omit it. (managed, manual) (wire: creationMode)</td>
</tr>
<tr>
    <td><CopyableCode code="devsite" /></td>
    <td><code>string</code></td>
    <td>Developer website for the connected service.</td>
</tr>
<tr>
    <td><CopyableCode code="docsite" /></td>
    <td><code>string</code></td>
    <td>Developer documentation for the connected service.</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>Known events this connector subscribes to (e.g. Slack bot events, GitHub webhook events). Names are type-specific and validated by the managed-create flow when forwarded to the third-party service.</td>
</tr>
<tr>
    <td><CopyableCode code="icon" /></td>
    <td><code>string</code></td>
    <td>Connector branding icon. SHA-1 hash that resolves to the uploaded icon through the Vercel avatar service. Consumers render this with `https:​//vercel.com/api/www/avatar/&#123;icon&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="managed" /></td>
    <td><code>object</code></td>
    <td>Managed connector metadata exposed without leaking the manager connector or installation identifiers.</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_uri" /></td>
    <td><code>string</code></td>
    <td>Redirect URI registered with the third-party service for this connector, if any. Used by `startAuthorization`/`startInstallation` to replay the exact URI back to the provider's token endpoint. Absent on connectors created before this field was introduced; those callers fall back to the `https:​//connect.vercel.com/callback` default. (wire: redirectUri)</td>
</tr>
<tr>
    <td><CopyableCode code="reinstall_at" /></td>
    <td><code>number</code></td>
    <td>Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. (wire: reinstallAt)</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>Best-effort identifier of the third-party service this connector represents, independent of `type`. Examples: `'slack'`, `'mcp.linear.app'`, and `'auth.example.com'`. Always present in API responses.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_subject_types" /></td>
    <td><code>array</code></td>
    <td>Token subject types supported by the connector. (wire: supportedSubjectTypes)</td>
</tr>
<tr>
    <td><CopyableCode code="supports_icon" /></td>
    <td><code></code></td>
    <td>Whether the connector icon can propagate to the provider. (false, maybe, true) (wire: supportsIcon)</td>
</tr>
<tr>
    <td><CopyableCode code="supports_installation" /></td>
    <td><code>boolean</code></td>
    <td>Whether the connector supports an installation flow. (false, true) (wire: supportsInstallation)</td>
</tr>
<tr>
    <td><CopyableCode code="supports_revocation" /></td>
    <td><code>boolean</code></td>
    <td>Whether Connect can revoke tokens for this connector. (false, true) (wire: supportsRevocation)</td>
</tr>
<tr>
    <td><CopyableCode code="supports_triggers" /></td>
    <td><code>boolean</code></td>
    <td>Whether this connector type supports trigger webhooks. Derived from the type definition; indicates that `triggers` and `triggerDestinations` may be meaningful for this connector. (false, true) (wire: supportsTriggers)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>Which of the service's products/surfaces this connector points at.</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_destinations" /></td>
    <td><code>array</code></td>
    <td>Destinations that incoming triggers should be forwarded to. Limited to 3 entries. Set the initial destination with `triggerDestination` during creation. Replace the complete set with `PATCH /v1/connect/connectors/&#123;connector&#125;/trigger-destinations`. (wire: triggerDestinations)</td>
</tr>
<tr>
    <td><CopyableCode code="triggers" /></td>
    <td><code>object</code></td>
    <td>Incoming trigger configuration for the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Connector implementation type. (api-key, aws-alpha, custom, discord, github, linear, linq, microsoft-entra, microsoft-teams, oauth, photon, salesforce, sendblue, slack, snowflake, snowflake-wif)</td>
</tr>
<tr>
    <td><CopyableCode code="type_icon" /></td>
    <td><code>string</code></td>
    <td>Icon identifier supplied by the connector type. (wire: typeIcon)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Team-scoped UID. URL-encode this value before using it in `&#123;connector&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>Last update time in epoch milliseconds. (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>object</code></td>
    <td>Principal that most recently updated the connector. (wire: updatedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="user_tokens" /></td>
    <td><code>object</code></td>
    <td>User-token capabilities and known grants for the connector. (wire: userTokens)</td>
</tr>
<tr>
    <td><CopyableCode code="website" /></td>
    <td><code>string</code></td>
    <td>Public website for the connected service.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A page of connectors.

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
    <td>Stable `scl_` connector ID. Use this value directly in `&#123;connector&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Connector name within the owning team.</td>
</tr>
<tr>
    <td><CopyableCode code="default_installation_id" /></td>
    <td><code>string</code></td>
    <td>Installation used when a token request does not specify an installation. (wire: defaultInstallationId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human-readable connector name. (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="type_name" /></td>
    <td><code>string</code></td>
    <td>Human-readable name of the connector type. (wire: typeName)</td>
</tr>
<tr>
    <td><CopyableCode code="accent_color" /></td>
    <td><code>string</code></td>
    <td>Hex accent color (e.g., `#000000`) for branding. (wire: accentColor)</td>
</tr>
<tr>
    <td><CopyableCode code="app_tokens" /></td>
    <td><code>object</code></td>
    <td>App-token capabilities and known grants for the connector. (wire: appTokens)</td>
</tr>
<tr>
    <td><CopyableCode code="background_color" /></td>
    <td><code>string</code></td>
    <td>Hex background color (e.g., `#000000`) for branding. (wire: backgroundColor)</td>
</tr>
<tr>
    <td><CopyableCode code="client_url" /></td>
    <td><code>string</code></td>
    <td>Provider-side URL for viewing or managing the resource represented by the connector. The destination can be an app, account, phone line, or service instance, depending on the connector type. (wire: clientUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="connection_method" /></td>
    <td><code>string</code></td>
    <td>The connection method this connector was created from, when the create request named one. (wire: connectionMethod)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>Creation time in epoch milliseconds. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Principal that created the connector. (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_mode" /></td>
    <td><code>string</code></td>
    <td>How the connector row was originally created. New create paths stamp this explicitly; older rows may omit it. (managed, manual) (wire: creationMode)</td>
</tr>
<tr>
    <td><CopyableCode code="devsite" /></td>
    <td><code>string</code></td>
    <td>Developer website for the connected service.</td>
</tr>
<tr>
    <td><CopyableCode code="docsite" /></td>
    <td><code>string</code></td>
    <td>Developer documentation for the connected service.</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>Known events this connector subscribes to (e.g. Slack bot events, GitHub webhook events). Names are type-specific and validated by the managed-create flow when forwarded to the third-party service.</td>
</tr>
<tr>
    <td><CopyableCode code="icon" /></td>
    <td><code>string</code></td>
    <td>Connector branding icon. SHA-1 hash that resolves to the uploaded icon through the Vercel avatar service. Consumers render this with `https:​//vercel.com/api/www/avatar/&#123;icon&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="managed" /></td>
    <td><code>object</code></td>
    <td>Managed connector metadata exposed without leaking the manager connector or installation identifiers.</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_uri" /></td>
    <td><code>string</code></td>
    <td>Redirect URI registered with the third-party service for this connector, if any. Used by `startAuthorization`/`startInstallation` to replay the exact URI back to the provider's token endpoint. Absent on connectors created before this field was introduced; those callers fall back to the `https:​//connect.vercel.com/callback` default. (wire: redirectUri)</td>
</tr>
<tr>
    <td><CopyableCode code="reinstall_at" /></td>
    <td><code>number</code></td>
    <td>Time when this connector started requiring reinstallation because an installation-affecting app-token grant changed. (wire: reinstallAt)</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>Best-effort identifier of the third-party service this connector represents, independent of `type`. Examples: `'slack'`, `'mcp.linear.app'`, and `'auth.example.com'`. Always present in API responses.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_subject_types" /></td>
    <td><code>array</code></td>
    <td>Token subject types supported by the connector. (wire: supportedSubjectTypes)</td>
</tr>
<tr>
    <td><CopyableCode code="supports_icon" /></td>
    <td><code></code></td>
    <td>Whether the connector icon can propagate to the provider. (false, maybe, true) (wire: supportsIcon)</td>
</tr>
<tr>
    <td><CopyableCode code="supports_installation" /></td>
    <td><code>boolean</code></td>
    <td>Whether the connector supports an installation flow. (false, true) (wire: supportsInstallation)</td>
</tr>
<tr>
    <td><CopyableCode code="supports_revocation" /></td>
    <td><code>boolean</code></td>
    <td>Whether Connect can revoke tokens for this connector. (false, true) (wire: supportsRevocation)</td>
</tr>
<tr>
    <td><CopyableCode code="supports_triggers" /></td>
    <td><code>boolean</code></td>
    <td>Whether this connector type supports trigger webhooks. Derived from the type definition; indicates that `triggers` and `triggerDestinations` may be meaningful for this connector. (false, true) (wire: supportsTriggers)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>Which of the service's products/surfaces this connector points at.</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_destinations" /></td>
    <td><code>array</code></td>
    <td>Destinations that incoming triggers should be forwarded to. Limited to 3 entries. Set the initial destination with `triggerDestination` during creation. Replace the complete set with `PATCH /v1/connect/connectors/&#123;connector&#125;/trigger-destinations`. (wire: triggerDestinations)</td>
</tr>
<tr>
    <td><CopyableCode code="triggers" /></td>
    <td><code>object</code></td>
    <td>Incoming trigger configuration for the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Connector implementation type. (api-key, aws-alpha, custom, discord, github, linear, linq, microsoft-entra, microsoft-teams, oauth, photon, salesforce, sendblue, slack, snowflake, snowflake-wif)</td>
</tr>
<tr>
    <td><CopyableCode code="type_icon" /></td>
    <td><code>string</code></td>
    <td>Icon identifier supplied by the connector type. (wire: typeIcon)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Team-scoped UID. URL-encode this value before using it in `&#123;connector&#125;`.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>Last update time in epoch milliseconds. (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>object</code></td>
    <td>Principal that most recently updated the connector. (wire: updatedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="user_tokens" /></td>
    <td><code>object</code></td>
    <td>User-token capabilities and known grants for the connector. (wire: userTokens)</td>
</tr>
<tr>
    <td><CopyableCode code="website" /></td>
    <td><code>string</code></td>
    <td>Public website for the connected service.</td>
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
    <td><a href="#parameter-connector"><code>connector</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Get the connector by ID. Accepts a dashboard/team requester or a deployment's project OIDC token; project requesters may only read connectors linked to their project and environment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-search"><code>search</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-service"><code>service</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>List connectors that belong to a team.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-service"><code>service</code></a>, <a href="#parameter-connection_method"><code>connection_method</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Create a connector and optionally link it to a project. Use `type` with complete provider data, or use `service` with `connectionMethod` so Connect can supply the type, endpoints, templates, and defaults.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-connector"><code>connector</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Update a connector and return the connector with any service-side update signals that the caller must handle.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-connector"><code>connector</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Delete a connector, its project connections, and its installation records.</td>
</tr>
<tr>
    <td><a href="#replace_trigger_destinations"><CopyableCode code="replace_trigger_destinations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-connector"><code>connector</code></a>, <a href="#parameter-destinations"><code>destinations</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Replace the full set of destinations that receive trigger requests for a connector.</td>
</tr>
<tr>
    <td><a href="#get_token"><CopyableCode code="get_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-connector"><code>connector</code></a></td>
    <td></td>
    <td>Get an access token for a connector identified by the path parameter and scoped to the requester.</td>
</tr>
<tr>
    <td><a href="#create_authorization_request"><CopyableCode code="create_authorization_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-connector"><code>connector</code></a></td>
    <td></td>
    <td>Create an authorization request for a connector and return the URL and verifier details needed to complete the flow.</td>
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
<tr id="parameter-connector">
    <td><CopyableCode code="connector" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>Cursor from `pagination.next` on the previous response.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of connectors to return. Defaults to 20.</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Return only connectors connected to this project. (wire: projectId)</td>
</tr>
<tr id="parameter-search">
    <td><CopyableCode code="search" /></td>
    <td><code>string</code></td>
    <td>Search connector names, UIDs, and services.</td>
</tr>
<tr id="parameter-service">
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>Comma-separated provider or service identifiers.</td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The team slug that scopes the request. Do not send it with teamId. If both are omitted, Vercel uses the team associated with the token or the authenticated user's default team. The request returns 401 if no team can be selected.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sort by name in ascending order, or by creation or update time in descending order.</td>
</tr>
<tr id="parameter-teamId">
    <td><CopyableCode code="teamId" /></td>
    <td><code>string</code></td>
    <td>The team ID that scopes the request. Do not send it with slug. If both are omitted, Vercel uses the team associated with the token or the authenticated user's default team. The request returns 401 if no team can be selected.</td>
</tr>
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The team ID that scopes the request. Do not send it with slug. If both are omitted, Vercel uses the team associated with the token or the authenticated user's default team. The request returns 401 if no team can be selected. (wire: teamId)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Comma-separated connector types: `slack`, `discord`, `github`, `linear`, `linq`, `salesforce`, `sendblue`, `snowflake`, `snowflake-wif`, `microsoft-entra`, `api-key`, `photon`, `oauth`, or `custom`.</td>
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

Get the connector by ID. Accepts a dashboard/team requester or a deployment's project OIDC token; project requesters may only read connectors linked to their project and environment.

```sql
SELECT
id,
name,
default_installation_id,
display_name,
type_name,
accent_color,
app_tokens,
background_color,
client_url,
connection_method,
created_at,
created_by,
creation_mode,
devsite,
docsite,
events,
icon,
managed,
redirect_uri,
reinstall_at,
service,
supported_subject_types,
supports_icon,
supports_installation,
supports_revocation,
supports_triggers,
target,
trigger_destinations,
triggers,
type,
type_icon,
uid,
updated_at,
updated_by,
user_tokens,
website
FROM vercel.connect.connectors
WHERE connector = '{{ connector }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

List connectors that belong to a team.

```sql
SELECT
id,
name,
default_installation_id,
display_name,
type_name,
accent_color,
app_tokens,
background_color,
client_url,
connection_method,
created_at,
created_by,
creation_mode,
devsite,
docsite,
events,
icon,
managed,
redirect_uri,
reinstall_at,
service,
supported_subject_types,
supports_icon,
supports_installation,
supports_revocation,
supports_triggers,
target,
trigger_destinations,
triggers,
type,
type_icon,
uid,
updated_at,
updated_by,
user_tokens,
website
FROM vercel.connect.connectors
WHERE limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
AND project_id = '{{ project_id }}'
AND search = '{{ search }}'
AND type = '{{ type }}'
AND service = '{{ service }}'
AND sort = '{{ sort }}'
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

Create a connector and optionally link it to a project. Use `type` with complete provider data, or use `service` with `connectionMethod` so Connect can supply the type, endpoints, templates, and defaults.

```sql
INSERT INTO vercel.connect.connectors (
data,
icon,
background_color,
accent_color,
type,
service,
connection_method,
params,
target,
uid,
name,
project_id,
environments,
triggers,
trigger_destination,
events,
team_id,
slug
)
SELECT 
'{{ data }}' /* required */,
'{{ icon }}',
'{{ background_color }}',
'{{ accent_color }}',
'{{ type }}' /* required */,
'{{ service }}' /* required */,
'{{ connection_method }}' /* required */,
'{{ params }}',
'{{ target }}',
'{{ uid }}',
'{{ name }}',
'{{ project_id }}',
'{{ environments }}',
{{ triggers }},
'{{ trigger_destination }}',
'{{ events }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
id,
name,
default_installation_id,
display_name,
type_name,
accent_color,
app_tokens,
background_color,
client_url,
connection_method,
created_at,
created_by,
creation_mode,
devsite,
docsite,
events,
icon,
managed,
redirect_uri,
reinstall_at,
service,
supported_subject_types,
supports_icon,
supports_installation,
supports_revocation,
supports_triggers,
target,
trigger_destinations,
triggers,
type,
type_icon,
uid,
updated_at,
updated_by,
user_tokens,
website
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connectors
  props:
    - name: data
      description: |
        Provider configuration for the selected connector type or connection method.
      value:
        serverUrl: "{{ serverUrl }}"
        serverConfig:
          issuer: "{{ issuer }}"
          authorization_endpoint: "{{ authorization_endpoint }}"
          token_endpoint: "{{ token_endpoint }}"
          userinfo_endpoint: "{{ userinfo_endpoint }}"
          jwks_uri: "{{ jwks_uri }}"
          jwks:
            keys:
              - kty: "{{ kty }}"
                kid: "{{ kid }}"
                use: "{{ use }}"
                key_ops: "{{ key_ops }}"
                alg: "{{ alg }}"
          revocation_endpoint: "{{ revocation_endpoint }}"
          introspection_endpoint: "{{ introspection_endpoint }}"
          end_session_endpoint: "{{ end_session_endpoint }}"
          device_authorization_endpoint: "{{ device_authorization_endpoint }}"
          registration_endpoint: "{{ registration_endpoint }}"
          response_types_supported:
            - "{{ response_types_supported }}"
          token_endpoint_auth_methods_supported:
            - "{{ token_endpoint_auth_methods_supported }}"
          token_endpoint_auth_signing_alg_values_supported:
            - "{{ token_endpoint_auth_signing_alg_values_supported }}"
          scopes_supported:
            - "{{ scopes_supported }}"
          grant_types_supported:
            - "{{ grant_types_supported }}"
          response_modes_supported:
            - "{{ response_modes_supported }}"
          subject_types_supported:
            - "{{ subject_types_supported }}"
          id_token_signing_alg_values_supported:
            - "{{ id_token_signing_alg_values_supported }}"
          id_token_encryption_alg_values_supported:
            - "{{ id_token_encryption_alg_values_supported }}"
          id_token_encryption_enc_values_supported:
            - "{{ id_token_encryption_enc_values_supported }}"
          claim_types_supported:
            - "{{ claim_types_supported }}"
          claims_supported:
            - "{{ claims_supported }}"
          code_challenge_methods_supported:
            - "{{ code_challenge_methods_supported }}"
          prompt_values_supported:
            - "{{ prompt_values_supported }}"
          claims_parameter_supported: {{ claims_parameter_supported }}
          request_parameter_supported: {{ request_parameter_supported }}
          request_uri_parameter_supported: {{ request_uri_parameter_supported }}
          require_request_uri_registration: {{ require_request_uri_registration }}
          service_documentation: "{{ service_documentation }}"
          op_policy_uri: "{{ op_policy_uri }}"
          op_tos_uri: "{{ op_tos_uri }}"
          logo_uri: "{{ logo_uri }}"
          client_id_metadata_document_supported: {{ client_id_metadata_document_supported }}
          authorization_details_types_supported:
            - "{{ authorization_details_types_supported }}"
        clientId: "{{ clientId }}"
        clientName: "{{ clientName }}"
        clientSecret: "{{ clientSecret }}"
        tokenEndpointAuthMethod: "{{ tokenEndpointAuthMethod }}"
        responseType: "{{ responseType }}"
        pkceRequired: {{ pkceRequired }}
        codeChallengeMethod: "{{ codeChallengeMethod }}"
        userAuthorization:
          enabled: {{ enabled }}
          scopes:
            - "{{ scopes }}"
        refreshTokens:
          enabled: {{ enabled }}
        clientCredentials:
          enabled: {{ enabled }}
          scopes:
            - "{{ scopes }}"
        forwardedClaims:
          idToken:
            - "{{ idToken }}"
        defaultAudience: "{{ defaultAudience }}"
        defaultTokenExpiresIn: {{ defaultTokenExpiresIn }}
        authorizationUrlParams: "{{ authorizationUrlParams }}"
        jwtBearer:
          enabled: {{ enabled }}
          scopes:
            - "{{ scopes }}"
          sub: "{{ sub }}"
          iss: "{{ iss }}"
          aud: "{{ aud }}"
          additionalClaims: "{{ additionalClaims }}"
          ttl: {{ ttl }}
          useClientCredentials: {{ useClientCredentials }}
        clientAssertion:
          type: "{{ type }}"
          ttl: {{ ttl }}
          claims: "{{ claims }}"
        subjectType: "{{ subjectType }}"
        values:
          - value: "{{ value }}"
            scope: "{{ scope }}"
            expiresAt: {{ expiresAt }}
        serviceUrls:
          - "{{ serviceUrls }}"
        instructions: "{{ instructions }}"
        appId: {{ appId }}
        appSlug: "{{ appSlug }}"
        appName: "{{ appName }}"
        owner:
          type: "{{ type }}"
          id: {{ id }}
          slug: "{{ slug }}"
          name: "{{ name }}"
        privateKeyPem: "{{ privateKeyPem }}"
        webhookSecret: "{{ webhookSecret }}"
        extras: "{{ extras }}"
        appScopes:
          - "{{ appScopes }}"
        userScopes:
          - "{{ userScopes }}"
        ownerOrganization:
          id: "{{ id }}"
          slug: "{{ slug }}"
          name: "{{ name }}"
          logoUrl: "{{ logoUrl }}"
        application:
          id: "{{ id }}"
          clientId: "{{ clientId }}"
          name: "{{ name }}"
          description: "{{ description }}"
          developer: "{{ developer }}"
          developerUrl: "{{ developerUrl }}"
          imageUrl: "{{ imageUrl }}"
          redirectUris:
            - "{{ redirectUris }}"
          distribution: "{{ distribution }}"
          webhookResourceTypes:
            - "{{ webhookResourceTypes }}"
          webhookUrl: "{{ webhookUrl }}"
          webhookEnabled: {{ webhookEnabled }}
          createdAt: "{{ createdAt }}"
          updatedAt: "{{ updatedAt }}"
        apiToken: "{{ apiToken }}"
        phoneNumbers:
          - "{{ phoneNumbers }}"
        consumerKey: "{{ consumerKey }}"
        consumerSecret: "{{ consumerSecret }}"
        loginHost: "{{ loginHost }}"
        apiKeyId: "{{ apiKeyId }}"
        apiSecretKey: "{{ apiSecretKey }}"
        slackTeam:
          id: "{{ id }}"
          name: "{{ name }}"
          domain: "{{ domain }}"
        signingSecret: "{{ signingSecret }}"
        verificationToken: "{{ verificationToken }}"
        botScopes:
          - "{{ botScopes }}"
        slashCommands:
          - command: "{{ command }}"
            description: "{{ description }}"
            usageHint: "{{ usageHint }}"
            shouldEscape: {{ shouldEscape }}
        shortcuts:
          - type: "{{ type }}"
            name: "{{ name }}"
            callbackId: "{{ callbackId }}"
            description: "{{ description }}"
        accountIdentifier: "{{ accountIdentifier }}"
        defaultSessionRole: "{{ defaultSessionRole }}"
        projectId: "{{ projectId }}"
        projectSecret: "{{ projectSecret }}"
    - name: icon
      value: "{{ icon }}"
      description: |
        SHA-1 digest of a PNG or JPEG icon that is at least 640 by 640 pixels. This field does not accept a URL or image bytes.
        First compute the digest and upload the raw image with [POST /v2/files](https://vercel.com/docs/rest-api/deployments/upload-deployment-files). Send \`Content-Length\` and the same 40-character digest in \`x-vercel-digest\`. Then set \`icon\` to that digest.
        \`\`\`js
        import { createHash } from 'node:crypto';
        import { readFile } from 'node:fs/promises';
        const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
        const connectorId = 'scl_...';
        const bytes = await readFile('icon.png');
        const digest = createHash('sha1').update(bytes).digest('hex');
        await fetch('https://api.vercel.com/v2/files', {
        method: 'POST',
        headers: {
        Authorization: \`Bearer \${VERCEL_TOKEN}\`,
        'Content-Type': 'application/octet-stream',
        'Content-Length': String(bytes.length),
        'x-vercel-digest': digest,
        },
        body: bytes,
        });
        await fetch(\`https://api.vercel.com/v2/connect/connectors/\${connectorId}\`, {
        method: 'PATCH',
        headers: {
        Authorization: \`Bearer \${VERCEL_TOKEN}\`,
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ icon: digest }),
        });
        \`\`\`
    - name: background_color
      value: "{{ background_color }}"
      description: |
        Branding background color (6-digit hex, for example
    - name: accent_color
      value: "{{ accent_color }}"
      description: |
        Branding accent color (6-digit hex, for example
    - name: type
      value: "{{ type }}"
      description: |
        Connector implementation type for full configuration. Known types: api-key, discord, github, linear, linq, microsoft-entra, oauth, photon, salesforce, sendblue, slack, snowflake, snowflake-wif. Optional when service and connectionMethod select the type.
    - name: service
      value: "{{ service }}"
      description: |
        Service slug or URL for which the connector is used. Required when connectionMethod is set. Service alone does not enable preset configuration.
    - name: connection_method
      value: "{{ connection_method }}"
      description: |
        Connection method slug of the service. Use it with service to select preset configuration.
    - name: params
      value: "{{ params }}"
      description: |
        Values for the selected connection method's template fields. Requires connectionMethod.
    - name: target
      value: "{{ target }}"
      description: |
        Which of the service's targets this connector is for. Requires \"connectionMethod\" and must be one that method serves. Optional.
    - name: uid
      value: "{{ uid }}"
      description: |
        Optional team-scoped unique identifier for the connector. If omitted or empty, Connect generates a value.
    - name: name
      value: "{{ name }}"
      description: |
        Connector name. The value is trimmed and cannot contain control characters. If omitted or empty, the project name is used. A name or projectId is required. API key connectors require name.
    - name: project_id
      value: "{{ project_id }}"
      description: |
        Project to connect during creation. If environments is omitted, the connection uses development, preview, and production.
    - name: environments
      value: "{{ environments }}"
      description: |
        Environments for the project connection. Requires projectId. Use one or more built-in environment names or stable custom environment IDs that belong to the project. Duplicate values are accepted and removed.
    - name: triggers
      value: {{ triggers }}
      description: |
        Whether the triggers are enabled for this connector.
    - name: trigger_destination
      description: |
        Initial trigger destination. Requires triggers to be enabled and a projectId here or at the top level. Connector responses expose the resulting set as triggerDestinations. Replace the complete set with PATCH /v1/connect/connectors/{connector}/trigger-destinations.
      value:
        projectId: "{{ projectId }}"
        path: "{{ path }}"
        branch: "{{ branch }}"
        customEnvironmentId: "{{ customEnvironmentId }}"
    - name: events
      value:
        - "{{ events }}"
      description: |
        Default trigger events for this connector.
    - name: team_id
      value: "{{ team_id }}"
      description: The team ID that scopes the request. Do not send it with slug. If both are omitted, Vercel uses the team associated with the token or the authenticated user's default team. The request returns 401 if no team can be selected.
      description: The team ID that scopes the request. Do not send it with slug. If both are omitted, Vercel uses the team associated with the token or the authenticated user's default team. The request returns 401 if no team can be selected.
    - name: slug
      value: "{{ slug }}"
      description: The team slug that scopes the request. Do not send it with teamId. If both are omitted, Vercel uses the team associated with the token or the authenticated user's default team. The request returns 401 if no team can be selected.
      description: The team slug that scopes the request. Do not send it with teamId. If both are omitted, Vercel uses the team associated with the token or the authenticated user's default team. The request returns 401 if no team can be selected.
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

Update a connector and return the connector with any service-side update signals that the caller must handle.

```sql
UPDATE vercel.connect.connectors
SET 
triggers = {{ triggers }},
events = '{{ events }}',
data = '{{ data }}',
icon = '{{ icon }}',
background_color = '{{ background_color }}',
accent_color = '{{ accent_color }}',
uid = '{{ uid }}',
name = '{{ name }}'
WHERE 
connector = '{{ connector }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
connector,
reconsent_needed,
reinstall_needed,
service_sync;
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

Delete a connector, its project connections, and its installation records.

```sql
DELETE FROM vercel.connect.connectors
WHERE connector = '{{ connector }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="replace_trigger_destinations"
    values={[
        { label: 'replace_trigger_destinations', value: 'replace_trigger_destinations' },
        { label: 'get_token', value: 'get_token' },
        { label: 'create_authorization_request', value: 'create_authorization_request' }
    ]}
>
<TabItem value="replace_trigger_destinations">

Replace the full set of destinations that receive trigger requests for a connector.

```sql
EXEC vercel.connect.connectors.replace_trigger_destinations 
@connector='{{ connector }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"destinations": "{{ destinations }}"
}'
;
```
</TabItem>
<TabItem value="get_token">

Get an access token for a connector identified by the path parameter and scoped to the requester.

```sql
EXEC vercel.connect.connectors.get_token 
@connector='{{ connector }}' --required 
@@json=
'{
"subject": "{{ subject }}", 
"installationId": "{{ installationId }}", 
"audience": "{{ audience }}", 
"scopes": "{{ scopes }}", 
"resources": "{{ resources }}", 
"authorizationDetails": "{{ authorizationDetails }}", 
"validityBufferMs": {{ validityBufferMs }}
}'
;
```
</TabItem>
<TabItem value="create_authorization_request">

Create an authorization request for a connector and return the URL and verifier details needed to complete the flow.

```sql
EXEC vercel.connect.connectors.create_authorization_request 
@connector='{{ connector }}' --required 
@@json=
'{
"subject": "{{ subject }}", 
"installationId": "{{ installationId }}", 
"audience": "{{ audience }}", 
"scopes": "{{ scopes }}", 
"resources": "{{ resources }}", 
"authorizationDetails": "{{ authorizationDetails }}", 
"validityBufferMs": {{ validityBufferMs }}, 
"returnUrl": "{{ returnUrl }}", 
"webhook": "{{ webhook }}", 
"prompt": "{{ prompt }}", 
"deviceCode": {{ deviceCode }}, 
"expiresInMs": {{ expiresInMs }}, 
"additionalParams": "{{ additionalParams }}"
}'
;
```
</TabItem>
</Tabs>
