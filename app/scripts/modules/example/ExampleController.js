'use strict';

import ExampleHeaderView from './views/ExampleHeaderView';
import ExampleFooterView from './views/ExampleFooterView';
import ExampleLayoutView from './views/ExampleLayoutView';

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
