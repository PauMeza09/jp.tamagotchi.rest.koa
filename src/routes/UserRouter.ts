import * as KoaRouter from 'koa-router';

import { getCustomRepository } from 'typeorm';

import { UserRepository } from '../repositories';

export const UserRouter = new KoaRouter({ prefix: 'user' })
  .use((ctx, next) => {
    ctx.repository = getCustomRepository(UserRepository);
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
      (ctx.body = await ctx.repository.save(ctx.request.body))
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
