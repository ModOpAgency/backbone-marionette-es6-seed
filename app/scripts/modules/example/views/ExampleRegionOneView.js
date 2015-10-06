'use strict';

import template from 'modules/example/templates/ExampleRegionOneView.hbs';
import slick from 'slick-carousel';

export default Marionette.ItemView.extend({
    get template() {
        return template;
    },
    get className() {
        'view-content';
    },
    initialize(options) {
        // console.log('footer itemView init');
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
