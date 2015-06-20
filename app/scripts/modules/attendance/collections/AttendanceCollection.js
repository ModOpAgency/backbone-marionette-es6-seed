'use strict';

export default Backbone.Collection.extend({
  url: './assets/data/attendance.json',
  parse(response) {
    return response;
  }
});
