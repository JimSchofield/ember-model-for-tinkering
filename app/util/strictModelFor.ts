import Route, { RouteRegistry } from '@ember/routing/route';
import { ModelFrom } from 'another-try';

type ValidateRoutes<T extends Route> = {
  [K in keyof RouteRegistry]: T extends RouteRegistry[K] ? never : RouteRegistry[K];
}

export const strictModelFor = <
  T extends Route,
  U extends keyof ValidateRoutes<T>,
>(
  context: T,
  route: U,
): ModelFrom<RouteRegistry[U]> => {

  if (!context.fullRouteName.startsWith(route)) {
    throw new Error('route in modelFor needs to call ancestor model')
  }

  const result = context.modelFor(route) as ModelFrom<RouteRegistry[U]>;

  return result;
};
