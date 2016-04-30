'use strict';

import template from 'modules/application/templates/applicationLayoutView.hbs';

export default Marionette.LayoutView.extend({
    get el() {
        return '#application';
    },
    get template() {
        return template;
    },
    regions() {
        return {
            mainContent: '#main-content'
        };
    }
});
