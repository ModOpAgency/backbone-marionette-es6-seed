'use strict';

import DestroyWarn from 'common/behaviors/DestroyWarn';
import template from 'modules/index/templates/IndexLayoutView.hbs';

export default Marionette.LayoutView.extend({
    ui: {
        "destroy": ".js-destroywarn-behavior"
    },
    behaviors: [{
        behaviorClass: DestroyWarn,
        message: 'You did something wrong.'
    }],
    get template() {
        return template;
    },
    onShow() {
        $('body').addClass('index');
        $(document).foundation();
    }
});
