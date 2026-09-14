#!/usr/bin/env node

// Offline validation of the generated vercel provider against the local file
// registry - no network, no server, no credentials. Runs SHOW SERVICES /
// SHOW RESOURCES / SHOW METHODS and DESCRIBE EXTENDED over representative
// resources through `stackql exec`, and asserts the post-process extensions
// directly in the generated YAML (pagination, LIMIT pushdown, nativeCasing,
// the upload and text-response transforms). Exit 1 on any failure.
//
// Usage: node tests/offline_validation.mjs
// Binary resolution: $STACKQL, ./stackql(.exe), then `stackql` on PATH.

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const regPath = path.join(repoRoot, 'provider-dev', 'openapi').replace(/\\/g, '/');
const registry = JSON.stringify({ url: `file://${regPath}`, localDocRoot: regPath, verifyConfig: { nopVerify: true } });
const servicesDir = path.join(repoRoot, 'provider-dev', 'openapi', 'src', 'vercel', 'v00.00.00000', 'services');

function findBinary() {
  if (process.env.STACKQL && fs.existsSync(process.env.STACKQL)) return process.env.STACKQL;
  for (const name of ['stackql', 'stackql.exe']) {
    const local = path.join(repoRoot, name);
    if (fs.existsSync(local)) return local;
  }
  return 'stackql';
}
const bin = findBinary();

function runSql(sql) {
  return new Promise((resolve) => {
    const child = spawn(bin, [`--registry=${registry}`, 'exec', sql, '--output', 'json'], { cwd: repoRoot, env: { ...process.env, VERCEL_API_TOKEN: process.env.VERCEL_API_TOKEN || 'offline' } });
    let stdout = '', stderr = '';
    child.stdout.on('data', (d) => (stdout += d));
    child.stderr.on('data', (d) => (stderr += d));
    child.on('close', (code) => {
      let rows = [];
      try { rows = JSON.parse(stdout) ?? []; } catch { rows = []; }
      resolve({ code, rows, stdout, stderr });
    });
    child.on('error', (err) => resolve({ code: -1, rows: [], stdout: '', stderr: String(err) }));
  });
}

const results = [];
function check(name, cond, note = '') {
  results.push({ name, pass: !!cond });
  console.log(`  ${cond ? 'PASS' : 'FAIL'}  ${name}${cond ? '' : `  [${String(note).slice(0, 200)}]`}`);
}

const EXPECTED_SERVICES = [
  'access_groups', 'ai_gateway', 'aliases', 'artifacts', 'authentication', 'billing', 'bulk_redirects', 'certs', 'checks',
  'connect', 'deployments', 'dns', 'domains', 'domains_registrar', 'drains', 'edge_cache', 'edge_config', 'environments',
  'feature_flags', 'integrations', 'kms', 'log_drains', 'marketplace', 'microfrontends', 'networking', 'observability',
  'project_members', 'project_routes', 'projects', 'rolling_release', 'sandboxes', 'security', 'storage', 'teams', 'user',
  'vcr', 'web_analytics', 'webhooks',
];
const EXPECTED_RESOURCES = {
  projects: ['domains', 'env_vars', 'projects', 'promote_aliases', 'traces', 'transfer_requests'],
  deployments: ['deployment_events', 'deployment_files', 'deployments', 'files', 'runtime_logs'],
  edge_config: ['backups', 'edge_configs', 'items', 'schema', 'tokens'],
  teams: ['access_requests', 'members', 'microfrontend_groups', 'teams'],
  user: ['event_types', 'events', 'user'],
};

console.log(`stackql: ${bin}`);
let r = await runSql('SHOW SERVICES IN vercel');
const svcNames = r.rows.map((x) => x.name).sort();
check(`SHOW SERVICES (${EXPECTED_SERVICES.length})`, JSON.stringify(svcNames) === JSON.stringify(EXPECTED_SERVICES), r.stderr || JSON.stringify(svcNames));

for (const [svc, expected] of Object.entries(EXPECTED_RESOURCES)) {
  r = await runSql(`SHOW RESOURCES IN vercel.${svc}`);
  const names = r.rows.map((x) => x.name).sort();
  check(`SHOW RESOURCES IN vercel.${svc} (${expected.length})`, JSON.stringify(names) === JSON.stringify(expected), r.stderr || JSON.stringify(names));
}

// deployments.deployments: verbs and the lifecycle exec methods
r = await runSql('SHOW METHODS IN vercel.deployments.deployments');
let byName = Object.fromEntries(r.rows.map((m) => [m.MethodName, m]));
check('deployments.deployments verbs (list/get SELECT, create INSERT, delete DELETE, cancel EXEC)',
  byName.list?.SQLVerb === 'SELECT' && byName.get?.SQLVerb === 'SELECT' && byName.create?.SQLVerb === 'INSERT' && byName.delete?.SQLVerb === 'DELETE' && byName.cancel?.SQLVerb === 'EXEC',
  JSON.stringify(byName));
check('deployments.deployments get requires id_or_url (snake_case path params)', String(byName.get?.RequiredParams || '').includes('id_or_url'), JSON.stringify(byName.get));

// projects.projects: lifecycle exec methods attached to the resource
r = await runSql('SHOW METHODS IN vercel.projects.projects');
byName = Object.fromEntries(r.rows.map((m) => [m.MethodName, m]));
check('projects.projects lifecycle methods are EXEC (pause, unpause, promote, rollback)',
  ['pause', 'unpause', 'promote', 'rollback'].every((m) => byName[m]?.SQLVerb === 'EXEC'), JSON.stringify(Object.keys(byName)));
check('projects.projects create requires name (naive request body translate)', String(byName.create?.RequiredParams || '').includes('name'), JSON.stringify(byName.create));

// files.upload: octet-stream body exposed as the `value` column
r = await runSql('SHOW METHODS IN vercel.deployments.files');
check('deployments.files.upload is an EXEC method', r.rows.some((m) => m.MethodName === 'upload' && m.SQLVerb === 'EXEC'), JSON.stringify(r.rows));

// DESCRIBE EXTENDED on representative resources: snake_case column aliases
r = await runSql('DESCRIBE EXTENDED vercel.projects.projects');
let cols = r.rows.map((c) => c.name);
check('DESCRIBE projects.projects has snake_case columns (account_id, created_at, build_command, root_directory)',
  ['id', 'name', 'account_id', 'created_at', 'build_command', 'root_directory'].every((c) => cols.includes(c)), JSON.stringify(cols).slice(0, 300));
r = await runSql('DESCRIBE EXTENDED vercel.deployments.deployments');
cols = r.rows.map((c) => c.name);
// DESCRIBE reports the first select method (get, the more specific one); the
// list method's rows carry `uid` instead of `id` - a Vercel API quirk noted
// in the docs.
check('DESCRIBE deployments.deployments has snake_case columns (id, url, ready_state, created_at)',
  ['id', 'url', 'ready_state', 'created_at'].every((c) => cols.includes(c)) && !cols.includes('pagination'), JSON.stringify(cols).slice(0, 300));
r = await runSql('DESCRIBE EXTENDED vercel.edge_config.edge_configs');
cols = r.rows.map((c) => c.name);
check('DESCRIBE edge_config.edge_configs (bare-array wrap) has id, slug, item_count', ['id', 'slug', 'item_count'].every((c) => cols.includes(c)), JSON.stringify(cols));
r = await runSql('DESCRIBE EXTENDED vercel.domains_registrar.tlds');
check('DESCRIBE domains_registrar.tlds (scalar bare-array wrap) has a column', r.rows.length > 0, r.stderr);
r = await runSql('DESCRIBE EXTENDED vercel.billing.charges');
check('DESCRIBE billing.charges (jsonl text response) has contents', r.rows.some((c) => c.name === 'contents'), JSON.stringify(r.rows));
r = await runSql('DESCRIBE EXTENDED vercel.user.user');
check('DESCRIBE user.user projects $.user (username, default_team_id)', ['username', 'default_team_id'].every((c) => r.rows.some((x) => x.name === c)), JSON.stringify(r.rows.map((x) => x.name)));

// generated-YAML assertions for the post-process extensions
function loadService(name) {
  return yaml.load(fs.readFileSync(path.join(servicesDir, `${name}.yaml`), 'utf8'));
}
function method(doc, res, m) {
  return doc.components['x-stackQL-resources'][res].methods[m];
}
const dep = loadService('deployments');
const depList = method(dep, 'deployments', 'list');
check('deployments.list pages on $.pagination.next -> ?until', depList.config?.pagination?.requestToken?.key === 'until' && depList.config?.pagination?.responseToken?.key === '$.pagination.next', JSON.stringify(depList.config));
check('deployments.list pushes SQL LIMIT to ?limit (max 100)', depList.config?.queryParamPushdown?.top?.paramName === 'limit' && depList.config?.queryParamPushdown?.top?.maxValue === 100, JSON.stringify(depList.config));
check('deployments.list uses request.nativeCasing camel', depList.request?.nativeCasing === 'camel', JSON.stringify(depList.request));
const upload = method(dep, 'files', 'upload');
check('files.upload sends the value column as an octet-stream body', upload.request?.mediaType === 'application/octet-stream' && upload.request?.transform?.body === '{{ .value }}' && upload.request?.nativeCasing === 'camel', JSON.stringify(upload.request));
const prj = loadService('projects');
check('projects.list pages on $.pagination.next -> ?from', method(prj, 'projects', 'list').config?.pagination?.requestToken?.key === 'from', JSON.stringify(method(prj, 'projects', 'list').config));
const ag = loadService('access_groups');
check('access_groups.list pages on ?next', method(ag, 'access_groups', 'list').config?.pagination?.requestToken?.key === 'next', JSON.stringify(method(ag, 'access_groups', 'list').config));
const conn = loadService('connect');
check('connectors.list pages on ?cursor', method(conn, 'connectors', 'list').config?.pagination?.requestToken?.key === 'cursor', JSON.stringify(method(conn, 'connectors', 'list').config));
const br = loadService('bulk_redirects');
check('bulk_redirects.redirects.list uses page_number pagination', method(br, 'redirects', 'list').config?.pagination?.algorithm === 'page_number', JSON.stringify(method(br, 'redirects', 'list').config));
const ec = loadService('edge_config');
check('edge_configs.create has naive request body translate', method(ec, 'edge_configs', 'create').config?.requestBodyTranslate?.algorithm === 'naive', JSON.stringify(method(ec, 'edge_configs', 'create').config));
check('edge_configs.create has no colliding team slug query param', !(ec.paths['/v1/global-config'].post.parameters || []).some((p) => p.name === 'slug'), JSON.stringify(ec.paths['/v1/global-config'].post.parameters));
const bill = loadService('billing');
check('billing.charges.list wraps the jsonl body as text', method(bill, 'charges', 'list').response?.mediaType === 'text/plain' && method(bill, 'charges', 'list').response?.objectKey === '$.items', JSON.stringify(method(bill, 'charges', 'list').response));
const provider = yaml.load(fs.readFileSync(path.join(servicesDir, '..', 'provider.yaml'), 'utf8'));
check('provider.yaml: bearer auth from VERCEL_API_TOKEN and snake_case_aliases', provider.config?.auth?.type === 'bearer' && provider.config?.auth?.credentialsenvvar === 'VERCEL_API_TOKEN' && provider.config?.snake_case_aliases === true, JSON.stringify(provider.config));
check('provider.yaml lists every service', Object.keys(provider.providerServices || {}).sort().join(',') === EXPECTED_SERVICES.join(','), Object.keys(provider.providerServices || {}).join(','));

const failed = results.filter((x) => !x.pass);
console.log(`\n${results.length - failed.length}/${results.length} passed`);
if (failed.length) process.exit(1);
