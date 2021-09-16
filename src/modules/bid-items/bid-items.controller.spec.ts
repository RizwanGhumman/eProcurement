import { Test, TestingModule } from '@nestjs/testing';
import { BidItemsController } from './bid-items.controller';
import { BidItemsService } from './bid-items.service';

describe('BidItemsController', () => {
  let controller: BidItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BidItemsController],
      providers: [BidItemsService],
    }).compile();

    controller = module.get<BidItemsController>(BidItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
