import { Injectable } from '@nestjs/common';

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
    const mask = (str, num, mask) =>
      `${str}`.slice(num).padStart(`${str}`.length, mask);

    const maskCardNumber = mask(number, 12, '*');
    this.myCardNumbers.push(maskCardNumber);
    return ' This is Nest JS file Your masked card number is ' + maskCardNumber;
  }

  getCard() {
    return this.myCardNumbers;
  }
}
