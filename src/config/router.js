import Router from 'koa-better-router';

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
 * Router configuration
 * @returns {*}
 */
export default () => {
  const router = new Router(routerOpts).loadMethods();

  router.get('/', async (ctx) => {
    const {debug} = ctx;
    debug('Debugging...');
    return ctx.body = `Wadaap from koa-api-boilerplate! ${ctx.route.prefix}`;
  });

  router.post('/', async (ctx) => {
    ctx.debug(ctx.request.fields);
    return ctx.body = ctx.request.fields;
  });

  return router;
}
