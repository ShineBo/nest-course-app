import { Controller, Get } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly utilityService: UtilityService,
    private readonly userService: UserService,
  ) {}

  @Get('/shared')
  sharedFunc(): string {
    return this.utilityService.shareFunc();
  }
}
