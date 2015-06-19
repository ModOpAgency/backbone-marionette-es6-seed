'use strict';

import template from '../templates/ExampleHeaderView.hbs';
import slick from 'slick-carousel';

export default Marionette.ItemView.extend({
    get template() {
        return template;
    },
    get className() {
        'view-content';
    },
    initialize(options) {
        // console.log('header itemView init');
    },

});
