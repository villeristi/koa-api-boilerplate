import 'babel-polyfill';
import Koa from 'koa';
import dotenv from 'dotenv';

dotenv.config();

import {getEnv, debug} from './util';

const app = new Koa();
const PORT = getEnv('PORT') || 3000;

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.listen(PORT, () => debug(`Your awesome Koa API is running @ http://127.0.0.1:${PORT}`));
