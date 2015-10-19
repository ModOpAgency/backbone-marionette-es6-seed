'use strict';

import ExampleCollection from 'modules/example/collections/ExampleCollection.js';
import ExampleRegionOneView from 'modules/example/views/ExampleRegionOneView';
import ExampleRegionTwoView from 'modules/example/views/ExampleRegionTwoView';
import ExampleLayoutView from 'modules/example/views/ExampleLayoutView';

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
