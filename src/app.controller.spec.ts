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

  describe('root', () => {
    it('should return "Check out the documentation to further know how to use this API, have fun !"', () => {
      expect(appController.getApiInstructions()).toBe(
        'Check out the documentation to further know how to use this API, have fun !',
      );
    });
  });
});
