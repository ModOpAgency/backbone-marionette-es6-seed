'use strict';

import template from 'modules/index/templates/IndexLayoutView.hbs';

export default Marionette.LayoutView.extend({
  get template() {
    return template;
  },

  onShow() {
    $('body').addClass('index');
    $(document).foundation();
  }
});
