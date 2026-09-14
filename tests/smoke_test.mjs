#!/usr/bin/env node

// Live smoke suite for the vercel StackQL provider, over the Postgres wire
// protocol with @stackql/pgwire-lite against a stackql server the suite
// starts itself.
//
// Exercises the operations a Vercel user reaches for first (mirroring the
// Terraform provider's headline resources: vercel_project,
// vercel_project_environment_variable, vercel_edge_config,
// vercel_edge_config_item, vercel_edge_config_token, vercel_deployment):
//
//   read smokes   user, teams, projects, deployments, aliases, domains,
//                 edge configs, API tokens, event types, supported TLDs
//   lifecycle     INSERT a project -> SELECT it -> UPDATE it ->
//                 INSERT / SELECT / UPDATE / DELETE an environment variable ->
//                 INSERT an edge config, UPDATE its items, SELECT items and a
//                 single item, INSERT a read token -> upload a hello world
//                 index.html (EXEC files.upload) and INSERT a production
//                 deployment -> poll until READY -> fetch the production alias
//                 over HTTPS and assert the page body -> SELECT deployment
//                 files and events -> DELETE the edge config and the project
//
// Everything created is named stackql-smoke-<stamp>. The suite sweeps
// breadcrumbs with that prefix before it starts so a failed run cannot leave
// resources behind past the next run. Cost: a Hobby team is free (deployments
// count against the daily limit); on a Pro team the run is well under $1.
//
// Credentials come from the environment, exactly as the provider reads them:
//
//   VERCEL_API_TOKEN   required (the Terraform provider's variable)
//   VERCEL_TEAM_ID     optional; the token's default team is used otherwise.
//                      Vercel scopes by a teamId query parameter, so the id
//                      is supplied on every statement as WHERE team_id = ...
//
// Usage:
//   node tests/smoke_test.mjs                 # local file registry (provider-dev/openapi)
//   node tests/smoke_test.mjs --live          # published provider from the public registry
//   node tests/smoke_test.mjs --read-only     # read smokes only
//   node tests/smoke_test.mjs --cleanup-only  # sweep breadcrumbs and exit
//   node tests/smoke_test.mjs --port 5445 --stackql /path/to/stackql
//
// Never run this against a production team you care about: the sweep deletes
// every project and edge config whose name starts with stackql-smoke-.

import { spawn } from 'child_process';
import crypto from 'crypto';
import fs from 'fs';
import net from 'net';
import path from 'path';
import { fileURLToPath } from 'url';
import { runQuery } from '@stackql/pgwire-lite';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SMOKE_PREFIX = 'stackql-smoke-';
const PACE_MS = 400;
const READY_TIMEOUT_S = 180;

// ------------------------------------------------------------------ args
const argv = process.argv.slice(2);
const flag = (name) => argv.includes(name);
const opt = (name, dflt) => { const i = argv.indexOf(name); return i !== -1 ? argv[i + 1] : dflt; };
const args = {
  live: flag('--live'),
  readOnly: flag('--read-only'),
  cleanupOnly: flag('--cleanup-only'),
  port: parseInt(opt('--port', '5445'), 10),
  stackql: opt('--stackql', null),
  verbose: flag('--verbose'),
};

if (!process.env.VERCEL_API_TOKEN) {
  console.error('VERCEL_API_TOKEN is not set (source .env or export it) - see the module docstring');
  process.exit(2);
}

// ---------------------------------------------------------------- helpers
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function findBinary() {
  if (args.stackql && fs.existsSync(args.stackql)) return args.stackql;
  if (process.env.STACKQL && fs.existsSync(process.env.STACKQL)) return process.env.STACKQL;
  for (const name of ['stackql', 'stackql.exe']) {
    const local = path.join(repoRoot, name);
    if (fs.existsSync(local)) return local;
  }
  return 'stackql';
}

function waitForPort(port, timeoutMs) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const attempt = () => {
      const sock = net.connect({ host: '127.0.0.1', port }, () => { sock.destroy(); resolve(); });
      sock.on('error', () => {
        sock.destroy();
        if (Date.now() - start > timeoutMs) reject(new Error(`stackql server did not accept connections on ${port} within ${timeoutMs}ms`));
        else setTimeout(attempt, 500);
      });
    };
    attempt();
  });
}

class Server {
  constructor(bin, port, live) {
    this.bin = bin;
    this.port = port;
    this.live = live;
    this.proc = null;
    this.log = '';
  }
  async start() {
    const regPath = path.join(repoRoot, 'provider-dev', 'openapi').replace(/\\/g, '/');
    const argsList = [];
    if (!this.live) {
      argsList.push(`--registry=${JSON.stringify({ url: `file://${regPath}`, localDocRoot: regPath, verifyConfig: { nopVerify: true } })}`);
    }
    argsList.push(`--pgsrv.port=${this.port}`, '--pgsrv.address=127.0.0.1', 'srv');
    this.proc = spawn(this.bin, argsList, { cwd: repoRoot, env: process.env, stdio: ['ignore', 'pipe', 'pipe'] });
    this.proc.stdout.on('data', (d) => { this.log += d; });
    this.proc.stderr.on('data', (d) => { this.log += d; });
    this.proc.on('exit', (code) => { this.exited = code; });
    await waitForPort(this.port, 30000);
  }
  stop() {
    if (this.proc && !this.exited) this.proc.kill();
  }
}

class Smoke {
  constructor(server) {
    this.server = server;
    this.conn = { user: 'stackql', database: 'stackql', host: '127.0.0.1', port: server.port, debug: false, statement_timeout: 120000 };
    this.stamp = String(Date.now()).slice(-6);
    this.name = `${SMOKE_PREFIX}${this.stamp}`;
    this.results = [];
    this.statements = 0;
    this.team = process.env.VERCEL_TEAM_ID || null;
  }

  // run one statement; returns { rows, err }. Mutations that return no
  // result set are reported by the wire as an error string - treated as ok.
  async q(sql) {
    this.statements++;
    if (args.verbose) console.log(`      > ${sql}`);
    await sleep(PACE_MS);
    try {
      const res = await runQuery(this.conn, sql);
      return { rows: res.data || [], err: null };
    } catch (e) {
      const msg = String(e.message || e);
      if (/didn't produce a result|despatched successfully/i.test(msg)) return { rows: [], err: null };
      return { rows: [], err: msg };
    }
  }

  record(name, pass, note = '') {
    this.results.push({ name, pass, note });
    console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${pass ? '' : `  [${note.slice(0, 160)}]`}`);
    return pass;
  }

  async step(name, sql, { expectRows = false, contains = null } = {}) {
    const { rows, err } = await this.q(sql);
    if (err) { this.record(name, false, err); return null; }
    const blob = JSON.stringify(rows);
    if (expectRows && rows.length === 0) { this.record(name, false, 'expected rows, got none'); return null; }
    if (contains && !blob.includes(contains)) { this.record(name, false, `'${contains}' not in ${blob.slice(0, 120)}`); return null; }
    this.record(name, true);
    return rows;
  }

  async waitFor(name, sql, pred, timeoutS, intervalS = 5) {
    const start = Date.now();
    let last = '';
    while ((Date.now() - start) / 1000 < timeoutS) {
      const { rows, err } = await this.q(sql);
      last = err || JSON.stringify(rows).slice(0, 160);
      if (!err && pred(rows)) { this.record(name, true, `${Math.round((Date.now() - start) / 1000)}s`); return rows; }
      await sleep(intervalS * 1000);
    }
    this.record(name, false, `timeout: ${last}`);
    return null;
  }

  get T() { return this.team; }

  // --------------------------------------------------------------- setup
  async resolveTeam() {
    if (this.team) return;
    const { rows, err } = await this.q('SELECT default_team_id FROM vercel.user.user');
    if (err || !rows.length || !rows[0].default_team_id) {
      console.error(`cannot resolve a team: set VERCEL_TEAM_ID (${err || 'no default team on the token'})`);
      process.exit(2);
    }
    this.team = rows[0].default_team_id;
  }

  async pullIfLive() {
    if (!this.server.live) return;
    const { err } = await this.q('REGISTRY PULL vercel');
    if (err) { console.error(`REGISTRY PULL vercel failed: ${err}`); process.exit(2); }
  }

  // ------------------------------------------------------------ breadcrumbs
  async cleanupBreadcrumbs() {
    console.log('== breadcrumb sweep ==');
    const { rows: ecs, err: e1 } = await this.q(`SELECT id, slug FROM vercel.edge_config.edge_configs WHERE team_id = '${this.T}'`);
    if (e1) console.log(`  WARN edge config list failed: ${e1.slice(0, 120)}`);
    for (const r of ecs) {
      if (String(r.slug || '').startsWith(SMOKE_PREFIX)) {
        console.log(`  sweeping edge config ${r.slug}`);
        await this.q(`DELETE FROM vercel.edge_config.edge_configs WHERE edge_config_id = '${r.id}' AND team_id = '${this.T}'`);
      }
    }
    const { rows: prjs, err: e2 } = await this.q(`SELECT id, name FROM vercel.projects.projects WHERE team_id = '${this.T}'`);
    if (e2) console.log(`  WARN project list failed: ${e2.slice(0, 120)}`);
    for (const r of prjs) {
      if (String(r.name || '').startsWith(SMOKE_PREFIX)) {
        console.log(`  sweeping project ${r.name}`);
        await this.q(`DELETE FROM vercel.projects.projects WHERE id_or_name = '${r.id}' AND team_id = '${this.T}'`);
      }
    }
  }

  // -------------------------------------------------------------- reads
  async readSmokes() {
    console.log('== read smokes ==');
    const T = this.T;
    await this.step('SHOW SERVICES IN vercel', 'SHOW SERVICES IN vercel', { expectRows: true, contains: 'projects' });
    await this.step('user (objectKey $.user)', 'SELECT id, username, email, default_team_id FROM vercel.user.user', { expectRows: true, contains: 'username' });
    await this.step('teams', 'SELECT id, slug, name FROM vercel.teams.teams', { expectRows: true, contains: T });
    await this.step('team get', `SELECT id, slug, name, created_at FROM vercel.teams.teams WHERE team_id = '${T}'`, { expectRows: true, contains: T });
    await this.step('team members', `SELECT uid, email, role, confirmed FROM vercel.teams.members WHERE team_id = '${T}'`, { expectRows: true });
    await this.step('projects list', `SELECT id, name, framework, created_at FROM vercel.projects.projects WHERE team_id = '${T}'`);
    await this.step('deployments list', `SELECT uid, url, ready_state, created_at FROM vercel.deployments.deployments WHERE team_id = '${T}'`);
    await this.step('aliases list', `SELECT alias, deployment_id, created_at FROM vercel.aliases.aliases WHERE team_id = '${T}'`);
    await this.step('domains list', `SELECT name, verified, created_at FROM vercel.domains.domains WHERE team_id = '${T}'`);
    await this.step('edge configs list (bare-array wrap)', `SELECT id, slug, item_count FROM vercel.edge_config.edge_configs WHERE team_id = '${T}'`);
    await this.step('API tokens', 'SELECT id, name, type, created_at FROM vercel.authentication.tokens', { expectRows: true });
    await this.step('event types (LIMIT pushdown)', 'SELECT name, description FROM vercel.user.event_types LIMIT 3', { expectRows: true });
    await this.step('supported TLDs (scalar bare-array wrap)', 'SELECT count(*) AS n FROM vercel.domains_registrar.tlds', { expectRows: true });
    await this.step('team events (last 5)', `SELECT id, type, created_at FROM vercel.user.events WHERE team_id = '${T}' LIMIT 5`);
  }

  // ------------------------------------------------------------ lifecycle
  async lifecycle() {
    const T = this.T;
    const name = this.name;
    console.log(`== lifecycle (${name}) ==`);

    // project
    await this.step('project INSERT', `INSERT INTO vercel.projects.projects (team_id, name) SELECT '${T}', '${name}'`);
    const rows = await this.step('project visible in list', `SELECT id, name FROM vercel.projects.projects WHERE team_id = '${T}'`, { expectRows: true, contains: name });
    const project = rows?.find((r) => r.name === name);
    if (!project) { this.record('project id resolved', false, 'not in list'); return; }
    const pid = project.id;
    this.record('project id resolved', true);
    // NOTE: within one `stackql srv` session the first select method used on
    // a resource fixes its physical table (drm getTableName is keyed on
    // provider.service.resource + discovery generation, not the method), so
    // a `get` after a `list` on a resource whose two response shapes differ
    // (projects, deployments) returns no rows over the wire. Reads below
    // stay on the list method for those resources; see NOTES.md.
    // dev_command is inert for the static deployment below (a build_command
    // would make Vercel run a build and fail for lack of an output directory)
    await this.step('project UPDATE (dev_command)', `UPDATE vercel.projects.projects SET dev_command = 'echo stackql' WHERE id_or_name = '${pid}' AND team_id = '${T}'`);
    await this.step('project reflects UPDATE', `SELECT id, dev_command FROM vercel.projects.projects WHERE team_id = '${T}'`, { expectRows: true, contains: 'echo stackql' });

    try {
      // environment variable
      await this.step('env var INSERT', `INSERT INTO vercel.projects.env_vars (id_or_name, team_id, key, value, type, target) SELECT '${pid}', '${T}', 'SMOKE_KEY', 'smoke-value', 'plain', '["production","preview"]'`);
      const envs = await this.step('env var visible', `SELECT id, key, value, target FROM vercel.projects.env_vars WHERE id_or_name = '${pid}' AND team_id = '${T}'`, { expectRows: true, contains: 'SMOKE_KEY' });
      const env = envs?.find((r) => r.key === 'SMOKE_KEY');
      if (env) {
        await this.step('env var get', `SELECT key, value FROM vercel.projects.env_vars WHERE id_or_name = '${pid}' AND id = '${env.id}' AND team_id = '${T}'`, { expectRows: true, contains: 'smoke-value' });
        await this.step('env var UPDATE', `UPDATE vercel.projects.env_vars SET value = 'smoke-value-2' WHERE id_or_name = '${pid}' AND id = '${env.id}' AND team_id = '${T}'`);
        await this.step('env var reflects UPDATE', `SELECT value FROM vercel.projects.env_vars WHERE id_or_name = '${pid}' AND id = '${env.id}' AND team_id = '${T}'`, { expectRows: true, contains: 'smoke-value-2' });
        await this.step('env var DELETE', `DELETE FROM vercel.projects.env_vars WHERE id_or_name = '${pid}' AND id = '${env.id}' AND team_id = '${T}'`);
        const after = await this.step('env var gone', `SELECT id FROM vercel.projects.env_vars WHERE id_or_name = '${pid}' AND team_id = '${T}'`);
        if (after) this.record('env var not in list after DELETE', !after.some((r) => r.id === env.id), JSON.stringify(after));
      }

      // edge config (Hobby teams allow one; the sweep keeps the slot free)
      await this.step('edge config INSERT', `INSERT INTO vercel.edge_config.edge_configs (team_id, slug) SELECT '${T}', '${name}'`);
      const ecs = await this.step('edge config visible', `SELECT id, slug FROM vercel.edge_config.edge_configs WHERE team_id = '${T}'`, { expectRows: true, contains: name });
      const ec = ecs?.find((r) => r.slug === name);
      if (ec) {
        await this.step('edge config items UPDATE (upsert two items)', `UPDATE vercel.edge_config.items SET items = '[{"operation":"upsert","key":"greeting","value":"hello"},{"operation":"upsert","key":"flags","value":{"featureA":true}}]' WHERE edge_config_id = '${ec.id}' AND team_id = '${T}'`);
        await this.step('edge config items list', `SELECT key, value FROM vercel.edge_config.items WHERE edge_config_id = '${ec.id}' AND team_id = '${T}'`, { expectRows: true, contains: 'greeting' });
        await this.step('edge config item get', `SELECT key, value FROM vercel.edge_config.items WHERE edge_config_id = '${ec.id}' AND edge_config_item_key = 'greeting' AND team_id = '${T}'`, { expectRows: true, contains: 'hello' });
        await this.step('edge config token INSERT', `INSERT INTO vercel.edge_config.tokens (edge_config_id, team_id, label) SELECT '${ec.id}', '${T}', 'smoke read token'`);
        await this.step('edge config tokens list', `SELECT id, label FROM vercel.edge_config.tokens WHERE edge_config_id = '${ec.id}' AND team_id = '${T}'`, { expectRows: true, contains: 'smoke read token' });
        await this.step('edge config DELETE', `DELETE FROM vercel.edge_config.edge_configs WHERE edge_config_id = '${ec.id}' AND team_id = '${T}'`);
      }

      // hello world deployment
      const html = `<!doctype html><html><head><title>${name}</title></head><body><h1>Hello World from StackQL</h1><p>${name}</p></body></html>`;
      const sha = crypto.createHash('sha1').update(html).digest('hex');
      const size = Buffer.byteLength(html);
      await this.step('hello world upload (EXEC files.upload, octet-stream)', `EXEC vercel.deployments.files.upload @team_id = '${T}', @x_vercel_digest = '${sha}', @value = '${html}'`);
      await this.step('deployment INSERT (production)', `INSERT INTO vercel.deployments.deployments (team_id, name, project, files, target, project_settings) SELECT '${T}', '${name}', '${pid}', '[{"file":"index.html","sha":"${sha}","size":${size}}]', 'production', '{"framework": null}'`);
      const deps = await this.step('deployment visible in list', `SELECT uid, url, ready_state FROM vercel.deployments.deployments WHERE team_id = '${T}' AND project_id = '${pid}'`, { expectRows: true });
      const dep = deps?.[0];
      if (dep) {
        await this.waitFor('deployment READY', `SELECT uid, ready_state FROM vercel.deployments.deployments WHERE team_id = '${T}' AND project_id = '${pid}'`, (r) => r.some((x) => x.uid === dep.uid && x.ready_state === 'READY'), READY_TIMEOUT_S);
        const url = `https://${name}.vercel.app`;
        let body = '';
        try {
          for (let i = 0; i < 6 && !body.includes('Hello World from StackQL'); i++) {
            const res = await fetch(url, { redirect: 'follow' });
            body = await res.text();
            if (!body.includes('Hello World from StackQL')) await sleep(5000);
          }
        } catch (e) { body = String(e); }
        this.record(`production alias serves the page (${url})`, body.includes('Hello World from StackQL'), body.slice(0, 120));
        // the file tree's top level is the `src` directory holding index.html
        await this.step('deployment files (bare-array wrap)', `SELECT name, type FROM vercel.deployments.deployment_files WHERE id = '${dep.uid}' AND team_id = '${T}'`, { expectRows: true, contains: 'src' });
        await this.step('deployment events', `SELECT type, created FROM vercel.deployments.deployment_events WHERE id_or_url = '${dep.uid}' AND team_id = '${T}'`);
        await this.step('deployment aliases', `SELECT alias FROM vercel.aliases.aliases WHERE team_id = '${T}'`, { expectRows: true, contains: `${name}.vercel.app` });
        // lifecycle EXEC methods on the project (snake_case path and query variables)
        await this.step('project EXEC pause', `EXEC vercel.projects.projects.pause @project_id = '${pid}', @team_id = '${T}'`);
        await this.step('project reflects pause', `SELECT id, paused FROM vercel.projects.projects WHERE team_id = '${T}'`, { expectRows: true, contains: '"paused":"true"' });
        await this.step('project EXEC unpause', `EXEC vercel.projects.projects.unpause @project_id = '${pid}', @team_id = '${T}'`);
      }
    } finally {
      await this.step('project DELETE (cascades deployments)', `DELETE FROM vercel.projects.projects WHERE id_or_name = '${pid}' AND team_id = '${T}'`);
      const left = await this.step('project gone', `SELECT id FROM vercel.projects.projects WHERE team_id = '${T}'`);
      if (left) this.record('project not in list after DELETE', !left.some((r) => r.id === pid), JSON.stringify(left));
    }
  }

  summary() {
    console.log('\n== summary ==');
    const failed = this.results.filter((r) => !r.pass);
    for (const r of failed) console.log(`  FAIL  ${r.name}  [${r.note.slice(0, 110)}]`);
    console.log(`  ${this.results.length - failed.length} passed, ${failed.length} failed; ${this.statements} statements, paced at ${PACE_MS}ms (registry: ${this.server.live ? 'public' : 'local'})`);
    return failed.length ? 1 : 0;
  }
}

// ------------------------------------------------------------------ main
const bin = findBinary();
const server = new Server(bin, args.port, args.live);
let code = 1;
try {
  console.log(`vercel smoke test  registry=${args.live ? 'public' : 'local'}  stackql=${bin}  port=${args.port}`);
  await server.start();
  const smoke = new Smoke(server);
  await smoke.pullIfLive();
  await smoke.resolveTeam();
  console.log(`team=${smoke.T}  name=${smoke.name}`);
  await smoke.cleanupBreadcrumbs();
  if (!args.cleanupOnly) {
    await smoke.readSmokes();
    if (!args.readOnly) await smoke.lifecycle();
    code = smoke.summary();
  } else {
    code = 0;
  }
} catch (e) {
  console.error(`smoke test aborted: ${e.message || e}`);
  if (server.log) console.error(server.log.slice(-2000));
  code = 1;
} finally {
  server.stop();
}
process.exit(code);
