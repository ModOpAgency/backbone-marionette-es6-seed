'use strict';

var util = require('util');

module.exports = {
  src: 'app/assets/images/source/*.{png,jpg,jpeg}',
  destImage: 'app/assets/images/sprite.png',
  destCSS: '_sprite.scss',
  imgPath: 'app/assets/images/sprite.png',
  padding: 10,
  engine: 'gmsmith',
  cssOpts: {
    cssClass: function (item) {
      return util.format('.ic-%s:before', item.name);
    }
  }
};
