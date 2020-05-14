import {Product} from "./Product.model";

export class Ratings {
  constructor(public id: number,
              public fullName: string,
              public percent: number,
              public description: string,
              public products: Product[]
  ) {}
}
