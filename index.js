import Koa from 'koa';
import serve from 'koa-static';
import json from 'koa-json';

import router from './router';

const app = new Koa();

router(app);

app.use(json());
app.use(serve('api'));

app.listen(3000);
