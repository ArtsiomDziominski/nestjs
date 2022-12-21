import { Test, TestingModule } from '@nestjs/testing';
import { MarketOrderController } from './market-order.controller';

describe('MarketOrderController', () => {
  let controller: MarketOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarketOrderController],
    }).compile();

    controller = module.get<MarketOrderController>(MarketOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
