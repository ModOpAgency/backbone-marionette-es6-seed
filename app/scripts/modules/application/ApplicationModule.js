'use strict';

import MarionetteShim from '../../common/vendor/marionette.shim';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
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
