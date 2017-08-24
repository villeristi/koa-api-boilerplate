import usersHandler from './modules/user/listUsers';
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
    handler: usersHandler,
    middleware: [firstMiddleware, secondMiddleware],
  },
};
