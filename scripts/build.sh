#!/usr/bin/env bash

set -e

if [ -z "$1" ]; then
  echo "Usage: $0 <package-name>"
  exit 1
fi

PACKAGE_NAME=$1

PACKAGE_PATH="./packages/$PACKAGE_NAME"

if [ ! -d "$PACKAGE_PATH" ]; then
  echo "Error: Package '$PACKAGE_NAME' not found in './packages'."
  exit 1
fi

cd "$PACKAGE_PATH"

echo "Running 'npm run build' in $PACKAGE_PATH..."
npm run build

echo "Build completed successfully for package '$PACKAGE_NAME'."
