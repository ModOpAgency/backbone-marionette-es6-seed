'use strict';

import AttendanceGraphView from './AttendanceGraphView';

export default  Marionette.CollectionView.extend({
    tagName: 'ul',
    className: 'small-block-grid-4',
    childView: AttendanceGraphView,
    initialize(options) {
    }
});
