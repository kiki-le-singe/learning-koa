import Router from 'koa-router';

import views from './views';
import users from './users';

export default (app) => {
  const router = new Router();
  const routerAPI = new Router({
    prefix: '/api',
  });

  views(app, router);
  users(app, routerAPI);

  app
    .use(router.routes())
    .use(router.allowedMethods())
    .use(routerAPI.routes())
    .use(routerAPI.allowedMethods());
};
