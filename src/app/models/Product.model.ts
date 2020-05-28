import {Images} from './Images.model';
import {Ratings} from './Ratings.model';

export class Product {
  constructor(public id: number,
              public description: string,
              public title: string,
              public unitsOnStock: number,
              public price: number,
              public images: Images,
              public parameters: string,
              public ratings: Ratings[],
              ) {}
}
