FROM node:5
MAINTAINER Roy Martin 'roy@roy-martin.com'
LABEL description='Latest Node.JS 5 base image including webpack \
for backbone-marionette-es6.'
ENV REFRESHED_AT 2016-4-17.3

# Install the specified node version and set it as the default one, install the global npm packages
RUN npm install -g webpack webpack-dev-server httpster

# Cache node_modules folders
WORKDIR /tmp
COPY package.json /tmp
RUN npm config set registry http://registry.npmjs.org/ \
    && npm install

# Setup data for application
VOLUME /data
WORKDIR /data
EXPOSE 9000

# Set the default run option to npm install and gulp serve
CMD ["npm", "start"]
