import 'babel-polyfill';
import Koa from 'koa';
import dotenv from 'dotenv';
import Router from 'koa-better-router';

dotenv.config();

import {getEnv, debug} from './util';

const routerOpts = {
  notFound: (ctx, next) => {
    ctx.status = 404;
    ctx.body = {msg: `Endpoint: ${ctx.originalUrl} not found!`};
    return next();
  },
};

const PORT = getEnv('PORT') || 3000;
const router = new Router(routerOpts).loadMethods();
const app = new Koa();

router.get('/', (ctx, next) => {
  ctx.body = `Wadaap from koa-api-boilerplate! ${ctx.route.prefix}`;
});

app.use(router.middleware());
app.listen(PORT, () => debug(`Your awesome Koa API is running @ http://127.0.0.1:${PORT}`));
