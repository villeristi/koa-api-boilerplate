import userHandler from './modules/user/user';
import {firstMiddleware, secondMiddleware} from './modules/user/middleware';

/**
 * Configure routes
 */
export default {
  'GET /': {
    handler: (ctx) => {
      ctx.body = {
        name: 'koa-api-boilerplate',
        version: 'x.x.x',
      };
    },
  },
  'GET /users': {
    handler: userHandler,
    middleware: [firstMiddleware, secondMiddleware],
  },
};
