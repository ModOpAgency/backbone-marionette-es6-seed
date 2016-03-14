#!/bin/bash
# Default run arguments to start the docker build and mount the current directory into /data.
# The default arguments will setup a symbolic link to node_modules, npm install, and gulp serve.
# This can be overwritten by passing in an optional argument
DOCKER_IMAGE=backbone-marionette-es6-node-5
COLOR_GREEN='tput setaf 2'
COLOR_CLEAR='tput sgr0'

echo "$($COLOR_GREEN)################################################################################$($COLOR_CLEAR)"
echo "$($COLOR_GREEN)Starting docker and updating image$($COLOR_CLEAR)"
echo "$($COLOR_GREEN)################################################################################$($COLOR_CLEAR)"

docker-machine start default
eval "$(docker-machine env default)"
docker pull roymartin/$DOCKER_IMAGE

echo "$($COLOR_GREEN)################################################################################$($COLOR_CLEAR)"
echo "$($COLOR_GREEN)Starting container $($COLOR_CLEAR)"
echo "$($COLOR_GREEN)Running Command: npm install && npm start $($COLOR_CLEAR)"
echo "$($COLOR_GREEN)Upon success open your browser to http://192.168.99.100:9000/$($COLOR_CLEAR)"
echo "$($COLOR_GREEN)To access the command-line run with ./dockerRun.sh /bin/bash $($COLOR_CLEAR)"
echo "$($COLOR_GREEN)################################################################################$($COLOR_CLEAR)"

docker rm -f $DOCKER_IMAGE &> /dev/null
docker run -it --rm -p 9000:9000 --name $DOCKER_IMAGE -v $PWD:/data roymartin/$DOCKER_IMAGE $1
