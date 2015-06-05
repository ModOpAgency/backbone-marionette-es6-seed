echo "################################################################################"
echo "                     INSTALLING LOCAL SCRIPTS                                   "
echo "################################################################################"
cd ~/

# Installing nvm
# curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash

# This enables NVM without a logout/login
# export NVM_DIR="/home/vagrant/.nvm"
# [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

# vagrant doesn't automatically load nvm source from .bashrc in provisioning
# source /home/vagrant/.nvm/nvm.sh

# Install a node and alias
# nvm install iojs
# nvm alias default iojs


# make sure npm is up to date
# npm install -g npm

# remove old hash for npm so bash will find the new version
# hash -d npm

# You can also install global requirements
# npm config set registry http://registry.npmjs.org/
# npm cache clean


# Setup a special configuration for Windows to move the node modules outside of
# project folder to prevent long path issues (http://blog.rudylee.com/2014/10/27/symbolic-links-with-vagrant-windows/)
mkdir /home/vagrant/node_modules
mkdir /home/vagrant/bower_components
rm -rf /vagrant/node_modules
rm -rf /vagrant/bower_components
ln -sf /home/vagrant/node_modules /vagrant
ln -sf /home/vagrant/bower_components /vagrant

echo "################################################################################"
echo "                     INSTALLING PROJECT SCRIPTS                                 "
echo "################################################################################"

# install base requirements
cd /vagrant
npm install
bower install
