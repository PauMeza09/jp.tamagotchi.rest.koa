import { Repository, EntityRepository } from 'typeorm';
import { Order } from '../entities';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {}
