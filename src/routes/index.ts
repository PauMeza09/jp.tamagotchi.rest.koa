import { Repository } from 'typeorm';

export * from './ActionRouter';
export * from './AnimalRouter';
export * from './AuthRouter';
export * from './DeveloperRouter';
export * from './LoginRouter';
export * from './OrderRouter';
export * from './PetRouter';
export * from './UserRouter';

declare module 'koa' {
  interface Context {
    repository: Repository<any>;
  }
}
