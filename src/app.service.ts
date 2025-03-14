import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { message: 'My Love Giselle' };
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
      user: {
        name: 'Shine Bo',
        lastname: 'Bo',
        age: 22,
        hobby: 'photography',
        version: process.env.API_VERSION || '1.0',
      },
    };
  }
  displayGithub() {
    return `Git and Github are awesome!`;
  }
  usePostman() {
    return `We use Postman for API testing!`;
  }
}
