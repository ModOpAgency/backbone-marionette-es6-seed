'use strict';

import IndexCollection from './collections/IndexCollection.js';
import IndexRegionOneView from './views/IndexRegionOneView';
import IndexRegionTwoView from './views/IndexRegionTwoView';
import IndexLayoutView from './views/IndexLayoutView';

export default Marionette.Controller.extend({
    initialize(options) {
        this.options = options;
        this.collection = new  IndexCollection()
        this.indexLayoutView = new IndexLayoutView();
        this.indexRegionOneView = {},
        this.indexRegionTwoView = {}
    },
    index() {

        this.collection.fetch().then(function(){
            this.indexRegionOneView = new IndexRegionOneView(),
            this.indexRegionTwoView = new IndexRegionTwoView(),

            this.options.container.show(this.indexLayoutView);
        this.indexLayoutView.getRegion('IndexRegionOne').show(this.indexRegionOneView);
        this.indexLayoutView.getRegion('IndexRegionTwo').show(this.indexRegionTwoView);
    }.bind(this));
    }
});
