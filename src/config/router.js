import Router from 'koa-better-router';

import routes from '../routes';

/**
 * Router options
 * @type {{notFound: (function(*, *))}}
 */
const routerOpts = {
  notFound: (ctx, next) => {
    ctx.status = 404;
    ctx.body = {msg: `Endpoint ${ctx.originalUrl} not found!`};
    return next();
  },
};

/**
 * Map through routes & add them to Router-instance
 * @param router
 * @returns {Array}
 */
const configureRoutes = (router) => {
  return Object.keys(routes).map((routeKey) => {

    if (!routes[routeKey].hasOwnProperty('handler')) {
      throw new TypeError(`Route '${routeKey}' has to have a handler-method`);
    }

    const middleWare = routes[routeKey].hasOwnProperty('middleware') ? routes[routeKey].middleware : [];
    const {handler} = routes[routeKey];

    return router.createRoute(routeKey, [...middleWare, handler]);
  });
};

/**
 * Router configuration
 * @returns {*}
 */
export default () => {
  const router = new Router(routerOpts).loadMethods();

  // TODO: Add easy grouping through routes.js
  router.addRoutes(configureRoutes(router));

  return router;
}
