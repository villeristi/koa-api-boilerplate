import 'babel-polyfill';
import Koa from 'koa';
import dotenv from 'dotenv';

dotenv.load();

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.listen(process.env.PORT || 3000);

console.log(`Your awesome Koa API is running @ http://127.0.0.1:${process.env.PORT || 3000}`);
