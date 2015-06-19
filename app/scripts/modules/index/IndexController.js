'use strict';

import IndexView from './views/IndexView';

export default Marionette.Controller.extend({
    initialize(options) {
        this.options = options;
    },
    index() {
        var indexView = new IndexView();
        this.options.container.show(indexView);
    }
});
