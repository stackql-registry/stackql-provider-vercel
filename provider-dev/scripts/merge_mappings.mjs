#!/usr/bin/env node

// Merge a fresh provider-utils `analyze` skeleton into the checked-in
// mapping manifest, provider-dev/config/all_services.csv.
//
// The checked-in CSV is the durable record of how every Vercel operation maps
// to a StackQL resource, method and SQL verb. It is never regenerated from
// scratch: a regeneration would let an upstream reshuffle silently move an
// operation to a different resource or rename a resource between provider
// versions. Instead:
//
//   - rows that already exist (keyed on filename + path + HTTP verb) keep
//     their stackql_* mapping columns; the descriptive columns (operationId,
//     tags, description) are refreshed from the fresh analysis
//   - operations new upstream are appended with blank mapping columns, so
//     validate_mappings.mjs fails until a maintainer maps them
//   - rows for operations no longer upstream are kept in place; they are
//     reported here and fail validate_mappings.mjs until deleted deliberately
//
// Existing row order is preserved so the diff of a refresh is only the change.
//
// Usage: node provider-dev/scripts/merge_mappings.mjs <fresh.csv> [<manifest.csv>]

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseCsv, formatCsv, MAPPING_COLUMNS, rowKey } from './lib/csv.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const freshPath = process.argv[2];
const manifestPath = process.argv[3] || path.join(repoRoot, 'provider-dev', 'config', 'all_services.csv');

if (!freshPath || !fs.existsSync(freshPath)) {
  console.error('Usage: merge_mappings.mjs <fresh.csv> [<manifest.csv>]');
  process.exit(1);
}

const fresh = parseCsv(fs.readFileSync(freshPath, 'utf8'));
const existing = fs.existsSync(manifestPath) ? parseCsv(fs.readFileSync(manifestPath, 'utf8')) : { header: fresh.header, rows: [] };

if (fresh.header.join(',') !== existing.header.join(',')) {
  console.error('merge_mappings: column layout differs between the fresh analysis and the manifest');
  console.error(`  fresh:    ${fresh.header.join(',')}`);
  console.error(`  manifest: ${existing.header.join(',')}`);
  process.exit(1);
}

const freshByKey = new Map(fresh.rows.map((r) => [rowKey(r), r]));
const out = [];
let kept = 0, refreshed = 0, added = 0;
const stale = [];

for (const row of existing.rows) {
  const k = rowKey(row);
  const f = freshByKey.get(k);
  if (!f) {
    stale.push(row);
    out.push(row);
    continue;
  }
  const merged = { ...f };
  for (const col of MAPPING_COLUMNS) merged[col] = row[col] ?? '';
  const changed = fresh.header.some((c) => (merged[c] ?? '') !== (row[c] ?? ''));
  if (changed) refreshed++; else kept++;
  out.push(merged);
  freshByKey.delete(k);
}
for (const f of freshByKey.values()) {
  out.push({ ...f });
  added++;
}

fs.writeFileSync(manifestPath, formatCsv(fresh.header, out));
console.log(`merge_mappings: ${kept} unchanged, ${refreshed} refreshed, ${added} new (unmapped), ${stale.length} stale -> ${path.relative(repoRoot, manifestPath)}`);
if (added) {
  console.log('  new operations (map them in the CSV, then re-run make validate-mappings):');
  for (const r of out.slice(-added)) console.log(`    ${r.filename} ${r.verb.toUpperCase()} ${r.path} (${r.operationId})`);
}
if (stale.length) {
  console.log('  operations no longer upstream (delete the rows once the removal is reviewed):');
  for (const r of stale) console.log(`    ${r.filename} ${r.verb.toUpperCase()} ${r.path} (${r.operationId})`);
}
