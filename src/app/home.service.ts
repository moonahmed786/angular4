import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  constructor() { }
cars = [
  'Ford','Honda','Suzuki'
];

myData()
  {
    return 'This is my data, man!';
  }

}
