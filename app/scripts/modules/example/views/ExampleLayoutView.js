'use strict';

import template from '../templates/ExampleLayoutView.hbs';
import slick from 'slick-carousel';

export default Marionette.LayoutView.extend({
    get template() {
        return template;
    },
    get className() {
        return 'view-content';
    },
    initialize(options) {
        // console.log('example layoutView init');
    },
    regions() {
        return {
            ExampleRegionOne: '.js-example-region-one',
            ExampleRegionTwo: '.js-example-region-two'
        };
    },
    onShow() {
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
