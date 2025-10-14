#!/bin/bash -l
set -euo pipefail

export NODENV_VERSION=22
export PATH="/opt/plesk/node/22/bin:$PATH"

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
BACKEND_DIR="$ROOT_DIR/backend"
FRONTEND_DIR="$ROOT_DIR/frontend"

node_path="$(command -v node || true)"
npm_path="$(command -v npm || true)"

echo "Detected Node binary: ${node_path:-not found}"
if [ -n "$node_path" ]; then
  echo "Node version: $(node -v)"
else
  echo "Node version: not available"
fi

echo "Detected npm binary: ${npm_path:-not found}"
if [ -n "$npm_path" ]; then
  echo "npm version: $(npm -v)"
else
  echo "npm version: not available"
fi

echo "PATH: $PATH"

install_dependencies() {
  local dir="$1"
  echo "Installing dependencies in $dir"
  if [ -f "$dir/package-lock.json" ]; then
    echo "Running npm ci in $dir"
    if (cd "$dir" && npm ci); then
      echo "npm ci completed successfully in $dir"
      return
    fi
    echo "npm ci failed in $dir, falling back to npm install"
  else
    echo "package-lock.json not found in $dir, running npm install"
  fi
  (cd "$dir" && npm install)
}

run_npm_script_if_exists() {
  local dir="$1"
  local script_name="$2"
  if [ ! -f "$dir/package.json" ]; then
    echo "No package.json in $dir, skipping $script_name script."
    return
  fi

  if grep -q '"'"$script_name"'"[[:space:]]*:' "$dir/package.json"; then
    echo "Running npm run $script_name in $dir"
    (cd "$dir" && npm run "$script_name")
  else
    echo "No \"$script_name\" script defined in $dir, skipping."
  fi
}

if [ -d "$BACKEND_DIR" ] && [ -f "$BACKEND_DIR/package.json" ]; then
  install_dependencies "$BACKEND_DIR"
else
  echo "Backend directory not found or missing package.json, skipping backend dependency installation."
fi

if [ -d "$FRONTEND_DIR" ] && [ -f "$FRONTEND_DIR/package.json" ]; then
  install_dependencies "$FRONTEND_DIR"
  run_npm_script_if_exists "$FRONTEND_DIR" "build"

  FRONTEND_DIST="$FRONTEND_DIR/dist"
  if [ -d "$FRONTEND_DIST" ]; then
    echo "Copying frontend dist to backend/dist"
    rm -rf "$BACKEND_DIR/dist"
    mkdir -p "$BACKEND_DIR"
    cp -R "$FRONTEND_DIST" "$BACKEND_DIR/"
  else
    echo "Frontend dist folder not found after build, skipping copy."
  fi
else
  echo "Frontend directory not found or missing package.json, skipping frontend steps."
fi

if ! run_npm_script_if_exists "$BACKEND_DIR" "sitemap"; then
  echo "Sitemap generation skipped or failed (this step requires database access)."
fi

echo "Deploy script completed successfully."
