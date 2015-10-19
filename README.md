## Overview
Backbone Marionette project seed application with ES6 modules powered by Gulp.

##Requirements
the following are required to install when using the Vagrant environment:

* [Vagrant](https://www.vagrantup.com/) | development environment
* [VirtualBox](https://www.virtualbox.org/wiki/Downloads) | development vm
* [GIT](https://msysgit.github.io/) | Windows Git and Bash Profile

The following are overall project requirements that are automatically installed with Vagrant.

* [node.js](https://nodejs.org/) | server | npm dep | use node rather then iojs due to [sprity](https://www.npmjs.com/package/sprity)
* [gulp.js](http://gulpjs.com/) | build tool
* [foundation 5.5.1](http://foundation.zurb.com/) | front-end framework

## Getting started

### Step 1:
Install the latest version of [Vagrant](https://www.vagrantup.com/) and [VirtualBox](https://www.virtualbox.org/wiki/Downloads). Windows users will also need to install [Git](https://git-scm.com/download/win).

### Step 2:
Run Vagrant up within terminal (Mac) or Gitbash(Windows - **Note this must be started using Administrator privileges**). To do this cd into your project directory and run the vagrant up command. This will take a while for your first install as it will download Ubuntu, provision the server and install the project dependencies.

    cd /your-vagrant-project
    vagrant up

### Step 3:
Run vagrant ssh and start the server. You will use this to run your build commands as well. Note the the /vagrant mapping within the vm will be relative to your project directory.

If you run into errors with the gulp serve, please run npm install again within the vagrant folder. This can happen if the install process runs out of memory or times out during the provision process.

Due to a bug with Windows long path names the Node Modules will be a symbolic link. To remove the files within this directory navigate to /home/vagrant/node_modules.

    vagrant ssh
    cd /vagrant
    gulp serve

## Shutting Down the VM

VirtualBox will continue to run your project in the background until you stop the execution. To stop the VM, simply run the following command on your host:

    vagrant suspend

## Switching Between Multiple Projects

To run multiple projects you will need to suspend your vagrant instance before starting up a new project. To do this, perform the following steps.

    cd /project_a
    vagrant halt
    cd ../project_b
    vagrant up

## Building

Always test by running the build before committing your files. It's easy just run the following:

build - Just builds files to dist folder
run
    gulp

build and test - Builds and serves the build from the dist folder
run

    gulp serve:dist

generate sprite sheet: task has been removed from gulp serve
    due to the fact sprite sheet and the corrsponding scss only need to run when a new image is added

    gulp sprite:dev

-------------------------------

## NPM SHRINKWRAP

Boilerplate now comes with an npm-shrinkwrap.json file instead of setting a hard dependency in the package.json by removing the charet'^'.  Please read more about it here [https://docs.npmjs.com/cli/shrinkwrap](npm shrinkwrap).  When adding a new npm dependency you will need to do the following:

    cd /vagrant

    rm npm-shrinkwrap.json

    rm -rf node_modules

    npm install <dependency> --save | --save-dev

    npm shrinkwrap

    npm install
