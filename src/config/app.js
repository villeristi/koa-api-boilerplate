import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
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

  // @see https://github.com/evert0n/koa-cors
  app.use(cors());

  // @see https://github.com/helmetjs/helmet
  app.use(helmet());

  // @see https://github.com/koajs/bodyparser
  app.use(bodyParser());

  // Use configured router
  app.use(router.middleware());

  return app;
}
