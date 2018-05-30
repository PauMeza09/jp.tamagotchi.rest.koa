import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne
} from 'typeorm';

import { Pet } from './Pet';
import { Developer } from './Developer';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn() public id: number;

  @Column() public description: string;

  @OneToMany(type => Pet, pet => pet.animal)
  public pets: Pet[];

  @ManyToOne(type => Developer, dev => dev.animals)
  public developer: Developer;
}
