import { Repository, MongoRepository } from 'typeorm';

import { Order } from '../entities';

export class OrderRepository extends MongoRepository<Order> {}
