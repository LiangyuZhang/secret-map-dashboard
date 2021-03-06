#!/bin/bash -e

# shellcheck disable=SC1090
source "$(dirname "$0")"/../scripts/resources.sh

if find . -path ./node_modules -prune -o -path ./containers/blockchain -prune -o -name '*.js' -print0 | xargs -n1 -0 ./node_modules/.bin/eslint; then
    test_passed "$0"
else
    test_failed "$0"
fi
