import Koa from 'koa';
import Router from 'koa-better-router';
import logger from './logger';
import cors from 'koa-cors';

import {getEnv} from '../util';

/**
 * Router configuration
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
 * Configure Koa App
 * @returns {*}
 */
export default () => {
  const router = new Router(routerOpts).loadMethods();
  const app = new Koa();

  if (getEnv('ENV') === 'develop') {
    app.use(logger('dev'));
  }

  // TODO: Make me configurable through something...
  app.use(cors());

  router.get('/', (ctx) => {
    ctx.body = `Wadaap from koa-api-boilerplate! ${ctx.route.prefix}`;
  });

  app.use(router.middleware());

  return app;
}
