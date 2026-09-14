--- 
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
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

Creates, updates, deletes, gets or lists a <code>projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="projects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.projects.projects" /></td></tr>
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

The project information

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
    <td><code>object</code></td>
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
    <td><code>object</code></td>
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
    <td><CopyableCode code="integrations" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="live" /></td>
    <td><code>boolean</code></td>
    <td> (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="microfrontends" /></td>
    <td><code>object</code></td>
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
    <td><code>object</code></td>
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
    <td><CopyableCode code="customer_support_code_visibility" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: customerSupportCodeVisibility)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_expiration" /></td>
    <td><code>object</code></td>
    <td>Retention policies for deployments. These are enforced at the project level, but we also maintain an instance of this at the team level as a default policy that gets applied to new projects. (wire: deploymentExpiration)</td>
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
    <td><CopyableCode code="env" /></td>
    <td><code>array</code></td>
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
    <td><CopyableCode code="resource_config" /></td>
    <td><code>object</code></td>
    <td> (wire: resourceConfig)</td>
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
    <td><CopyableCode code="security" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="serverless_function_region" /></td>
    <td><code>string</code></td>
    <td> (wire: serverlessFunctionRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_function_zero_config_failover" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: serverlessFunctionZeroConfigFailover)</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Get the information for a specific project by passing either the project `id` or `name` in the URL.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-from"><code>from</code></a>, <a href="#parameter-git_fork_protection"><code>git_fork_protection</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-search"><code>search</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-repo_id"><code>repo_id</code></a>, <a href="#parameter-repo_url"><code>repo_url</code></a>, <a href="#parameter-exclude_repos"><code>exclude_repos</code></a>, <a href="#parameter-edge_config_id"><code>edge_config_id</code></a>, <a href="#parameter-edge_config_token_id"><code>edge_config_token_id</code></a>, <a href="#parameter-deprecated"><code>deprecated</code></a>, <a href="#parameter-elastic_concurrency_enabled"><code>elastic_concurrency_enabled</code></a>, <a href="#parameter-static_ips_enabled"><code>static_ips_enabled</code></a>, <a href="#parameter-build_machine_types"><code>build_machine_types</code></a>, <a href="#parameter-build_queue_configuration"><code>build_queue_configuration</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Allows to retrieve the list of projects of the authenticated user or team. The list will be paginated and the provided query parameters allow filtering the returned projects.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Allows to create a new project with the provided configuration. It only requires the project `name` but more configuration can be provided to override the defaults.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Update the fields of a project using either its `name` or `id`.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Delete a specific project by passing either the project `id` or `name` in the URL.</td>
</tr>
<tr>
    <td><a href="#get_token"><CopyableCode code="get_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Generates an OIDC token for the project and returns it.</td>
</tr>
<tr>
    <td><a href="#upload_avatar"><CopyableCode code="upload_avatar" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Upload an image as the avatar of the project identified by `idOrName`. The request body is the raw bytes of a JPG, PNG, or SVG image; the `Content-Type` header must declare which. SVG payloads are sanitized and optimized server-side before storage. The final SHA-1 of the stored bytes becomes the project's `avatar` value. The actual upload pipeline (validation, sanitization, S3 write, conditional `updateProject`, and event emission) lives in the shared `@api/project-avatar-upload` helper so it can be reused by background workers.</td>
</tr>
<tr>
    <td><a href="#update_protection_bypass"><CopyableCode code="update_protection_bypass" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id_or_name"><code>id_or_name</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Update the deployment protection automation bypass for a project</td>
</tr>
<tr>
    <td><a href="#rollback"><CopyableCode code="rollback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a></td>
    <td><a href="#parameter-description"><code>description</code></a>, <a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Allows users to rollback to a deployment.</td>
</tr>
<tr>
    <td><a href="#update_rollback_description"><CopyableCode code="update_rollback_description" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a></td>
    <td></td>
    <td>Updates the reason for a rollback, without changing the rollback status itself.</td>
</tr>
<tr>
    <td><a href="#update_microfrontends"><CopyableCode code="update_microfrontends" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Update the microfrontends settings for a project.</td>
</tr>
<tr>
    <td><a href="#promote"><CopyableCode code="promote" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Allows users to promote a deployment to production. Note: This does NOT rebuild the deployment. If you need that, then call create-deployments endpoint.</td>
</tr>
<tr>
    <td><a href="#pause"><CopyableCode code="pause" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Pause a project by passing its project `id` in the URL. If the project does not exist given the id then the request will fail with 400 status code. If the project disables auto assigning custom production domains and blocks the active Production Deployment then the request will return with 200 status code.</td>
</tr>
<tr>
    <td><a href="#unpause"><CopyableCode code="unpause" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Unpause a project by passing its project `id` in the URL. If the project does not exist given the id then the request will fail with 400 status code. If the project enables auto assigning custom production domains and unblocks the active Production Deployment then the request will return with 200 status code.</td>
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
<tr id="parameter-deployment_id">
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-id_or_name">
    <td><CopyableCode code="id_or_name" /></td>
    <td><code>string</code></td>
    <td>The unique project identifier or the project name</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The unique project identifier</td>
</tr>
<tr id="parameter-build_machine_types">
    <td><CopyableCode code="build_machine_types" /></td>
    <td><code>string</code></td>
    <td>Filter results by effective build machine types. Accepts comma-separated values. Use "elastic" for projects with elastic selection and "default" for projects without a build machine type set. (wire: buildMachineTypes)</td>
</tr>
<tr id="parameter-build_queue_configuration">
    <td><CopyableCode code="build_queue_configuration" /></td>
    <td><code>string</code></td>
    <td>Filter results by build queue configuration. SKIP_NAMESPACE_QUEUE includes projects without a configuration set. (wire: buildQueueConfiguration)</td>
</tr>
<tr id="parameter-deprecated">
    <td><CopyableCode code="deprecated" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-description">
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The reason for the rollback</td>
</tr>
<tr id="parameter-edge_config_id">
    <td><CopyableCode code="edge_config_id" /></td>
    <td><code>string</code></td>
    <td>Filter results by connected Global Config ID (wire: edgeConfigId)</td>
</tr>
<tr id="parameter-edge_config_token_id">
    <td><CopyableCode code="edge_config_token_id" /></td>
    <td><code>string</code></td>
    <td>Filter results by connected Global Config Token ID (wire: edgeConfigTokenId)</td>
</tr>
<tr id="parameter-elastic_concurrency_enabled">
    <td><CopyableCode code="elastic_concurrency_enabled" /></td>
    <td><code>string</code></td>
    <td>Filter results by projects with elastic concurrency enabled (wire: elasticConcurrencyEnabled)</td>
</tr>
<tr id="parameter-exclude_repos">
    <td><CopyableCode code="exclude_repos" /></td>
    <td><code>string</code></td>
    <td>Filter results by excluding those projects that belong to a repo (wire: excludeRepos)</td>
</tr>
<tr id="parameter-from">
    <td><CopyableCode code="from" /></td>
    <td><code>string</code></td>
    <td>Query only projects updated after the given timestamp or continuation token.</td>
</tr>
<tr id="parameter-git_fork_protection">
    <td><CopyableCode code="git_fork_protection" /></td>
    <td><code>string</code></td>
    <td>Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed (wire: gitForkProtection)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>string</code></td>
    <td>Limit the number of projects returned</td>
</tr>
<tr id="parameter-repo">
    <td><CopyableCode code="repo" /></td>
    <td><code>string</code></td>
    <td>Filter results by repo. Also used for project count</td>
</tr>
<tr id="parameter-repo_id">
    <td><CopyableCode code="repo_id" /></td>
    <td><code>string</code></td>
    <td>Filter results by Repository ID. (wire: repoId)</td>
</tr>
<tr id="parameter-repo_url">
    <td><CopyableCode code="repo_url" /></td>
    <td><code>string</code></td>
    <td>Filter results by Repository URL. (wire: repoUrl)</td>
</tr>
<tr id="parameter-search">
    <td><CopyableCode code="search" /></td>
    <td><code>string</code></td>
    <td>Search projects by the name field</td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team slug to perform the request on behalf of.</td>
</tr>
<tr id="parameter-static_ips_enabled">
    <td><CopyableCode code="static_ips_enabled" /></td>
    <td><code>string</code></td>
    <td>Filter results by projects with Static IPs enabled (wire: staticIpsEnabled)</td>
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

Get the information for a specific project by passing either the project `id` or `name` in the URL.

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
integrations,
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
FROM vercel.projects.projects
WHERE id_or_name = '{{ id_or_name }}' -- required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

Allows to retrieve the list of projects of the authenticated user or team. The list will be paginated and the provided query parameters allow filtering the returned projects.

```sql
SELECT
id,
name,
account_id,
transfer_to_account_id,
transferred_from_account_id,
abuse,
alias,
analytics,
applied_cve_55182_migration,
auto_assign_custom_domains,
auto_assign_custom_domains_updated_by,
auto_expose_system_envs,
build_command,
command_for_ignoring_build_step,
created_at,
creator,
customer_support_code_visibility,
deployment_expiration,
dev_command,
directory_listing,
env,
framework,
git_comments,
git_fork_protection,
git_provider_options,
has_active_branches,
install_command,
internal_routes,
ip_buckets,
latest_deployments,
link,
live,
node_version,
oidc_token_config,
output_directory,
passport,
password_protection,
paused,
resource_config,
rolling_release,
root_directory,
security,
serverless_function_region,
serverless_function_zero_config_failover,
skip_git_connect_during_link,
source_files_outside_root_directory,
speed_insights,
sso_protection,
targets,
tier,
transfer_completed_at,
transfer_started_at,
trusted_sources,
updated_at,
web_analytics
FROM vercel.projects.projects
WHERE from = '{{ from }}'
AND git_fork_protection = '{{ git_fork_protection }}'
AND limit = '{{ limit }}'
AND search = '{{ search }}'
AND repo = '{{ repo }}'
AND repo_id = '{{ repo_id }}'
AND repo_url = '{{ repo_url }}'
AND exclude_repos = '{{ exclude_repos }}'
AND edge_config_id = '{{ edge_config_id }}'
AND edge_config_token_id = '{{ edge_config_token_id }}'
AND deprecated = '{{ deprecated }}'
AND elastic_concurrency_enabled = '{{ elastic_concurrency_enabled }}'
AND static_ips_enabled = '{{ static_ips_enabled }}'
AND build_machine_types = '{{ build_machine_types }}'
AND build_queue_configuration = '{{ build_queue_configuration }}'
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

Allows to create a new project with the provided configuration. It only requires the project `name` but more configuration can be provided to override the defaults.

```sql
INSERT INTO vercel.projects.projects (
enable_preview_feedback,
enable_production_feedback,
preview_deployments_disabled,
preview_deployment_suffix,
build_command,
command_for_ignoring_build_step,
dev_command,
environment_variables,
framework,
git_repository,
install_command,
name,
skip_git_connect_during_link,
sso_protection,
sandbox,
output_directory,
public_source,
root_directory,
serverless_function_region,
serverless_function_zero_config_failover,
oidc_token_config,
enable_affected_projects_deployments,
resource_config,
team_id,
slug
)
SELECT 
{{ enable_preview_feedback }},
{{ enable_production_feedback }},
{{ preview_deployments_disabled }},
'{{ preview_deployment_suffix }}',
'{{ build_command }}',
'{{ command_for_ignoring_build_step }}',
'{{ dev_command }}',
'{{ environment_variables }}',
'{{ framework }}',
'{{ git_repository }}',
'{{ install_command }}',
'{{ name }}' /* required */,
{{ skip_git_connect_during_link }},
'{{ sso_protection }}',
'{{ sandbox }}',
'{{ output_directory }}',
{{ public_source }},
'{{ root_directory }}',
'{{ serverless_function_region }}',
{{ serverless_function_zero_config_failover }},
'{{ oidc_token_config }}',
{{ enable_affected_projects_deployments }},
'{{ resource_config }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
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
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: projects
  props:
    - name: enable_preview_feedback
      value: {{ enable_preview_feedback }}
      description: |
        Opt-in to preview toolbar on the project level
    - name: enable_production_feedback
      value: {{ enable_production_feedback }}
      description: |
        Opt-in to production toolbar on the project level
    - name: preview_deployments_disabled
      value: {{ preview_deployments_disabled }}
      description: |
        Specifies whether preview deployments are disabled for this project.
    - name: preview_deployment_suffix
      value: "{{ preview_deployment_suffix }}"
      description: |
        Custom domain suffix for preview deployments. Takes precedence over team-level suffix. Must be a domain owned by the team.
    - name: build_command
      value: "{{ build_command }}"
      description: |
        The build command for this project. When \`null\` is used this value will be automatically detected
    - name: command_for_ignoring_build_step
      value: "{{ command_for_ignoring_build_step }}"
    - name: dev_command
      value: "{{ dev_command }}"
      description: |
        The dev command for this project. When \`null\` is used this value will be automatically detected
    - name: environment_variables
      description: |
        Collection of ENV Variables the Project will use
      value:
        - key: "{{ key }}"
          target: "{{ target }}"
          gitBranch: "{{ gitBranch }}"
          type: "{{ type }}"
          value: "{{ value }}"
    - name: framework
      value: "{{ framework }}"
      description: |
        The framework that is being used for this project. When \`null\` is used no framework is selected
      valid_values: ['', 'container', 'blitzjs', 'nextjs', 'gatsby', 'remix', 'react-router', 'astro', 'hexo', 'eleventy', 'docusaurus-2', 'docusaurus', 'preact', 'solidstart-1', 'solidstart', 'dojo', 'ember', 'vue', 'scully', 'ionic-angular', 'angular', 'polymer', 'svelte', 'sveltekit', 'sveltekit-1', 'ionic-react', 'create-react-app', 'gridsome', 'umijs', 'sapper', 'saber', 'stencil', 'nuxtjs', 'redwoodjs', 'hugo', 'jekyll', 'brunch', 'middleman', 'zola', 'hydrogen', 'vite', 'tanstack-start', 'tanstack-start-lovable', 'vitepress', 'vuepress', 'parcel', 'fastapi', 'flask', 'fasthtml', 'django', 'ash', 'factory-eve', 'eve', 'sanity', 'sanity-v2', 'storybook', 'nitro', 'hono', 'express', 'h3', 'koa', 'nestjs', 'elysia', 'fastify', 'xmcp', 'python', 'ruby', 'rust', 'axum', 'actix-web', 'bun', 'node', 'go', 'services', 'mastra']
    - name: git_repository
      description: |
        The Git Repository that will be connected to the project. When this is defined, any pushes to the specified connected Git Repository will be automatically deployed
      value:
        repo: "{{ repo }}"
        type: "{{ type }}"
    - name: install_command
      value: "{{ install_command }}"
      description: |
        The install command for this project. When \`null\` is used this value will be automatically detected
    - name: name
      value: "{{ name }}"
      description: |
        The desired name for the project
    - name: skip_git_connect_during_link
      value: {{ skip_git_connect_during_link }}
      description: |
        Opts-out of the message prompting a CLI user to connect a Git repository in \`vercel link\`.
    - name: sso_protection
      description: |
        The Vercel Auth setting for the project (historically named \"SSO Protection\")
      value:
        deploymentType: "{{ deploymentType }}"
    - name: sandbox
      description: |
        Specifies the default region and failover regions for sandboxes created in the project
      value:
        region: "{{ region }}"
        failoverRegions: "{{ failoverRegions }}"
    - name: output_directory
      value: "{{ output_directory }}"
      description: |
        The output directory of the project. When \`null\` is used this value will be automatically detected
    - name: public_source
      value: {{ public_source }}
      description: |
        Deprecated. Accepted for backwards compatibility but ignored.
    - name: root_directory
      value: "{{ root_directory }}"
      description: |
        The name of a directory or relative path to the source code of your project. When \`null\` is used it will default to the project root
    - name: serverless_function_region
      value: "{{ serverless_function_region }}"
      description: |
        The region to deploy Serverless Functions in this project
    - name: serverless_function_zero_config_failover
      value: {{ serverless_function_zero_config_failover }}
      description: |
        Specifies whether Zero Config Failover is enabled for this project.
    - name: oidc_token_config
      description: |
        OpenID Connect JSON Web Token generation configuration.
      value:
        enabled: {{ enabled }}
        issuerMode: "{{ issuerMode }}"
    - name: enable_affected_projects_deployments
      value: {{ enable_affected_projects_deployments }}
      description: |
        Opt-in to skip deployments when there are no changes to the root directory and its dependencies
    - name: resource_config
      description: |
        Specifies resource override configuration for the project
      value:
        buildMachineType: "{{ buildMachineType }}"
        fluid: {{ fluid }}
        functionDefaultRegions:
          - "{{ functionDefaultRegions }}"
        functionDefaultTimeout: {{ functionDefaultTimeout }}
        functionDefaultMemoryType: "{{ functionDefaultMemoryType }}"
        functionZeroConfigFailover: "{{ functionZeroConfigFailover }}"
        elasticConcurrencyEnabled: {{ elasticConcurrencyEnabled }}
        buildMachineSelection: "{{ buildMachineSelection }}"
        buildMachineElasticLastUpdated: {{ buildMachineElasticLastUpdated }}
        buildMachineElasticReason: "{{ buildMachineElasticReason }}"
        isNSNBDisabled: {{ isNSNBDisabled }}
        buildQueue:
          configuration: "{{ configuration }}"
        enableFunctionsBeta: {{ enableFunctionsBeta }}
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

Update the fields of a project using either its `name` or `id`.

```sql
UPDATE vercel.projects.projects
SET 
auto_expose_system_envs = {{ auto_expose_system_envs }},
auto_assign_custom_domains = {{ auto_assign_custom_domains }},
auto_assign_custom_domains_updated_by = '{{ auto_assign_custom_domains_updated_by }}',
build_command = '{{ build_command }}',
command_for_ignoring_build_step = '{{ command_for_ignoring_build_step }}',
customer_support_code_visibility = {{ customer_support_code_visibility }},
dev_command = '{{ dev_command }}',
directory_listing = {{ directory_listing }},
framework = '{{ framework }}',
git_fork_protection = {{ git_fork_protection }},
git_lfs = {{ git_lfs }},
protected_sourcemaps = {{ protected_sourcemaps }},
install_command = '{{ install_command }}',
name = '{{ name }}',
node_version = '{{ node_version }}',
output_directory = '{{ output_directory }}',
preview_deployments_disabled = {{ preview_deployments_disabled }},
preview_deployment_suffix = '{{ preview_deployment_suffix }}',
resource_config = '{{ resource_config }}',
public_source = {{ public_source }},
root_directory = '{{ root_directory }}',
serverless_function_region = '{{ serverless_function_region }}',
serverless_function_zero_config_failover = {{ serverless_function_zero_config_failover }},
skew_protection_boundary_at = {{ skew_protection_boundary_at }},
skew_protection_max_age = {{ skew_protection_max_age }},
skew_protection_allowed_domains = '{{ skew_protection_allowed_domains }}',
skip_git_connect_during_link = {{ skip_git_connect_during_link }},
source_files_outside_root_directory = {{ source_files_outside_root_directory }},
enable_preview_feedback = {{ enable_preview_feedback }},
enable_production_feedback = {{ enable_production_feedback }},
enable_affected_projects_deployments = {{ enable_affected_projects_deployments }},
enable_external_rewrite_caching = {{ enable_external_rewrite_caching }},
static_ips = '{{ static_ips }}',
tracing = '{{ tracing }}',
oidc_token_config = '{{ oidc_token_config }}',
password_protection = '{{ password_protection }}',
passport = '{{ passport }}',
sandbox = '{{ sandbox }}',
sso_protection = '{{ sso_protection }}',
trusted_ips = '{{ trusted_ips }}',
trusted_sources = '{{ trusted_sources }}',
deployment_policy = '{{ deployment_policy }}',
options_allowlist = '{{ options_allowlist }}',
connect_configurations = '{{ connect_configurations }}',
dismissed_toasts = '{{ dismissed_toasts }}'
WHERE 
id_or_name = '{{ id_or_name }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
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
web_analytics;
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

Delete a specific project by passing either the project `id` or `name` in the URL.

```sql
DELETE FROM vercel.projects.projects
WHERE id_or_name = '{{ id_or_name }}' --required
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="get_token"
    values={[
        { label: 'get_token', value: 'get_token' },
        { label: 'upload_avatar', value: 'upload_avatar' },
        { label: 'update_protection_bypass', value: 'update_protection_bypass' },
        { label: 'rollback', value: 'rollback' },
        { label: 'update_rollback_description', value: 'update_rollback_description' },
        { label: 'update_microfrontends', value: 'update_microfrontends' },
        { label: 'promote', value: 'promote' },
        { label: 'pause', value: 'pause' },
        { label: 'unpause', value: 'unpause' }
    ]}
>
<TabItem value="get_token">

Generates an OIDC token for the project and returns it.

```sql
EXEC vercel.projects.projects.get_token 
@id_or_name='{{ id_or_name }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"source": "{{ source }}"
}'
;
```
</TabItem>
<TabItem value="upload_avatar">

Upload an image as the avatar of the project identified by `idOrName`. The request body is the raw bytes of a JPG, PNG, or SVG image; the `Content-Type` header must declare which. SVG payloads are sanitized and optimized server-side before storage. The final SHA-1 of the stored bytes becomes the project's `avatar` value. The actual upload pipeline (validation, sanitization, S3 write, conditional `updateProject`, and event emission) lives in the shared `@api/project-avatar-upload` helper so it can be reused by background workers.

```sql
EXEC vercel.projects.projects.upload_avatar 
@id_or_name='{{ id_or_name }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"value": "{{ value }}"
}'
;
```
</TabItem>
<TabItem value="update_protection_bypass">

Update the deployment protection automation bypass for a project

```sql
EXEC vercel.projects.projects.update_protection_bypass 
@id_or_name='{{ id_or_name }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"revoke": "{{ revoke }}", 
"generate": "{{ generate }}", 
"update": "{{ update }}"
}'
;
```
</TabItem>
<TabItem value="rollback">

Allows users to rollback to a deployment.

```sql
EXEC vercel.projects.projects.rollback 
@project_id='{{ project_id }}' --required, 
@deployment_id='{{ deployment_id }}' --required, 
@description='{{ description }}', 
@teamId='{{ teamId }}', 
@slug='{{ slug }}'
;
```
</TabItem>
<TabItem value="update_rollback_description">

Updates the reason for a rollback, without changing the rollback status itself.

```sql
EXEC vercel.projects.projects.update_rollback_description 
@project_id='{{ project_id }}' --required, 
@deployment_id='{{ deployment_id }}' --required 
@@json=
'{
"description": "{{ description }}"
}'
;
```
</TabItem>
<TabItem value="update_microfrontends">

Update the microfrontends settings for a project.

```sql
EXEC vercel.projects.projects.update_microfrontends 
@project_id='{{ project_id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}' 
@@json=
'{
"microfrontendsGroupId": "{{ microfrontendsGroupId }}", 
"enabled": {{ enabled }}, 
"isDefaultApp": {{ isDefaultApp }}, 
"defaultRoute": "{{ defaultRoute }}", 
"routeObservabilityToThisProject": {{ routeObservabilityToThisProject }}, 
"doNotRouteWithMicrofrontendsRouting": {{ doNotRouteWithMicrofrontendsRouting }}
}'
;
```
</TabItem>
<TabItem value="promote">

Allows users to promote a deployment to production. Note: This does NOT rebuild the deployment. If you need that, then call create-deployments endpoint.

```sql
EXEC vercel.projects.projects.promote 
@project_id='{{ project_id }}' --required, 
@deployment_id='{{ deployment_id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}'
;
```
</TabItem>
<TabItem value="pause">

Pause a project by passing its project `id` in the URL. If the project does not exist given the id then the request will fail with 400 status code. If the project disables auto assigning custom production domains and blocks the active Production Deployment then the request will return with 200 status code.

```sql
EXEC vercel.projects.projects.pause 
@project_id='{{ project_id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}'
;
```
</TabItem>
<TabItem value="unpause">

Unpause a project by passing its project `id` in the URL. If the project does not exist given the id then the request will fail with 400 status code. If the project enables auto assigning custom production domains and unblocks the active Production Deployment then the request will return with 200 status code.

```sql
EXEC vercel.projects.projects.unpause 
@project_id='{{ project_id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}'
;
```
</TabItem>
</Tabs>
