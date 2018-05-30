import * as KoaRouter from 'koa-router';

import { getCustomRepository } from 'typeorm';

import { LoginRepository } from '../repositories';

export const LoginRouter = new KoaRouter({ prefix: 'login' }).post(
  '/',
  async (ctx, next) => {
    try {
      await ctx.login(ctx.request.body);
      ctx.res.statusCode = 200;
    } catch (error) {
      ctx.res.statusCode = 401;
    }
  }
);
