'use strict';

import template from '../templates/AttendanceLayoutView.hbs';

export default Marionette.LayoutView.extend({
    get template() {
        return template;
    },
    get className() {
        return 'view-content';
    },
    initialize(options) {
    },
    regions() {
        return {
            AttendanceGraph: '.js-attendance-graph'
        };
    }

});
