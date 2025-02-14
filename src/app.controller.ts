import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
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
}
