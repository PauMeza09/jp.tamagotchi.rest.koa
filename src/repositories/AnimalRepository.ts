import { Repository, EntityRepository } from 'typeorm';
import { Animal } from '../entities';

@EntityRepository(Animal)
export class AnimalRepository extends Repository<Animal> {}
