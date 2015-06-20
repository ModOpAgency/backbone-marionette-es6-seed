'use strict';

import AttendanceGraphView from './AttendanceGraphView';

export default  Marionette.CollectionView.extend({
    get className() {
        'view-content';
    },
    childView: AttendanceGraphView,
    initialize(options) {
    }
});
