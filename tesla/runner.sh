#!/bin/bash

docker run --name canary --rm -ti \
-e SPEC=smoke.js \
-e AT_DRIVER_HOST_NAME=selen \
--net canary \
-v $(pwd):/tmp/canary-tests \
rdpanek/canarytrace-developer:latest