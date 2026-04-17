import { Injectable } from '@nestjs/common';
import { User } from '../../../domain/entities/user.entity';
import { IUserRepository } from '../../../domain/ports/user-repository.port';

@Injectable()
export class UserRepository implements IUserRepository {
  private users: User[] = [];

  async save(user: User): Promise<User> {
    this.users.push(user);
    return Promise.resolve(user);
  }

  async findById(id: string): Promise<User | null> {
    return Promise.resolve(this.users.find((u) => u.id === id) || null);
  }
}
