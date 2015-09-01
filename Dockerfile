FROM ubuntu:14.04
MAINTAINER Roy Martin 'roy@roy-martin.com'
LABEL description='Node.JS 0.12.7 base image built on Ubuntu. \
Includes NVM, Gulp and setup with a node user for security.'
ENV REFRESHED_AT 2015-09-01
RUN apt-get update
RUN apt-get install -y \
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
    bash

# Setup volumes for compiling the project
RUN mkdir -p /data
VOLUME /data
WORKDIR /data
# Setup Node version and NVM directory
ENV NODE_VERSION 0.12.7
ENV NVM_DIR /home/node/.nvm

# Setup default port for Node process
EXPOSE 9000

# NVM confiration data from https://github.com/iliyan-trifonov/docker-node-nvm
#add user node and use it to install node/npm and run the app
RUN useradd --home /home/node -m -U -s /bin/bash node

#allow some limited sudo commands for user `node`
RUN echo 'Defaults !requiretty' >> /etc/sudoers; \
    echo 'node ALL= NOPASSWD: /usr/sbin/dpkg-reconfigure -f noninteractive tzdata, /usr/bin/tee /etc/timezone, /bin/chown -R node\:node /myapp' >> /etc/sudoers;

#run all of the following commands as user node from now on
USER node

RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash

#install the specified node version and set it as the default one, install the global npm packages
RUN . ~/.nvm/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && npm install -g gulp --user "node"

CMD ['/bin/bash']
