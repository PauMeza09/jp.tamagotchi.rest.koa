import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Login {
  @PrimaryGeneratedColumn() public id: number;

  @Column() public username: string;

  @Column() public password: string;
}
