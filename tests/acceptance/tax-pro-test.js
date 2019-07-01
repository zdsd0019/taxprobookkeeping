import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | tax pro', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /tax-pro', async function(assert) {
    await visit('/tax-pro');

    assert.equal(currentURL(), '/tax-pro');
  });
});
