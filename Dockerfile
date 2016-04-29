FROM node:5
MAINTAINER Roy Martin 'roy@roy-martin.com'
LABEL description='Latest Node.JS 5 base image including webpack \
for backbone-marionette-es6.'
ENV REFRESHED_AT 2016-4-17.3

# Cache node_modules folders
WORKDIR /tmp
COPY package.json /tmp
RUN cd $(npm root -g)/npm \
    && npm install fs-extra \
    && sed -i -e s/graceful-fs/fs-extra/ -e s/fs\.rename/fs.move/ ./lib/utils/rename.js \
    && npm config set registry http://registry.npmjs.org/ \
    && cd /tmp \
    && npm install

# Setup data for application
VOLUME /data
WORKDIR /data
EXPOSE 9000

# Set the default run option to npm install and gulp serve
CMD ["npm", "start"]
