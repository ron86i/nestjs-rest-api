import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { IUSER_REPOSITORY } from '../../domain/ports/user-repository.port';
import type { IUserRepository } from '../../domain/ports/user-repository.port';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(IUSER_REPOSITORY)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(name: string, email: string): Promise<User> {
    const id = Math.random().toString(36).substring(7);
    const user = new User(id, name, email);
    return await this.userRepository.save(user);
  }
}
