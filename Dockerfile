FROM node:5
MAINTAINER Roy Martin 'roy@roy-martin.com'
LABEL description='Latest Node.JS 5 base image including webpack \
for backbone-marionette-es6.'
ENV REFRESHED_AT 2016-4-17.3

# Setup shared volume and working directory as /data
VOLUME /data
WORKDIR /data
EXPOSE 9000

# Install the specified node version and set it as the default one, install the global npm packages
RUN npm install -g webpack webpack-dev-server httpster

# If the node_modules does not exist then compile and copy in the folder
ONBUILD COPY package.json /data
ONBUILD RUN npm install
ONBUILD COPY . /data

# Set the default run option to npm install and gulp serve
CMD ["npm", "start"]
