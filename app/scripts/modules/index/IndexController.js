'use strict';

import IndexCollection from './collections/IndexCollection';
import IndexLayoutView from './views/IndexLayoutView';

export default Marionette.Controller.extend({
    initialize(options) {
        this.options = options;
        this.collection = new  IndexCollection();
        this.indexLayoutView = new IndexLayoutView();
    },
    index() {
        this.collection.fetch().then(function(){
            this.options.container.show(this.indexLayoutView);
    }.bind(this));
    }
});
