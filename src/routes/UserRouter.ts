import * as KoaRouter from 'koa-router';

export const UserRouter = new KoaRouter({ prefix: 'user' })
  .get('/:id', (ctx, next) => {})
  .post('/', (ctx, next) => {})
  .put('/:id', (ctx, next) => {})
  .delete('/:id', (ctx, next) => {});
