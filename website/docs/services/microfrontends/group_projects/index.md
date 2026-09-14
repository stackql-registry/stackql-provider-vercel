--- 
title: group_projects
hide_title: false
hide_table_of_contents: false
keywords:
  - group_projects
  - microfrontends
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

Creates, updates, deletes, gets or lists a <code>group_projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="group_projects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.microfrontends.group_projects" /></td></tr>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td> (wire: accountId)</td>
</tr>
<tr>
    <td><CopyableCode code="connect_configuration_id" /></td>
    <td><code>string</code></td>
    <td> (wire: connectConfigurationId)</td>
</tr>
<tr>
    <td><CopyableCode code="passive_connect_configuration_id" /></td>
    <td><code>string</code></td>
    <td> (wire: passiveConnectConfigurationId)</td>
</tr>
<tr>
    <td><CopyableCode code="transfer_to_account_id" /></td>
    <td><code>string</code></td>
    <td> (wire: transferToAccountId)</td>
</tr>
<tr>
    <td><CopyableCode code="transferred_from_account_id" /></td>
    <td><code>string</code></td>
    <td> (wire: transferredFromAccountId)</td>
</tr>
<tr>
    <td><CopyableCode code="concurrency_bucket_name" /></td>
    <td><code>string</code></td>
    <td> (wire: concurrencyBucketName)</td>
</tr>
<tr>
    <td><CopyableCode code="abuse" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="alias" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="analytics" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="applied_cve_55182_migration" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: appliedCve55182Migration)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_assign_custom_domains" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: autoAssignCustomDomains)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_assign_custom_domains_updated_by" /></td>
    <td><code>string</code></td>
    <td> (wire: autoAssignCustomDomainsUpdatedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_expose_system_envs" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: autoExposeSystemEnvs)</td>
</tr>
<tr>
    <td><CopyableCode code="avatar" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="blobs" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="build_command" /></td>
    <td><code>string</code></td>
    <td> (wire: buildCommand)</td>
</tr>
<tr>
    <td><CopyableCode code="command_for_ignoring_build_step" /></td>
    <td><code>string</code></td>
    <td> (wire: commandForIgnoringBuildStep)</td>
</tr>
<tr>
    <td><CopyableCode code="connect_builds_enabled" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: connectBuildsEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="connect_configurations" /></td>
    <td><code>array</code></td>
    <td> (wire: connectConfigurations)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="crons" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="custom_environments" /></td>
    <td><code>array</code></td>
    <td> (wire: customEnvironments)</td>
</tr>
<tr>
    <td><CopyableCode code="customer_support_code_visibility" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: customerSupportCodeVisibility)</td>
</tr>
<tr>
    <td><CopyableCode code="data_cache" /></td>
    <td><code>object</code></td>
    <td> (wire: dataCache)</td>
</tr>
<tr>
    <td><CopyableCode code="default_resource_config" /></td>
    <td><code>object</code></td>
    <td> (wire: defaultResourceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_expiration" /></td>
    <td><code>object</code></td>
    <td>Retention policies for deployments. These are enforced at the project level, but we also maintain an instance of this at the team level as a default policy that gets applied to new projects. (wire: deploymentExpiration)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_policy" /></td>
    <td><code>object</code></td>
    <td>Project shape. `null` on a rule list clears the project's override for that rule type (fall back to team for every env); omitting is equivalent. Setting `deploymentPolicy` itself to `null` clears every override at once. Kept structurally distinct from &#123;@link TeamDeploymentPolicy&#125; so the two storage locations don't share a type by accident. (wire: deploymentPolicy)</td>
</tr>
<tr>
    <td><CopyableCode code="dev_command" /></td>
    <td><code>string</code></td>
    <td> (wire: devCommand)</td>
</tr>
<tr>
    <td><CopyableCode code="directory_listing" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: directoryListing)</td>
</tr>
<tr>
    <td><CopyableCode code="dismissed_toasts" /></td>
    <td><code>array</code></td>
    <td> (wire: dismissedToasts)</td>
</tr>
<tr>
    <td><CopyableCode code="enable_affected_projects_deployments" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: enableAffectedProjectsDeployments)</td>
</tr>
<tr>
    <td><CopyableCode code="enable_external_rewrite_caching" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: enableExternalRewriteCaching)</td>
</tr>
<tr>
    <td><CopyableCode code="enable_preview_feedback" /></td>
    <td><code>boolean</code></td>
    <td> (false, true, ) (wire: enablePreviewFeedback)</td>
</tr>
<tr>
    <td><CopyableCode code="enable_production_feedback" /></td>
    <td><code>boolean</code></td>
    <td> (false, true, ) (wire: enableProductionFeedback)</td>
</tr>
<tr>
    <td><CopyableCode code="env" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="expiration" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="features" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="framework" /></td>
    <td><code>string</code></td>
    <td> (actix-web, angular, ash, astro, axum, blitzjs, brunch, bun, container, create-react-app, django, docusaurus, docusaurus-2, dojo, eleventy, elysia, ember, eve, express, factory-eve, fastapi, fasthtml, fastify, flask, gatsby, go, gridsome, h3, hexo, hono, hugo, hydrogen, ionic-angular, ionic-react, jekyll, koa, mastra, middleman, nestjs, nextjs, nitro, node, nuxtjs, parcel, polymer, preact, python, react-router, redwoodjs, remix, ruby, rust, saber, sanity, sanity-v2, sapper, scully, services, solidstart, solidstart-1, stencil, storybook, svelte, sveltekit, sveltekit-1, tanstack-start, tanstack-start-lovable, umijs, vite, vitepress, vue, vuepress, xmcp, zola, )</td>
</tr>
<tr>
    <td><CopyableCode code="git_comments" /></td>
    <td><code>object</code></td>
    <td> (wire: gitComments)</td>
</tr>
<tr>
    <td><CopyableCode code="git_fork_protection" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: gitForkProtection)</td>
</tr>
<tr>
    <td><CopyableCode code="git_lfs" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: gitLFS)</td>
</tr>
<tr>
    <td><CopyableCode code="git_provider_options" /></td>
    <td><code>object</code></td>
    <td> (wire: gitProviderOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="has_active_branches" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: hasActiveBranches)</td>
</tr>
<tr>
    <td><CopyableCode code="has_deployments" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: hasDeployments)</td>
</tr>
<tr>
    <td><CopyableCode code="install_command" /></td>
    <td><code>string</code></td>
    <td> (wire: installCommand)</td>
</tr>
<tr>
    <td><CopyableCode code="internal_routes" /></td>
    <td><code>array</code></td>
    <td> (wire: internalRoutes)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_buckets" /></td>
    <td><code>array</code></td>
    <td> (wire: ipBuckets)</td>
</tr>
<tr>
    <td><CopyableCode code="jobs" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="last_alias_request" /></td>
    <td><code>object</code></td>
    <td> (wire: lastAliasRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="last_rollback_target" /></td>
    <td><code>string</code></td>
    <td>(opaque JSON object) (wire: lastRollbackTarget)</td>
</tr>
<tr>
    <td><CopyableCode code="latest_deployments" /></td>
    <td><code>array</code></td>
    <td> (wire: latestDeployments)</td>
</tr>
<tr>
    <td><CopyableCode code="link" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="live" /></td>
    <td><code>boolean</code></td>
    <td> (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="microfrontends" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_version" /></td>
    <td><code>string</code></td>
    <td> (10.x, 12.x, 14.x, 16.x, 18.x, 20.x, 22.x, 24.x, 8.10.x) (wire: nodeVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="oidc_token_config" /></td>
    <td><code>object</code></td>
    <td> (wire: oidcTokenConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="options_allowlist" /></td>
    <td><code>object</code></td>
    <td> (wire: optionsAllowlist)</td>
</tr>
<tr>
    <td><CopyableCode code="output_directory" /></td>
    <td><code>string</code></td>
    <td> (wire: outputDirectory)</td>
</tr>
<tr>
    <td><CopyableCode code="passport" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="password_protection" /></td>
    <td><code>string</code></td>
    <td>(opaque JSON object) (wire: passwordProtection)</td>
</tr>
<tr>
    <td><CopyableCode code="paused" /></td>
    <td><code>boolean</code></td>
    <td> (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="production_deployments_fast_lane" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: productionDeploymentsFastLane)</td>
</tr>
<tr>
    <td><CopyableCode code="protected_sourcemaps" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: protectedSourcemaps)</td>
</tr>
<tr>
    <td><CopyableCode code="protection_bypass" /></td>
    <td><code>object</code></td>
    <td> (wire: protectionBypass)</td>
</tr>
<tr>
    <td><CopyableCode code="protection_config" /></td>
    <td><code>object</code></td>
    <td> (wire: protectionConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_config" /></td>
    <td><code>object</code></td>
    <td> (wire: resourceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="rollback_description" /></td>
    <td><code>object</code></td>
    <td>Description of why a project was rolled back, and by whom. Note that lastAliasRequest contains the from/to details of the rollback. (wire: rollbackDescription)</td>
</tr>
<tr>
    <td><CopyableCode code="rolling_release" /></td>
    <td><code>object</code></td>
    <td>Project-level rolling release configuration that defines how deployments should be gradually rolled out (wire: rollingRelease)</td>
</tr>
<tr>
    <td><CopyableCode code="root_directory" /></td>
    <td><code>string</code></td>
    <td> (wire: rootDirectory)</td>
</tr>
<tr>
    <td><CopyableCode code="sandbox" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="security" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="serverless_function_zero_config_failover" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: serverlessFunctionZeroConfigFailover)</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="skew_protection_allowed_domains" /></td>
    <td><code>array</code></td>
    <td> (wire: skewProtectionAllowedDomains)</td>
</tr>
<tr>
    <td><CopyableCode code="skew_protection_boundary_at" /></td>
    <td><code>number</code></td>
    <td> (wire: skewProtectionBoundaryAt)</td>
</tr>
<tr>
    <td><CopyableCode code="skew_protection_max_age" /></td>
    <td><code>number</code></td>
    <td> (wire: skewProtectionMaxAge)</td>
</tr>
<tr>
    <td><CopyableCode code="skip_git_connect_during_link" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: skipGitConnectDuringLink)</td>
</tr>
<tr>
    <td><CopyableCode code="source_files_outside_root_directory" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: sourceFilesOutsideRootDirectory)</td>
</tr>
<tr>
    <td><CopyableCode code="speed_insights" /></td>
    <td><code>object</code></td>
    <td> (wire: speedInsights)</td>
</tr>
<tr>
    <td><CopyableCode code="sso_protection" /></td>
    <td><code>object</code></td>
    <td> (wire: ssoProtection)</td>
</tr>
<tr>
    <td><CopyableCode code="static_ips" /></td>
    <td><code>object</code></td>
    <td> (wire: staticIps)</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td> (advanced, critical, priority)</td>
</tr>
<tr>
    <td><CopyableCode code="tracing" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="transfer_completed_at" /></td>
    <td><code>number</code></td>
    <td> (wire: transferCompletedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="transfer_started_at" /></td>
    <td><code>number</code></td>
    <td> (wire: transferStartedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="trusted_ips" /></td>
    <td><code></code></td>
    <td> (wire: trustedIps)</td>
</tr>
<tr>
    <td><CopyableCode code="trusted_sources" /></td>
    <td><code>object</code></td>
    <td> (wire: trustedSources)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td> (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_status" /></td>
    <td><code>object</code></td>
    <td> (wire: usageStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="v_0" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: v0)</td>
</tr>
<tr>
    <td><CopyableCode code="v_0_created" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: v0Created)</td>
</tr>
<tr>
    <td><CopyableCode code="web_analytics" /></td>
    <td><code>object</code></td>
    <td> (wire: webAnalytics)</td>
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
    <td><a href="#parameter-group_id"><code>group_id</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Get the microfrontends for a given group ID.</td>
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
<tr id="parameter-group_id">
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td></td>
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

Get the microfrontends for a given group ID.

```sql
SELECT
id,
name,
account_id,
connect_configuration_id,
passive_connect_configuration_id,
transfer_to_account_id,
transferred_from_account_id,
concurrency_bucket_name,
abuse,
alias,
analytics,
applied_cve_55182_migration,
auto_assign_custom_domains,
auto_assign_custom_domains_updated_by,
auto_expose_system_envs,
avatar,
blobs,
build_command,
command_for_ignoring_build_step,
connect_builds_enabled,
connect_configurations,
created_at,
creator,
crons,
custom_environments,
customer_support_code_visibility,
data_cache,
default_resource_config,
deployment_expiration,
deployment_policy,
dev_command,
directory_listing,
dismissed_toasts,
enable_affected_projects_deployments,
enable_external_rewrite_caching,
enable_preview_feedback,
enable_production_feedback,
env,
expiration,
features,
framework,
git_comments,
git_fork_protection,
git_lfs,
git_provider_options,
has_active_branches,
has_deployments,
install_command,
internal_routes,
ip_buckets,
jobs,
last_alias_request,
last_rollback_target,
latest_deployments,
link,
live,
microfrontends,
node_version,
oidc_token_config,
options_allowlist,
output_directory,
passport,
password_protection,
paused,
permissions,
production_deployments_fast_lane,
protected_sourcemaps,
protection_bypass,
protection_config,
resource_config,
rollback_description,
rolling_release,
root_directory,
sandbox,
security,
serverless_function_zero_config_failover,
services,
skew_protection_allowed_domains,
skew_protection_boundary_at,
skew_protection_max_age,
skip_git_connect_during_link,
source_files_outside_root_directory,
speed_insights,
sso_protection,
static_ips,
targets,
tier,
tracing,
transfer_completed_at,
transfer_started_at,
trusted_ips,
trusted_sources,
updated_at,
usage_status,
v_0,
v_0_created,
web_analytics
FROM vercel.microfrontends.group_projects
WHERE group_id = '{{ group_id }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
