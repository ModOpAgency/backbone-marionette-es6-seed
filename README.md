
##Requirements
requirements: node.js, bower, gulp

* [node.js](https://nodejs.org/) | server | npm dep | use node rather then iojs due to [sprity](https://www.npmjs.com/package/sprity)
* [bower](http://bower.io) | package | dep manager
* [gulp.js](http://gulpjs.com/) | build tool
* [foundation 5.5.1](http://foundation.zurb.com/) | front-end framework

Getting started

-------------------------------------

Step 1:

-------------------------------------

Install nvm

Follow all instructions on https://github.com/creationix/nvm.
NVM is increasingly important as various projects use different versions of Node.
Also take a look at the following repo to access [npm without sudo](https://github.com/glenpike/npm-g_nosudo)



Once node.js is installed:

    npm install -g bower gulp

Install nvm(mac)

Follow all instructions on https://github.com/creationix/nvm.
NVM is increasingly important as various projects use different versions of Node.
Also take a look at the following repo to access [npm without sudo](https://github.com/glenpike/npm-g_nosudo)

Install nvm(windows)
* [nvm-windows | repo](https://github.com/coreybutler/nvm-windows)
* [nvm-windows | download](https://github.com/coreybutler/nvm-windows/releases) > nvm-setup.zip

nvm install should follow:

    nvm install 0.10.32

---------------------------------------------------


Notes from @ramoncorrales regarding windows 7 node-gyp error:

  1. node-gyp has a Python 2.7 dependency, so you'll have to downgrade it (or install it if you don't have it). I specifically used 2.7.6, because that's the one configured on Bamboo server: https://www.python.org/download/releases/2.7.6/

  2. Make sure your PATH variable is pointing to Python 2.7 binaries folder.

  3. Download Express version of Microsoft Studio C++ 2012. It will need about 3.5GB of disk space: http://go.microsoft.com/?linkid=9816758

  4. The above steps should be fine for css-sprite, but for grunt-grunticon I still had compilation problems (both my local instance and the server), so I fixed it to "1.2.13" version on package.json

Now you should have a clean output when running "npm install". If not, try "npm cache clean" before.


Step 2:

-------------------------------------
run

    npm install

    bower install

    gulp serve

Step 3:

-------------------------------------
Build

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

Lock dependencies:

  *  [npm skrinkwrap](https://docs.npmjs.com/cli/shrinkwrap)
  *  [bower lock](http://benlimmer.com/2014/09/13/lock-down-bower-components/)

Please take a moment to read the above link regarding npm-shrinkwrap.json as it can have surprising consequences if you are unaware of how it works:
  
> Add or update dependencies. npm install each new or >updated package individually and then update package.json. Note that they must be explicitly named in order to be installed: running npm install with no arguments will merely reproduce the existing shrinkwrap.