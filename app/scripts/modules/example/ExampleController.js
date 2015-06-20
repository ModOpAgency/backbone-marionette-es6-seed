'use strict';

import ExampleCollection from './collections/ExampleCollection.js';
import ExampleRegionOneView from './views/ExampleRegionOneView';
import ExampleRegionTwoView from './views/ExampleRegionTwoView';
import ExampleLayoutView from './views/ExampleLayoutView';

export default Marionette.Controller.extend({
    initialize(options) {
        this.options = options;
        this.collection = new  ExampleCollection()
        this.exampleLayoutView = new ExampleLayoutView();
        this.exampleRegionOneView = {},
        this.exampleRegionTwoView = {}
    },
    index() {

        this.collection.fetch().then(function(){
            this.exampleRegionOneView = new ExampleRegionOneView(),
            this.exampleRegionTwoView = new ExampleRegionTwoView(),

            this.options.container.show(this.exampleLayoutView);
        this.exampleLayoutView.getRegion('ExampleRegionOne').show(this.exampleRegionOneView);
        this.exampleLayoutView.getRegion('ExampleRegionTwo').show(this.exampleRegionTwoView);
    }.bind(this));
    }
});
