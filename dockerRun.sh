#!/bin/bash
# Default run arguments to start the docker build and mount the current directory into /data.
# The default arguments will setup a symbolic link to node_modules, npm install, and gulp serve.
# This can be overwritten by passing in an optional argument
DOCKER_IMAGE=backbone-marionette-es6-node-5
docker-machine start default
eval "$(docker-machine env default)"
docker pull $DOCKER_IMAGE
docker rm -f $DOCKER_IMAGE &> /dev/null
docker run -it --rm -p 9000:9000 --name $DOCKER_IMAGE -v $PWD:/data roymartin/$DOCKER_IMAGE $1
