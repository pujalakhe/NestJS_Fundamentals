import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers() {
    console.log('Controller reached');

    return ['Ram', 'Hari', 'Sita'];
  }

  @Get('profile')
  profile() {
    return {
      name: 'John Doe',
      role: 'Developer',
    };
  }
}
