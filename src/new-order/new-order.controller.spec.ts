import { Test, TestingModule } from '@nestjs/testing';
import { NewOrderController } from './new-order.controller';

describe('NewOrderController', () => {
  let controller: NewOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewOrderController],
    }).compile();

    controller = module.get<NewOrderController>(NewOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
