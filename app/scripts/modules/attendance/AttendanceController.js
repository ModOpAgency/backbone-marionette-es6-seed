'use strict';

import AttendanceModel from './models/AttendanceModel';
import AttendanceCollection from './collections/AttendanceCollection';
import AttendanceGraphCollectionView from './views/AttendanceGraphCollectionView';
import AttendanceLayoutView from './views/AttendanceLayoutView.js';

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
