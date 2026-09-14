# StackQL vercel provider build pipeline.
#
# Every step is deterministic and re-runnable. `make all` runs the full
# chain against the current upstream spec: fetch -> split -> mappings ->
# validate -> pre-normalize -> normalize -> generate (+ post-process) ->
# offline + meta-route tests -> docs -> website build. It stops at
# validate-mappings when upstream adds or removes operations, so the
# checked-in mapping manifest (provider-dev/config/all_services.csv) is
# always the reviewed record of the provider surface.
#
# The live smoke suite (`make smoke`, `make smoke-live`) is separate so
# `all` never touches a Vercel account. It reads VERCEL_API_TOKEN (and the
# optional VERCEL_TEAM_ID) from the environment or a gitignored .env file.
#
# Requirements: Node >= 20, GNU make, bash, a stackql binary ($STACKQL,
# ./stackql or on PATH), yarn for the website. Runs under Linux / WSL / macOS.

SHELL := bash
.DEFAULT_GOAL := help

PROVIDER := vercel
SERVICES_DIR := provider-dev/openapi/src/$(PROVIDER)
SERVERS := [{"url": "https://api.vercel.com"}]
# bearer auth from VERCEL_API_TOKEN (the Terraform provider's variable);
# snake_case_aliases pairs with request.nativeCasing: camel on every
# method (set in post_process) for a snake_case SQL surface over the
# camelCase wire.
PROVIDER_CONFIG := {"auth": {"type": "bearer", "credentialsenvvar": "VERCEL_API_TOKEN"}, "snake_case_aliases": true}
ANALYZE_DIR := provider-dev/config/.analyze
ENV_FILE := .env

.PHONY: help deps fetch-spec check-spec split mappings validate-mappings pre-normalize normalize generate post-process build \
        test-offline test-meta test smoke smoke-live smoke-cleanup start-server stop-server server-status \
        docs website website-start clean all

help: ## show this help
	@grep -E '^[a-zA-Z_-]+:.*?## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-18s %s\n", $$1, $$2}'

deps: ## install node dependencies (pinned @stackql/provider-utils and @stackql/pgwire-lite)
	npm install

# ---------------------------------------------------------------- pipeline

fetch-spec: ## download the Vercel OpenAPI document and record the spec pin (reports drift)
	npm run fetch-spec

check-spec: ## download the spec and exit 1 if it differs from the recorded pin (CI drift check)
	npm run fetch-spec -- --check

split: ## split the spec into per-service specs (tag -> service map in provider-dev/scripts/svc-discriminator.mjs)
	rm -f provider-dev/source/*.yaml
	npm run split -- \
	  --provider-name $(PROVIDER) \
	  --api-doc provider-dev/downloaded/openapi.json \
	  --svc-discriminator function \
	  --svc-discriminator-fn provider-dev/scripts/svc-discriminator.mjs \
	  --output-dir provider-dev/source \
	  --overwrite

mappings: ## refresh all_services.csv from the split specs, keeping every existing mapping (new ops appended unmapped)
	rm -rf $(ANALYZE_DIR)
	npm run generate-mappings -- --input-dir provider-dev/source --output-dir $(ANALYZE_DIR)
	npm run merge-mappings -- $(ANALYZE_DIR)/all_services.csv
	rm -rf $(ANALYZE_DIR)

validate-mappings: ## fail unless every operation is mapped (or skipped) and no manifest row is stale
	npm run validate-mappings -- --summary

pre-normalize: ## vercel-specific spec corrections (bare-array responses, opaque oneOf variants) before normalize
	npm run pre-normalize

normalize: ## generic provider-utils normalize pass (oneOf/allOf flatten, bare-array wrap, opaque objects)
	npm run normalize -- --api-dir provider-dev/source

generate: ## generate the provider (bearer auth, snake_case surface, naive request body translate), then post-process
	rm -rf provider-dev/openapi/*
	npm run generate-provider -- \
	  --provider-name $(PROVIDER) \
	  --input-dir provider-dev/source \
	  --output-dir $(SERVICES_DIR) \
	  --config-path provider-dev/config/all_services.csv \
	  --servers '$(SERVERS)' \
	  --provider-config '$(PROVIDER_CONFIG)' \
	  --naive-req-body-translate \
	  --update-path-param-names \
	  --overwrite
	$(MAKE) post-process

post-process: ## re-apply generated-provider extensions (nativeCasing, pagination, LIMIT pushdown, upload and text transforms)
	npm run post-process

build: fetch-spec split mappings validate-mappings pre-normalize normalize generate ## full upstream spec -> provider pipeline

# ------------------------------------------------------------------- tests

test-offline: ## offline validation against the local file registry (SHOW / DESCRIBE, no network)
	node tests/offline_validation.mjs

start-server: ## start a local stackql server (port 5444) on the generated provider
	npm run start-server

stop-server: ## stop the local stackql server
	npm run stop-server

server-status: ## show the local stackql server status
	npm run server-status

test-meta: ## meta-route suite (every service, resource and method) against a local stackql server
	npm run start-server
	npm run test-meta-routes -- $(PROVIDER) || (npm run stop-server; exit 1)
	npm run stop-server

test: test-offline test-meta ## all non-live test layers

# `make smoke*` sources .env when present so a developer checkout works
# without exporting anything; CI sets VERCEL_API_TOKEN from a secret.
with_env = set -a; [ -f $(ENV_FILE) ] && source <(tr -d '\r' < $(ENV_FILE)); set +a;

smoke: ## live smoke suite against the locally generated provider (reads + project / env var / edge config / deployment lifecycle)
	@$(with_env) node tests/smoke_test.mjs

smoke-live: ## live smoke suite against the published provider in the public registry (post-publish verification)
	@$(with_env) node tests/smoke_test.mjs --live

smoke-cleanup: ## sweep stackql-smoke-* projects and edge configs and exit
	@$(with_env) node tests/smoke_test.mjs --cleanup-only

# -------------------------------------------------------------------- docs

docs: ## generate the website docs (snake_case surface), then sanitize for MDX
	npm run generate-docs -- \
	  --provider-name $(PROVIDER) \
	  --provider-dir ./$(SERVICES_DIR)/v00.00.00000 \
	  --output-dir ./website \
	  --provider-data-dir ./provider-dev/docgen/provider-data \
	  --snake-case-aliases
	node website/scripts/sanitize-docs.mjs

website: ## build the docusaurus microsite (vendors the shared config first)
	cd website && yarn install && yarn build

website-start: ## run the docusaurus dev server
	cd website && yarn install && yarn start

clean: ## remove generated artifacts (split specs, provider output, docs, website build)
	rm -rf provider-dev/source/*.yaml provider-dev/openapi/* $(ANALYZE_DIR) website/build website/.docusaurus website/docs

all: deps build test docs website ## everything non-live: deps, pipeline, tests, docs, site build
