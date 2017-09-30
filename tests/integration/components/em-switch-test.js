import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('em-switch', 'Integration | Component | em switch', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // this.render(hbs`{{em-switch}}`);
  //
  // assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.set('value', true);
  this.render(hbs`
    {{em-switch checked=value}}
  `);

  assert.equal(this.$('.ember-cli-switch-control-wrap.checked').length, 1);
  this.set('value', false);

  assert.equal(this.$('.ember-cli-switch-control-wrap.checked').length, 0);
});
