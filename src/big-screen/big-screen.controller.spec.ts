import { Test, TestingModule } from '@nestjs/testing';
import { BigScreenController } from './big-screen.controller';

describe('BigScreenController', () => {
  let controller: BigScreenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BigScreenController],
    }).compile();

    controller = module.get<BigScreenController>(BigScreenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
