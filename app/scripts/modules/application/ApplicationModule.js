'use strict';

import foundation from 'foundation-sites/js/foundation';
import ApplicationLayoutView from './views/ApplicationLayoutView';
// app bootstrap
export default Marionette.Application.extend({
  initialize() {
    this.layout = new ApplicationLayoutView();
    this.layout.render();
  },
  onStart() {
    if (Backbone.history) {
      Backbone.history.start();
    }
  }
});
