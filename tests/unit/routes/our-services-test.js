import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | our-services', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:our-services');
    assert.ok(route);
  });
});
