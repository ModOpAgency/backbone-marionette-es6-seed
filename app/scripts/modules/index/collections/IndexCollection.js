'use strict';

export default Backbone.Collection.extend({
    url: './assets/data/application.json',
    parse(response) {
        return response;
    }
});
