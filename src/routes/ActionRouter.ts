import * as KoaRouter from 'koa-router';

import { getCustomRepository } from 'typeorm';

import { ActionRepository } from '../repositories';

export const ActionRouter = repositoryFn =>
  new KoaRouter({ prefix: '/action' })
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
    .delete('/:id', (ctx, next) => ctx.repository.remove(ctx.params.id));
