import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

  constructor() { }

  getSizes(): ISize[] {
    return [
      {name: 'S', germany: 'S', chest: '100', waist: '98', arm: '62.5'},
      {name: 'M', germany: 'M', chest: '105', waist: '103', arm: '63.5'},
      {name: 'L', germany: 'L', chest: '110', waist: '108', arm: '64.5'},
      {name: 'XL', germany: 'XL', chest: '115', waist: '113', arm: '66.5'},
      {name: 'XXL', germany: 'XXL', chest: '120', waist: '118', arm: '67.5'},
      {name: 'XXXL', germany: 'XXXL', chest: '125', waist: '123', arm: '68.5'},
    ];
  }

}

export interface ISize {
  name: string;
  germany: string;
  chest: string;
  arm: string;
  waist: string;
}
