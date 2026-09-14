#!/usr/bin/env node

// Validate the mapping manifest (provider-dev/config/all_services.csv)
// against the split service specs in provider-dev/source. Exit 1 on any
// violation, so `make all` stops before a provider is generated from an
// incomplete or drifted manifest:
//
//   - every operation present in the source specs has a manifest row
//   - every row is mapped (resource + method + verb) or marked
//     skip_this_resource
//   - no row refers to an operation that is no longer in the source specs
//     (an upstream removal must be acknowledged by deleting the row)
//   - stackql_verb is one of select / insert / update / delete / replace / exec
//   - method names are unique within a resource of a service
//   - stackql_object_key is only set on select methods
//   - resource and method names are snake_case identifiers
//
// Usage: node provider-dev/scripts/validate_mappings.mjs [--summary]

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import { parseCsv, rowKey } from './lib/csv.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const manifestPath = path.join(repoRoot, 'provider-dev', 'config', 'all_services.csv');
const sourceDir = path.join(repoRoot, 'provider-dev', 'source');
const summary = process.argv.includes('--summary');

const VERBS = new Set(['select', 'insert', 'update', 'delete', 'replace', 'exec']);
const HTTP_VERBS = ['get', 'post', 'put', 'patch', 'delete'];
const IDENT = /^[a-z][a-z0-9_]*$/;

const { rows } = parseCsv(fs.readFileSync(manifestPath, 'utf8'));
const errors = [];

// operations present upstream (in the split specs)
const upstream = new Map();
for (const file of fs.readdirSync(sourceDir).filter((f) => f.endsWith('.yaml'))) {
  const doc = yaml.load(fs.readFileSync(path.join(sourceDir, file), 'utf8'));
  for (const [p, item] of Object.entries(doc.paths || {})) {
    for (const verb of HTTP_VERBS) {
      const op = item?.[verb];
      if (op && op.operationId) upstream.set(`${file}::${p}::${verb}`, op.operationId);
    }
  }
}

const seenKeys = new Set();
const methodKeys = new Map();
const perService = {};
const verbCounts = {};
let skipped = 0;

for (const row of rows) {
  const k = rowKey(row);
  const where = `${row.filename} ${row.verb.toUpperCase()} ${row.path}`;
  if (seenKeys.has(k)) errors.push(`duplicate row: ${where}`);
  seenKeys.add(k);
  if (!upstream.has(k)) errors.push(`stale row (operation no longer upstream): ${where} (${row.operationId})`);

  const res = row.stackql_resource_name;
  const method = row.stackql_method_name;
  const verb = row.stackql_verb;
  if (res === 'skip_this_resource') { skipped++; continue; }
  if (!res || !method || !verb) {
    errors.push(`unmapped: ${where} (${row.operationId}) - set stackql_resource_name, stackql_method_name, stackql_verb`);
    continue;
  }
  if (!IDENT.test(res)) errors.push(`resource name is not snake_case: '${res}' at ${where}`);
  if (!IDENT.test(method)) errors.push(`method name is not snake_case: '${method}' at ${where}`);
  if (!VERBS.has(verb)) errors.push(`invalid stackql_verb '${verb}' at ${where}`);
  if (row.stackql_object_key && verb !== 'select') errors.push(`stackql_object_key set on a ${verb} method at ${where}`);
  if (row.stackql_object_key && row.verb !== 'get') errors.push(`stackql_object_key only applies to GET operations (generator rule) at ${where}`);
  const mk = `${row.filename}::${res}::${method}`;
  if (methodKeys.has(mk)) errors.push(`duplicate method ${res}.${method} in ${row.filename} (${methodKeys.get(mk)} and ${row.operationId})`);
  methodKeys.set(mk, row.operationId);
  const svc = row.filename.replace(/\.yaml$/, '');
  perService[svc] = perService[svc] || new Set();
  perService[svc].add(res);
  verbCounts[verb] = (verbCounts[verb] || 0) + 1;
}

for (const [k, opId] of upstream) {
  if (!seenKeys.has(k)) {
    const [file, p, verb] = k.split('::');
    errors.push(`missing row for upstream operation: ${file} ${verb.toUpperCase()} ${p} (${opId}) - run make mappings`);
  }
}

if (errors.length) {
  console.error(`validate_mappings: FAILED (${errors.length} problem(s))`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

const resourceTotal = Object.values(perService).reduce((n, s) => n + s.size, 0);
console.log(`validate_mappings: OK - ${rows.length} rows, ${rows.length - skipped} mapped, ${skipped} skipped, ${Object.keys(perService).length} services, ${resourceTotal} resources; verbs ${JSON.stringify(verbCounts)}`);
if (summary) {
  for (const svc of Object.keys(perService).sort()) {
    console.log(`  ${svc}: ${[...perService[svc]].sort().join(', ')}`);
  }
}
