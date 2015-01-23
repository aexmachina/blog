#!/usr/bin/env bash

(cd modules/basement && npm install) \
  && (cd ember-demos && npm install && bower install) \
  && (cd content/themes/aexmachina \
    && npm install && bower install)
