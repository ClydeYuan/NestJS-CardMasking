import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('v1')
export class TaskController {
  constructor(private thisIsMyTaskService: TaskService) {}

  @Post('/create-car')
  initializedCar(@Body('color') color, @Body('age') age) {
    return this.thisIsMyTaskService.createCar(color, age);
  }
  @Get('/get-car')
  getCar() {
    return this.thisIsMyTaskService.getCar();
  }

  @Post('/create-card')
  newCard(@Body('number') number) {
    return this.thisIsMyTaskService.createCard(number);
  } 
  @Post('/create-card-v2')
  newCards(@Body() reqbody) {
    console.log(reqbody);
    return this.thisIsMyTaskService.createCard(reqbody.number);
  }

  @Get('/get-card')
  getHello() {
    return this.thisIsMyTaskService.getCard();
  }
}
