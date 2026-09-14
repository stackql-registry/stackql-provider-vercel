#!/usr/bin/env node

// Post-generation pass over provider-dev/openapi/src/vercel/v00.00.00000:
// everything the provider-utils generator cannot express, derived from the
// operations themselves so the pass is deterministic and idempotent.
//
// 1. snake_case surface. `request.nativeCasing: camel` on every method,
//    paired with `snake_case_aliases: true` on the provider config (set by the
//    Makefile PROVIDER_CONFIG). WHERE / INSERT / EXEC keys written in
//    snake_case (team_id, project_id, build_command) resolve to the camelCase
//    wire names; SELECT and DESCRIBE columns present as snake aliases.
//
// 2. Pagination. Vercel pages in four dialects, all signalled by the response:
//      - timestamp:  ?until=<pagination.next>        (deployments, domains, teams, ...)
//      - from:       ?from=<pagination.next>         (projects)
//      - next token: ?next=<pagination.next>         (access groups, kms, edge config backups)
//      - cursor:     ?cursor=<pagination.next | nextCursor | cursor>  (connect, feature flags, sandboxes, vcr, ai gateway)
//      - page number: ?page=N until pagination.numPages (bulk redirects)
//    The dialect is inferred per select method from its query parameters and
//    its 200 schema, and written as a method-level `config.pagination` block.
//    The token is followed until the response token is null.
//
// 3. LIMIT pushdown. Select methods whose operation accepts a `limit` query
//    parameter get `config.queryParamPushdown.top` so `SELECT ... LIMIT n`
//    is sent as `?limit=n` (capped at 100, Vercel's page ceiling).
//
// 4. Octet-stream request bodies (file, artifact and avatar uploads). The
//    body is one `value` column whose text is sent verbatim
//    (request.transform, the cloudflare Workers AI precedent). The
//    hyphenated digest/size headers (x-vercel-digest, x-now-size) are
//    written as x_vercel_digest / x_now_size (any-sdk aliases hyphenated
//    wire names from snake_case).
//
// 5. Non-JSON success responses (application/jsonl, application/x-ndjson,
//    application/stream+json, application/octet-stream). The body is
//    surfaced as one row with a `contents` text column via a text template
//    (the bare-array wrap machinery: overrideMediaType + schema_override +
//    objectKey + transform).
//
// Validates and fails without writing on any unresolved method reference.
// Usage: node provider-dev/scripts/post_process.mjs [--verbose]

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const servicesDir = path.join(repoRoot, 'provider-dev', 'openapi', 'src', 'vercel', 'v00.00.00000', 'services');
const verbose = process.argv.includes('--verbose');

if (!fs.existsSync(servicesDir)) {
  console.error(`post_process: ${servicesDir} not found - run the generate step first`);
  process.exit(1);
}

const LIMIT_MAX = 100;
const OCTET_BODY_SCHEMA = 'StackqlOctetStreamBody';
const TEXT_RESPONSE_SCHEMA = 'StackqlTextResponse';

const errors = [];
const stats = { methods: 0, camel: 0, kebab: 0, pagination: {}, pushdown: 0, octetRequests: 0, textResponses: 0 };
const detail = [];

function decodeRef(ref) {
  // '#/paths/~1v10~1projects/get' -> { path: '/v10/projects', verb: 'get' }
  const m = /^#\/paths\/(.+)\/(get|post|put|patch|delete)$/.exec(ref);
  if (!m) return null;
  return { path: m[1].replace(/~1/g, '/').replace(/~0/g, '~'), verb: m[2] };
}

function deref(doc, node) {
  if (node && node.$ref) {
    const name = node.$ref.split('/').pop();
    return doc.components?.schemas?.[name] || node;
  }
  return node;
}

function resolveParams(doc, pathItem, op) {
  const raw = [...(pathItem.parameters || []), ...(op.parameters || [])];
  return raw.map((p) => (p.$ref ? doc.components?.parameters?.[p.$ref.split('/').pop()] || {} : p));
}

// Merge the properties of a schema and any oneOf/anyOf/allOf variants it
// carries (the normalize pass merges response variants, which can leave the
// `pagination` property itself as a oneOf of the variants' definitions).
function mergedProps(doc, node) {
  const n = deref(doc, node);
  if (!n) return {};
  const out = { ...(n.properties || {}) };
  for (const key of ['oneOf', 'anyOf', 'allOf']) {
    for (const v of n[key] || []) Object.assign(out, mergedProps(doc, v));
  }
  return out;
}

function paginationFor(doc, queryNames, schema) {
  const props = mergedProps(doc, schema);
  const pag = props.pagination ? deref(doc, props.pagination) : null;
  const pagProps = pag ? mergedProps(doc, pag) : {};
  const q = new Set(queryNames);
  const token = (reqKey, respKey) => ({
    requestToken: { key: reqKey, location: 'query' },
    responseToken: { key: respKey, location: 'body' },
  });
  if (pag && pagProps.numPages && q.has('page')) {
    return {
      family: 'page_number',
      config: {
        algorithm: 'page_number',
        requestToken: { key: 'page', location: 'query' },
        responseToken: { key: '$.pagination.page', location: 'body' },
        responseTerminator: { key: '$.pagination.numPages', location: 'body' },
      },
    };
  }
  if (pag && pagProps.next) {
    if (q.has('until')) return { family: 'until', config: token('until', '$.pagination.next') };
    if (q.has('from')) return { family: 'from', config: token('from', '$.pagination.next') };
    if (q.has('next')) return { family: 'next', config: token('next', '$.pagination.next') };
    if (q.has('cursor')) return { family: 'cursor', config: token('cursor', '$.pagination.next') };
  }
  if (props.nextCursor && q.has('cursor')) return { family: 'cursor', config: token('cursor', '$.nextCursor') };
  if (props.cursor && q.has('cursor')) return { family: 'cursor', config: token('cursor', '$.cursor') };
  return null;
}

function ensureSchema(doc, name, schema) {
  doc.components = doc.components || {};
  doc.components.schemas = doc.components.schemas || {};
  if (!doc.components.schemas[name]) doc.components.schemas[name] = schema;
}

const files = fs.readdirSync(servicesDir).filter((f) => f.endsWith('.yaml')).sort();
const outputs = [];

for (const file of files) {
  const full = path.join(servicesDir, file);
  const doc = yaml.load(fs.readFileSync(full, 'utf8'));
  const resources = doc.components?.['x-stackQL-resources'] || {};

  for (const [resName, res] of Object.entries(resources)) {
    const selectRefs = new Set((res.sqlVerbs?.select || []).map((r) => r.$ref));
    for (const [methodName, method] of Object.entries(res.methods || {})) {
      stats.methods++;
      const where = `${file} ${resName}.${methodName}`;
      const loc = decodeRef(method.operation?.$ref || '');
      const pathItem = loc && doc.paths?.[loc.path];
      const op = pathItem && pathItem[loc.verb];
      if (!op) { errors.push(`${where}: cannot resolve ${method.operation?.$ref}`); continue; }

      const params = resolveParams(doc, pathItem, op);
      const queryNames = params.filter((p) => p.in === 'query').map((p) => p.name);
      const isSelect = selectRefs.has(`#/components/x-stackQL-resources/${resName}/methods/${methodName}`);

      // 4. octet-stream request bodies, else 1. camel casing
      const reqTypes = Object.keys(op.requestBody?.content || {});
      if (reqTypes.includes('application/octet-stream')) {
        ensureSchema(doc, OCTET_BODY_SCHEMA, {
          type: 'object',
          description: 'Raw request body for octet-stream uploads: the text in `value` is sent verbatim as the request body.',
          properties: { value: { type: 'string', description: 'Raw body content (sent as-is).' } },
          required: ['value'],
        });
        // The operation's own body schema is the binary string; replace it
        // with the one-column object so the request validator accepts a
        // {"value": ...} payload and the transform emits it verbatim.
        op.requestBody.content['application/octet-stream'].schema = { $ref: `#/components/schemas/${OCTET_BODY_SCHEMA}` };
        method.request = {
          mediaType: 'application/octet-stream',
          required: ['value'],
          schema_override: { $ref: `#/components/schemas/${OCTET_BODY_SCHEMA}` },
          transform: { type: 'golang_template_json_v0.1.0', body: '{{ .value }}' },
          nativeCasing: 'camel',
        };
        stats.octetRequests++;
        stats.camel++;
        detail.push(`octet request   ${where}`);
      } else {
        method.request = { ...(method.request || {}), nativeCasing: 'camel' };
        stats.camel++;
      }

      // 5. non-JSON success responses, and select responses whose JSON schema
      //    is opaque (an undeclared or free-form object such as an Edge Config
      //    JSON schema document or the registry root): both become one row
      //    with a `contents` text column.
      const code = method.response?.openAPIDocKey || '200';
      const respTypes = Object.keys(op.responses?.[code]?.content || {});
      const jsonSchema = deref(doc, op.responses?.[code]?.content?.['application/json']?.schema);
      const hasStructure = (s) => s && ((s.properties && Object.keys(s.properties).length > 0) || s.items || s.oneOf || s.allOf || s.anyOf);
      const isOpaqueJson = respTypes.includes('application/json') && isSelect
        && (!jsonSchema || (!hasStructure(jsonSchema) && (jsonSchema.type === 'string' || jsonSchema.type === 'object' || !jsonSchema.type)));
      if ((respTypes.length > 0 && !respTypes.includes('application/json')) || isOpaqueJson) {
        ensureSchema(doc, TEXT_RESPONSE_SCHEMA, {
          type: 'object',
          description: 'Wrapper for non-JSON response bodies (jsonl, ndjson, streamed json, octet-stream): one row carrying the raw body text.',
          properties: {
            items: {
              type: 'array',
              items: { type: 'object', properties: { contents: { type: 'string', description: 'Raw response body.' } } },
            },
          },
        });
        method.response = {
          ...method.response,
          mediaType: 'text/plain',
          openAPIDocKey: code,
          overrideMediaType: 'application/json',
          schema_override: { $ref: `#/components/schemas/${TEXT_RESPONSE_SCHEMA}` },
          objectKey: '$.items',
          transform: { type: 'golang_template_text_v0.3.0', body: '{"items":[{"contents": {{ toJson . }}}]}' },
        };
        stats.textResponses++;
        detail.push(`text response   ${where} (${respTypes.join('|')})`);
      }

      if (!isSelect) continue;

      // 2. pagination and 3. LIMIT pushdown on select methods
      const schema = deref(doc, op.responses?.[code]?.content?.['application/json']?.schema);
      const pag = paginationFor(doc, queryNames, schema);
      const config = { ...(method.config || {}) };
      delete config.pagination;
      delete config.queryParamPushdown;
      if (pag) {
        config.pagination = pag.config;
        stats.pagination[pag.family] = (stats.pagination[pag.family] || 0) + 1;
        detail.push(`pagination/${pag.family.padEnd(11)} ${where}`);
      }
      if (queryNames.includes('limit')) {
        config.queryParamPushdown = { top: { paramName: 'limit', maxValue: LIMIT_MAX } };
        stats.pushdown++;
      }
      if (Object.keys(config).length) method.config = config; else delete method.config;
    }
  }
  outputs.push({ full, doc });
}

if (errors.length) {
  console.error('post_process: FAILED');
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
for (const { full, doc } of outputs) {
  fs.writeFileSync(full, yaml.dump(doc, { lineWidth: -1, noRefs: true }));
}
if (verbose) for (const d of detail.sort()) console.log(`  ${d}`);
console.log(`post_process: ${stats.methods} methods across ${files.length} services; nativeCasing camel=${stats.camel} kebab=${stats.kebab}; pagination ${JSON.stringify(stats.pagination)}; limit pushdown=${stats.pushdown}; octet requests=${stats.octetRequests}; text responses=${stats.textResponses}`);
