#!/bin/bash
set -e

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
FRONTEND_DIR="$ROOT_DIR/frontend"
BACKEND_DIR="$ROOT_DIR/backend"

# Build frontend
cd "$FRONTEND_DIR"
npm ci
npm run build

# Copy build to backend
rm -rf "$BACKEND_DIR/dist"
cp -r dist "$BACKEND_DIR/dist"

# Install backend dependencies
cd "$BACKEND_DIR"
npm ci

echo "Frontend build copied to backend/dist"

