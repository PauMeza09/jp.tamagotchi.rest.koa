import { Repository, EntityRepository } from 'typeorm';
import { Login } from '../entities';

@EntityRepository(Login)
export class LoginRepository extends Repository<Login> {}
