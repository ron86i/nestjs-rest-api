import { Controller, Post, Body, Version } from '@nestjs/common';
import { CreateUserUseCase } from '../../../../application/use-cases/create-user.use-case';

@Controller('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Version('1')
  @Post()
  async create(@Body() body: { name: string; email: string }) {
    return this.createUserUseCase.execute(body.name, body.email);
  }
}
