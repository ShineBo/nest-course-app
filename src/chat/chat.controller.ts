import { Controller, Get } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(
    private readonly utilityService: UtilityService,
    private readonly chatService: ChatService,
  ) {}

  @Get('/shared')
  sharedFunc(): string {
    return this.utilityService.shareFunc();
  }
}
