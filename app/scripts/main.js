'use strict';

import Initialize from './common/utility/Initialize';
import EvnModel from './modules/application/models/EnvModel';
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

var envModel = new EvnModel({
    url: './assets/data/application.json'
});

envModel.fetch().then(function() {
    envModel = envModel;
    Initialize(envModel.attributes);
});
app.start();