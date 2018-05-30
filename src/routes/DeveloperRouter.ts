import * as KoaRouter from 'koa-router';

export const DeveloperRouter = new KoaRouter({ prefix: 'developer' })
  .get('/:id', (ctx, next) => {})
  .post('/', (ctx, next) => {})
  .put('/:id', (ctx, next) => {})
  .delete('/:id', (ctx, next) => {});
