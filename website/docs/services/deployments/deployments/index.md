--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
  - deployments
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

Creates, updates, deletes, gets or lists a <code>deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.deployments.deployments" /></td></tr>
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

Returns a reduced view of the deployment with public information only. Private fields are omitted when the requester is not the deployment owner.&lt;br /&gt;Returns the deployment object for the authenticated owner, including private fields such as environment variables, build log URLs, and internal metadata.&lt;br /&gt;Returns the reduced deployment view for anonymous (`vcn_`) callers. Pool-team details are withheld.

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
    <td>A string holding the unique ID of the deployment (example: dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the project associated with the deployment at the time that the deployment was created (example: my-project)</td>
</tr>
<tr>
    <td><CopyableCode code="connect_configuration_id" /></td>
    <td><code>string</code></td>
    <td> (wire: connectConfigurationId)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td> (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="passive_connect_configuration_id" /></td>
    <td><code>string</code></td>
    <td>Since November 2023 this field defines a Secure Compute network that will only be used to deploy passive lambdas to (as in passiveRegions) (wire: passiveConnectConfigurationId)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td> (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="user_configured_deployment_id" /></td>
    <td><code>string</code></td>
    <td>Since January 2025 User-configured deployment ID for skew protection with pre-built deployments. This is set when users configure a custom deploymentId in their next.config.js file. This allows Next.js to use skew protection even when deployments are pre-built outside of Vercel's build system. (example: abc123) (wire: userConfiguredDeploymentId)</td>
</tr>
<tr>
    <td><CopyableCode code="alias" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="alias_assigned" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: aliasAssigned)</td>
</tr>
<tr>
    <td><CopyableCode code="alias_assigned_at" /></td>
    <td><code></code></td>
    <td> (wire: aliasAssignedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="alias_error" /></td>
    <td><code>object</code></td>
    <td>An object that will contain a `code` and a `message` when the aliasing fails, otherwise the value will be `null` (wire: aliasError)</td>
</tr>
<tr>
    <td><CopyableCode code="alias_final" /></td>
    <td><code>string</code></td>
    <td> (wire: aliasFinal)</td>
</tr>
<tr>
    <td><CopyableCode code="alias_warning" /></td>
    <td><code>object</code></td>
    <td> (wire: aliasWarning)</td>
</tr>
<tr>
    <td><CopyableCode code="always_refuse_to_build" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: alwaysRefuseToBuild)</td>
</tr>
<tr>
    <td><CopyableCode code="atproto" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="attribution" /></td>
    <td><code>object</code></td>
    <td>Attribution metadata for the deployment, linking commit author to git and Vercel users. Only populated when the `enable-deployment-attribution` flag is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_assign_custom_domains" /></td>
    <td><code>boolean</code></td>
    <td>applies to custom domains only, defaults to `true` (false, true) (wire: autoAssignCustomDomains)</td>
</tr>
<tr>
    <td><CopyableCode code="automatic_aliases" /></td>
    <td><code>array</code></td>
    <td> (wire: automaticAliases)</td>
</tr>
<tr>
    <td><CopyableCode code="booted_at" /></td>
    <td><code>number</code></td>
    <td> (wire: bootedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="build" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="build_artifact_urls" /></td>
    <td><code>array</code></td>
    <td> (wire: buildArtifactUrls)</td>
</tr>
<tr>
    <td><CopyableCode code="build_container_finished_at" /></td>
    <td><code>number</code></td>
    <td>Since April 2025 it necessary for On-Demand Concurrency Minutes calculation (wire: buildContainerFinishedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="build_error_at" /></td>
    <td><code>number</code></td>
    <td> (wire: buildErrorAt)</td>
</tr>
<tr>
    <td><CopyableCode code="build_skipped" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: buildSkipped)</td>
</tr>
<tr>
    <td><CopyableCode code="building_at" /></td>
    <td><code>number</code></td>
    <td> (wire: buildingAt)</td>
</tr>
<tr>
    <td><CopyableCode code="builds" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="canceled_at" /></td>
    <td><code>number</code></td>
    <td> (wire: canceledAt)</td>
</tr>
<tr>
    <td><CopyableCode code="checks" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="checks_conclusion" /></td>
    <td><code>string</code></td>
    <td> (canceled, failed, skipped, succeeded) (wire: checksConclusion)</td>
</tr>
<tr>
    <td><CopyableCode code="checks_state" /></td>
    <td><code>string</code></td>
    <td> (completed, registered, running) (wire: checksState)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Since February 2025 the configuration must include snapshot data at the time of deployment creation to capture properties for the /deployments/:id/config endpoint utilized for displaying Deployment Configuration on the frontend This is optional because older deployments may not have this data captured</td>
</tr>
<tr>
    <td><CopyableCode code="connect_builds_enabled" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: connectBuildsEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>A number containing the date when the deployment was created in milliseconds (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_in" /></td>
    <td><code>string</code></td>
    <td> (wire: createdIn)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>Information about the deployment creator</td>
</tr>
<tr>
    <td><CopyableCode code="crons" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="custom_environment" /></td>
    <td><code></code></td>
    <td> (wire: customEnvironment)</td>
</tr>
<tr>
    <td><CopyableCode code="default_route" /></td>
    <td><code>string</code></td>
    <td>Computed field that is only available for deployments with a microfrontend configuration. (wire: defaultRoute)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>number</code></td>
    <td>A number containing the date when the deployment was deleted at milliseconds (wire: deletedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="env" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td> (wire: errorCode)</td>
</tr>
<tr>
    <td><CopyableCode code="error_link" /></td>
    <td><code>string</code></td>
    <td> (wire: errorLink)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td> (wire: errorMessage)</td>
</tr>
<tr>
    <td><CopyableCode code="error_step" /></td>
    <td><code>string</code></td>
    <td> (wire: errorStep)</td>
</tr>
<tr>
    <td><CopyableCode code="flags" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="functions" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="git_repo" /></td>
    <td><code></code></td>
    <td> (wire: gitRepo)</td>
</tr>
<tr>
    <td><CopyableCode code="git_source" /></td>
    <td><code></code></td>
    <td> (wire: gitSource)</td>
</tr>
<tr>
    <td><CopyableCode code="images" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="init_ready_at" /></td>
    <td><code>number</code></td>
    <td> (wire: initReadyAt)</td>
</tr>
<tr>
    <td><CopyableCode code="inspector_url" /></td>
    <td><code>string</code></td>
    <td> (wire: inspectorUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="integrations" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_first_branch_deployment" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: isFirstBranchDeployment)</td>
</tr>
<tr>
    <td><CopyableCode code="is_in_concurrent_builds_queue" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: isInConcurrentBuildsQueue)</td>
</tr>
<tr>
    <td><CopyableCode code="is_in_system_builds_queue" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: isInSystemBuildsQueue)</td>
</tr>
<tr>
    <td><CopyableCode code="is_instant_static" /></td>
    <td><code>boolean</code></td>
    <td>Whether this deployment completed through the instant static fast path. (false, true) (wire: isInstantStatic)</td>
</tr>
<tr>
    <td><CopyableCode code="lambdas" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="manual_provisioning" /></td>
    <td><code>object</code></td>
    <td>Present when deployment was created with manual provisioning enabled, either explicitly or via the experimental BYOC git flow. The deployment stays in INITIALIZING until /continue is called. (wire: manualProvisioning)</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="microfrontends" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="monorepo_manager" /></td>
    <td><code>string</code></td>
    <td> (wire: monorepoManager)</td>
</tr>
<tr>
    <td><CopyableCode code="node_version" /></td>
    <td><code>string</code></td>
    <td>If set it overrides the `projectSettings.nodeVersion` for this deployment. (10.x, 12.x, 14.x, 16.x, 18.x, 20.x, 22.x, 24.x, 8.10.x) (wire: nodeVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="oidc_token_claims" /></td>
    <td><code>object</code></td>
    <td> (wire: oidcTokenClaims)</td>
</tr>
<tr>
    <td><CopyableCode code="oom_report" /></td>
    <td><code>string</code></td>
    <td> (out-of-memory) (wire: oomReport)</td>
</tr>
<tr>
    <td><CopyableCode code="origin_cache_region" /></td>
    <td><code>string</code></td>
    <td> (wire: originCacheRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="passive_regions" /></td>
    <td><code>array</code></td>
    <td>Since November 2023 this field defines a set of regions that we will deploy the lambda to passively Lambdas will be deployed to these regions but only invoked if all of the primary `regions` are marked as out of service (wire: passiveRegions)</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td> (enterprise, hobby, pro)</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>object</code></td>
    <td>Metadata about the source platform that triggered the deployment. Allows us to map a deployment back to a platform (e.g. the chat that created it)</td>
</tr>
<tr>
    <td><CopyableCode code="prebuilt" /></td>
    <td><code>boolean</code></td>
    <td> (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="preview_comments_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not preview comments are enabled for the deployment (false, true) (wire: previewCommentsEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="project" /></td>
    <td><code>object</code></td>
    <td>The public project information associated with the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="project_settings" /></td>
    <td><code>object</code></td>
    <td> (wire: projectSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="public" /></td>
    <td><code>boolean</code></td>
    <td>A boolean representing if the deployment is public or not. By default this is `false` (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="ready" /></td>
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ready_state" /></td>
    <td><code>string</code></td>
    <td>The state of the deployment depending on the process of deploying, or if it is ready or in an error state (BLOCKED, BUILDING, CANCELED, ERROR, INITIALIZING, QUEUED, READY) (example: READY) (wire: readyState)</td>
</tr>
<tr>
    <td><CopyableCode code="ready_state_reason" /></td>
    <td><code>string</code></td>
    <td> (wire: readyStateReason)</td>
</tr>
<tr>
    <td><CopyableCode code="ready_substate" /></td>
    <td><code>string</code></td>
    <td>Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of having production traffic gradually transitioned. - PROMOTED: has seen production traffic (PROMOTED, ROLLING, STAGED) (wire: readySubstate)</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>The regions the deployment exists in</td>
</tr>
<tr>
    <td><CopyableCode code="resource_config" /></td>
    <td><code>object</code></td>
    <td> (wire: resourceConfig)</td>
</tr>
<tr>
    <td><CopyableCode code="routes" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="seat_block" /></td>
    <td><code>object</code></td>
    <td>NSNB Blocked metadata (wire: seatBlock)</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td>Services detected during build from vercel.json experimentalServices or auto-detected from project structure. Used to inject service URLs as environment variables at runtime.</td>
</tr>
<tr>
    <td><CopyableCode code="soft_deleted_by_retention" /></td>
    <td><code>boolean</code></td>
    <td>flag to indicate if the deployment was deleted by retention policy (false, true) (example: true) (wire: softDeletedByRetention)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Where was the deployment created from. Best-effort guess for metrics only — not authoritative; do not gate behavior on it. (api-trigger-git-deploy, cli, clone/repo, drop, git, git-deploy-hook, import, import/repo, redeploy, v0-web) (example: cli)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (BLOCKED, BUILDING, CANCELED, ERROR, INITIALIZING, QUEUED, READY)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>If defined, either `staging` if a staging alias in the format `&lt;project&gt;.&lt;team&gt;.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment. (production, staging, )</td>
</tr>
<tr>
    <td><CopyableCode code="team" /></td>
    <td><code>object</code></td>
    <td>The team that owns the deployment if any</td>
</tr>
<tr>
    <td><CopyableCode code="tty_build_logs" /></td>
    <td><code>boolean</code></td>
    <td> (false, true) (wire: ttyBuildLogs)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (LAMBDAS)</td>
</tr>
<tr>
    <td><CopyableCode code="undeleted_at" /></td>
    <td><code>number</code></td>
    <td>A number containing the date when the deployment was undeleted at milliseconds (wire: undeletedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>A string with the unique URL of the deployment (example: my-instant-deployment-3ij3cxz9qr.now.sh)</td>
</tr>
<tr>
    <td><CopyableCode code="user_aliases" /></td>
    <td><code>array</code></td>
    <td>An array of domains that were provided by the user when creating the Deployment. (wire: userAliases)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>number</code></td>
    <td>The platform version that was used to create the deployment. (2)</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the deployment. (example: docs)</td>
</tr>
<tr>
    <td><CopyableCode code="connect_configuration_id" /></td>
    <td><code>string</code></td>
    <td>The ID of Secure Compute network used for this deployment (wire: connectConfigurationId)</td>
</tr>
<tr>
    <td><CopyableCode code="passive_connect_configuration_id" /></td>
    <td><code>string</code></td>
    <td>The ID of Secure Compute network used for this deployment's passive functions (wire: passiveConnectConfigurationId)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The project ID of the deployment (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="alias_assigned" /></td>
    <td><code></code></td>
    <td> (wire: aliasAssigned)</td>
</tr>
<tr>
    <td><CopyableCode code="alias_error" /></td>
    <td><code>object</code></td>
    <td>An error object in case aliasing of the deployment failed. (wire: aliasError)</td>
</tr>
<tr>
    <td><CopyableCode code="attribution" /></td>
    <td><code>object</code></td>
    <td>Commit attribution metadata</td>
</tr>
<tr>
    <td><CopyableCode code="building_at" /></td>
    <td><code>number</code></td>
    <td>Timestamp of when the deployment started building at. (wire: buildingAt)</td>
</tr>
<tr>
    <td><CopyableCode code="checks" /></td>
    <td><code>object</code></td>
    <td>Detailed information about v2 deployment checks. Includes information about blocked workflows in the deployment lifecycle.</td>
</tr>
<tr>
    <td><CopyableCode code="checks_conclusion" /></td>
    <td><code>string</code></td>
    <td>Conclusion for checks (canceled, failed, skipped, succeeded) (wire: checksConclusion)</td>
</tr>
<tr>
    <td><CopyableCode code="checks_state" /></td>
    <td><code>string</code></td>
    <td>State of all registered checks (completed, registered, running) (wire: checksState)</td>
</tr>
<tr>
    <td><CopyableCode code="connect_builds_enabled" /></td>
    <td><code>boolean</code></td>
    <td>The flag saying if Secure Compute network is used for builds (false, true) (wire: connectBuildsEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>number</code></td>
    <td>Timestamp of when the deployment got created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td> (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>Metadata information of the deployment creator.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_environment" /></td>
    <td><code>object</code></td>
    <td>The custom environment used for this deployment, if any (wire: customEnvironment)</td>
</tr>
<tr>
    <td><CopyableCode code="default_route" /></td>
    <td><code>string</code></td>
    <td>The default route that should be used for screenshots and links if configured with microfrontends. (example: /docs) (wire: defaultRoute)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>number</code></td>
    <td>Timestamp of when the deployment got deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>Error code when the deployment is in an error state. (example: BUILD_FAILED) (wire: errorCode)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Error message when the deployment is in an canceled or error state. (example: The Deployment has been canceled because this project was not affected) (wire: errorMessage)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration" /></td>
    <td><code>number</code></td>
    <td>The expiration configured by the project retention policy</td>
</tr>
<tr>
    <td><CopyableCode code="inspector_url" /></td>
    <td><code>string</code></td>
    <td>Vercel URL to inspect the deployment. (example: https:​//vercel.com/acme/nextjs/J1hXN00qjUeoYfpEEf7dnDtpSiVq) (wire: inspectorUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="is_rollback_candidate" /></td>
    <td><code>boolean</code></td>
    <td>Deployment can be used for instant rollback (false, true, ) (wire: isRollbackCandidate)</td>
</tr>
<tr>
    <td><CopyableCode code="manual_provisioning" /></td>
    <td><code>object</code></td>
    <td> (wire: manualProvisioning)</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Metadata information from the Git provider.</td>
</tr>
<tr>
    <td><CopyableCode code="oom_report" /></td>
    <td><code>string</code></td>
    <td>Indicates if the deployment encountered an out-of-memory error. (out-of-memory) (example: out-of-memory) (wire: oomReport)</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>object</code></td>
    <td>Metadata about the source platform that triggered the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="prebuilt" /></td>
    <td><code>boolean</code></td>
    <td> (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="project_settings" /></td>
    <td><code>object</code></td>
    <td>The project settings which was used for this deployment (wire: projectSettings)</td>
</tr>
<tr>
    <td><CopyableCode code="proposed_expiration" /></td>
    <td><code>number</code></td>
    <td>The expiration proposed to replace the existing expiration (wire: proposedExpiration)</td>
</tr>
<tr>
    <td><CopyableCode code="ready" /></td>
    <td><code>number</code></td>
    <td>Timestamp of when the deployment got ready.</td>
</tr>
<tr>
    <td><CopyableCode code="ready_state" /></td>
    <td><code>string</code></td>
    <td> (BLOCKED, BUILDING, CANCELED, DELETED, ERROR, INITIALIZING, QUEUED, READY) (wire: readyState)</td>
</tr>
<tr>
    <td><CopyableCode code="ready_substate" /></td>
    <td><code>string</code></td>
    <td>Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - ROLLING: in the process of gradually transitioning production traffic - PROMOTED: has seen production traffic (PROMOTED, ROLLING, STAGED) (wire: readySubstate)</td>
</tr>
<tr>
    <td><CopyableCode code="seat_block" /></td>
    <td><code>object</code></td>
    <td>NSNB Blocked metadata (wire: seatBlock)</td>
</tr>
<tr>
    <td><CopyableCode code="soft_deleted_by_retention" /></td>
    <td><code>boolean</code></td>
    <td>Optional flag to indicate if the deployment was soft deleted by retention policy. (false, true) (wire: softDeletedByRetention)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The source of the deployment. (api-trigger-git-deploy, cli, clone/repo, drop, git, git-deploy-hook, import, import/repo, redeploy, v0-web) (example: cli)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>In which state is the deployment. (BLOCKED, BUILDING, CANCELED, DELETED, ERROR, INITIALIZING, QUEUED, READY) (example: READY)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>On which environment has the deployment been deployed to. (production, staging, ) (example: production)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the deployment. (LAMBDAS) (example: LAMBDAS)</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the deployment. (example: dpl_2euZBFqxYdDMDG1jTrHFnNZ2eUVa)</td>
</tr>
<tr>
    <td><CopyableCode code="undeleted" /></td>
    <td><code>number</code></td>
    <td>Timestamp of when the deployment was undeleted.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The URL of the deployment. (example: docs-9jaeg38me.vercel.app)</td>
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
    <td><a href="#parameter-id_or_url"><code>id_or_url</code></a></td>
    <td><a href="#parameter-with_git_repo_info"><code>with_git_repo_info</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Retrieves information for a deployment either by supplying its ID (`id` property) or Hostname (`url` property). Additional details will be included when the authenticated user or team is an owner of the deployment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-app"><code>app</code></a>, <a href="#parameter-from"><code>from</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-project_ids"><code>project_ids</code></a>, <a href="#parameter-target"><code>target</code></a>, <a href="#parameter-to"><code>to</code></a>, <a href="#parameter-users"><code>users</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-rollback_candidate"><code>rollback_candidate</code></a>, <a href="#parameter-branch"><code>branch</code></a>, <a href="#parameter-sha"><code>sha</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>List deployments under the authenticated user or team. If a deployment hasn't finished uploading (is incomplete), the `url` property will have a value of `null`.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-force_new"><code>force_new</code></a>, <a href="#parameter-skip_auto_detection_confirmation"><code>skip_auto_detection_confirmation</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Creates a new deployment for the authenticated team or user. For non-git deployments, upload files first via the file upload API, then reference them here by SHA — or inline small files directly in the request body. To redeploy an existing deployment, provide its `deploymentId`; all settings are inherited unless explicitly overridden. The deployment begins building immediately and transitions through `QUEUED` → `INITIALIZING` → `BUILDING` before reaching `READY` or `ERROR`.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-url"><code>url</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>This API allows you to delete a deployment, either by supplying its `id` in the URL or the `url` of the deployment as a query parameter. You can obtain the ID, for example, by listing all deployments.</td>
</tr>
<tr>
    <td><a href="#update_integration_action"><CopyableCode code="update_integration_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-integration_configuration_id"><code>integration_configuration_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Updates the deployment integration action for the specified integration installation</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Cancels a deployment that is currently in progress, stopping the build before it completes. Use this to recover quickly from accidental deploys, wrong-branch pushes, or builds with known errors — without waiting for them to finish. Returns 400 if the deployment is no longer cancelable (already `READY`, `ERROR`, or `CANCELED`). Returns the updated deployment object with `readyState: 'CANCELED'` on success.</td>
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
<tr id="parameter-action">
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-deployment_id">
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the deployment.</td>
</tr>
<tr id="parameter-id_or_url">
    <td><CopyableCode code="id_or_url" /></td>
    <td><code>string</code></td>
    <td>The unique identifier or hostname of the deployment.</td>
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
<tr id="parameter-app">
    <td><CopyableCode code="app" /></td>
    <td><code>string</code></td>
    <td>Name of the deployment.</td>
</tr>
<tr id="parameter-branch">
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td>Filter deployments based on the branch name</td>
</tr>
<tr id="parameter-force_new">
    <td><CopyableCode code="force_new" /></td>
    <td><code></code></td>
    <td>Forces a new deployment even if there is a previous similar deployment. Set to `1` to bypass deployment deduplication and always trigger a fresh build. (wire: forceNew)</td>
</tr>
<tr id="parameter-from">
    <td><CopyableCode code="from" /></td>
    <td><code>number</code></td>
    <td>Gets the deployment created after this Date timestamp. (default: current time)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>number</code></td>
    <td>Maximum number of deployments to list from a request.</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Filter deployments from the given ID or name. (wire: projectId)</td>
</tr>
<tr id="parameter-project_ids">
    <td><CopyableCode code="project_ids" /></td>
    <td><code>array</code></td>
    <td>Filter deployments from the given project IDs. Cannot be used when projectId is specified. (wire: projectIds)</td>
</tr>
<tr id="parameter-rollback_candidate">
    <td><CopyableCode code="rollback_candidate" /></td>
    <td><code>boolean</code></td>
    <td>Filter deployments based on their rollback candidacy (wire: rollbackCandidate)</td>
</tr>
<tr id="parameter-sha">
    <td><CopyableCode code="sha" /></td>
    <td><code>string</code></td>
    <td>Filter deployments based on the SHA</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>number</code></td>
    <td>Get Deployments created after this JavaScript timestamp.</td>
</tr>
<tr id="parameter-skip_auto_detection_confirmation">
    <td><CopyableCode code="skip_auto_detection_confirmation" /></td>
    <td><code></code></td>
    <td>Set to `1` to skip framework auto-detection and proceed without confirmation. By default, if Vercel detects a framework that differs from the project setting, the API returns a `400` asking you to confirm. Use this to suppress that check in automated pipelines. (wire: skipAutoDetectionConfirmation)</td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The Team slug to perform the request on behalf of.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Filter deployments based on their state (`BUILDING`, `ERROR`, `INITIALIZING`, `QUEUED`, `READY`, `CANCELED`, `BLOCKED`)</td>
</tr>
<tr id="parameter-target">
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>Filter deployments based on the environment.</td>
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
<tr id="parameter-to">
    <td><CopyableCode code="to" /></td>
    <td><code>number</code></td>
    <td>Gets the deployment created before this Date timestamp. (default: current time)</td>
</tr>
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code>number</code></td>
    <td>Get Deployments created before this JavaScript timestamp.</td>
</tr>
<tr id="parameter-url">
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>A Deployment or Alias URL. In case it is passed, the ID will be ignored</td>
</tr>
<tr id="parameter-users">
    <td><CopyableCode code="users" /></td>
    <td><code>string</code></td>
    <td>Filter out deployments based on users who have created the deployment.</td>
</tr>
<tr id="parameter-with_git_repo_info">
    <td><CopyableCode code="with_git_repo_info" /></td>
    <td><code>string</code></td>
    <td>When `true`, the response includes the `gitSource` object with the commit SHA, branch name, and connected repository metadata. Defaults to `false`. (wire: withGitRepoInfo)</td>
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

Retrieves information for a deployment either by supplying its ID (`id` property) or Hostname (`url` property). Additional details will be included when the authenticated user or team is an owner of the deployment.

```sql
SELECT
id,
name,
connect_configuration_id,
owner_id,
passive_connect_configuration_id,
project_id,
user_configured_deployment_id,
alias,
alias_assigned,
alias_assigned_at,
alias_error,
alias_final,
alias_warning,
always_refuse_to_build,
atproto,
attribution,
auto_assign_custom_domains,
automatic_aliases,
booted_at,
build,
build_artifact_urls,
build_container_finished_at,
build_error_at,
build_skipped,
building_at,
builds,
canceled_at,
checks,
checks_conclusion,
checks_state,
config,
connect_builds_enabled,
created_at,
created_in,
creator,
crons,
custom_environment,
default_route,
deleted_at,
env,
error_code,
error_link,
error_message,
error_step,
flags,
functions,
git_repo,
git_source,
images,
init_ready_at,
inspector_url,
integrations,
is_first_branch_deployment,
is_in_concurrent_builds_queue,
is_in_system_builds_queue,
is_instant_static,
lambdas,
manual_provisioning,
meta,
microfrontends,
monorepo_manager,
node_version,
oidc_token_claims,
oom_report,
origin_cache_region,
passive_regions,
plan,
platform,
prebuilt,
preview_comments_enabled,
project,
project_settings,
public,
ready,
ready_state,
ready_state_reason,
ready_substate,
regions,
resource_config,
routes,
seat_block,
services,
soft_deleted_by_retention,
source,
status,
target,
team,
tty_build_logs,
type,
undeleted_at,
url,
user_aliases,
version
FROM vercel.deployments.deployments
WHERE id_or_url = '{{ id_or_url }}' -- required
AND with_git_repo_info = '{{ with_git_repo_info }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

List deployments under the authenticated user or team. If a deployment hasn't finished uploading (is incomplete), the `url` property will have a value of `null`.

```sql
SELECT
name,
connect_configuration_id,
passive_connect_configuration_id,
project_id,
alias_assigned,
alias_error,
attribution,
building_at,
checks,
checks_conclusion,
checks_state,
connect_builds_enabled,
created,
created_at,
creator,
custom_environment,
default_route,
deleted,
error_code,
error_message,
expiration,
inspector_url,
is_rollback_candidate,
manual_provisioning,
meta,
oom_report,
platform,
prebuilt,
project_settings,
proposed_expiration,
ready,
ready_state,
ready_substate,
seat_block,
soft_deleted_by_retention,
source,
state,
target,
type,
uid,
undeleted,
url
FROM vercel.deployments.deployments
WHERE app = '{{ app }}'
AND from = '{{ from }}'
AND limit = '{{ limit }}'
AND project_id = '{{ project_id }}'
AND project_ids = '{{ project_ids }}'
AND target = '{{ target }}'
AND to = '{{ to }}'
AND users = '{{ users }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
AND state = '{{ state }}'
AND rollback_candidate = '{{ rollback_candidate }}'
AND branch = '{{ branch }}'
AND sha = '{{ sha }}'
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

Creates a new deployment for the authenticated team or user. For non-git deployments, upload files first via the file upload API, then reference them here by SHA — or inline small files directly in the request body. To redeploy an existing deployment, provide its `deploymentId`; all settings are inherited unless explicitly overridden. The deployment begins building immediately and transitions through `QUEUED` → `INITIALIZING` → `BUILDING` before reaching `READY` or `ERROR`.

```sql
INSERT INTO vercel.deployments.deployments (
custom_environment_slug_or_id,
deployment_id,
files,
git_access_token,
git_metadata,
git_source,
meta,
monorepo_manager,
name,
project,
project_settings,
target,
with_latest_commit,
force_new,
skip_auto_detection_confirmation,
team_id,
slug
)
SELECT 
'{{ custom_environment_slug_or_id }}',
'{{ deployment_id }}',
'{{ files }}',
'{{ git_access_token }}',
'{{ git_metadata }}',
'{{ git_source }}',
'{{ meta }}',
'{{ monorepo_manager }}',
'{{ name }}' /* required */,
'{{ project }}',
'{{ project_settings }}',
'{{ target }}',
{{ with_latest_commit }},
'{{ force_new }}',
'{{ skip_auto_detection_confirmation }}',
'{{ team_id }}',
'{{ slug }}'
RETURNING
id,
name,
connect_configuration_id,
owner_id,
passive_connect_configuration_id,
project_id,
user_configured_deployment_id,
alias,
alias_assigned,
alias_assigned_at,
alias_error,
alias_final,
alias_warning,
always_refuse_to_build,
atproto,
attribution,
auto_assign_custom_domains,
automatic_aliases,
booted_at,
build,
build_artifact_urls,
build_container_finished_at,
build_error_at,
build_skipped,
building_at,
builds,
canceled_at,
checks,
checks_conclusion,
checks_state,
config,
connect_builds_enabled,
created_at,
created_in,
creator,
crons,
custom_environment,
default_route,
deleted_at,
env,
error_code,
error_link,
error_message,
error_step,
flags,
functions,
git_repo,
git_source,
images,
init_ready_at,
inspector_url,
integrations,
is_first_branch_deployment,
is_in_concurrent_builds_queue,
is_in_system_builds_queue,
is_instant_static,
lambdas,
manual_provisioning,
meta,
microfrontends,
monorepo_manager,
node_version,
oidc_token_claims,
oom_report,
origin_cache_region,
passive_regions,
plan,
platform,
prebuilt,
preview_comments_enabled,
project,
project_settings,
public,
ready,
ready_state,
ready_state_reason,
ready_substate,
regions,
resource_config,
routes,
seat_block,
services,
soft_deleted_by_retention,
source,
status,
target,
team,
tty_build_logs,
type,
undeleted_at,
url,
user_aliases,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: deployments
  props:
    - name: custom_environment_slug_or_id
      value: "{{ custom_environment_slug_or_id }}"
      description: |
        The slug or ID of a custom environment to deploy to, overriding the default target environment. When omitted, the deployment targets the environment inferred from the branch (production or preview).
    - name: deployment_id
      value: "{{ deployment_id }}"
      description: |
        The ID of an existing deployment to redeploy. All project settings and environment variables are inherited from the original unless explicitly overridden in this request. The redeployment gets a new ID, URL, and build.
    - name: files
      value: "{{ files }}"
      description: |
        The files to include in the deployment. Each entry is either an inlined file (with \`data\` and \`encoding\`) or a reference to a previously uploaded file (with \`sha\` and \`size\`). Required for non-git deployments. Cannot be used together with \`gitSource\`.
    - name: git_access_token
      value: "{{ git_access_token }}"
      description: |
        Available only to Vercel platform accounts. A read-only GitHub access token scoped to the requested repository. Use a token with a lifetime of 24 hours or less that remains valid until source retrieval completes.
    - name: git_metadata
      description: |
        Populates initial git metadata for different git providers.
      value:
        remoteUrl: "{{ remoteUrl }}"
        commitAuthorName: "{{ commitAuthorName }}"
        commitAuthorEmail: "{{ commitAuthorEmail }}"
        commitMessage: "{{ commitMessage }}"
        commitRef: "{{ commitRef }}"
        commitSha: "{{ commitSha }}"
        dirty: {{ dirty }}
        ci: {{ ci }}
        ciType: "{{ ciType }}"
        ciGitProviderUsername: "{{ ciGitProviderUsername }}"
        ciGitRepoVisibility: "{{ ciGitRepoVisibility }}"
        rootDirectory: "{{ rootDirectory }}"
    - name: git_source
      description: |
        Defines the Git Repository source to be deployed. This property can not be used in combination with \`files\`.
      value:
        type: "{{ type }}"
        sha: "{{ sha }}"
        ref: "{{ ref }}"
        repoId: "{{ repoId }}"
        org: "{{ org }}"
        repo: "{{ repo }}"
        projectId: "{{ projectId }}"
        repoUuid: "{{ repoUuid }}"
        workspaceUuid: "{{ workspaceUuid }}"
        owner: "{{ owner }}"
        slug: "{{ slug }}"
    - name: meta
      value: "{{ meta }}"
      description: |
        An object containing the deployment's metadata. Multiple key-value pairs can be attached to a deployment. For deployments created with a Cursor Origin \`gitSource\`, Vercel automatically adds \`cursorOriginDeployment\`, \`cursorOriginCommitSha\`, \`cursorOriginCommitRef\`, \`cursorOriginCommitMessage\`, \`cursorOriginCommitAuthorName\`, \`cursorOriginCommitAuthorEmail\` when available, \`cursorOriginOwner\`, \`cursorOriginRepo\`, \`cursorOriginRepoId\`, and \`cursorOriginPrId\` for pull request deployments.
    - name: monorepo_manager
      value: "{{ monorepo_manager }}"
      description: |
        The monorepo manager that is being used for this deployment. When \`null\` is used no monorepo manager is selected
    - name: name
      value: "{{ name }}"
      description: |
        A string with the project name used in the deployment URL
    - name: project
      value: "{{ project }}"
      description: |
        The target project identifier in which the deployment will be created. When defined, this parameter overrides name
    - name: project_settings
      description: |
        Project settings that will be applied to the deployment. It is required for the first deployment of a project and will be saved for any following deployments
      value:
        buildCommand: "{{ buildCommand }}"
        commandForIgnoringBuildStep: "{{ commandForIgnoringBuildStep }}"
        devCommand: "{{ devCommand }}"
        framework: "{{ framework }}"
        installCommand: "{{ installCommand }}"
        nodeVersion: "{{ nodeVersion }}"
        outputDirectory: "{{ outputDirectory }}"
        rootDirectory: "{{ rootDirectory }}"
        serverlessFunctionRegion: "{{ serverlessFunctionRegion }}"
        skipGitConnectDuringLink: {{ skipGitConnectDuringLink }}
        sourceFilesOutsideRootDirectory: {{ sourceFilesOutsideRootDirectory }}
    - name: target
      value: "{{ target }}"
      description: |
        Either not defined, \`staging\`, \`production\`, or a custom environment identifier. If \`staging\`, a staging alias in the format \`<project>-<team>.vercel.app\` will be assigned. If \`production\`, any aliases defined in \`alias\` will be assigned. If omitted, the target will be \`preview\`.
    - name: with_latest_commit
      value: {{ with_latest_commit }}
      description: |
        When \`true\` and \`deploymentId\` is passed in, the sha from the previous deployment's \`gitSource\` is removed forcing the latest commit to be used.
    - name: force_new
      value: "{{ force_new }}"
      description: Forces a new deployment even if there is a previous similar deployment. Set to \`1\` to bypass deployment deduplication and always trigger a fresh build.
      description: Forces a new deployment even if there is a previous similar deployment. Set to \`1\` to bypass deployment deduplication and always trigger a fresh build.
    - name: skip_auto_detection_confirmation
      value: "{{ skip_auto_detection_confirmation }}"
      description: Set to \`1\` to skip framework auto-detection and proceed without confirmation. By default, if Vercel detects a framework that differs from the project setting, the API returns a \`400\` asking you to confirm. Use this to suppress that check in automated pipelines.
      description: Set to \`1\` to skip framework auto-detection and proceed without confirmation. By default, if Vercel detects a framework that differs from the project setting, the API returns a \`400\` asking you to confirm. Use this to suppress that check in automated pipelines.
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

This API allows you to delete a deployment, either by supplying its `id` in the URL or the `url` of the deployment as a query parameter. You can obtain the ID, for example, by listing all deployments.

```sql
DELETE FROM vercel.deployments.deployments
WHERE id = '{{ id }}' --required
AND url = '{{ url }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="update_integration_action"
    values={[
        { label: 'update_integration_action', value: 'update_integration_action' },
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="update_integration_action">

Updates the deployment integration action for the specified integration installation

```sql
EXEC vercel.deployments.deployments.update_integration_action 
@deployment_id='{{ deployment_id }}' --required, 
@integration_configuration_id='{{ integration_configuration_id }}' --required, 
@resource_id='{{ resource_id }}' --required, 
@action='{{ action }}' --required 
@@json=
'{
"status": "{{ status }}", 
"statusText": "{{ statusText }}", 
"statusUrl": "{{ statusUrl }}", 
"outcomes": "{{ outcomes }}"
}'
;
```
</TabItem>
<TabItem value="cancel">

Cancels a deployment that is currently in progress, stopping the build before it completes. Use this to recover quickly from accidental deploys, wrong-branch pushes, or builds with known errors — without waiting for them to finish. Returns 400 if the deployment is no longer cancelable (already `READY`, `ERROR`, or `CANCELED`). Returns the updated deployment object with `readyState: 'CANCELED'` on success.

```sql
EXEC vercel.deployments.deployments.cancel 
@id='{{ id }}' --required, 
@teamId='{{ teamId }}', 
@slug='{{ slug }}'
;
```
</TabItem>
</Tabs>
