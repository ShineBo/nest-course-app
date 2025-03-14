import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return this.appService.getHello();
  }
  @Get('/name')
  showName(): string {
    return this.appService.getName();
  }
  @Get('/about')
  showAbout(): string {
    return this.appService.getAbout();
  }
  @Get('/showInformation')
  showInfo(): string {
    return this.appService.showInfo();
  }
  @Get('/showJSON')
  getJSON() {
    return this.appService.getJSON();
  }
  @Get('/github')
  displayGithub() {
    return this.appService.displayGithub();
  }
  @Get('/usePostman')
  usePostman() {
    return this.appService.usePostman();
  }
}
