import Router from 'koa-router';

import views from './views';
import users from './users';

export default (app) => {
  const router = new Router();

  users(app, _router);
  views(app, router);

  app
    .use(router.routes())
    .use(router.allowedMethods())
};
