import { Test, TestingModule } from '@nestjs/testing';
import { CancelOrderController } from './cancel-order.controller';

describe('CancelOpenOrdersController', () => {
  let controller: CancelOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CancelOrderController],
    }).compile();

    controller = module.get<CancelOrderController>(CancelOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
