#!/bin/bash
# Default run arguments to start the docker build and mount the current directory into /data.
# The default arguments will setup a symbolic link to node_modules, npm install, and gulp serve.
# This can be overwritten by passing in an optional argument
DOCKER_IMAGE=backbone-marionette-es6-node-5
COLOR_GREEN='tput setaf 2'
COLOR_CLEAR='tput sgr0'

function removeDockerMachine {
    echo "$($COLOR_GREEN)Removing docker machine 'default' $($COLOR_CLEAR)"
    docker-machine rm default -y
}

function createDockerMachine {
    echo "$($COLOR_GREEN)Creating docker Machine 'default' $($COLOR_CLEAR)"
    docker-machine create --driver virtualbox default
}

# Ensure that the docker machine exists
if tmp="$(docker-machine ls | grep '^default')"; then
    # Ensure that the docker machine hasn't been deleted
    if tmp="$(docker-machine ls | grep '^default' | grep 'machine does not exist')"; then
        # it exists needs to be re-created
        removeDockerMachine
        createDockerMachine
    fi
# Docker machine does not exist, create it
else
    createDockerMachine
fi

echo "$($COLOR_GREEN)Starting docker machine and updating image $($COLOR_CLEAR)"
docker-machine start default
eval "$(docker-machine env default)"
docker pull modop/$DOCKER_IMAGE


echo "$($COLOR_GREEN)################################################################################$($COLOR_CLEAR)"
echo "$($COLOR_GREEN)Starting container $($COLOR_CLEAR)"
echo "$($COLOR_GREEN)Running Command: npm install && npm start $($COLOR_CLEAR)"
echo "$($COLOR_GREEN)Upon success open your browser to http://192.168.99.100:9000/$($COLOR_CLEAR)"
echo "$($COLOR_GREEN)To access the command-line run with docker-compose run --service-ports web bash $($COLOR_CLEAR)"
echo "$($COLOR_GREEN)################################################################################$($COLOR_CLEAR)"

docker-compose up
