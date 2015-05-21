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
        console.log('footer itemView init');
    },
    message() {
        console.log('event triggered in peopleView and executed in indexView');
    },
    onRender() {
        $('.slider').slick({
            lazyLoad: 'ondemand',
            autoplay: true,
            initialSlide: 0,
            dots: true,
            slidesToShow: 1,
            infinite: true,
            useCSS: true,
            speed: 3000,
            fade: true,
            cssEase: 'ease',
            adaptiveHeight: false
        });
    }
});
