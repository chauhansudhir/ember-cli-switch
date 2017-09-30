import Ember from 'ember';
import layout from '../templates/components/em-switch';

const { computed, isNone, get, set, isEqual } = Ember;

export default Ember.Component.extend({
  layout,
  onText: 'Yes',
  offText: 'No',
  checked: null,
  disabled: false,
  tabindex: 1,
  showLabels: true,
  controlStyle: 'ember-cli-switch-control-default',
  onChangeAction: null,

  classNameBindings: ['checkedStateStyle'],
  classNames: ['ember-cli-switch-control-wrap'],

  checkedStateStyle: computed('checked', 'disabled', function() {
    let checked = get(this, 'checked');
    let val =  (isEqual(undefined, checked)|| isEqual(null, checked))? 'undefined' : (checked ? 'checked' : '');
    if (get(this, 'disabled')) {
      val += ' disabled';
    }
    val += ' ' + get(this, 'controlStyle');
    return `${val}`;
  }),

  keyPress() {
    this._toggleState();
  },

  click() {
    this._toggleState();
  },

  _toggleState() {
    if (get(this, 'disabled')) return;
    let checked = get(this, 'checked');
    set(this, 'checked', isNone(checked) ? true : !checked);
    this.sendAction('onChangeAction');
  }
});
