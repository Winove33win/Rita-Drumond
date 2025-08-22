#!/bin/bash
set -e

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
FRONTEND_DIR="$ROOT_DIR/frontend"
BACKEND_DIR="$ROOT_DIR/backend"

# Build frontend
cd "$FRONTEND_DIR"
echo "Building frontend..."
npm run build

# Copy build to backend
cd "$ROOT_DIR"
rm -rf "$BACKEND_DIR/dist"
cp -r "$FRONTEND_DIR/dist" "$BACKEND_DIR/"

echo "Frontend build copied to backend/dist"

