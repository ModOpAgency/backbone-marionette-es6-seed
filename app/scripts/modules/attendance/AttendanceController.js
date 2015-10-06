'use strict';

import AttendanceModel from 'modules/attendance/models/AttendanceModel';
import AttendanceCollection from 'modules/attendance/collections/AttendanceCollection';
import AttendanceGraphCollectionView from 'modules/attendance/views/AttendanceGraphCollectionView';
import AttendanceLayoutView from 'modules/attendance/views/AttendanceLayoutView';

export default Marionette.Controller.extend({
    initialize(options) {
            this.options = options;
            this.attendanceChannel = Backbone.Radio.channel('Attendance');
            this.collection = new AttendanceCollection();
            this.attendanceLayoutView = new AttendanceLayoutView();
            this.attendanceGraphCollectionView = {};
        },
        index() {
            this.collection.fetch().then(function() {
                this.attendanceGraphCollectionView = new AttendanceGraphCollectionView({
                    collection: this.collection
                });
                this.options.container.show(this.attendanceLayoutView);
                this.attendanceLayoutView.getRegion('AttendanceGraph').show(this.attendanceGraphCollectionView);
                this.attendanceChannel.trigger('radioExample');
            }.bind(this));
        },
});
