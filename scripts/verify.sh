#!/usr/bin/env bash

set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$project_root"

before_status="$(git status --porcelain=v1)"
verify_dir="$(mktemp -d "${TMPDIR:-/tmp}/quinn-verify.XXXXXX")"
trap 'rm -rf "$verify_dir"' EXIT

echo "[1/5] Compiling Stylus"
mkdir -p "$verify_dir/css"
./node_modules/.bin/stylus _styl/main.styl -o "$verify_dir/css" -c
if ! cmp -s assets/css/main.css "$verify_dir/css/main.css"; then
  echo "assets/css/main.css is not synchronized with _styl/main.styl." >&2
  echo "Run npm run style:build and commit the generated CSS." >&2
  exit 1
fi

echo "[2/5] Building Jekyll in production mode"
JEKYLL_ENV=production bundle exec jekyll build --destination "$verify_dir/site"

echo "[3/5] Checking HTML and internal links"
bundle exec ruby scripts/check_site.rb "$verify_dir/site"

echo "[4/5] Checking published output for source files"
for forbidden in \
  .ruby-version Gemfile Gemfile.lock LICENSE.md README.md assets.zip \
  package.json package-lock.json scripts; do
  if [[ -e "$verify_dir/site/$forbidden" ]]; then
    echo "Unexpected source file published: $forbidden" >&2
    exit 1
  fi
done

echo "[5/5] Checking worktree integrity"
tracked_generated="$(git ls-files -- _site node_modules)"
if [[ -n "$tracked_generated" ]]; then
  echo "Generated files are tracked by Git:" >&2
  printf '%s\n' "$tracked_generated" >&2
  exit 1
fi

after_status="$(git status --porcelain=v1)"
if [[ "$before_status" != "$after_status" ]]; then
  echo "Verification changed the working tree:" >&2
  diff -u <(printf '%s\n' "$before_status") <(printf '%s\n' "$after_status") || true
  exit 1
fi

echo "All quality gates passed."
