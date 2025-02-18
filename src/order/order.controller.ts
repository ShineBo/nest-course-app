import { Controller, Get } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(
    private readonly utilityService: UtilityService,
    private readonly chatService: OrderService,
  ) {}

  @Get('/shared')
  sharedFunc(): string {
    return this.utilityService.shareFunc();
  }
}
