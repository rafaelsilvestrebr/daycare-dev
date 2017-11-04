import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }
  cars = [
    'Ford', 'Chevrolet', 'Buick'
  ];


  myData() {
    return 'This is my data, man!';
  }

  someMethod() {
    return 'Hey!';
}
}
