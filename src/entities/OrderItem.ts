import { Entity, Column } from 'typeorm';

import { Order } from './Order';

@Entity()
export class OrderItem {
  @Column() public price: number;
}
