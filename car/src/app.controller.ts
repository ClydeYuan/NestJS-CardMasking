import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private buyingCar: AppService) {}

  @Post()

  @Get()
  getHello(): string {
    return this.buyingCar.getHello();
  }
}
