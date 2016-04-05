import router from 'koa-router';

import views from './views';
import users from './users';

export default (app) => {
  const _router = router();

  views(app, _router);
  users(app, _router);

  app
    .use(_router.routes())
    .use(_router.allowedMethods());
};
