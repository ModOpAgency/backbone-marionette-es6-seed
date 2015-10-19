'use strict';

import template from 'modules/attendance/templates/AttendanceGraphView.hbs';

export default Marionette.ItemView.extend({
    tagName: 'li',
    get template() {
        return template;
    },
    initialize(options) {
    }
});
