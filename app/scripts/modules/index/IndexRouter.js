'use strict';

import Backbone from 'backbone';

export default Backbone.Marionette.AppRouter.extend({
    get appRoutes() {
        return {
            '': 'index'
        };
    }
});
