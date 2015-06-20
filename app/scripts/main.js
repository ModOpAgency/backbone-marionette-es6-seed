'use strict';

import Application from './modules/application/ApplicationModule';
import IndexModule from './modules/index/IndexModule';
import ExampleModule from './modules/example/ExampleModule';
import AttendanceModule from './modules/attendance/AttendanceModule';

let app = new Application();

app.index = new IndexModule({
    container: app.layout.mainContent
});
app.example = new ExampleModule({
    container: app.layout.mainContent
});
app.attendance = new AttendanceModule({
    container: app.layout.mainContent
});
app.start();
