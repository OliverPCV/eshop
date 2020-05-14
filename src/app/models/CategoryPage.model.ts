import {Category} from './Category.model';
import {Product} from './Product.model';
import {Ratings} from "./Ratings.model";

export class CategoryPage {
  constructor(public currentPage: number,
              public pagesCount: number,
              public category: Category,
              public products: Product[],
              public ratings: Ratings[]) { }
}
