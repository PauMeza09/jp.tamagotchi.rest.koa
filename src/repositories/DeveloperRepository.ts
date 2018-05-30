import { Repository, EntityRepository } from 'typeorm';
import { Developer } from '../entities';

@EntityRepository(Developer)
export class DeveloperRepository extends Repository<Developer> {}
