#!/usr/bin/env bash

if ! command -v git -v foo >/dev/null 2>&1 ; then
  exit 1
fi

git add .
git commit -m "$1"
git push