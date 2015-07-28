'use strict';

export default Backbone.Model.extend({
    initialize(options) {
            this.options = options;
        },
        url() {
            return this.options.url;
        },
        parse(response) {
            return response;
        }

});
