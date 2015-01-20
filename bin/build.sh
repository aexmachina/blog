#!/usr/bin/env bash

(cd content/themes/aexmachina && grunt sass:prod) \
  && (cd ember-demos && ember build --environment production)
