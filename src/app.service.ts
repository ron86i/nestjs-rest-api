import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private list: string[] = [];

  createPost(content: string) {
    this.list.push(content);
  }

  getListPost(): string[] {
    return this.list;
  }

  deletePost(content: string) {
    this.list = this.list.filter((post) => post !== content);
  }
}
