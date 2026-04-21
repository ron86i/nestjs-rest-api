import { Module } from '@nestjs/common';
import { UserController } from './infrastructure/adapters/controllers/v1/user.controller';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { IUSER_REPOSITORY } from './domain/ports/user-repository.port';
import { UserRepository } from './infrastructure/adapters/persistence/user.repository';

@Module({
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    {
      provide: IUSER_REPOSITORY,
      useClass: UserRepository,
    },
  ],
})
export class UsersModule {}
