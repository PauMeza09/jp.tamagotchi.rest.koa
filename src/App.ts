import * as Koa from 'koa';
import * as bodyparser from 'koa-bodyparser';

import * as Routes from './routes';

import { Passport } from './App.auth';

export const App = new Koa()
  .use(Passport.initialize())
  .use(bodyparser())
  .use(Routes.ActionRouter.routes())
  .use(Routes.AnimalRouter.routes())
  .use(Routes.AuthRouter.routes())
  .use(Routes.DeveloperRouter.routes())
  .use(Routes.LoginRouter.routes())
  .use(Routes.OrderRouter.routes())
  .use(Routes.PetRouter.routes())
  .use(Routes.UserRouter.routes());
