import { Test, TestingModule } from '@nestjs/testing';
import { DeleteOneOrderSymbolController } from './delete-one-order-symbol.controller';

describe('DeleteOneOrderSymbolController', () => {
  let controller: DeleteOneOrderSymbolController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteOneOrderSymbolController],
    }).compile();

    controller = module.get<DeleteOneOrderSymbolController>(DeleteOneOrderSymbolController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
