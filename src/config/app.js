import Koa from 'koa';
import bodyParser from 'koa-better-body';
import cors from 'koa-cors';
import helmet from 'koa-helmet';

import configureRouter from './router';
import logger from './logger';
import {debugMiddleware} from './middleware';
import {getEnv} from './util';


/**
 * Configure Koa App
 * @returns {*}
 */
export default () => {
  const router = configureRouter();
  const app = new Koa();

  if (getEnv('NODE_ENV') === 'develop') {
    // @see https://github.com/expressjs/morgan
    app.use(logger('dev'));
  }

  // Exposed debug() to ctx
  app.use(debugMiddleware());

  // @see https://github.com/evert0n/koa-cors
  app.use(cors());

  // @see https://github.com/helmetjs/helmet
  app.use(helmet());

  // @see https://github.com/tunnckoCore/koa-better-body
  app.use(bodyParser());

  // Use configured router
  app.use(router.middleware());

  return app;
}
