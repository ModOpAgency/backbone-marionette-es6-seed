FROM ubuntu:15.04
MAINTAINER Roy Martin 'roy@roy-martin.com'
LABEL description='Node.JS 5.7.1 base image built on Ubuntu. \
Includes NVM, Gulp and setup with a node user for security. \
Also sets up a symbolic link to node_modules and includes default packages \
for backbone-marionette-es6.'
ENV REFRESHED_AT 2016-3-3

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
ENV NODE_VERSION 5.7.1
ENV NVM_DIR /home/node/.nvm

# NVM confiration data from https://github.com/iliyan-trifonov/docker-node-nvm
# add user node and use it to install node/npm and run the app
# allow some limited sudo commands for user `node`
RUN mkdir -p /data \
    && useradd --home /home/node -m -U -s /bin/bash node \
    && ln -s /home/node/.nvm/versions/node/v5.7.1/bin/node /usr/bin/node \
    && ln -s /home/node/.nvm/versions/node/v5.7.1/bin/npm /usr/bin/npm \
    && chown -R node:staff /data \
    && echo 'Defaults !requiretty' >> /etc/sudoers; \
    echo 'node ALL= NOPASSWD: /usr/sbin/dpkg-reconfigure -f noninteractive tzdata, \
    /usr/bin/tee /etc/timezone, /bin/chown -R node\:node /myapp' >> /etc/sudoers;

# Setup shared volume and working directory as /data and execute all future commands as node user
VOLUME /data
WORKDIR /data
USER node

# Install the specified node version and set it as the default one, install the global npm packages
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash \
    && . ~/.nvm/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && npm install -g gulp webpack webpack-dev-server httpster --user 'node'

# Setup default port for Node process
EXPOSE 9000

# Set the default run option to npm install and gulp serve
CMD /bin/bash -c "npm install --loglevel=info \
    && npm start"
