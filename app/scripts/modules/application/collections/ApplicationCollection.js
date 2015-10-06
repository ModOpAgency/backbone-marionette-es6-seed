'use strict';

export default Backbone.Collection.extend({
  url: '/',
  parse(response) {
    return response;
  }
});
