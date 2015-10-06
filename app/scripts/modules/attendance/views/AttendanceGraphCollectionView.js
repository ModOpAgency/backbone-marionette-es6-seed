'use strict';

import AttendanceGraphView from 'modules/attendance/views/AttendanceGraphView';

export default  Marionette.CollectionView.extend({
    tagName: 'ul',
    className: 'small-block-grid-4',
    childView: AttendanceGraphView,
    initialize(options) {
        this.attendanceChannel = Backbone.Radio.channel('Attendance');
        this.listenTo(this.attendanceChannel, 'radioExample', this.radioExample);
    },
    radioExample(){
        console.log('example of controller taking to a view');
    }

});
