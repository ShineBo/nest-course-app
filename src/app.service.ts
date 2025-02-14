import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'We Love NestJS!';
  }
  getName(): string {
    return `My name is Shine Bo Bo!`;
  }
  getAbout(): string {
    return `I am a software developer!`;
  }
  showInfo(): string {
    const age: number = 22;
    return `I am Shine Bo Bo, ${age} years old!`;
  }
  getJSON() {
    return {
      name: 'Shine Bo',
      lastname: 'Bo',
      age: 22,
      hobby: 'photography',
    };
  }
}
