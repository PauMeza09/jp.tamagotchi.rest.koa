import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Action {
  @PrimaryGeneratedColumn() public id: number;

  @Column() public name: string;

  @Column() public message: string;
}
