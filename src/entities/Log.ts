import { ManyToOne } from 'typeorm';

import { User } from './User';
import { Animal } from './Animal';
import { Pet } from './Pet';

export class Log {
  @ManyToOne(type => User, user => user.logs)
  public user: User;

  @ManyToOne(type => Pet, pet => pet.logs)
  public pet: Pet;
}
