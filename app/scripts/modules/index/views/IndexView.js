'use strict';

import template from 'modules/index/templates/IndexView.hbs';

export default Marionette.ItemView.extend({
  get template() {
    return template;
  },
  get className() {
    return 'view-content';
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
