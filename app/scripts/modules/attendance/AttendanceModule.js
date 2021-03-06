'use strict';

import AttendanceRouter from 'modules/attendance/AttendanceRouter';
import AttendanceController from 'modules/attendance/AttendanceController';

export default Marionette.Application.extend({
    initialize(options) {
        // autostart the module, comment this out to call it manually
        this.start(options);
    },
    start(options) {
        var attendanceChannel = Backbone.Radio.channel('Attendance');
        var attendanceController = new AttendanceController({
            container: options.container
        });
        var attendanceRouter = new AttendanceRouter({
            controller: attendanceController
        });
    },
    stop() {
        this.controller.stop();
    }
});
