import { Repository, EntityRepository } from 'typeorm';

import { Action } from '../entities';

@EntityRepository(Action)
export class ActionRepository extends Repository<Action> {}
