import Route from '@ember/routing/route';
import { strictModelFor } from 'another-try/util/strictModelFor';

export default class RouteASubRoute extends Route {
  model() {
    const result = strictModelFor(this, 'route-a');

    // This errors because there might be an implicit circular type?
    return result;
  }
}

declare module '@ember/routing/route' {
  interface RouteRegistry {
    'route-a.sub-route': RouteASubRoute
  }
}
