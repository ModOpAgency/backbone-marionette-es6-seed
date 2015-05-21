'use strict';

import Marionette from 'backbone.marionette';
import IndexView from './views/IndexView.js';

export default Marionette.Controller.extend({
    initialize(options) {
        this.options = options;
    },
    index() {
        var indexView = new IndexView();
        this.options.container.show(indexView);
    }
});
