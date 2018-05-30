import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Log } from './Log';
import { Order } from './Order';

@Entity()
export class User {
  @PrimaryGeneratedColumn() public id: number;

  @Column() public name: string;

  @Column() public email: string;

  @OneToMany(() => Log, log => log.user)
  public logs: Log[];

  @OneToMany(type => Order, order => order.user)
  public orders: Order[];
}
