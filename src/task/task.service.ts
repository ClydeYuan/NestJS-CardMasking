import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';

@Injectable()
export class TaskService {
  myCardNumbers = [];

  createCar(color, age) {
    console.log(color, age);
    return color + ' ' + age;
  }
  getCar() {
    return 'Nest JS Hello World from Dale';
  }

  createCard(number) {
    const value = number;
    const cardNumberLength = value.length;
    if (cardNumberLength != 16) {
      throw new BadRequestException('Your card number is invalid');
    } else {
      const mask = (str, num, mask) =>
        `${str}`.slice(num).padStart(`${str}`.length, mask);
      const maskCardNumber = mask(number, 12, '*');
      this.myCardNumbers.push(maskCardNumber);
      return 'Your masked card number is ' + maskCardNumber;
    }
  }

  getCard() {
    return this.myCardNumbers;
  }
}
