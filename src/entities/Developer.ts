import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Animal } from './Animal';

@Entity()
export class Developer {
  @PrimaryGeneratedColumn() public id: number;

  @Column() public name: string;

  @Column() public email: string;

  @Column() public password: string;

  @OneToMany(type => Animal, animal => animal.developer)
  public animals: Animal[];
}
