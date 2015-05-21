'use strict';

import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import Radio from 'backbone.radio';
import template from '../templates/ExampleHeaderView.hbs';
import slick from 'slick-carousel';

export default Marionette.ItemView.extend({
    get template() {
        return template;
    },
    get className() {
        'view-content';
    },
    initialize(config) {
        console.log('header itemView init');
    },
    message() {
        console.log('event triggered in peopleView and executed in indexView');
    },
    onRender() {

    }
});
