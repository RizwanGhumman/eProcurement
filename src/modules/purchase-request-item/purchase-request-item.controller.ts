import { Controller } from '@nestjs/common';
import { PurchaseRequestItemService } from './purchase-request-item.service';

@Controller('purchase-request-item')
export class PurchaseRequestItemController {
  constructor(private readonly purchaseRequestItemService: PurchaseRequestItemService) {}
}
