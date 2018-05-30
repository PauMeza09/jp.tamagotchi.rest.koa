import * as KoaPassport from 'koa-passport';

import { Strategy as LocalStrategy } from 'passport-local';

import { getRepository } from 'typeorm';

import { LoginRepository } from './repositories/LoginRepository';

export const Passport = KoaPassport.use(
  new LocalStrategy({ session: false }, async (username, password, done) => {
    try {
      const user = await getRepository(LoginRepository).findOne({
        where: { username, password }
      });
      done(null, user);
    } catch (error) {
      done(error);
    }
  })
);
