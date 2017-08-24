import Koa from 'koa';
import bodyParser from 'koa-better-body';
import cors from 'koa-cors';
import helmet from 'koa-helmet';
import error from 'koa-json-error';

import configureRouter from './router';
import logger from './logger';
import {debugMiddleware, serializerMiddleware} from './middleware';
import {getEnv} from './util';

/**
 * Avoid showing the stacktrace in 'production' env
 * @type {{postFormat: (function(*, *=))}}
 */
const errorOpts = {
  postFormat: (e, errorObj) => {
    const prodErrorObj = Object.assign({}, errorObj);
    delete prodErrorObj.stack;
    return getEnv('NODE_ENV') === 'production' ? prodErrorObj : errorObj;
  },
};

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

  // Exposed JSONAPISerializer to ctx
  app.use(serializerMiddleware());

  // @see https://github.com/koajs/json-error
  app.use(error(errorOpts));

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
