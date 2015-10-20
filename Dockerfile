FROM ubuntu:15.04
MAINTAINER Roy Martin 'roy@roy-martin.com'
LABEL description='Node.JS 4.0.0 base image built on Ubuntu. \
Includes NVM, Gulp and setup with a node user for security. \
Also sets up a symbolic link to node_modules and includes default packages \
for backbone-marionette-es6.'
ENV REFRESHED_AT 2015-10-20

# Install update Ubuntu package manager, install required packages and clean up
RUN apt-get update \
    && apt-get install -y \
    make \
    g++ \
    git \
    curl \
    vim \
    libcairo2-dev \
    libav-tools \
    nfs-common \
    portmap \
    python-software-properties \
    python \
    build-essential \
    libssl-dev \
    bash \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Setup Node version and NVM directory
ENV NODE_VERSION 4.0.0
ENV NVM_DIR /home/node/.nvm

# NVM confiration data from https://github.com/iliyan-trifonov/docker-node-nvm
# add user node and use it to install node/npm and run the app
# allow some limited sudo commands for user `node`
RUN mkdir -p /data \
    && useradd --home /home/node -m -U -s /bin/bash node \
    && ln -s /home/node/.nvm/versions/node/v4.0.0/bin/node /usr/bin/node \
    && ln -s /home/node/.nvm/versions/node/v4.0.0/bin/npm /usr/bin/npm \
    && chown -R node:staff /data \
    && echo 'Defaults !requiretty' >> /etc/sudoers; \
    echo 'node ALL= NOPASSWD: /usr/sbin/dpkg-reconfigure -f noninteractive tzdata, \
    /usr/bin/tee /etc/timezone, /bin/chown -R node\:node /myapp' >> /etc/sudoers;

# Setup shared volume and working directory as /data and execute all future commands as node user
VOLUME /data
WORKDIR /data
USER node

# Install the specified node version and set it as the default one, install the global npm packages
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash \
    && . ~/.nvm/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && npm install -g gulp webpack-dev-server --user 'node'

# Setup a symbolic link for the node_modules folder and install backbone-marionette-es6 default modules.
# This ensures the following:
# 1. Build package includes all the default packages needed to run boilerplate code without compile on fly
# 2. Support for Windows machines to ensure long filename are supported with NPM 2
# 3. Speed up overall NPM commands by ensuring the data is saved directly to container to speed up file read/write.
# RUN mkdir -p /home/node/node_modules \
#     && ln -s /home/node/node_modules /data/node_modules \
#     && cd ~ \
#     && curl -O https://bitbucket.org/modusoperandi/backbone-marionette-es6-seed/raw/HEAD/package.json \
#     && npm install --loglevel=info \
#     && rm package.json

# Setup default port for Node process
EXPOSE 9000

# Set the default run option to npm install and gulp serve
# CMD /bin/bash -c "npm install --loglevel=info && npm start"
