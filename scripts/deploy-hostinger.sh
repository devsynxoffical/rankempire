#!/usr/bin/env bash
# Rebuild the static site and publish it to the `hostinger` branch (Hostinger Git deploy serves this branch).
#   bash scripts/deploy-hostinger.sh
set -euo pipefail
ROOT=$(git rev-parse --show-toplevel); cd "$ROOT"
STATIC_EXPORT=1 NODE_OPTIONS=--max-old-space-size=3072 npx next build >/dev/null
WT=$(mktemp -d); git fetch -q origin hostinger
git worktree add -q "$WT" origin/hostinger --detach
( cd "$WT" && git checkout -q -B hostinger origin/hostinger \
  && find . -mindepth 1 -maxdepth 1 ! -name .git ! -name .htaccess ! -name HOSTINGER-README.md -exec rm -rf {} + \
  && cp -a "$ROOT/out/." . && git add -A \
  && (git diff --cached --quiet || git -c user.name=DEVSYNX -c user.email=devsynxoffical@users.noreply.github.com commit -qm "Hostinger build $(date -u +%Y-%m-%dT%H:%MZ)") \
  && git push -q origin hostinger )
git worktree remove --force "$WT"
echo "hostinger branch updated"
