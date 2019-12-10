import { Test, TestingModule } from '@nestjs/testing';
import { DanceoffsController } from './danceoffs.controller';

describe('Danceoffs Controller', () => {
  let controller: DanceoffsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DanceoffsController],
    }).compile();

    controller = module.get<DanceoffsController>(DanceoffsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
