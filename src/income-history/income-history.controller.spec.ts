import { Test, TestingModule } from '@nestjs/testing';
import { IncomeHistoryController } from './income-history.controller';

describe('IncomeHistoryController', () => {
  let controller: IncomeHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncomeHistoryController],
    }).compile();

    controller = module.get<IncomeHistoryController>(IncomeHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
