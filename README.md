##Overview Backbone Marionette project seed application with ES6 modules powered by Webpack.
--------------------------------------------------------------------------------

##Requirements
--------------------------------------------------------------------------------
- [Docker Toolbox](https://www.docker.com/toolbox) | VM environment
- [node.js](https://nodejs.org/) | server | npm dep | use node rather then iojs due to [sprity](https://www.npmjs.com/package/sprity)
- [webpack](https://webpack.github.io/)
- [gulp.js](http://gulpjs.com/) | build tool



##Getting started
--------------------------------------------------------------------------------
###Step 1: Install the latest version of [Docker Toolbox](https://www.docker.com/docker-toolbox).

###Step 2: In your CLI/terminal go to the root of your project to start the web pack server by executing this command  

    ./dockerRun.sh



##Shutting Down the VM:
--------------------------------------------------------------------------------
###Step 1: Open Kitematic make sure the home tab is selected, if so you should see your currently running container on the left side of the window. Hover over your container then click (X) Remove button and that's it.



##IMPORTANT INFO TO REMEMBER WHEN INSTALLING NEW NODE PACKAGES
--------------------------------------------------------------------------------
When adding dependencies to a project with npm make sure you add these arguments to the npm install command

###To save the package as a runtime dependency for example a super cool jquery plugin or d3 and so on...

    npm install (the new node package name ex. jquery-super-cool-plugin) --save


###To save the package as development dependency for example mocha or gulp[tasks] and so on...

    npm install (the new node package name ex. mocha, gulp[tasks]) --save-dev
