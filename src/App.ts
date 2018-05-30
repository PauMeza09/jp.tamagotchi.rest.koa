import * as Koa from 'koa';
import * as Routes from './routes';

export const App = new Koa()
  .use(Routes.ActionRouter.routes())
  .use(Routes.AnimalRouter.routes())
  .use(Routes.AuthRouter.routes())
  .use(Routes.DeveloperRouter.routes())
  .use(Routes.LoginRouter.routes())
  .use(Routes.OrderRouter.routes())
  .use(Routes.PetRouter.routes())
  .use(Routes.UserRouter.routes());
