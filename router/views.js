export default (app, router) => {
  router
    .get('/', (ctx) => {
      ctx.body = 'Home';
    })
    .get('/hello', (ctx) => {
      ctx.body = 'Hello World!';
    })
    .get('/about', (ctx) => {
      ctx.body = 'About';
    })
    .get('/contact', (ctx) => {
      ctx.body = 'Contact';
    })
    .get('/json', (ctx) => {
      ctx.body = { foo: 'bar' };
    });
};
