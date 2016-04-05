import 'isomorphic-fetch';
import { find } from 'lodash/collection';

export default (app, router) => {
  router
    .get(
      'users',
      '/users/:id',
      (ctx, next) => {
        const { params } = ctx;
        const { id } = params;

        return fetch('http://localhost:3000/users.json')
          .then(response => response.json())
          .then(users => find(users, { id: parseInt(id, 10) }))
          .then(user => {
            console.log(user);
            ctx.user = user;

            return next()
          });
      },
      ctx => {
        const { user } = ctx;

        if (!user) {
          ctx.status = 404;
          return ctx.body = 'User not found';
        }

        const { id, name } = user;

        ctx.body = `id: ${id}, name: ${name}`;
      }
    );
};
