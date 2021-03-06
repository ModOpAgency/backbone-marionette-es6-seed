'use strict';

import IndexRouter from 'modules/index/IndexRouter';
import IndexController from 'modules/index/IndexController';

export default Marionette.Application.extend({
    initialize(options) {
        // autostart the module, comment this out to call it manually
        this.start(options);
    },
    start(options) {
        var indexChannel = Radio.channel('index');
        var indexController = new IndexController({container: options.container});
        var indexRouter = new IndexRouter({
            controller: indexController
        });
    },
    stop() {
        this.controller.stop();
    }
});
