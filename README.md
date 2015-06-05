##Overview
Backbone Marionette project seed application with ES6 modules powered by Gulp.

##Requirements
* [Vagrant](https://www.vagrantup.com/) | development environment
* [VirtualBox](https://www.virtualbox.org/wiki/Downloads) | development vm
* [node.js](https://nodejs.org/) | server | npm dep | use node rather then iojs due to [sprity](https://www.npmjs.com/package/sprity)
* [bower](http://bower.io) | package | dep manager
* [gulp.js](http://gulpjs.com/) | build tool
* [foundation 5.5.1](http://foundation.zurb.com/) | front-end framework

##Getting started

###Step 1:
Install the latest version of [Vagrant](https://www.vagrantup.com/) and [VirtualBox](https://www.virtualbox.org/wiki/Downloads). Windows users will also need to install [Git](https://git-scm.com/download/win).

###Step 2:
Run Vagrant up within terminal (Mac) or Gitbash(Windows). This will take a while for your first install as it will download Ubuntu, provision the server and install the project dependencies.

    vagrant up

###Step 3:
Run vagrant ssh and start the server. You will use this to run your build commands as well. Note the the /vagrant mapping within the vm will be relative to your project directory.

If you run into errors with the gulp serve, please run npm install again within the vagrant folder. This can happen if the install process runs out of memory or times out during the provision process.

Due to a bug with Windows long path names the Node Modules and Bower Components will be a symbolic link. To remove the files within this directory navigate to /home/vagrant/node_modules and /home/vagrant/bower_components respectively.

    vagrant ssh
    cd /vagrant
    gulp serve

-------------------------------------

##Building

Always test by running the build before committing your files. It's easy just run the following:

build - Just builds files to dist folder
run
    gulp

build and test - Builds and serves the build from the dist folder
run

    gulp serve:dist

strip out unused css from the vendor folder
run

    gulp styles:vendor
-------------------------------
##IMPORTANT


When adding dependencies to a project whether it is through bower or npm

    --save [ save as a runtime dependency | jquery, d3]

    --save-dev [ save as development dependency | mocha, gulp[tasks] ]
