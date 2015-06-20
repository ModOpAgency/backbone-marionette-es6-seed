'use strict';

import template from '../templates/AttendanceGraphView.hbs';

export default Marionette.ItemView.extend({
    get template() {
        return template;
    },
    get className() {
        'view-content';
    },
    initialize(options) {
    }
});
