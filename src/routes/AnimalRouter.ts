import * as KoaRouter from 'koa-router';

export const AnimalRouter = new KoaRouter({ prefix: 'animal' })
  .get('/:id', (ctx, next) => {})
  .post('/', (ctx, next) => {})
  .put('/:id', (ctx, next) => {})
  .delete('/:id', (ctx, next) => {});
