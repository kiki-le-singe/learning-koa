export default (app, router) => {
  router
    .get(
      'users',
      '/users/:id',
      (ctx, next) => {
        const { params } = ctx;

        ctx.user = {
          id: params.id,
          name: 'Mickey',
        };
        return next();
      },
      ctx => {
        const { user: { id, name } } = ctx;

        ctx.body = `id: ${id}, name: ${name}`;
      }
    );
};
