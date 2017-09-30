import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    controller.setProperties({
      'value': true,
      'undefinedValue': null
    });
  }
});
