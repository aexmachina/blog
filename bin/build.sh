#!/usr/bin/env bash

(cd content/themes/aexmachina && grunt sass:prod) \
  && (cd ember-demos \
    && ./node_modules/.bin/ember build --environment production)
