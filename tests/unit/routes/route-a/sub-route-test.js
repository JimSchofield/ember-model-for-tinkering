import { module, test } from 'qunit';
import { setupTest } from 'another-try/tests/helpers';

module('Unit | Route | route-a/sub-route', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:route-a/sub-route');
    assert.ok(route);
  });
});
