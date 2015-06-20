'use strict';

export default Backbone.Marionette.AppRouter.extend({
    get appRoutes() {
        return {
            'attendance': 'index'
        };
    }
});
