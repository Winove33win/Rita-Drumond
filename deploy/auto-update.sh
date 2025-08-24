#!/bin/bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
BRANCH="${1:-main}"

cd "$ROOT_DIR"

# Fetch latest changes from origin
git fetch origin "$BRANCH"

LOCAL_SHA=$(git rev-parse HEAD)
REMOTE_SHA=$(git rev-parse "origin/$BRANCH")

if [[ "$LOCAL_SHA" != "$REMOTE_SHA" ]]; then
  echo "[auto-deploy] New changes detected on $BRANCH. Pulling and deploying..."
  git pull --ff-only origin "$BRANCH"
  ./deploy/deploy.sh
else
  echo "[auto-deploy] No changes to deploy."
fi
