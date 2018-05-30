import { Repository, EntityRepository } from 'typeorm';
import { OrderItem } from '../entities';

@EntityRepository(OrderItem)
export class OrderItemRepository extends Repository<OrderItem> {}
