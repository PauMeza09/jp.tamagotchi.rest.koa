import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from './Order';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn() public id: number;

  @Column() public price: number;

  @ManyToOne(type => Order, order => order.items)
  public order: Order;
}
