#!/usr/bin/env bash

# Downloads the Vercel REST API OpenAPI document (served unauthenticated as
# JSON at https://openapi.vercel.sh) into provider-dev/downloaded/openapi.json
# and records what was fetched in provider-dev/config/spec_pin.json: fetch
# date, the document's stated version, path and operation counts, and the
# sha256 of the content.
#
# Vercel publishes one unversioned, continuously updated document, so drift
# between fetches is expected. The pin is the record of what the checked-in
# provider was built from; the mapping manifest (all_services.csv) and
# validate_mappings.mjs are what turn an upstream change into a reviewed
# decision (new operations must be mapped, removed ones deleted).
#
# Usage: bin/fetch-spec.sh [--check]
#   --check   exit 1 if the downloaded document differs from the recorded pin
#             (for CI drift detection); the pin is not rewritten

set -euo pipefail

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
REPO_ROOT="$( cd "$SCRIPT_DIR/.." && pwd )"
DOWNLOAD_DIR="$REPO_ROOT/provider-dev/downloaded"
PIN_FILE="$REPO_ROOT/provider-dev/config/spec_pin.json"
SPEC_URL="https://openapi.vercel.sh/"
SPEC_FILE="openapi.json"

CHECK=false
if [ "${1:-}" = "--check" ]; then
  CHECK=true
fi

mkdir -p "$DOWNLOAD_DIR"
TMP_FILE="$(mktemp)"
trap 'rm -f "$TMP_FILE"' EXIT

echo "Fetching Vercel OpenAPI document from $SPEC_URL"
curl -fsSL -H 'Accept: application/json' "$SPEC_URL" -o "$TMP_FILE"

CHECK="$CHECK" TMP_FILE="$TMP_FILE" DOWNLOAD_DIR="$DOWNLOAD_DIR" PIN_FILE="$PIN_FILE" \
SPEC_URL="$SPEC_URL" SPEC_FILE="$SPEC_FILE" \
node "$REPO_ROOT/provider-dev/scripts/record_spec_pin.mjs"
