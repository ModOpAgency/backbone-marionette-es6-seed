'use strict';

import template from '../templates/AttendanceGraphView.hbs';

export default Marionette.ItemView.extend({
    tagName: 'li',
    get template() {
        return template;
    },
    initialize(options) {
    }
});
