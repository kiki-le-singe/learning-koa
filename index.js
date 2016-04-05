import Koa from 'koa';

import router from './router';

const app = new Koa();

router(app);

app.listen(3000);
