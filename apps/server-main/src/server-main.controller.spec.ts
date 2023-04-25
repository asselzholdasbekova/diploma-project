import { Test, TestingModule } from '@nestjs/testing';
import { ServerMainController } from './server-main.controller';
import { ServerMainService } from './server-main.service';

describe('ServerMainController', () => {
  let serverMainController: ServerMainController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServerMainController],
      providers: [ServerMainService],
    }).compile();

    serverMainController = app.get<ServerMainController>(ServerMainController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(serverMainController.getHello()).toBe('Hello World!');
    });
  });
});
