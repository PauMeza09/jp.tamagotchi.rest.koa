import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany
} from 'typeorm';

import { User } from './User';
import { OrderItem } from './OrderItem';

@Entity()
export class Order {
  @PrimaryGeneratedColumn() public id: number;

  @Column() public total: number;

  @OneToMany(type => OrderItem, item => item.order)
  public items: OrderItem[];

  @ManyToOne(type => User, user => user.orders)
  public user: User;
}
