import {Images} from './Images.model';

export class Product {
  constructor(public id: number,
              public description: string,
              public title: string,
              public unitsInStock: number,
              public price: number,
              public images: Images,
              public parametrs: string,
              public ratings: [],
              ) {}
}
