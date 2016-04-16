FROM node:5
MAINTAINER Roy Martin 'roy@roy-martin.com'
LABEL description='Latest Node.JS 5 base image including webpack \
for backbone-marionette-es6.'
ENV REFRESHED_AT 2016-4-16

# Setup shared volume and working directory as /data and execute all future commands as node user
VOLUME /data
WORKDIR /data

# Install the specified node version and set it as the default one, install the global npm packages
RUN npm install -g webpack webpack-dev-server httpster

# Setup default port for Node process
EXPOSE 9000

# Set the default run option to npm install and gulp serve
CMD /bin/bash -c "npm install && npm start"
