import * as KoaRouter from 'koa-router';

export const ActionRouter = new KoaRouter({ prefix: 'action' })
  .get('/:id', (ctx, next) => {})
  .post('/', (ctx, next) => {})
  .put('/:id', (ctx, next) => {})
  .delete('/:id', (ctx, next) => {});
