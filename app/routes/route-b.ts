import Route from '@ember/routing/route';
import { strictModelFor } from 'another-try/util/strictModelFor';

export default class RouteBRoute extends Route {
  model() {
    const result = strictModelFor(this, 'route-a');

    result;
  }
}
