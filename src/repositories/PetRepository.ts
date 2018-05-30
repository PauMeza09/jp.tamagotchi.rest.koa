import { Repository, EntityRepository } from 'typeorm';
import { Pet } from '../entities';

@EntityRepository(Pet)
export class PetRepository extends Repository<Pet> {}
