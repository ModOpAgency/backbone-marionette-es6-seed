'use strict';

import foundation from 'foundation-sites';
import ApplicationLayoutView from './views/ApplicationLayoutView';
import HandlebarsHelpers from 'common/utility/utilityHandlebarsHelpers';

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
    $(document).foundation();
  }
});
