import { module, test } from 'qunit';
import { setupTest } from 'another-try/tests/helpers';

module('Unit | Route | route-b', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:route-b');
    assert.ok(route);
  });
});
