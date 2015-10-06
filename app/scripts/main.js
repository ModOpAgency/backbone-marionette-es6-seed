'use strict';

import Initialize from 'common/utility/Initialize';
import i18n, {detectLanguage} from 'i18next-client';
import EnvModel from 'modules/application/models/EnvModel';
import Application from 'modules/application/ApplicationModule';
import IndexModule from 'modules/index/IndexModule';
import ExampleModule from 'modules/example/ExampleModule';
import AttendanceModule from 'modules/attendance/AttendanceModule';

var envModel = new EnvModel({
    url: './assets/data/environment.json'
});

envModel.fetch().then(function() {
    console.log(i18n.detectLanguage());
    envModel = envModel;
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
});
