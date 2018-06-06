import * as KoaRouter from 'koa-router';

import { getCustomRepository } from 'typeorm';

import { AnimalRepository } from '../repositories';

export const AnimalRouter = repositoryFn =>
  new KoaRouter({ prefix: '/animal' })
    .use((ctx, next) => {
      ctx.repository = repositoryFn();
      next();
    })
    .get('/', async (ctx, next) => (ctx.body = await ctx.repository.find()))
    .get(
      '/:id',
      async (ctx, next) =>
        (ctx.body = await ctx.repository.findOne(ctx.params.id))
    )
    .post(
      '/',
      async (ctx, next) =>
        (ctx.body = await ctx.repository.save({ id: 0, ...ctx.request.body }))
    )
    .put(
      '/:id',
      async (ctx, next) =>
        (ctx.body = await ctx.repository.save({
          id: ctx.params.id,
          ...ctx.request.body
        }))
    )
    .delete('/:id', (ctx, next) => ctx.repository.remove(ctx.request.body));
