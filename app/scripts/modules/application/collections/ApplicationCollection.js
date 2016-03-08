'use strict';

export default Backbone.Collection.extend({
    url: 'google.com',
    parse(response) {
        return response;
    }
});
