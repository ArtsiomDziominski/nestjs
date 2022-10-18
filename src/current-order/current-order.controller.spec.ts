import { Test, TestingModule } from '@nestjs/testing';
import { CurrentOrderController } from './current-order.controller';

describe('CurrentOrderController', () => {
  let controller: CurrentOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrentOrderController],
    }).compile();

    controller = module.get<CurrentOrderController>(CurrentOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
