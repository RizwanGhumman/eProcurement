import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseRequestItemService } from './purchase-request-item.service';

describe('PurchaseRequestItemService', () => {
  let service: PurchaseRequestItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseRequestItemService],
    }).compile();

    service = module.get<PurchaseRequestItemService>(PurchaseRequestItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
