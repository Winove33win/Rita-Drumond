#!/bin/bash
set -e

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
FRONTEND_DIR="$ROOT_DIR/frontend"
HTTPDOCS_DIR="$ROOT_DIR/httpdocs"

npm ci --prefix "$FRONTEND_DIR"
npm run build --prefix "$FRONTEND_DIR"

mkdir -p "$HTTPDOCS_DIR"
rm -rf "$HTTPDOCS_DIR"/*
cp -r "$FRONTEND_DIR/dist"/* "$HTTPDOCS_DIR"/

