#!/bin/bash
# Default run arguments to start the docker build and mount the current directory into /data.
# The default arguments will setup a symbolic link to node_modules, npm install, and gulp serve.
# This can be overwritten by passing in an optional argument
docker-machine start default
eval "$(docker-machine env default)"
docker rm -f backbone-marionette-es6 &> /dev/null
docker run -it --rm -p 9000:9000 --name backbone-marionette-es6 -v $PWD:/data roymartin/backbone-marionette-es6 $1
