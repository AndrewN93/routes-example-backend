import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

import { AppControllers } from './api/controllers';

try {
  const corsOptions = {
    allowHeaders: ['X-Total-Count', 'Authorization', 'content-type'],
    exposeHeaders: ['X-Total-Count', 'Authorization', 'content-type'],
    credentials: true,
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  };

  const app = new Koa();
  const router = new Router();

  AppControllers.forEach(route => router[route.method](route.path, route.action));

  app.use(cors(corsOptions));
  app.use(bodyParser());
  app.use(router.routes());
  app.use(router.allowedMethods());
  app.listen(3005);

  console.log('The server is up and running on port 3005');
} catch {
  console.log('Error');
}