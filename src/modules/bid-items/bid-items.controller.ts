import { Controller } from '@nestjs/common';
import { BidItemsService } from './bid-items.service';

@Controller('bid-items')
export class BidItemsController {
  constructor(private readonly bidItemsService: BidItemsService) {}
}
