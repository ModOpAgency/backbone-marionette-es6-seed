'use strict';

import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Radio from 'backbone.radio';
import Marionette from 'backbone.marionette';

import ExampleRouter from './ExampleRouter.js';
import ExampleController from './ExampleController.js';

export default Marionette.Application.extend({
    initialize(options) {
        // autostart the module, comment this out to call it manually
        this.start(options);
    },
    start(options) {
        var exampleChannel = Backbone.Radio.channel('example');
        var exampleController = new ExampleController({
            container: options.container
        });
        var exampleRouter = new ExampleRouter({
            controller: exampleController
        });
    },
    stop() {
        this.controller.stop();
    }
});
