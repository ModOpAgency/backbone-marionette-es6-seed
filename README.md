#  Backbone Marionette ES6 Project Seed
Boilerplate project seed application with ES6 modules powered by Webpack.

##  Requirements
- [Docker Toolbox](https://www.docker.com/toolbox) | VM environment
- [node.js](https://nodejs.org/) | server | npm dep | use node rather then iojs due to [sprity](https://www.npmjs.com/package/sprity)
- [webpack](https://webpack.github.io/)

##  Getting started
### Step 1: Install the latest version of [Docker Toolbox](https://www.docker.com/docker-toolbox).

### Step 2: OSX
In your CLI/terminal go to the root of your project. To copy over the default npm modules,
install npm and start the webpack-dev-server, execute the following command:

    ./dockerRun.sh

To enter the command-line to execute additional commands, run the following command:

    ./dockerRun.sh bash

You can now open your browser (Chrome) and visit the address http://192.168.99.100:9000
You can exit out of the experience by hitting command+c

### Step 2: Windows
Launch the Docker Quickstart Terminal as an Administrator. Navigate to your directory
for the project. For example. cd Code/www/backbone-marionette-es6 . Run the Docker Run command

    ./dockerRun.sh
    ./dockerRun.sh bash

You can now open your browser (Chrome) and visit the address http://192.168.99.100:9000
You can exit out of the experience by hitting control+c

##  Additional Notes

### Installing new Node packages
When adding dependencies to a project with npm make sure you add these arguments to the npm install command. To do this you will need to execute the ./dockerRun.sh bash

To save the package as a runtime dependency for example a super cool jquery plugin or d3 and so on:

    npm install (the new node package name ex. jquery-super-cool-plugin) --save


To save the package as development dependency for example mocha or gulp[tasks] and so on:

    npm install (the new node package name ex. mocha, gulp[tasks]) --save-dev


#### Updating the sprite sheet:

After adding new images to the assets folder, you'll want to update the sprite sheet using the npm script <em>build-sprite</em>...

        npm run build-sprite

This will take all png, jpg and jpeg files located in the /assets/images/source folder and convert them into a spritesheet as well as create the scss classes corresponding with the spritesheet.
