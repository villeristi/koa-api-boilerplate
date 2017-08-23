import Koa from 'koa';
import cors from 'koa-cors';
import helmet from 'koa-helmet';

import configureRouter from './router';
import logger from './logger';
import {getEnv} from './util';


/**
 * Configure Koa App
 * @returns {*}
 */
export default () => {
  const router = configureRouter();
  const app = new Koa();

  if (getEnv('ENV') === 'develop') {
    app.use(logger('dev'));
  }

  // TODO: Make me configurable through something...
  app.use(cors());

  // @see https://github.com/helmetjs/helmet
  app.use(helmet());

  router.get('/', (ctx, next) => {
    ctx.body = `Wadaap from koa-api-boilerplate! ${ctx.route.prefix}`;
    return next();
  });

  app.use(router.middleware());

  return app;
}
