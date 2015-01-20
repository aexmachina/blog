#!/usr/bin/env bash

(cd ember-demos && npm install && bower install) \
  && (cd content/themes/aexmachina \
    && npm install && bower install)
