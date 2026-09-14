// Service discriminator for the Vercel OpenAPI spec.
//
// Used by `provider-dev-utils split --svc-discriminator function`. Maps the
// first tag of each operation to a stable snake_case StackQL service name.
// Tags that are versioned duplicates of one another (checks / checks-v2,
// ai-gateway / api-ai-gateway) or that hold a single operation (logs,
// static-ips) are folded into a primary service so the service surface
// stays small and stable across upstream spec revisions.
//
// Signature: (pathKey, operationId, tags, { providerName, pathItem, operation })
// Return a service name, or null to skip the operation.

const TAG_TO_SERVICE = {
  'access-groups': 'access_groups',
  'ai-gateway': 'ai_gateway',
  'api-ai-gateway': 'ai_gateway',
  'aliases': 'aliases',
  'artifacts': 'artifacts',
  'authentication': 'authentication',
  'billing': 'billing',
  'bulk-redirects': 'bulk_redirects',
  'certs': 'certs',
  'checks': 'checks',
  'checks-v2': 'checks',
  'connect': 'connect',
  'deployments': 'deployments',
  'dns': 'dns',
  'domains': 'domains',
  'domains-registrar': 'domains_registrar',
  'drains': 'drains',
  'edge-cache': 'edge_cache',
  'environment': 'environments',
  'feature-flags': 'feature_flags',
  'global-config': 'edge_config',
  'integrations': 'integrations',
  'kms': 'kms',
  'logDrains': 'log_drains',
  'logs': 'deployments',
  'marketplace': 'marketplace',
  'microfrontends': 'microfrontends',
  'networking': 'networking',
  'observability': 'observability',
  'projectMembers': 'project_members',
  'project-routes': 'project_routes',
  'projects': 'projects',
  'rolling-release': 'rolling_release',
  'sandboxes': 'sandboxes',
  'security': 'security',
  'static-ips': 'networking',
  'storage': 'storage',
  'teams': 'teams',
  'user': 'user',
  'vcr': 'vcr',
  'web-analytics': 'web_analytics',
  'webhooks': 'webhooks',
};

// Operations tagged with more than one tag where the first tag is not the
// service we want them filed under.
const OPERATION_TO_SERVICE = {
  'exchange-sso-token': 'marketplace',
};

// Untagged operations are routed by path prefix.
const PATH_PREFIX_TO_SERVICE = [
  ['/domains/', 'dns'],
  ['/api-keys', 'authentication'],
  ['/v2/observability/', 'observability'],
  ['/speed-insights/', 'web_analytics'],
  ['/web/insights/', 'web_analytics'],
];

export default function svcDiscriminator(pathKey, operationId, tags) {
  if (operationId && OPERATION_TO_SERVICE[operationId]) {
    return OPERATION_TO_SERVICE[operationId];
  }
  for (const tag of tags || []) {
    if (TAG_TO_SERVICE[tag]) return TAG_TO_SERVICE[tag];
  }
  for (const [prefix, service] of PATH_PREFIX_TO_SERVICE) {
    if (pathKey.startsWith(prefix)) return service;
  }
  const fallback = (tags && tags[0]) ? tags[0] : null;
  if (!fallback) {
    console.error(`svc-discriminator: no tag for ${operationId} ${pathKey}; skipping`);
    return null;
  }
  console.error(`svc-discriminator: unmapped tag '${fallback}' for ${operationId}; using normalized tag name`);
  return fallback;
}
