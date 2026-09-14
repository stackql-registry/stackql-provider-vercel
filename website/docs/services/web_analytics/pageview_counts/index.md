--- 
title: pageview_counts
hide_title: false
hide_table_of_contents: false
keywords:
  - pageview_counts
  - web_analytics
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

Creates, updates, deletes, gets or lists a <code>pageview_counts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pageview_counts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.web_analytics.pageview_counts" /></td></tr>
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
    <td><CopyableCode code="ai_gateway_model_id" /></td>
    <td><code>string</code></td>
    <td> (wire: aiGatewayModelId)</td>
</tr>
<tr>
    <td><CopyableCode code="asn_id" /></td>
    <td><code>string</code></td>
    <td> (wire: asnId)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td> (wire: deploymentId)</td>
</tr>
<tr>
    <td><CopyableCode code="entry_id" /></td>
    <td><code>string</code></td>
    <td> (wire: entryId)</td>
</tr>
<tr>
    <td><CopyableCode code="entry_item_id" /></td>
    <td><code>string</code></td>
    <td> (wire: entryItemId)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td> (wire: environmentId)</td>
</tr>
<tr>
    <td><CopyableCode code="generation_id" /></td>
    <td><code>string</code></td>
    <td> (wire: generationId)</td>
</tr>
<tr>
    <td><CopyableCode code="key_id" /></td>
    <td><code>string</code></td>
    <td> (wire: keyId)</td>
</tr>
<tr>
    <td><CopyableCode code="message_id" /></td>
    <td><code>string</code></td>
    <td> (wire: messageId)</td>
</tr>
<tr>
    <td><CopyableCode code="microfrontends_default_app_deployment_id" /></td>
    <td><code>string</code></td>
    <td> (wire: microfrontendsDefaultAppDeploymentId)</td>
</tr>
<tr>
    <td><CopyableCode code="microfrontends_default_app_project_id" /></td>
    <td><code>string</code></td>
    <td> (wire: microfrontendsDefaultAppProjectId)</td>
</tr>
<tr>
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td> (wire: networkId)</td>
</tr>
<tr>
    <td><CopyableCode code="privatelink_endpoint_id" /></td>
    <td><code>string</code></td>
    <td> (wire: privatelinkEndpointId)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td> (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_entity_id" /></td>
    <td><code>string</code></td>
    <td> (wire: quotaEntityId)</td>
</tr>
<tr>
    <td><CopyableCode code="reporting_project_id" /></td>
    <td><code>string</code></td>
    <td> (wire: reportingProjectId)</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td> (wire: requestId)</td>
</tr>
<tr>
    <td><CopyableCode code="sandbox_session_id" /></td>
    <td><code>string</code></td>
    <td> (wire: sandboxSessionId)</td>
</tr>
<tr>
    <td><CopyableCode code="sdk_key_id" /></td>
    <td><code>string</code></td>
    <td> (wire: sdkKeyId)</td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td> (wire: sessionId)</td>
</tr>
<tr>
    <td><CopyableCode code="step_run_id" /></td>
    <td><code>string</code></td>
    <td> (wire: stepRunId)</td>
</tr>
<tr>
    <td><CopyableCode code="store_id" /></td>
    <td><code>string</code></td>
    <td> (wire: storeId)</td>
</tr>
<tr>
    <td><CopyableCode code="visitor_id" /></td>
    <td><code>string</code></td>
    <td> (wire: visitorId)</td>
</tr>
<tr>
    <td><CopyableCode code="waf_rule_id" /></td>
    <td><code>string</code></td>
    <td> (wire: wafRuleId)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_run_id" /></td>
    <td><code>string</code></td>
    <td> (wire: workflowRunId)</td>
</tr>
<tr>
    <td><CopyableCode code="app_name" /></td>
    <td><code>string</code></td>
    <td> (wire: appName)</td>
</tr>
<tr>
    <td><CopyableCode code="asn_name" /></td>
    <td><code>string</code></td>
    <td> (wire: asnName)</td>
</tr>
<tr>
    <td><CopyableCode code="attribution_event_name" /></td>
    <td><code>string</code></td>
    <td> (wire: attributionEventName)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_name" /></td>
    <td><code>string</code></td>
    <td> (wire: botName)</td>
</tr>
<tr>
    <td><CopyableCode code="browser_name" /></td>
    <td><code>string</code></td>
    <td> (wire: browserName)</td>
</tr>
<tr>
    <td><CopyableCode code="entry_name" /></td>
    <td><code>string</code></td>
    <td> (wire: entryName)</td>
</tr>
<tr>
    <td><CopyableCode code="event_name" /></td>
    <td><code>string</code></td>
    <td> (wire: eventName)</td>
</tr>
<tr>
    <td><CopyableCode code="flag_client_name" /></td>
    <td><code>string</code></td>
    <td> (wire: flagClientName)</td>
</tr>
<tr>
    <td><CopyableCode code="key_name" /></td>
    <td><code>string</code></td>
    <td> (wire: keyName)</td>
</tr>
<tr>
    <td><CopyableCode code="metric_name" /></td>
    <td><code>string</code></td>
    <td> (wire: metricName)</td>
</tr>
<tr>
    <td><CopyableCode code="os_name" /></td>
    <td><code>string</code></td>
    <td> (wire: osName)</td>
</tr>
<tr>
    <td><CopyableCode code="privatelink_dns_name" /></td>
    <td><code>string</code></td>
    <td> (wire: privatelinkDnsName)</td>
</tr>
<tr>
    <td><CopyableCode code="project_name" /></td>
    <td><code>string</code></td>
    <td> (wire: projectName)</td>
</tr>
<tr>
    <td><CopyableCode code="queue_name" /></td>
    <td><code>string</code></td>
    <td> (wire: queueName)</td>
</tr>
<tr>
    <td><CopyableCode code="reporting_project_name" /></td>
    <td><code>string</code></td>
    <td> (wire: reportingProjectName)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_name" /></td>
    <td><code>string</code></td>
    <td> (wire: repositoryName)</td>
</tr>
<tr>
    <td><CopyableCode code="sandbox_name" /></td>
    <td><code>string</code></td>
    <td> (wire: sandboxName)</td>
</tr>
<tr>
    <td><CopyableCode code="server_action_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serverActionName)</td>
</tr>
<tr>
    <td><CopyableCode code="store_name" /></td>
    <td><code>string</code></td>
    <td> (wire: storeName)</td>
</tr>
<tr>
    <td><CopyableCode code="tag_name" /></td>
    <td><code>string</code></td>
    <td> (wire: tagName)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_name" /></td>
    <td><code>string</code></td>
    <td> (wire: workflowName)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_step_name" /></td>
    <td><code>string</code></td>
    <td> (wire: workflowStepName)</td>
</tr>
<tr>
    <td><CopyableCode code="ai_model" /></td>
    <td><code>string</code></td>
    <td> (wire: aiModel)</td>
</tr>
<tr>
    <td><CopyableCode code="ai_model_type" /></td>
    <td><code>string</code></td>
    <td> (wire: aiModelType)</td>
</tr>
<tr>
    <td><CopyableCode code="ai_provider" /></td>
    <td><code>string</code></td>
    <td> (wire: aiProvider)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="attribution_target" /></td>
    <td><code>string</code></td>
    <td> (wire: attributionTarget)</td>
</tr>
<tr>
    <td><CopyableCode code="auth_method" /></td>
    <td><code>string</code></td>
    <td> (wire: authMethod)</td>
</tr>
<tr>
    <td><CopyableCode code="billable_region" /></td>
    <td><code>string</code></td>
    <td> (wire: billableRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="blob_operation_level" /></td>
    <td><code>string</code></td>
    <td> (wire: blobOperationLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="blob_operation_type" /></td>
    <td><code>string</code></td>
    <td> (wire: blobOperationType)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_category" /></td>
    <td><code>string</code></td>
    <td> (wire: botCategory)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_category_legacy" /></td>
    <td><code>string</code></td>
    <td> (wire: botCategoryLegacy)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_check_result" /></td>
    <td><code>string</code></td>
    <td> (wire: botCheckResult)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_verified" /></td>
    <td><code>string</code></td>
    <td> (wire: botVerified)</td>
</tr>
<tr>
    <td><CopyableCode code="cache_api" /></td>
    <td><code>string</code></td>
    <td> (wire: cacheApi)</td>
</tr>
<tr>
    <td><CopyableCode code="cache_creation_1h_input_tokens_currency" /></td>
    <td><code>string</code></td>
    <td> (wire: cacheCreation1hInputTokensCurrency)</td>
</tr>
<tr>
    <td><CopyableCode code="cache_creation_input_tokens_currency" /></td>
    <td><code>string</code></td>
    <td> (wire: cacheCreationInputTokensCurrency)</td>
</tr>
<tr>
    <td><CopyableCode code="cache_hit_level" /></td>
    <td><code>string</code></td>
    <td> (wire: cacheHitLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="cache_hit_state" /></td>
    <td><code>string</code></td>
    <td> (wire: cacheHitState)</td>
</tr>
<tr>
    <td><CopyableCode code="cache_hostname" /></td>
    <td><code>string</code></td>
    <td> (wire: cacheHostname)</td>
</tr>
<tr>
    <td><CopyableCode code="cache_operation" /></td>
    <td><code>string</code></td>
    <td> (wire: cacheOperation)</td>
</tr>
<tr>
    <td><CopyableCode code="cache_path" /></td>
    <td><code>string</code></td>
    <td> (wire: cachePath)</td>
</tr>
<tr>
    <td><CopyableCode code="cache_reason" /></td>
    <td><code>string</code></td>
    <td> (wire: cacheReason)</td>
</tr>
<tr>
    <td><CopyableCode code="cache_result" /></td>
    <td><code>string</code></td>
    <td> (wire: cacheResult)</td>
</tr>
<tr>
    <td><CopyableCode code="cache_tags" /></td>
    <td><code>string</code></td>
    <td> (wire: cacheTags)</td>
</tr>
<tr>
    <td><CopyableCode code="cached_input_tokens_currency" /></td>
    <td><code>string</code></td>
    <td> (wire: cachedInputTokensCurrency)</td>
</tr>
<tr>
    <td><CopyableCode code="cause" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="client_ip" /></td>
    <td><code>string</code></td>
    <td> (wire: clientIp)</td>
</tr>
<tr>
    <td><CopyableCode code="client_ip_country" /></td>
    <td><code>string</code></td>
    <td> (wire: clientIpCountry)</td>
</tr>
<tr>
    <td><CopyableCode code="client_ja_4_digest" /></td>
    <td><code>string</code></td>
    <td> (wire: clientJa4Digest)</td>
</tr>
<tr>
    <td><CopyableCode code="client_user_agent" /></td>
    <td><code>string</code></td>
    <td> (wire: clientUserAgent)</td>
</tr>
<tr>
    <td><CopyableCode code="coding_agent" /></td>
    <td><code>string</code></td>
    <td> (wire: codingAgent)</td>
</tr>
<tr>
    <td><CopyableCode code="commit_sha" /></td>
    <td><code>string</code></td>
    <td> (wire: commitSha)</td>
</tr>
<tr>
    <td><CopyableCode code="consumer_group" /></td>
    <td><code>string</code></td>
    <td> (wire: consumerGroup)</td>
</tr>
<tr>
    <td><CopyableCode code="content_capture_inputs" /></td>
    <td><code>string</code></td>
    <td> (wire: contentCaptureInputs)</td>
</tr>
<tr>
    <td><CopyableCode code="content_capture_outputs" /></td>
    <td><code>string</code></td>
    <td> (wire: contentCaptureOutputs)</td>
</tr>
<tr>
    <td><CopyableCode code="content_capture_status" /></td>
    <td><code>string</code></td>
    <td> (wire: contentCaptureStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td> (wire: contentType)</td>
</tr>
<tr>
    <td><CopyableCode code="cost_currency" /></td>
    <td><code>string</code></td>
    <td> (wire: costCurrency)</td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="data_cache_region" /></td>
    <td><code>string</code></td>
    <td> (wire: dataCacheRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="deep_analysis_check" /></td>
    <td><code>string</code></td>
    <td> (wire: deepAnalysisCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="device_type" /></td>
    <td><code>string</code></td>
    <td> (wire: deviceType)</td>
</tr>
<tr>
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="edge_network_region" /></td>
    <td><code>string</code></td>
    <td> (wire: edgeNetworkRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="edge_type" /></td>
    <td><code>string</code></td>
    <td> (wire: edgeType)</td>
</tr>
<tr>
    <td><CopyableCode code="entry_revalidate_seconds" /></td>
    <td><code>string</code></td>
    <td> (wire: entryRevalidateSeconds)</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td> (wire: errorCode)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td> (wire: errorMessage)</td>
</tr>
<tr>
    <td><CopyableCode code="event_data" /></td>
    <td><code>string</code></td>
    <td> (wire: eventData)</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td> (wire: eventType)</td>
</tr>
<tr>
    <td><CopyableCode code="external_rewrite_target_host" /></td>
    <td><code>string</code></td>
    <td> (wire: externalRewriteTargetHost)</td>
</tr>
<tr>
    <td><CopyableCode code="external_rewrite_target_path" /></td>
    <td><code>string</code></td>
    <td> (wire: externalRewriteTargetPath)</td>
</tr>
<tr>
    <td><CopyableCode code="fetch_index" /></td>
    <td><code>string</code></td>
    <td> (wire: fetchIndex)</td>
</tr>
<tr>
    <td><CopyableCode code="fetch_type" /></td>
    <td><code>string</code></td>
    <td> (wire: fetchType)</td>
</tr>
<tr>
    <td><CopyableCode code="flag_evaluation_reason" /></td>
    <td><code>string</code></td>
    <td> (wire: flagEvaluationReason)</td>
</tr>
<tr>
    <td><CopyableCode code="flag_key" /></td>
    <td><code>string</code></td>
    <td> (wire: flagKey)</td>
</tr>
<tr>
    <td><CopyableCode code="flag_variant" /></td>
    <td><code>string</code></td>
    <td> (wire: flagVariant)</td>
</tr>
<tr>
    <td><CopyableCode code="flags" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="function_dispatcher" /></td>
    <td><code>string</code></td>
    <td> (wire: functionDispatcher)</td>
</tr>
<tr>
    <td><CopyableCode code="function_region" /></td>
    <td><code>string</code></td>
    <td> (wire: functionRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="function_start_type" /></td>
    <td><code>string</code></td>
    <td> (wire: functionStartType)</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_cost_currency" /></td>
    <td><code>string</code></td>
    <td> (wire: gatewayCostCurrency)</td>
</tr>
<tr>
    <td><CopyableCode code="hipaa_requested" /></td>
    <td><code>string</code></td>
    <td> (wire: hipaaRequested)</td>
</tr>
<tr>
    <td><CopyableCode code="http_accept" /></td>
    <td><code>string</code></td>
    <td> (wire: httpAccept)</td>
</tr>
<tr>
    <td><CopyableCode code="http_status" /></td>
    <td><code>string</code></td>
    <td> (wire: httpStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="image_source" /></td>
    <td><code>string</code></td>
    <td> (wire: imageSource)</td>
</tr>
<tr>
    <td><CopyableCode code="image_transformation_region" /></td>
    <td><code>string</code></td>
    <td> (wire: imageTransformationRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="inference_endpoint_slug" /></td>
    <td><code>string</code></td>
    <td> (wire: inferenceEndpointSlug)</td>
</tr>
<tr>
    <td><CopyableCode code="inference_geo_region" /></td>
    <td><code>string</code></td>
    <td> (wire: inferenceGeoRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="inference_provider_region" /></td>
    <td><code>string</code></td>
    <td> (wire: inferenceProviderRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="inference_scope" /></td>
    <td><code>string</code></td>
    <td> (wire: inferenceScope)</td>
</tr>
<tr>
    <td><CopyableCode code="is_additional_request" /></td>
    <td><code>string</code></td>
    <td> (wire: isAdditionalRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="is_byok" /></td>
    <td><code>string</code></td>
    <td> (wire: isByok)</td>
</tr>
<tr>
    <td><CopyableCode code="is_prefetch_request" /></td>
    <td><code>string</code></td>
    <td> (wire: isPrefetchRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="is_private_model" /></td>
    <td><code>string</code></td>
    <td> (wire: isPrivateModel)</td>
</tr>
<tr>
    <td><CopyableCode code="is_request_zdr" /></td>
    <td><code>string</code></td>
    <td> (wire: isRequestZdr)</td>
</tr>
<tr>
    <td><CopyableCode code="is_streaming" /></td>
    <td><code>string</code></td>
    <td> (wire: isStreaming)</td>
</tr>
<tr>
    <td><CopyableCode code="isr_action" /></td>
    <td><code>string</code></td>
    <td> (wire: isrAction)</td>
</tr>
<tr>
    <td><CopyableCode code="isr_cache_region" /></td>
    <td><code>string</code></td>
    <td> (wire: isrCacheRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="market_cost_currency" /></td>
    <td><code>string</code></td>
    <td> (wire: marketCostCurrency)</td>
</tr>
<tr>
    <td><CopyableCode code="microfrontends_matched_path" /></td>
    <td><code>string</code></td>
    <td> (wire: microfrontendsMatchedPath)</td>
</tr>
<tr>
    <td><CopyableCode code="microfrontends_response_reason" /></td>
    <td><code>string</code></td>
    <td> (wire: microfrontendsResponseReason)</td>
</tr>
<tr>
    <td><CopyableCode code="middleware_action" /></td>
    <td><code>string</code></td>
    <td> (wire: middlewareAction)</td>
</tr>
<tr>
    <td><CopyableCode code="middleware_action_target" /></td>
    <td><code>string</code></td>
    <td> (wire: middlewareActionTarget)</td>
</tr>
<tr>
    <td><CopyableCode code="moderation_applied" /></td>
    <td><code>string</code></td>
    <td> (wire: moderationApplied)</td>
</tr>
<tr>
    <td><CopyableCode code="network_tenancy" /></td>
    <td><code>string</code></td>
    <td> (wire: networkTenancy)</td>
</tr>
<tr>
    <td><CopyableCode code="notification_url" /></td>
    <td><code>string</code></td>
    <td> (wire: notificationUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="optimized_format_mime_type" /></td>
    <td><code>string</code></td>
    <td> (wire: optimizedFormatMimeType)</td>
</tr>
<tr>
    <td><CopyableCode code="optimized_quality" /></td>
    <td><code>string</code></td>
    <td> (wire: optimizedQuality)</td>
</tr>
<tr>
    <td><CopyableCode code="optimized_width_pixels" /></td>
    <td><code>string</code></td>
    <td> (wire: optimizedWidthPixels)</td>
</tr>
<tr>
    <td><CopyableCode code="origin_hostname" /></td>
    <td><code>string</code></td>
    <td> (wire: originHostname)</td>
</tr>
<tr>
    <td><CopyableCode code="origin_path" /></td>
    <td><code>string</code></td>
    <td> (wire: originPath)</td>
</tr>
<tr>
    <td><CopyableCode code="origin_route" /></td>
    <td><code>string</code></td>
    <td> (wire: originRoute)</td>
</tr>
<tr>
    <td><CopyableCode code="pageviews" /></td>
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="path_type" /></td>
    <td><code>string</code></td>
    <td> (wire: pathType)</td>
</tr>
<tr>
    <td><CopyableCode code="path_type_variant" /></td>
    <td><code>string</code></td>
    <td> (wire: pathTypeVariant)</td>
</tr>
<tr>
    <td><CopyableCode code="pii_redaction_applied" /></td>
    <td><code>string</code></td>
    <td> (wire: piiRedactionApplied)</td>
</tr>
<tr>
    <td><CopyableCode code="ppr_state" /></td>
    <td><code>string</code></td>
    <td> (wire: pprState)</td>
</tr>
<tr>
    <td><CopyableCode code="privatelink_ip_address" /></td>
    <td><code>string</code></td>
    <td> (wire: privatelinkIpAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="provider_attempt_canonical_slug" /></td>
    <td><code>string</code></td>
    <td> (wire: providerAttemptCanonicalSlug)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_attempt_credential_type" /></td>
    <td><code>string</code></td>
    <td> (wire: providerAttemptCredentialType)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_attempt_dev_safety_identifier" /></td>
    <td><code>string</code></td>
    <td> (wire: providerAttemptDevSafetyIdentifier)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_attempt_error" /></td>
    <td><code>string</code></td>
    <td> (wire: providerAttemptError)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_attempt_is_final" /></td>
    <td><code>string</code></td>
    <td> (wire: providerAttemptIsFinal)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_attempt_model_index" /></td>
    <td><code>string</code></td>
    <td> (wire: providerAttemptModelIndex)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_attempt_number" /></td>
    <td><code>string</code></td>
    <td> (wire: providerAttemptNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_attempt_region" /></td>
    <td><code>string</code></td>
    <td> (wire: providerAttemptRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_attempt_safety_identifier" /></td>
    <td><code>string</code></td>
    <td> (wire: providerAttemptSafetyIdentifier)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_attempt_status_code" /></td>
    <td><code>string</code></td>
    <td> (wire: providerAttemptStatusCode)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_attempt_success" /></td>
    <td><code>string</code></td>
    <td> (wire: providerAttemptSuccess)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_attempt_timeout" /></td>
    <td><code>string</code></td>
    <td> (wire: providerAttemptTimeout)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_attempt_total_in_request" /></td>
    <td><code>string</code></td>
    <td> (wire: providerAttemptTotalInRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_number" /></td>
    <td><code>string</code></td>
    <td> (wire: pullRequestNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_state" /></td>
    <td><code>string</code></td>
    <td> (wire: pullRequestState)</td>
</tr>
<tr>
    <td><CopyableCode code="queue_region" /></td>
    <td><code>string</code></td>
    <td> (wire: queueRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_entity_type" /></td>
    <td><code>string</code></td>
    <td> (wire: quotaEntityType)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_requested" /></td>
    <td><code>string</code></td>
    <td> (wire: quotaRequested)</td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="redirect_location" /></td>
    <td><code>string</code></td>
    <td> (wire: redirectLocation)</td>
</tr>
<tr>
    <td><CopyableCode code="referrer_hostname" /></td>
    <td><code>string</code></td>
    <td> (wire: referrerHostname)</td>
</tr>
<tr>
    <td><CopyableCode code="referrer_url" /></td>
    <td><code>string</code></td>
    <td> (wire: referrerUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repository_owner" /></td>
    <td><code>string</code></td>
    <td> (wire: repositoryOwner)</td>
</tr>
<tr>
    <td><CopyableCode code="request_api" /></td>
    <td><code>string</code></td>
    <td> (wire: requestApi)</td>
</tr>
<tr>
    <td><CopyableCode code="request_extension" /></td>
    <td><code>string</code></td>
    <td> (wire: requestExtension)</td>
</tr>
<tr>
    <td><CopyableCode code="request_hostname" /></td>
    <td><code>string</code></td>
    <td> (wire: requestHostname)</td>
</tr>
<tr>
    <td><CopyableCode code="request_method" /></td>
    <td><code>string</code></td>
    <td> (wire: requestMethod)</td>
</tr>
<tr>
    <td><CopyableCode code="request_path" /></td>
    <td><code>string</code></td>
    <td> (wire: requestPath)</td>
</tr>
<tr>
    <td><CopyableCode code="request_resolved_ip" /></td>
    <td><code>string</code></td>
    <td> (wire: requestResolvedIp)</td>
</tr>
<tr>
    <td><CopyableCode code="requested_inference_region" /></td>
    <td><code>string</code></td>
    <td> (wire: requestedInferenceRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="review_conclusion" /></td>
    <td><code>string</code></td>
    <td> (wire: reviewConclusion)</td>
</tr>
<tr>
    <td><CopyableCode code="review_status" /></td>
    <td><code>string</code></td>
    <td> (wire: reviewStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="rewrite_destination_hostname" /></td>
    <td><code>string</code></td>
    <td> (wire: rewriteDestinationHostname)</td>
</tr>
<tr>
    <td><CopyableCode code="route" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="rule_category" /></td>
    <td><code>string</code></td>
    <td> (wire: ruleCategory)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sdk_key_environment" /></td>
    <td><code>string</code></td>
    <td> (wire: sdkKeyEnvironment)</td>
</tr>
<tr>
    <td><CopyableCode code="served_speed" /></td>
    <td><code>string</code></td>
    <td> (wire: servedSpeed)</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="skew_protection" /></td>
    <td><code>string</code></td>
    <td> (wire: skewProtection)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source_image" /></td>
    <td><code>string</code></td>
    <td> (wire: sourceImage)</td>
</tr>
<tr>
    <td><CopyableCode code="source_image_hash" /></td>
    <td><code>string</code></td>
    <td> (wire: sourceImageHash)</td>
</tr>
<tr>
    <td><CopyableCode code="source_image_hostname" /></td>
    <td><code>string</code></td>
    <td> (wire: sourceImageHostname)</td>
</tr>
<tr>
    <td><CopyableCode code="source_image_pathname" /></td>
    <td><code>string</code></td>
    <td> (wire: sourceImagePathname)</td>
</tr>
<tr>
    <td><CopyableCode code="spec_version" /></td>
    <td><code>string</code></td>
    <td> (wire: specVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="spend_attribution" /></td>
    <td><code>string</code></td>
    <td> (wire: spendAttribution)</td>
</tr>
<tr>
    <td><CopyableCode code="spend_report_date_part" /></td>
    <td><code>string</code></td>
    <td> (wire: spendReportDatePart)</td>
</tr>
<tr>
    <td><CopyableCode code="spend_report_group_by" /></td>
    <td><code>string</code></td>
    <td> (wire: spendReportGroupBy)</td>
</tr>
<tr>
    <td><CopyableCode code="surcharge_cost_currency" /></td>
    <td><code>string</code></td>
    <td> (wire: surchargeCostCurrency)</td>
</tr>
<tr>
    <td><CopyableCode code="tool_call_error_type" /></td>
    <td><code>string</code></td>
    <td> (wire: toolCallErrorType)</td>
</tr>
<tr>
    <td><CopyableCode code="tool_call_provider" /></td>
    <td><code>string</code></td>
    <td> (wire: toolCallProvider)</td>
</tr>
<tr>
    <td><CopyableCode code="tool_call_status_code" /></td>
    <td><code>string</code></td>
    <td> (wire: toolCallStatusCode)</td>
</tr>
<tr>
    <td><CopyableCode code="tool_call_success" /></td>
    <td><code>string</code></td>
    <td> (wire: toolCallSuccess)</td>
</tr>
<tr>
    <td><CopyableCode code="tool_call_type" /></td>
    <td><code>string</code></td>
    <td> (wire: toolCallType)</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_source" /></td>
    <td><code>string</code></td>
    <td> (wire: trafficSource)</td>
</tr>
<tr>
    <td><CopyableCode code="transcript_inputs" /></td>
    <td><code>string</code></td>
    <td> (wire: transcriptInputs)</td>
</tr>
<tr>
    <td><CopyableCode code="transcript_outputs" /></td>
    <td><code>string</code></td>
    <td> (wire: transcriptOutputs)</td>
</tr>
<tr>
    <td><CopyableCode code="transcript_status" /></td>
    <td><code>string</code></td>
    <td> (wire: transcriptStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="triggering_tag" /></td>
    <td><code>string</code></td>
    <td> (wire: triggeringTag)</td>
</tr>
<tr>
    <td><CopyableCode code="utm_campaign" /></td>
    <td><code>string</code></td>
    <td> (wire: utmCampaign)</td>
</tr>
<tr>
    <td><CopyableCode code="utm_content" /></td>
    <td><code>string</code></td>
    <td> (wire: utmContent)</td>
</tr>
<tr>
    <td><CopyableCode code="utm_medium" /></td>
    <td><code>string</code></td>
    <td> (wire: utmMedium)</td>
</tr>
<tr>
    <td><CopyableCode code="utm_source" /></td>
    <td><code>string</code></td>
    <td> (wire: utmSource)</td>
</tr>
<tr>
    <td><CopyableCode code="utm_term" /></td>
    <td><code>string</code></td>
    <td> (wire: utmTerm)</td>
</tr>
<tr>
    <td><CopyableCode code="vdc_operation_origin" /></td>
    <td><code>string</code></td>
    <td> (wire: vdcOperationOrigin)</td>
</tr>
<tr>
    <td><CopyableCode code="video_aspect_ratio" /></td>
    <td><code>string</code></td>
    <td> (wire: videoAspectRatio)</td>
</tr>
<tr>
    <td><CopyableCode code="video_resolution" /></td>
    <td><code>string</code></td>
    <td> (wire: videoResolution)</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_model_kind" /></td>
    <td><code>string</code></td>
    <td> (wire: virtualModelKind)</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_model_slug" /></td>
    <td><code>string</code></td>
    <td> (wire: virtualModelSlug)</td>
</tr>
<tr>
    <td><CopyableCode code="visitors" /></td>
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="waf_action" /></td>
    <td><code>string</code></td>
    <td> (wire: wafAction)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_event_type" /></td>
    <td><code>string</code></td>
    <td> (wire: workflowEventType)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_status" /></td>
    <td><code>string</code></td>
    <td> (wire: workflowStatus)</td>
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
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Counts the number of page views on a project (production only), since Web Analytics was enabled. Results can be filtered on supported dimensions.</td>
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
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The project identifier or the project name (wire: projectId)</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>OData-compliant filter. Encode the value when sending it in a URL.  Allows filtering on one or multiple dimensions.  Supported dimensions: country, deviceType, environment, requestPath, referrerHostname, osName, browserName, route, utmSource, utmMedium, utmCampaign, utmContent, utmTerm.  JSON dimensions filtered by key: flags/&lt;name&gt;, for example flags/beta_banner eq 'true'. Wrap keys containing characters other than letters, digits, and underscores in single quotes, for example flags/'my-flag' eq 'true'.  Supported operations include eq, ne, in, and logical operators and, or, not with parentheses. Functions such as startswith are supported by the OData parser.</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code></code></td>
    <td>Timestamp in milliseconds, or a valid Date string.  Selects data from (including) this date and time. Will be adjusted according to the desired time granularity.</td>
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
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code></code></td>
    <td>Timestamp in milliseconds, or a valid Date string.  Selects data until (including) this date. Will be adjusted according to the desired time granularity.</td>
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

Counts the number of page views on a project (production only), since Web Analytics was enabled. Results can be filtered on supported dimensions.

```sql
SELECT
ai_gateway_model_id,
asn_id,
deployment_id,
entry_id,
entry_item_id,
environment_id,
generation_id,
key_id,
message_id,
microfrontends_default_app_deployment_id,
microfrontends_default_app_project_id,
network_id,
privatelink_endpoint_id,
project_id,
quota_entity_id,
reporting_project_id,
request_id,
sandbox_session_id,
sdk_key_id,
session_id,
step_run_id,
store_id,
visitor_id,
waf_rule_id,
workflow_run_id,
app_name,
asn_name,
attribution_event_name,
bot_name,
browser_name,
entry_name,
event_name,
flag_client_name,
key_name,
metric_name,
os_name,
privatelink_dns_name,
project_name,
queue_name,
reporting_project_name,
repository_name,
sandbox_name,
server_action_name,
store_name,
tag_name,
workflow_name,
workflow_step_name,
ai_model,
ai_model_type,
ai_provider,
attributes,
attribution_target,
auth_method,
billable_region,
blob_operation_level,
blob_operation_type,
bot_category,
bot_category_legacy,
bot_check_result,
bot_verified,
cache_api,
cache_creation_1h_input_tokens_currency,
cache_creation_input_tokens_currency,
cache_hit_level,
cache_hit_state,
cache_hostname,
cache_operation,
cache_path,
cache_reason,
cache_result,
cache_tags,
cached_input_tokens_currency,
cause,
client_ip,
client_ip_country,
client_ja_4_digest,
client_user_agent,
coding_agent,
commit_sha,
consumer_group,
content_capture_inputs,
content_capture_outputs,
content_capture_status,
content_type,
cost_currency,
country,
data_cache_region,
deep_analysis_check,
device_type,
direction,
edge_network_region,
edge_type,
entry_revalidate_seconds,
environment,
error_code,
error_message,
event_data,
event_type,
external_rewrite_target_host,
external_rewrite_target_path,
fetch_index,
fetch_type,
flag_evaluation_reason,
flag_key,
flag_variant,
flags,
function_dispatcher,
function_region,
function_start_type,
gateway_cost_currency,
hipaa_requested,
http_accept,
http_status,
image_source,
image_transformation_region,
inference_endpoint_slug,
inference_geo_region,
inference_provider_region,
inference_scope,
is_additional_request,
is_byok,
is_prefetch_request,
is_private_model,
is_request_zdr,
is_streaming,
isr_action,
isr_cache_region,
market_cost_currency,
microfrontends_matched_path,
microfrontends_response_reason,
middleware_action,
middleware_action_target,
moderation_applied,
network_tenancy,
notification_url,
optimized_format_mime_type,
optimized_quality,
optimized_width_pixels,
origin_hostname,
origin_path,
origin_route,
pageviews,
path_type,
path_type_variant,
pii_redaction_applied,
ppr_state,
privatelink_ip_address,
provider,
provider_attempt_canonical_slug,
provider_attempt_credential_type,
provider_attempt_dev_safety_identifier,
provider_attempt_error,
provider_attempt_is_final,
provider_attempt_model_index,
provider_attempt_number,
provider_attempt_region,
provider_attempt_safety_identifier,
provider_attempt_status_code,
provider_attempt_success,
provider_attempt_timeout,
provider_attempt_total_in_request,
pull_request_number,
pull_request_state,
queue_region,
quota_entity_type,
quota_requested,
reason,
redirect_location,
referrer_hostname,
referrer_url,
region,
repository_owner,
request_api,
request_extension,
request_hostname,
request_method,
request_path,
request_resolved_ip,
requested_inference_region,
review_conclusion,
review_status,
rewrite_destination_hostname,
route,
rule_category,
runtime,
sdk_key_environment,
served_speed,
service,
skew_protection,
source,
source_image,
source_image_hash,
source_image_hostname,
source_image_pathname,
spec_version,
spend_attribution,
spend_report_date_part,
spend_report_group_by,
surcharge_cost_currency,
tool_call_error_type,
tool_call_provider,
tool_call_status_code,
tool_call_success,
tool_call_type,
traffic_source,
transcript_inputs,
transcript_outputs,
transcript_status,
triggering_tag,
utm_campaign,
utm_content,
utm_medium,
utm_source,
utm_term,
vdc_operation_origin,
video_aspect_ratio,
video_resolution,
virtual_model_kind,
virtual_model_slug,
visitors,
waf_action,
workflow_event_type,
workflow_status
FROM vercel.web_analytics.pageview_counts
WHERE project_id = '{{ project_id }}' -- required
AND since = '{{ since }}'
AND until = '{{ until }}'
AND filter = '{{ filter }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
