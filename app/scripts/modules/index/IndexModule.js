'use strict';

import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Radio from 'backbone.radio';
import Marionette from 'backbone.marionette';

import IndexRouter from './IndexRouter.js';
import IndexController from './IndexController.js';

export default Marionette.Application.extend({
    initialize(options) {
        // autostart the module, comment this out to call it manually
        this.start(options);
    },
    start(options) {
        var indexChannel = Backbone.Radio.channel('index');
        var indexController = new IndexController({container: options.container});
        var indexRouter = new IndexRouter({
            controller: indexController
        });
    },
    stop() {
        this.controller.stop();
    }
});
