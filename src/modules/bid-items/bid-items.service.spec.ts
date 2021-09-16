import { Test, TestingModule } from '@nestjs/testing';
import { BidItemsService } from './bid-items.service';

describe('BidItemsService', () => {
  let service: BidItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BidItemsService],
    }).compile();

    service = module.get<BidItemsService>(BidItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
