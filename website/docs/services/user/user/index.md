--- 
title: user
hide_title: false
hide_table_of_contents: false
keywords:
  - user
  - user
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

Creates, updates, deletes, gets or lists a <code>user</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.user.user" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Successful response.

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
    <td>The User's unique identifier. (example: AEIIDYVk59zbFF2Sxfyxxmua)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name associated with the User account, or `null` if none has been provided. (example: John Doe)</td>
</tr>
<tr>
    <td><CopyableCode code="default_team_id" /></td>
    <td><code>string</code></td>
    <td>The user's default team. (wire: defaultTeamId)</td>
</tr>
<tr>
    <td><CopyableCode code="import_flow_git_namespace_id" /></td>
    <td><code>string</code></td>
    <td> (wire: importFlowGitNamespaceId)</td>
</tr>
<tr>
    <td><CopyableCode code="account_update_context" /></td>
    <td><code>object</code></td>
    <td>Context for the Update Account screen. Present only when `isAccountUpdateRequired` is true. `managedTeams` is empty for orphan mode (user matches an EMU domain but is not on the team). (wire: accountUpdateContext)</td>
</tr>
<tr>
    <td><CopyableCode code="active_dashboard_views" /></td>
    <td><code>array</code></td>
    <td>set of dashboard view preferences (cards or list) per scopeId (wire: activeDashboardViews)</td>
</tr>
<tr>
    <td><CopyableCode code="avatar" /></td>
    <td><code>string</code></td>
    <td>SHA1 hash of the avatar for the User account. Can be used in conjuction with the ... endpoint to retrieve the avatar image. (example: 22cb30c85ff45ac4c72de8981500006b28114aa1)</td>
</tr>
<tr>
    <td><CopyableCode code="billing" /></td>
    <td><code>string</code></td>
    <td>An object containing billing infomation associated with the User account. (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>UNIX timestamp (in milliseconds) when the User account was created. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="data_cache" /></td>
    <td><code>object</code></td>
    <td>data cache settings (wire: dataCache)</td>
</tr>
<tr>
    <td><CopyableCode code="dismissed_toasts" /></td>
    <td><code>array</code></td>
    <td>A record of when, under a certain scopeId, a toast was dismissed (wire: dismissedToasts)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Email address associated with the User account. (example: me@example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="favorite_projects_and_spaces" /></td>
    <td><code>array</code></td>
    <td>A list of projects and spaces across teams that a user has marked as a favorite. (wire: favoriteProjectsAndSpaces)</td>
</tr>
<tr>
    <td><CopyableCode code="feature_blocks" /></td>
    <td><code>object</code></td>
    <td>Feature blocks for the user (wire: featureBlocks)</td>
</tr>
<tr>
    <td><CopyableCode code="has_trial_available" /></td>
    <td><code>boolean</code></td>
    <td>Whether the user has a trial available for a paid plan subscription. (false, true) (wire: hasTrialAvailable)</td>
</tr>
<tr>
    <td><CopyableCode code="import_flow_git_namespace" /></td>
    <td><code>string</code></td>
    <td> (wire: importFlowGitNamespace)</td>
</tr>
<tr>
    <td><CopyableCode code="import_flow_git_provider" /></td>
    <td><code>string</code></td>
    <td> (bitbucket, cursor-origin, github, github-custom-host, github-limited, gitlab, vercel, ) (wire: importFlowGitProvider)</td>
</tr>
<tr>
    <td><CopyableCode code="is_account_update_required" /></td>
    <td><code>boolean</code></td>
    <td>When `true`, the user must complete the EMU Update Account flow before they can use the dashboard. (false, true) (wire: isAccountUpdateRequired)</td>
</tr>
<tr>
    <td><CopyableCode code="is_enterprise_managed" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the user is managed by an enterprise. (false, true) (wire: isEnterpriseManaged)</td>
</tr>
<tr>
    <td><CopyableCode code="limited" /></td>
    <td><code>boolean</code></td>
    <td>Property indicating that this User data contains only limited information, due to the authentication token missing privileges to read the full User data. Re-login with email, GitHub, GitLab or Bitbucket in order to upgrade the authentication token with the necessary privileges. (true)</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_scopes_and_git_namespaces" /></td>
    <td><code>array</code></td>
    <td> (wire: preferredScopesAndGitNamespaces)</td>
</tr>
<tr>
    <td><CopyableCode code="remote_caching" /></td>
    <td><code>object</code></td>
    <td>remote caching settings (wire: remoteCaching)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_config" /></td>
    <td><code>object</code></td>
    <td>An object containing infomation related to the amount of platform resources may be allocated to the User account. (wire: resourceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="should_show_enterprise_managed_welcome" /></td>
    <td><code>boolean</code></td>
    <td>Whether the Enterprise Managed User joined the current team through the Update Account flow and should see its welcome experience. (false, true) (wire: shouldShowEnterpriseManagedWelcome)</td>
</tr>
<tr>
    <td><CopyableCode code="soft_block" /></td>
    <td><code>object</code></td>
    <td>When the User account has been "soft blocked", this property will contain the date when the restriction was enacted, and the identifier for why. (wire: softBlock)</td>
</tr>
<tr>
    <td><CopyableCode code="staging_prefix" /></td>
    <td><code>string</code></td>
    <td>Prefix that will be used in the URL of "Preview" deployments created by the User account. (wire: stagingPrefix)</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>Unique username associated with the User account. (example: jdoe)</td>
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
    <td></td>
    <td></td>
    <td>Retrieves information related to the currently authenticated User.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td></td>
    <td>Initiates the deletion process for the currently authenticated User, by sending a deletion confirmation email. The email contains a link that the user needs to visit in order to proceed with the deletion process.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Retrieves information related to the currently authenticated User.

```sql
SELECT
id,
name,
default_team_id,
import_flow_git_namespace_id,
account_update_context,
active_dashboard_views,
avatar,
billing,
created_at,
data_cache,
dismissed_toasts,
email,
favorite_projects_and_spaces,
feature_blocks,
has_trial_available,
import_flow_git_namespace,
import_flow_git_provider,
is_account_update_required,
is_enterprise_managed,
limited,
preferred_scopes_and_git_namespaces,
remote_caching,
resource_config,
should_show_enterprise_managed_welcome,
soft_block,
staging_prefix,
username
FROM vercel.user.user
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

Initiates the deletion process for the currently authenticated User, by sending a deletion confirmation email. The email contains a link that the user needs to visit in order to proceed with the deletion process.

```sql
DELETE FROM vercel.user.user
;
```
</TabItem>
</Tabs>
