import Koa from 'koa';
import serve from 'koa-static';
import json from 'koa-json';
import _debug from 'debug';

import config from './config';
import router from './router';

const debug = _debug('app:server');
const app = new Koa();
const { SERVER_PORT } = config;

router(app);

app.use(json());
app.use(serve('api'));

app.listen(SERVER_PORT, () => {
  debug(`API Server listening on http://localhost:${SERVER_PORT}`);
});
