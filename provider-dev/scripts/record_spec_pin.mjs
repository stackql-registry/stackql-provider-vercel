#!/usr/bin/env node

// Helper for bin/fetch-spec.sh: validate the downloaded Vercel OpenAPI
// document, compare it with the recorded pin, and (unless --check mode)
// move it into place and rewrite provider-dev/config/spec_pin.json.
//
// Environment (set by fetch-spec.sh): CHECK, TMP_FILE, DOWNLOAD_DIR,
// PIN_FILE, SPEC_URL, SPEC_FILE.

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const { CHECK, TMP_FILE, DOWNLOAD_DIR, PIN_FILE, SPEC_URL, SPEC_FILE } = process.env;
const check = CHECK === 'true';

const raw = fs.readFileSync(TMP_FILE, 'utf8');
let doc;
try {
  doc = JSON.parse(raw);
} catch (err) {
  console.error(`fetch-spec: downloaded document is not valid JSON: ${err.message}`);
  process.exit(1);
}
if (!doc.openapi || !doc.paths || !doc.info) {
  console.error('fetch-spec: downloaded document does not look like an OpenAPI document (missing openapi / info / paths)');
  process.exit(1);
}

const VERBS = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options'];
let operations = 0;
const tags = new Set();
for (const item of Object.values(doc.paths)) {
  for (const verb of VERBS) {
    const op = item?.[verb];
    if (!op) continue;
    operations++;
    for (const t of op.tags || []) tags.add(t);
  }
}

const sha256 = crypto.createHash('sha256').update(raw).digest('hex');
const pin = {
  source: SPEC_URL,
  file: `provider-dev/downloaded/${SPEC_FILE}`,
  fetched_at: new Date().toISOString().slice(0, 10),
  openapi: doc.openapi,
  stated_version: doc.info.version || null,
  paths: Object.keys(doc.paths).length,
  operations,
  tags: tags.size,
  sha256,
  bytes: Buffer.byteLength(raw),
};

let previous = null;
if (fs.existsSync(PIN_FILE)) {
  try { previous = JSON.parse(fs.readFileSync(PIN_FILE, 'utf8')); } catch { previous = null; }
}

console.log(`fetch-spec: openapi ${pin.openapi}, stated version ${pin.stated_version}, ${pin.paths} paths, ${pin.operations} operations, ${pin.tags} tags, sha256 ${sha256.slice(0, 12)}...`);

if (previous) {
  if (previous.sha256 === sha256) {
    console.log(`fetch-spec: matches the recorded pin (fetched ${previous.fetched_at})`);
  } else {
    console.log(`fetch-spec: DRIFT from the recorded pin (fetched ${previous.fetched_at}): paths ${previous.paths} -> ${pin.paths}, operations ${previous.operations} -> ${pin.operations}, tags ${previous.tags} -> ${pin.tags}`);
    console.log('fetch-spec: run make mappings validate-mappings to surface new or removed operations');
    if (check) process.exit(1);
  }
} else {
  console.log('fetch-spec: no pin recorded yet');
  if (check) process.exit(1);
}

if (check) process.exit(0);

fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
fs.mkdirSync(path.dirname(PIN_FILE), { recursive: true });
fs.copyFileSync(TMP_FILE, path.join(DOWNLOAD_DIR, SPEC_FILE));
fs.writeFileSync(PIN_FILE, JSON.stringify(pin, null, 2) + '\n');
console.log(`fetch-spec: wrote ${path.join(DOWNLOAD_DIR, SPEC_FILE)} and ${PIN_FILE}`);
