import { Repository, EntityRepository } from 'typeorm';
import { Log } from '../entities';

@EntityRepository(Log)
export class LogRepository extends Repository<Log> {}
