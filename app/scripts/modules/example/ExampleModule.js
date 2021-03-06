'use strict';

import ExampleRouter from 'modules/example/ExampleRouter';
import ExampleController from 'modules/example/ExampleController';

export default Marionette.Application.extend({
    initialize(options) {
        // autostart the module, comment this out to call it manually
        this.start(options);
    },
    start(options) {
        var exampleChannel = Radio.channel('example');
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
