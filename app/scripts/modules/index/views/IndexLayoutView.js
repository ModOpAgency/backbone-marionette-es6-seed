'use strict';

import template from 'modules/index/templates/IndexLayoutView.hbs';

export default Marionette.LayoutView.extend({
  get template() {
    return template;
  },
  get className() {
    return 'view-content';
  },
  onRender() {
    $('body').addClass('index');

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
