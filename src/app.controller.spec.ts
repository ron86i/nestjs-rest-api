import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getPost', () => {
    it('should return an array of strings', () => {
      expect(appController.getPost()).toBeInstanceOf(Array);
    });
  });

  describe('createPost', () => {
    it('should create a new post', () => {
      appController.createPost('Post 1');
      expect(appController.getPost()).toHaveLength(1);
    });
  });
});
