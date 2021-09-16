import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseRequestItemController } from './purchase-request-item.controller';
import { PurchaseRequestItemService } from './purchase-request-item.service';

describe('PurchaseRequestItemController', () => {
  let controller: PurchaseRequestItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseRequestItemController],
      providers: [PurchaseRequestItemService],
    }).compile();

    controller = module.get<PurchaseRequestItemController>(PurchaseRequestItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
