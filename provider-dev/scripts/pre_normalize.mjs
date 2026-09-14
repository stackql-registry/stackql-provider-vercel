#!/usr/bin/env node

// Vercel-specific spec corrections applied to the split service specs in
// provider-dev/source BEFORE the generic provider-utils normalize pass.
//
// The published Vercel OpenAPI document (https://openapi.vercel.sh) disagrees
// with the wire in a handful of places, and several list responses are
// declared as a oneOf that mixes an opaque `{type: object}` placeholder (or a
// scalar) with the real envelope. The normalize pass merges every oneOf
// variant into one schema, so an opaque or scalar variant poisons the merged
// type (it comes out as `type: string`) and the row projector cannot latch on
// to the list key. Each correction below is backed by a live observation
// recorded in NOTES.md.
//
// Every targeted patch names the operation it expects; a missing operation
// fails the run so upstream drift is reviewed rather than silently skipped.
// The generic oneOf clean-up applies to every 2xx response schema.
//
// Idempotent - safe to re-run. Usage: node provider-dev/scripts/pre_normalize.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const sourceDir = path.join(repoRoot, 'provider-dev', 'source');

const errors = [];
const stats = { targeted: 0, variantsDropped: 0, paramsDropped: 0, collisionOps: [], filesChanged: 0 };

function findOperation(doc, operationId) {
  for (const [p, item] of Object.entries(doc.paths || {})) {
    for (const verb of ['get', 'post', 'put', 'patch', 'delete']) {
      const op = item?.[verb];
      if (op && op.operationId === operationId) return { path: p, verb, op };
    }
  }
  return null;
}

function successSchema(op) {
  const res = op.responses?.['200'] || op.responses?.['201'];
  const content = res?.content?.['application/json'];
  return content ? content : null;
}

function isStructured(v) {
  return !!(v && (v.$ref || (v.properties && Object.keys(v.properties).length > 0) || v.type === 'array' || v.allOf || v.oneOf || v.anyOf));
}

// Targeted corrections: operationId -> (content) => void. `content` is the
// `application/json` media object of the 2xx response (has `.schema`).
const TARGETED = {
  // GET /v1/global-config returns a bare array of Global Config (Edge Config)
  // objects; the spec declares a single object. Observed live: `[]`.
  getEdgeConfigs: (content) => {
    if (content.schema.type !== 'array') content.schema = { type: 'array', items: content.schema };
  },
  // GET /v1/global-config/{id}/tokens returns an array of tokens; the spec
  // declares a single $ref GlobalConfigToken.
  getEdgeConfigTokens: (content) => {
    if (content.schema.type !== 'array') content.schema = { type: 'array', items: content.schema };
  },
  // GET /v1/log-drains: oneOf [array, {drains}]; the wire is the bare array.
  // Observed live: `[]`.
  getAllLogDrains: (content) => {
    const s = content.schema;
    if (s.oneOf) {
      const arr = s.oneOf.find((v) => v.type === 'array');
      if (!arr) { errors.push('getAllLogDrains: no array variant found'); return; }
      content.schema = arr;
    }
  },
  // GET /v1/webhooks and GET /v1/integrations/configurations: oneOf of two
  // near-identical array variants; keep the first. Observed live: `[]`.
  getWebhooks: (content) => {
    const s = content.schema;
    if (s.oneOf && s.oneOf.every((v) => v.type === 'array')) content.schema = s.oneOf[0];
  },
  getConfigurations: (content) => {
    const s = content.schema;
    if (s.oneOf && s.oneOf.every((v) => v.type === 'array')) content.schema = s.oneOf[0];
  },
  // GET /v10/projects: oneOf [legacy bare array, {projects, pagination} x2];
  // the wire is the envelope. Observed live: `{"projects":[],"pagination":...}`.
  getProjects: (content) => {
    const s = content.schema;
    if (s.oneOf) {
      const kept = s.oneOf.filter((v) => v.type !== 'array');
      if (kept.length === 0) { errors.push('getProjects: no envelope variant found'); return; }
      s.oneOf = kept;
    }
  },
  // GET /v1/microfrontends/groups is declared as an opaque object. Observed
  // live: {"groups":[],"maxMicrofrontendsGroupsPerTeam":1,"maxMicrofrontendsPerGroup":2}.
  getMicrofrontendsGroups: (content) => {
    const s = content.schema;
    if (!s.properties) {
      content.schema = {
        type: 'object',
        properties: {
          groups: { type: 'array', items: { type: 'object', additionalProperties: true } },
          maxMicrofrontendsGroupsPerTeam: { type: 'number' },
          maxMicrofrontendsPerGroup: { type: 'number' },
        },
      };
    }
  },
};

// Generic: a request body property that shares its name with a query
// parameter of the same operation (Vercel's team `slug` alias on
// createEdgeConfig, createFlag, patchTeam, ...; `teamId` on stageRedirects)
// is ambiguous for the naive body translation - the value binds to the query
// parameter and the body goes out empty (observed as a 415 on
// POST /v1/global-config). The query parameter is dropped on those
// operations: `teamId` remains the team scope on every one of them except
// stageRedirects / repository permissions, where the body carries it.
function collectBodyProps(doc, schema, depth = 0) {
  const s = schema && schema.$ref ? doc.components?.schemas?.[schema.$ref.split('/').pop()] : schema;
  if (!s || depth > 2) return [];
  let out = Object.keys(s.properties || {});
  for (const key of ['oneOf', 'anyOf', 'allOf']) {
    for (const v of s[key] || []) out = out.concat(collectBodyProps(doc, v, depth + 1));
  }
  return out;
}

function dropCollidingQueryParams(doc, file) {
  for (const [p, item] of Object.entries(doc.paths || {})) {
    for (const verb of ['post', 'put', 'patch', 'delete']) {
      const op = item?.[verb];
      const body = op?.requestBody?.content?.['application/json']?.schema;
      if (!body) continue;
      const props = new Set(collectBodyProps(doc, body));
      const before = (op.parameters || []).length;
      op.parameters = (op.parameters || []).filter((prm) => {
        const resolved = prm.$ref ? doc.components?.parameters?.[prm.$ref.split('/').pop()] : prm;
        return !(resolved && resolved.in === 'query' && props.has(resolved.name));
      });
      const dropped = before - op.parameters.length;
      if (dropped) {
        stats.paramsDropped += dropped;
        stats.collisionOps.push(`${file}:${op.operationId}`);
      }
    }
  }
}

// Generic: at the top level of a 2xx JSON response schema, drop oneOf
// variants that carry no structure (an opaque `{type: object}` placeholder or
// a scalar) when at least one structured variant remains.
function cleanVariants(schema, label) {
  if (!schema || !Array.isArray(schema.oneOf)) return;
  const structured = schema.oneOf.filter(isStructured);
  if (structured.length === 0 || structured.length === schema.oneOf.length) return;
  stats.variantsDropped += schema.oneOf.length - structured.length;
  schema.oneOf = structured;
  if (schema.oneOf.length === 1) {
    const only = schema.oneOf[0];
    delete schema.oneOf;
    Object.assign(schema, only);
  }
}

const files = fs.readdirSync(sourceDir).filter((f) => f.endsWith('.yaml'));
const seenTargets = new Set();
for (const file of files) {
  const full = path.join(sourceDir, file);
  const before = fs.readFileSync(full, 'utf8');
  const doc = yaml.load(before);

  for (const [opId, patch] of Object.entries(TARGETED)) {
    const found = findOperation(doc, opId);
    if (!found) continue;
    seenTargets.add(opId);
    const content = successSchema(found.op);
    if (!content || !content.schema) { errors.push(`${file}: ${opId} has no application/json 2xx schema`); continue; }
    patch(content);
    stats.targeted++;
  }

  dropCollidingQueryParams(doc, file);

  for (const [p, item] of Object.entries(doc.paths || {})) {
    for (const verb of ['get', 'post', 'put', 'patch', 'delete']) {
      const op = item?.[verb];
      if (!op) continue;
      for (const [code, res] of Object.entries(op.responses || {})) {
        if (!code.startsWith('2')) continue;
        const content = res?.content?.['application/json'];
        if (content?.schema) cleanVariants(content.schema, `${file} ${verb.toUpperCase()} ${p} ${code}`);
      }
    }
  }

  const after = yaml.dump(doc, { lineWidth: -1, noRefs: true });
  if (after !== before) {
    fs.writeFileSync(full, after);
    stats.filesChanged++;
  }
}

for (const opId of Object.keys(TARGETED)) {
  if (!seenTargets.has(opId)) errors.push(`expected operation ${opId} not found in any service spec (upstream drift - review the patch)`);
}

if (errors.length) {
  console.error('pre_normalize: FAILED');
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`pre_normalize: ${stats.targeted} targeted correction(s), ${stats.variantsDropped} opaque/scalar oneOf variant(s) dropped, ${stats.paramsDropped} colliding query parameter(s) dropped on ${stats.collisionOps.length} operation(s), ${stats.filesChanged} file(s) changed`);
if (stats.collisionOps.length) console.log(`  collisions resolved: ${stats.collisionOps.join(', ')}`);
