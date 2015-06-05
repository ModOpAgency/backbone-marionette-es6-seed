echo "################################################################################"
echo "                     INSTALLING GLOBAL SCRIPTS                                  "
echo "################################################################################"

# Note the new setup script name for Node.js v0.12
curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -

# Then install with:
sudo apt-get update

# Install build tools
sudo apt-get install -y make g++ git curl vim libcairo2-dev libav-tools nfs-common portmap python-software-properties python build-essential libssl-dev git
