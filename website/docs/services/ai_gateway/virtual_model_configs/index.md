--- 
title: virtual_model_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_model_configs
  - ai_gateway
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

Creates, updates, deletes, gets or lists a <code>virtual_model_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="virtual_model_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="vercel.ai_gateway.virtual_model_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_by_slug"
    values={[
        { label: 'get_by_slug', value: 'get_by_slug' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get_by_slug">

Public response shape for virtual model configs. Used so OpenAPI generation can avoid ElectroDB's recursive EntityItem types.

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
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The concrete model-provider instance this VMC resolves to. (wire: instanceId)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>Team (owner) that owns this VMC. (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human-readable name for UI. (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="allow_fallback_from_fast" /></td>
    <td><code>boolean</code></td>
    <td>Allow fallback from fast to standard providers on failure. (false, true) (wire: allowFallbackFromFast)</td>
</tr>
<tr>
    <td><CopyableCode code="base_url" /></td>
    <td><code>string</code></td>
    <td>For kind=relay: URL the gateway forwards requests to as a transparent proxy. (wire: baseUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="byok_credential_ids" /></td>
    <td><code>array</code></td>
    <td>BYOK credential IDs allowed for this VMC. (wire: byokCredentialIds)</td>
</tr>
<tr>
    <td><CopyableCode code="caching" /></td>
    <td><code>string</code></td>
    <td>Use caching if available. (auto)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>Creation timestamp (epoch ms). (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether this VMC is soft-deleted. (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional description for UI.</td>
</tr>
<tr>
    <td><CopyableCode code="disallow_prompt_training" /></td>
    <td><code>boolean</code></td>
    <td>Only use providers that will not train on your prompts. (false, true) (wire: disallowPromptTraining)</td>
</tr>
<tr>
    <td><CopyableCode code="has" /></td>
    <td><code>array</code></td>
    <td>Limit providers to those with these features.</td>
</tr>
<tr>
    <td><CopyableCode code="hipaa_compliant" /></td>
    <td><code>boolean</code></td>
    <td>Only use HIPAA-compliant providers. (false, true) (wire: hipaaCompliant)</td>
</tr>
<tr>
    <td><CopyableCode code="inference_region" /></td>
    <td><code>object</code></td>
    <td>Region pinned on the VMC for system-credential routing (alias/router only). (wire: inferenceRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>VMC kind: alias, relay, or router.</td>
</tr>
<tr>
    <td><CopyableCode code="model_slug" /></td>
    <td><code>string</code></td>
    <td>Canonical model slug this VMC maps to (e.g. "creator/model"). Not used by kind=router. (wire: modelSlug)</td>
</tr>
<tr>
    <td><CopyableCode code="models" /></td>
    <td><code>array</code></td>
    <td>For kind=router: ordered candidates, model slugs or router references. Otherwise: fallback models.</td>
</tr>
<tr>
    <td><CopyableCode code="observability_tags" /></td>
    <td><code>array</code></td>
    <td>Observability tags attached to requests through this VMC. (wire: observabilityTags)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_only" /></td>
    <td><code>array</code></td>
    <td>Restrict routing to only these providers. (wire: providerOnly)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_options" /></td>
    <td><code>object</code></td>
    <td>Arbitrary per-provider AI SDK options, keyed by gateway provider slug. (wire: providerOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_order" /></td>
    <td><code>array</code></td>
    <td>Ordered list of providers to try as fallbacks on failure. (wire: providerOrder)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_timeouts" /></td>
    <td><code>object</code></td>
    <td>Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. (wire: providerTimeouts)</td>
</tr>
<tr>
    <td><CopyableCode code="requires" /></td>
    <td><code>array</code></td>
    <td>For kind=router: capability tags a candidate must have.</td>
</tr>
<tr>
    <td><CopyableCode code="selector" /></td>
    <td><code>string</code></td>
    <td>For kind=router: how to order candidates. (cost, priority, tps, ttft)</td>
</tr>
<tr>
    <td><CopyableCode code="service_tier" /></td>
    <td><code>string</code></td>
    <td>Service tier for providers that support it. (fast, flex, priority) (wire: serviceTier)</td>
</tr>
<tr>
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Rank eligible providers by an attribute. (cost, latency, price, throughput, tps, ttft)</td>
</tr>
<tr>
    <td><CopyableCode code="speed" /></td>
    <td><code>string</code></td>
    <td>Only use fastest providers with short timeouts. (fast)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>UI lifecycle status: draft, active, or archived.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>Last update timestamp (epoch ms). (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>User id that last updated this VMC. (wire: updatedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_model_slug" /></td>
    <td><code>string</code></td>
    <td>Client-facing alias used as the model slug in Gateway calls. (wire: virtualModelSlug)</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Visibility in listings: public, internal, or stealth.</td>
</tr>
<tr>
    <td><CopyableCode code="zero_data_retention" /></td>
    <td><code>boolean</code></td>
    <td>Only use providers with zero data retention. (false, true) (wire: zeroDataRetention)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Public response shape for virtual model configs. Used so OpenAPI generation can avoid ElectroDB's recursive EntityItem types.

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
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The concrete model-provider instance this VMC resolves to. (wire: instanceId)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>Team (owner) that owns this VMC. (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human-readable name for UI. (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="allow_fallback_from_fast" /></td>
    <td><code>boolean</code></td>
    <td>Allow fallback from fast to standard providers on failure. (false, true) (wire: allowFallbackFromFast)</td>
</tr>
<tr>
    <td><CopyableCode code="base_url" /></td>
    <td><code>string</code></td>
    <td>For kind=relay: URL the gateway forwards requests to as a transparent proxy. (wire: baseUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="byok_credential_ids" /></td>
    <td><code>array</code></td>
    <td>BYOK credential IDs allowed for this VMC. (wire: byokCredentialIds)</td>
</tr>
<tr>
    <td><CopyableCode code="caching" /></td>
    <td><code>string</code></td>
    <td>Use caching if available. (auto)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>number</code></td>
    <td>Creation timestamp (epoch ms). (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Whether this VMC is soft-deleted. (false, true)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional description for UI.</td>
</tr>
<tr>
    <td><CopyableCode code="disallow_prompt_training" /></td>
    <td><code>boolean</code></td>
    <td>Only use providers that will not train on your prompts. (false, true) (wire: disallowPromptTraining)</td>
</tr>
<tr>
    <td><CopyableCode code="has" /></td>
    <td><code>array</code></td>
    <td>Limit providers to those with these features.</td>
</tr>
<tr>
    <td><CopyableCode code="hipaa_compliant" /></td>
    <td><code>boolean</code></td>
    <td>Only use HIPAA-compliant providers. (false, true) (wire: hipaaCompliant)</td>
</tr>
<tr>
    <td><CopyableCode code="inference_region" /></td>
    <td><code>object</code></td>
    <td>Region pinned on the VMC for system-credential routing (alias/router only). (wire: inferenceRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>VMC kind: alias, relay, or router.</td>
</tr>
<tr>
    <td><CopyableCode code="model_slug" /></td>
    <td><code>string</code></td>
    <td>Canonical model slug this VMC maps to (e.g. "creator/model"). Not used by kind=router. (wire: modelSlug)</td>
</tr>
<tr>
    <td><CopyableCode code="models" /></td>
    <td><code>array</code></td>
    <td>For kind=router: ordered candidates, model slugs or router references. Otherwise: fallback models.</td>
</tr>
<tr>
    <td><CopyableCode code="observability_tags" /></td>
    <td><code>array</code></td>
    <td>Observability tags attached to requests through this VMC. (wire: observabilityTags)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_only" /></td>
    <td><code>array</code></td>
    <td>Restrict routing to only these providers. (wire: providerOnly)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_options" /></td>
    <td><code>object</code></td>
    <td>Arbitrary per-provider AI SDK options, keyed by gateway provider slug. (wire: providerOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_order" /></td>
    <td><code>array</code></td>
    <td>Ordered list of providers to try as fallbacks on failure. (wire: providerOrder)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_timeouts" /></td>
    <td><code>object</code></td>
    <td>Per-request provider timeouts in ms, keyed by provider slug for BYOK credentials. (wire: providerTimeouts)</td>
</tr>
<tr>
    <td><CopyableCode code="requires" /></td>
    <td><code>array</code></td>
    <td>For kind=router: capability tags a candidate must have.</td>
</tr>
<tr>
    <td><CopyableCode code="selector" /></td>
    <td><code>string</code></td>
    <td>For kind=router: how to order candidates. (cost, priority, tps, ttft)</td>
</tr>
<tr>
    <td><CopyableCode code="service_tier" /></td>
    <td><code>string</code></td>
    <td>Service tier for providers that support it. (fast, flex, priority) (wire: serviceTier)</td>
</tr>
<tr>
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Rank eligible providers by an attribute. (cost, latency, price, throughput, tps, ttft)</td>
</tr>
<tr>
    <td><CopyableCode code="speed" /></td>
    <td><code>string</code></td>
    <td>Only use fastest providers with short timeouts. (fast)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>UI lifecycle status: draft, active, or archived.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>number</code></td>
    <td>Last update timestamp (epoch ms). (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>User id that last updated this VMC. (wire: updatedBy)</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_model_slug" /></td>
    <td><code>string</code></td>
    <td>Client-facing alias used as the model slug in Gateway calls. (wire: virtualModelSlug)</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Visibility in listings: public, internal, or stealth.</td>
</tr>
<tr>
    <td><CopyableCode code="zero_data_retention" /></td>
    <td><code>boolean</code></td>
    <td>Only use providers with zero data retention. (false, true) (wire: zeroDataRetention)</td>
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
    <td><a href="#get_by_slug"><CopyableCode code="get_by_slug" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-vmc_slug"><code>vmc_slug</code></a></td>
    <td><a href="#parameter-owner_id"><code>owner_id</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Get a virtual model config by path slug</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-owner_id"><code>owner_id</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>List virtual model configs. With `ownerId`, returns all of that team's VMCs. Without it, pages through VMCs across all teams (newest-first, `limit`/`cursor`).</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Create a virtual model config (VMC)</td>
</tr>
<tr>
    <td><a href="#update_by_slug"><CopyableCode code="update_by_slug" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-vmc_slug"><code>vmc_slug</code></a></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Update a virtual model config by path slug</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Update a virtual model config</td>
</tr>
<tr>
    <td><a href="#delete_by_slug"><CopyableCode code="delete_by_slug" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-vmc_slug"><code>vmc_slug</code></a></td>
    <td><a href="#parameter-owner_id"><code>owner_id</code></a>, <a href="#parameter-updated_by"><code>updated_by</code></a>, <a href="#parameter-acting_ip"><code>acting_ip</code></a>, <a href="#parameter-acting_user_agent"><code>acting_user_agent</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Delete a virtual model config by path slug (soft delete)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-virtual_model_slug"><code>virtual_model_slug</code></a></td>
    <td><a href="#parameter-owner_id"><code>owner_id</code></a>, <a href="#parameter-updated_by"><code>updated_by</code></a>, <a href="#parameter-acting_ip"><code>acting_ip</code></a>, <a href="#parameter-acting_user_agent"><code>acting_user_agent</code></a>, <a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Delete a virtual model config (soft delete)</td>
</tr>
<tr>
    <td><a href="#get_by_query"><CopyableCode code="get_by_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-ownerId"><code>ownerId</code></a>, <a href="#parameter-virtualModelSlug"><code>virtualModelSlug</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-teamId"><code>teamId</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>Get a virtual model config</td>
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
<tr id="parameter-virtual_model_slug">
    <td><CopyableCode code="virtual_model_slug" /></td>
    <td><code>string</code></td>
    <td> (wire: virtualModelSlug)</td>
</tr>
<tr id="parameter-vmc_slug">
    <td><CopyableCode code="vmc_slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-acting_ip">
    <td><CopyableCode code="acting_ip" /></td>
    <td><code>string</code></td>
    <td> (wire: actingIp)</td>
</tr>
<tr id="parameter-acting_user_agent">
    <td><CopyableCode code="acting_user_agent" /></td>
    <td><code>string</code></td>
    <td> (wire: actingUserAgent)</td>
</tr>
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-ownerId">
    <td><CopyableCode code="ownerId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-owner_id">
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td> (wire: ownerId)</td>
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
<tr id="parameter-updated_by">
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td> (wire: updatedBy)</td>
</tr>
<tr id="parameter-virtualModelSlug">
    <td><CopyableCode code="virtualModelSlug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_by_slug"
    values={[
        { label: 'get_by_slug', value: 'get_by_slug' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get_by_slug">

Get a virtual model config by path slug

```sql
SELECT
instance_id,
owner_id,
display_name,
allow_fallback_from_fast,
base_url,
byok_credential_ids,
caching,
created_at,
deleted,
description,
disallow_prompt_training,
has,
hipaa_compliant,
inference_region,
kind,
model_slug,
models,
observability_tags,
provider_only,
provider_options,
provider_order,
provider_timeouts,
requires,
selector,
service_tier,
sort,
speed,
status,
updated_at,
updated_by,
virtual_model_slug,
visibility,
zero_data_retention
FROM vercel.ai_gateway.virtual_model_configs
WHERE vmc_slug = '{{ vmc_slug }}' -- required
AND owner_id = '{{ owner_id }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="list">

List virtual model configs. With `ownerId`, returns all of that team's VMCs. Without it, pages through VMCs across all teams (newest-first, `limit`/`cursor`).

```sql
SELECT
instance_id,
owner_id,
display_name,
allow_fallback_from_fast,
base_url,
byok_credential_ids,
caching,
created_at,
deleted,
description,
disallow_prompt_training,
has,
hipaa_compliant,
inference_region,
kind,
model_slug,
models,
observability_tags,
provider_only,
provider_options,
provider_order,
provider_timeouts,
requires,
selector,
service_tier,
sort,
speed,
status,
updated_at,
updated_by,
virtual_model_slug,
visibility,
zero_data_retention
FROM vercel.ai_gateway.virtual_model_configs
WHERE owner_id = '{{ owner_id }}'
AND limit = '{{ limit }}'
AND cursor = '{{ cursor }}'
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

Create a virtual model config (VMC)

```sql
INSERT INTO vercel.ai_gateway.virtual_model_configs (
team_id,
slug
)
SELECT 
'{{ team_id }}',
'{{ slug }}'
RETURNING
instance_id,
owner_id,
display_name,
allow_fallback_from_fast,
base_url,
byok_credential_ids,
caching,
created_at,
deleted,
description,
disallow_prompt_training,
has,
hipaa_compliant,
inference_region,
kind,
model_slug,
models,
observability_tags,
provider_only,
provider_options,
provider_order,
provider_timeouts,
requires,
selector,
service_tier,
sort,
speed,
status,
updated_at,
updated_by,
virtual_model_slug,
visibility,
zero_data_retention
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: virtual_model_configs
  props:
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
    defaultValue="update_by_slug"
    values={[
        { label: 'update_by_slug', value: 'update_by_slug' },
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update_by_slug">

Update a virtual model config by path slug

```sql
UPDATE vercel.ai_gateway.virtual_model_configs
SET 
-- No updatable properties
WHERE 
vmc_slug = '{{ vmc_slug }}' --required
AND team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
instance_id,
owner_id,
display_name,
allow_fallback_from_fast,
base_url,
byok_credential_ids,
caching,
created_at,
deleted,
description,
disallow_prompt_training,
has,
hipaa_compliant,
inference_region,
kind,
model_slug,
models,
observability_tags,
provider_only,
provider_options,
provider_order,
provider_timeouts,
requires,
selector,
service_tier,
sort,
speed,
status,
updated_at,
updated_by,
virtual_model_slug,
visibility,
zero_data_retention;
```
</TabItem>
<TabItem value="update">

Update a virtual model config

```sql
UPDATE vercel.ai_gateway.virtual_model_configs
SET 
-- No updatable properties
WHERE 
team_id = '{{ team_id}}'
AND slug = '{{ slug}}'
RETURNING
instance_id,
owner_id,
display_name,
allow_fallback_from_fast,
base_url,
byok_credential_ids,
caching,
created_at,
deleted,
description,
disallow_prompt_training,
has,
hipaa_compliant,
inference_region,
kind,
model_slug,
models,
observability_tags,
provider_only,
provider_options,
provider_order,
provider_timeouts,
requires,
selector,
service_tier,
sort,
speed,
status,
updated_at,
updated_by,
virtual_model_slug,
visibility,
zero_data_retention;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_by_slug"
    values={[
        { label: 'delete_by_slug', value: 'delete_by_slug' },
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete_by_slug">

Delete a virtual model config by path slug (soft delete)

```sql
DELETE FROM vercel.ai_gateway.virtual_model_configs
WHERE vmc_slug = '{{ vmc_slug }}' --required
AND owner_id = '{{ owner_id }}'
AND updated_by = '{{ updated_by }}'
AND acting_ip = '{{ acting_ip }}'
AND acting_user_agent = '{{ acting_user_agent }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
<TabItem value="delete">

Delete a virtual model config (soft delete)

```sql
DELETE FROM vercel.ai_gateway.virtual_model_configs
WHERE virtual_model_slug = '{{ virtual_model_slug }}' --required
AND owner_id = '{{ owner_id }}'
AND updated_by = '{{ updated_by }}'
AND acting_ip = '{{ acting_ip }}'
AND acting_user_agent = '{{ acting_user_agent }}'
AND team_id = '{{ team_id }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="get_by_query"
    values={[
        { label: 'get_by_query', value: 'get_by_query' }
    ]}
>
<TabItem value="get_by_query">

Get a virtual model config

```sql
EXEC vercel.ai_gateway.virtual_model_configs.get_by_query 
@ownerId='{{ ownerId }}', 
@virtualModelSlug='{{ virtualModelSlug }}', 
@limit='{{ limit }}', 
@cursor='{{ cursor }}', 
@teamId='{{ teamId }}', 
@slug='{{ slug }}'
;
```
</TabItem>
</Tabs>
