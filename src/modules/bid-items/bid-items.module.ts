import { Module } from '@nestjs/common';
import { BidItemsService } from './bid-items.service';
import { BidItemsController } from './bid-items.controller';

@Module({
  controllers: [BidItemsController],
  providers: [BidItemsService]
})
export class BidItemsModule {}
