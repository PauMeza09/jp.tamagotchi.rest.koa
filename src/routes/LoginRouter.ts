import * as KoaRouter from 'koa-router';

export const LoginRouter = new KoaRouter({ prefix: 'login' })
  .get('/:id', (ctx, next) => {})
  .post('/', (ctx, next) => {})
  .put('/:id', (ctx, next) => {})
  .delete('/:id', (ctx, next) => {});
