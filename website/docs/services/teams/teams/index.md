--- 
title: teams
hide_title: false
hide_table_of_contents: false
keywords:
  - teams
  - teams
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

Creates, updates, deletes, gets or lists a <code>teams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="teams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.teams.teams" /></td></tr>
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

The requested team

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
    <td>The Team's unique identifier. (example: team_nllPyCtREAqxxdyFKbbMDlxd)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name associated with the Team account, or `null` if none has been provided. (example: My Team)</td>
</tr>
<tr>
    <td><CopyableCode code="creator_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user who created the Team. (example: R6efeCJQ2HKXywuasPDc0fOWB) (wire: creatorId)</td>
</tr>
<tr>
    <td><CopyableCode code="org_root_team_id" /></td>
    <td><code>string</code></td>
    <td>Best-effort ID of the organization’s root billing team. When present, compare `orgRootTeamId === id` to identify the root team. It may be omitted even when `parentId` is set if organization resolution fails or the referenced organization is missing. Always omitted for non-organization teams. (example: team_nllPyCtREAqxxdyFKbbMDlxd) (wire: orgRootTeamId)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_id" /></td>
    <td><code>string</code></td>
    <td>The organizationId for teams that belong to an organization (set on both the organization's root team and its child teams). (example: org_nllPyCtREAqxxdyFKbbMDlxd) (wire: parentId)</td>
</tr>
<tr>
    <td><CopyableCode code="api_keys_invalidated_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp (ms) after which API keys created at or before this time are considered invalid for this team. (wire: apiKeysInvalidatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="app_tokens_invalidated_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp (ms) after which Vercel App tokens created at or before this time are considered invalid for this team. (wire: appTokensInvalidatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="avatar" /></td>
    <td><code>string</code></td>
    <td>The ID of the file used as avatar for this Team. (example: 6eb07268bcfadd309905ffb1579354084c24655c)</td>
</tr>
<tr>
    <td><CopyableCode code="billing" /></td>
    <td><code>object</code></td>
    <td>The team's billing plan.</td>
</tr>
<tr>
    <td><CopyableCode code="connect" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>UNIX timestamp (in milliseconds) when the Team was created. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="default_deployment_protection" /></td>
    <td><code>object</code></td>
    <td>Default deployment protection for this team null indicates protection is disabled (wire: defaultDeploymentProtection)</td>
</tr>
<tr>
    <td><CopyableCode code="default_expiration_settings" /></td>
    <td><code>object</code></td>
    <td>Default deployment expiration settings for this team (wire: defaultExpirationSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="default_passport" /></td>
    <td><code>object</code></td>
    <td>Default Passport configuration for new projects in this team. (wire: defaultPassport)</td>
</tr>
<tr>
    <td><CopyableCode code="default_project_jobs" /></td>
    <td><code>object</code></td>
    <td>Default job configuration applied to new projects created in this team. (wire: defaultProjectJobs)</td>
</tr>
<tr>
    <td><CopyableCode code="default_roles" /></td>
    <td><code>object</code></td>
    <td>Default roles for the team. (wire: defaultRoles)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_policy" /></td>
    <td><code>object</code></td>
    <td>Composable deployment-time policy for the team. Used as the default for every project on the team, with optional per-project overrides on `project.deploymentPolicy`. (wire: deploymentPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A short description of the Team. (example: Our mission is to make cloud computing accessible to everyone.)</td>
</tr>
<tr>
    <td><CopyableCode code="disable_hard_auto_blocks" /></td>
    <td><code>number</code></td>
    <td> (false, true) (wire: disableHardAutoBlocks)</td>
</tr>
<tr>
    <td><CopyableCode code="disable_repository_dispatch_events" /></td>
    <td><code>boolean</code></td>
    <td>Default for projects in the team. When `true`, projects in this team will not emit GitHub repository-dispatch events on deployment events unless the project explicitly overrides this setting via `project.gitProviderOptions.disableRepositoryDispatchEvents`. (false, true) (wire: disableRepositoryDispatchEvents)</td>
</tr>
<tr>
    <td><CopyableCode code="disjunctive_production_secret_policy" /></td>
    <td><code>string</code></td>
    <td>Require production secrets to use a different value than preview or development. (default, off, on, ) (wire: disjunctiveProductionSecretPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="dp_access_requests_mode" /></td>
    <td><code>string</code></td>
    <td>Controls who can request access to protected deployments. (all, email-domain, none) (wire: dpAccessRequestsMode)</td>
</tr>
<tr>
    <td><CopyableCode code="email_domain" /></td>
    <td><code>string</code></td>
    <td>Hostname that'll be matched with emails on sign-up to automatically join the Team. (example: example.com) (wire: emailDomain)</td>
</tr>
<tr>
    <td><CopyableCode code="enable_preview_feedback" /></td>
    <td><code>string</code></td>
    <td>Whether toolbar is enabled on preview deployments (default, default-force, off, off-force, on, on-force, ) (wire: enablePreviewFeedback)</td>
</tr>
<tr>
    <td><CopyableCode code="enable_production_feedback" /></td>
    <td><code>string</code></td>
    <td>Whether toolbar is enabled on production deployments (default, default-force, off, off-force, on, on-force, ) (wire: enableProductionFeedback)</td>
</tr>
<tr>
    <td><CopyableCode code="hide_ip_addresses" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if IP addresses should be accessible in observability (o11y) tooling (false, true, ) (wire: hideIpAddresses)</td>
</tr>
<tr>
    <td><CopyableCode code="hide_ip_addresses_in_log_drains" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if IP addresses should be accessible in log drains (false, true, ) (wire: hideIpAddressesInLogDrains)</td>
</tr>
<tr>
    <td><CopyableCode code="integration_tokens_invalidated_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp (ms) after which integration tokens created at or before this time are considered invalid for this team. (wire: integrationTokensInvalidatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="invite_code" /></td>
    <td><code>string</code></td>
    <td>Code that can be used to join this Team. Only visible to Team owners. (example: hasihf9e89) (wire: inviteCode)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_buckets" /></td>
    <td><code>array</code></td>
    <td> (wire: ipBuckets)</td>
</tr>
<tr>
    <td><CopyableCode code="membership" /></td>
    <td><code>object</code></td>
    <td>The membership of the authenticated User in relation to the Team.</td>
</tr>
<tr>
    <td><CopyableCode code="nsnb_config" /></td>
    <td><code>object</code></td>
    <td>NSNB configuration for the team. (wire: nsnbConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="personal_access_tokens_invalidated_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp (ms) after which personal access tokens created at or before this time are considered invalid for this team. (wire: personalAccessTokensInvalidatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>boolean</code></td>
    <td>Whether the team is a platform team. (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="preview_deployment_suffix" /></td>
    <td><code>string</code></td>
    <td>The hostname that is current set as preview deployment suffix. (example: example.dev) (wire: previewDeploymentSuffix)</td>
</tr>
<tr>
    <td><CopyableCode code="remote_caching" /></td>
    <td><code>object</code></td>
    <td>Is remote caching enabled for this team (wire: remoteCaching)</td>
</tr>
<tr>
    <td><CopyableCode code="require_verified_commits" /></td>
    <td><code>boolean</code></td>
    <td>When enabled, all projects in the team require commits to be signed and verified by the git provider before deployments will be created. Projects may override this via `project.gitProviderOptions.requireVerifiedCommits` (gated by `Project:Update`). (false, true) (wire: requireVerifiedCommits)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_config" /></td>
    <td><code>object</code></td>
    <td> (wire: resourceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="saml" /></td>
    <td><code>object</code></td>
    <td>When "Single Sign-On (SAML)" is configured, this object contains information regarding the configuration of the Identity Provider (IdP).</td>
</tr>
<tr>
    <td><CopyableCode code="sensitive_environment_variable_policy" /></td>
    <td><code>string</code></td>
    <td>Sensitive environment variable policy for this team (default, off, on, ) (wire: sensitiveEnvironmentVariablePolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team's slug, which is unique across the Vercel platform. (example: my-team)</td>
</tr>
<tr>
    <td><CopyableCode code="staging_prefix" /></td>
    <td><code>string</code></td>
    <td>The prefix that is prepended to automatic aliases. (wire: stagingPrefix)</td>
</tr>
<tr>
    <td><CopyableCode code="strict_connectors" /></td>
    <td><code>object</code></td>
    <td>When enabled, creating and managing connectors requires Owner role or the ConnectorManager permission. (wire: strictConnectors)</td>
</tr>
<tr>
    <td><CopyableCode code="strict_deployment_protection_settings" /></td>
    <td><code>object</code></td>
    <td>When enabled, deployment protection settings require stricter permissions (owner-only). (wire: strictDeploymentProtectionSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="strict_password_protection_settings" /></td>
    <td><code>object</code></td>
    <td>When enabled, adding, changing, or removing project password protection requires Owner role. (wire: strictPasswordProtectionSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="strict_shareable_links" /></td>
    <td><code>object</code></td>
    <td>When enabled, creating shareable links requires Owner role. (wire: strictShareableLinks)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp (in milliseconds) of when the Team was last updated. (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A paginated list of teams.

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
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td><a href="#parameter-slug"><code>slug</code></a></td>
    <td>Get information for the Team specified by the `teamId` parameter.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a></td>
    <td>Get a paginated list of all the Teams the authenticated User is a member of.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-slug"><code>slug</code></a></td>
    <td></td>
    <td>Create a new Team under your account. You need to send a POST request with the desired Team slug, and optionally the Team name.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td></td>
    <td>Update the information of a Team specified by the `teamId` parameter. The request body should contain the information that will be updated on the Team.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td><a href="#parameter-new_default_team_id"><code>new_default_team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Delete a team under your account. You need to send a `DELETE` request with the desired team `id`. An optional array of reasons for deletion may also be sent.</td>
</tr>
<tr>
    <td><a href="#update_dsync_roles"><CopyableCode code="update_dsync_roles" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-roles"><code>roles</code></a></td>
    <td><a href="#parameter-slug"><code>slug</code></a></td>
    <td>Update the Directory Sync role mappings for a Team. This endpoint allows updating the mapping between directory groups and team roles or access groups.</td>
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
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The Team identifier to perform the request on behalf of.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>number</code></td>
    <td>Maximum number of Teams which may be returned.</td>
</tr>
<tr id="parameter-new_default_team_id">
    <td><CopyableCode code="new_default_team_id" /></td>
    <td><code>string</code></td>
    <td>Id of the team to be set as the new default team (wire: newDefaultTeamId)</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>number</code></td>
    <td>Timestamp (in milliseconds) to only include Teams created since then.</td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team slug to perform the request on behalf of.</td>
</tr>
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code>number</code></td>
    <td>Timestamp (in milliseconds) to only include Teams created until then.</td>
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

Get information for the Team specified by the `teamId` parameter.

```sql
SELECT
id,
name,
creator_id,
org_root_team_id,
parent_id,
api_keys_invalidated_at,
app_tokens_invalidated_at,
avatar,
billing,
connect,
created_at,
default_deployment_protection,
default_expiration_settings,
default_passport,
default_project_jobs,
default_roles,
deployment_policy,
description,
disable_hard_auto_blocks,
disable_repository_dispatch_events,
disjunctive_production_secret_policy,
dp_access_requests_mode,
email_domain,
enable_preview_feedback,
enable_production_feedback,
hide_ip_addresses,
hide_ip_addresses_in_log_drains,
integration_tokens_invalidated_at,
invite_code,
ip_buckets,
membership,
nsnb_config,
personal_access_tokens_invalidated_at,
platform,
preview_deployment_suffix,
remote_caching,
require_verified_commits,
resource_config,
saml,
sensitive_environment_variable_policy,
slug,
staging_prefix,
strict_connectors,
strict_deployment_protection_settings,
strict_password_protection_settings,
strict_shareable_links,
updated_at
FROM vercel.teams.teams
WHERE team_id = '{{ team_id }}' -- required
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Get a paginated list of all the Teams the authenticated User is a member of.

```sql
SELECT
*
FROM vercel.teams.teams
WHERE limit = '{{ limit }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
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

Create a new Team under your account. You need to send a POST request with the desired Team slug, and optionally the Team name.

```sql
INSERT INTO vercel.teams.teams (
slug,
name,
attribution
)
SELECT 
'{{ slug }}' /* required */,
'{{ name }}',
'{{ attribution }}'
RETURNING
id,
slug
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: teams
  props:
    - name: slug
      value: "{{ slug }}"
      description: |
        The desired slug for the Team
    - name: name
      value: "{{ name }}"
      description: |
        The desired name for the Team. It will be generated from the provided slug if nothing is provided
    - name: attribution
      description: |
        Attribution information for the session or current page
      value:
        sessionReferrer: "{{ sessionReferrer }}"
        landingPage: "{{ landingPage }}"
        pageBeforeConversionPage: "{{ pageBeforeConversionPage }}"
        utm:
          utmSource: "{{ utmSource }}"
          utmMedium: "{{ utmMedium }}"
          utmCampaign: "{{ utmCampaign }}"
          utmTerm: "{{ utmTerm }}"
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

Update the information of a Team specified by the `teamId` parameter. The request body should contain the information that will be updated on the Team.

```sql
UPDATE vercel.teams.teams
SET 
avatar = '{{ avatar }}',
description = '{{ description }}',
email_domain = '{{ email_domain }}',
name = '{{ name }}',
preview_deployment_suffix = '{{ preview_deployment_suffix }}',
regenerate_invite_code = {{ regenerate_invite_code }},
saml = '{{ saml }}',
slug = '{{ slug }}',
enable_preview_feedback = '{{ enable_preview_feedback }}',
enable_production_feedback = '{{ enable_production_feedback }}',
sensitive_environment_variable_policy = '{{ sensitive_environment_variable_policy }}',
disjunctive_production_secret_policy = '{{ disjunctive_production_secret_policy }}',
remote_caching = '{{ remote_caching }}',
hide_ip_addresses = {{ hide_ip_addresses }},
hide_ip_addresses_in_log_drains = {{ hide_ip_addresses_in_log_drains }},
dp_access_requests_mode = '{{ dp_access_requests_mode }}',
require_verified_commits = {{ require_verified_commits }},
disable_repository_dispatch_events = {{ disable_repository_dispatch_events }},
default_deployment_protection = '{{ default_deployment_protection }}',
default_passport = '{{ default_passport }}',
default_expiration_settings = '{{ default_expiration_settings }}',
deployment_policy = '{{ deployment_policy }}',
strict_deployment_protection_settings = '{{ strict_deployment_protection_settings }}',
strict_shareable_links = '{{ strict_shareable_links }}',
strict_password_protection_settings = '{{ strict_password_protection_settings }}',
strict_connectors = '{{ strict_connectors }}',
nsnb_config = '{{ nsnb_config }}',
default_project_jobs = '{{ default_project_jobs }}',
resource_config = '{{ resource_config }}'
WHERE 
team_id = '{{ team_id }}' --required
RETURNING
id,
name,
creator_id,
org_root_team_id,
parent_id,
api_keys_invalidated_at,
app_tokens_invalidated_at,
avatar,
billing,
connect,
created_at,
default_deployment_protection,
default_expiration_settings,
default_passport,
default_project_jobs,
default_roles,
deployment_policy,
description,
disable_hard_auto_blocks,
disable_repository_dispatch_events,
disjunctive_production_secret_policy,
dp_access_requests_mode,
email_domain,
enable_preview_feedback,
enable_production_feedback,
hide_ip_addresses,
hide_ip_addresses_in_log_drains,
integration_tokens_invalidated_at,
invite_code,
ip_buckets,
membership,
nsnb_config,
personal_access_tokens_invalidated_at,
platform,
preview_deployment_suffix,
remote_caching,
require_verified_commits,
resource_config,
saml,
sensitive_environment_variable_policy,
slug,
staging_prefix,
strict_connectors,
strict_deployment_protection_settings,
strict_password_protection_settings,
strict_shareable_links,
updated_at;
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

Delete a team under your account. You need to send a `DELETE` request with the desired team `id`. An optional array of reasons for deletion may also be sent.

```sql
DELETE FROM vercel.teams.teams
WHERE team_id = '{{ team_id }}' --required
AND new_default_team_id = '{{ new_default_team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="update_dsync_roles"
    values={[
        { label: 'update_dsync_roles', value: 'update_dsync_roles' }
    ]}
>
<TabItem value="update_dsync_roles">

Update the Directory Sync role mappings for a Team. This endpoint allows updating the mapping between directory groups and team roles or access groups.

```sql
EXEC vercel.teams.teams.update_dsync_roles 
@team_id='{{ team_id }}' --required, 
@slug='{{ slug }}' 
@@json=
'{
"roles": "{{ roles }}"
}'
;
```
</TabItem>
</Tabs>
