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


* Python (v2.7.3 recommended, v3.x.x is not supported)
* Make sure that you have a PYTHON environment variable, and it is set to drive:\path\to\python.exe not to a folder.
* Windows XP/Vista/7:
* Microsoft Visual Studio C++ 2013 (Express version works well)
  If the install fails, try uninstalling any C++ 2010 x64&x86 Redistributable that you have installed first.
  If you get errors that the 64-bit compilers are not installed you may also need the compiler update for the Windows SDK 7.1

Windows 7/8:

* Microsoft Visual Studio C++ 2013 for Windows Desktop (Express version works well)

All Windows Versions

* For 64-bit builds of node and native modules you will also need the Windows 7 64-bit SDK
  You may need to run one of the following commands if your build complains about
* WindowsSDKDir not being set, and you are sure you have already installed the SDK: <br />
  call "C:\Program Files\Microsoft SDKs\Windows\v7.1\bin\Setenv.cmd" /Release /x86<br />
  call "C:\Program Files\Microsoft SDKs\Windows\v7.1\bin\Setenv.cmd" /Release /x64

Additional Notes:

 * this is from https://github.com/TooTallNate/node-gyp/#installation
 * [Express 2013 with Update 4 for Windows Desktop](https://www.visualstudio.com/en-us/downloads/download-visual-studio-vs#DownloadFamilies_2)

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