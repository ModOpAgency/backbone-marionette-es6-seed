echo "################################################################################"
echo "                     INSTALLING LOCAL SCRIPTS                                   "
echo "################################################################################"
cd ~/

# Installing nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash

# This enables NVM without a logout/login
export NVM_DIR="/home/vagrant/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

# Install a node and alias
echo "Installing Node 4.2.0"
nvm install v5.7.1
nvm alias default 5.7.1

echo "Installing Node Gulp"
npm install -g gulp@3.9.0

# Setup a special configuration for Windows to move the node modules outside of
# project folder to prevent long path issues (http://blog.rudylee.com/2014/10/27/symbolic-links-with-vagrant-windows/)
mkdir /home/vagrant/node_modules
rm -rf /vagrant/node_modules
ln -sf /home/vagrant/node_modules /vagrant

echo "################################################################################"
echo "                     INSTALLING PROJECT SCRIPTS                                 "
echo "################################################################################"

# install base requirements
cd /vagrant
npm install --loglevel info


echo "################################################################################"
echo "                  MODOP: VAGRANT USE IS BEING DEPRECATED                   "
echo "################################################################################"
