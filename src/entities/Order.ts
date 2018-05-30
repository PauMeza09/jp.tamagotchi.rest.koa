import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  ObjectIdColumn
} from 'typeorm';

import { User } from './User';
import { OrderItem } from './OrderItem';

@Entity()
export class Order {
  @ObjectIdColumn() public id: number;

  @Column() public total: number;

  @Column(type => OrderItem)
  public items: OrderItem[];

  @Column(type => User)
  public user: User;
}
