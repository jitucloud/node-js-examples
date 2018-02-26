const mount = require('koa-mount');
const auth = require('koa-basic-auth');
const Koa = require('koa');
const app = new Koa();

// custom 401 handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.set('WWW-Authenticate', 'Basic');
      ctx.body = 'cant haz that';
    } else {
      throw err;
    }
  }
});
// require auth
app.use(auth({ name: 'tj', pass: 'tobi' }));

// secret response
app.use(async (ctx) => {
  ctx.body = 'secret';
});
app.use(mount('/admin', auth({ name: 'tobi', pass: 'ferret' })));
app.listen(3000, function () {
  console.log('listening on port 3000');
});