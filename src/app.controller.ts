import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('post')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPost(): string[] {
    return this.appService.getListPost();
  }

  @Post()
  createPost(@Body('name') name: string) {
    this.appService.createPost(name);
  }

  @Delete()
  deletePost(@Body('name') name: string) {
    this.appService.deletePost(name);
  }
}
