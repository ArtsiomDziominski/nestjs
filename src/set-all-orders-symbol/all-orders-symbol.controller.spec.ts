import { Test, TestingModule } from '@nestjs/testing';
import { AllOrdersSymbolController } from './all-orders-symbol.controller';

describe('AllOrdersSymbolController', () => {
  let controller: AllOrdersSymbolController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllOrdersSymbolController],
    }).compile();

    controller = module.get<AllOrdersSymbolController>(AllOrdersSymbolController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
