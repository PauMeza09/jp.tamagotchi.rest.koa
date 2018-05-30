import * as KoaRouter from 'koa-router';

export const OrderRouter = new KoaRouter({ prefix: 'order' })
  .get('/:id', (ctx, next) => {})
  .post('/', (ctx, next) => {})
  .put('/:id', (ctx, next) => {})
  .delete('/:id', (ctx, next) => {});
