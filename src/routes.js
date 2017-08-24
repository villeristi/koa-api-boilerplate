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
    handler: (ctx, next) => {
      ctx.body = 'getting /users';
    },
    middleware: [
      (ctx, next) => {
        console.log(`First middleware on ${ctx.route.path}`);
        return next();
      },
      (ctx, next) => {
        console.log(`Second middleware on ${ctx.route.path}`);
        return next();
      },
    ],
  },
};
