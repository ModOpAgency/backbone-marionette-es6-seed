'use strict';

import Marionette from 'backbone.marionette';
import ExampleHeaderView from './views/ExampleHeaderView.js';
import ExampleFooterView from './views/ExampleFooterView.js';
import ExampleLayoutView from './views/ExampleLayoutView.js';

export default Marionette.Controller.extend({
    initialize(options) {
        this.options = options;
    },
    index() {
        var exampleHeaderView = new ExampleHeaderView(),
            exampleFooterView = new ExampleFooterView(),
            exampleLayoutView = new ExampleLayoutView();

        this.options.container.show(exampleLayoutView);
        exampleLayoutView.getRegion('exampleHeader').show(exampleHeaderView);
        exampleLayoutView.getRegion('exampleFooter').show(exampleFooterView);

    }
});
