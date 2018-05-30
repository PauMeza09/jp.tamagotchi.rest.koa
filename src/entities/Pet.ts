import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne
} from 'typeorm';

import { Log } from './Log';
import { Animal } from './Animal';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn() public id: number;

  @Column() public nickname: string;

  @Column() public gender: string;

  @ManyToOne(type => Animal, animal => animal.pets)
  public animal: Animal;

  @OneToMany(type => Log, log => log.pet)
  public logs: Log[];
}
