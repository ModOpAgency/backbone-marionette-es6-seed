'use strict';

// load css styles
import vendorStyle from '../styles/vendor.scss';
import mainStyle from '../styles/main.scss';

// load third party/vendor scripts
import foundation from 'foundation-sites/js/foundation';
import slick from 'slick-carousel/slick/slick.min';

// load initialize scripts
import Initialize from 'common/utility/Initialize';
import i18n, {
    detectLanguage
}
from 'i18next-client';
import EnvModel from 'modules/application/models/EnvModel';
import Application from 'modules/application/ApplicationModule';
import IndexModule from 'modules/index/IndexModule';

var envModel = new EnvModel({
    url: './assets/data/environment.json'
});

envModel.fetch().then(function() {
    envModel = envModel;
    Initialize(envModel.attributes);

    let app = new Application();
    app.index = new IndexModule({
        container: app.layout.mainContent
    });
    app.start();
});
