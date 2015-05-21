'use strict';

import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import Radio from 'backbone.radio';
import template from '../templates/ExampleLayoutView.hbs';
import slick from 'slick-carousel';

export default Marionette.LayoutView.extend({
    get template() {
        return template;
    },
    get className() {
        return 'view-content';
    },
    initialize(config) {
        console.log('example layoutView init');
    },
    regions() {
        return {
            exampleHeader: '.js-example-header',
            exampleFooter: '.js-example-footer'
        };
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
