import Route from '@ember/routing/route';

export default class RouteARoute extends Route {
  model() {
    return {
      prop1: 'from RouteARoute',
      num: 42
    }
  }
}

declare module '@ember/routing/route' {
  interface RouteRegistry {
    'route-a': RouteARoute
  }
}
