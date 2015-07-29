echo "################################################################################"
echo "                     INSTALLING LOCAL SCRIPTS                                   "
echo "################################################################################"
cd ~/

# Installing nvm
echo "Installing NVM"
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash

# This enables NVM without a logout/login
echo "Configuring NVM"
export NVM_DIR="/home/vagrant/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

# Install a node and alias
echo "Installing Node 0.12.4"
nvm install v0.12.4
nvm alias default 0.12.4

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
npm install
