import * as KoaRouter from 'koa-router';

export const AuthRouter = new KoaRouter({ prefix: 'auth' })
  .get('/:id', (ctx, next) => {})
  .post('/', (ctx, next) => {})
  .put('/:id', (ctx, next) => {})
  .delete('/:id', (ctx, next) => {});
