import 'babel-polyfill';
import Koa from 'koa';
import dotenv from 'dotenv';

dotenv.load();

const app = new Koa();
const PORT = process.env.port || 3000;

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.listen(PORT);

console.log(`Your awesome Koa API is running @ http://127.0.0.1:${PORT}`);
