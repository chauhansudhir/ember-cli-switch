import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    pressAnyKey(val) {
      // you can pass model object etc..
      this.set('undefinedValue', val);
    }

  }
});
