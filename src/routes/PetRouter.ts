import * as KoaRouter from 'koa-router';

export const PetRouter = new KoaRouter({ prefix: 'pet' })
  .get('/:id', (ctx, next) => {})
  .post('/', (ctx, next) => {})
  .put('/:id', (ctx, next) => {})
  .delete('/:id', (ctx, next) => {});
