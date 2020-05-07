import {Category} from './Category.model';

export class CategoryPage {
  constructor(public currentPage: number,
              public pagesCount: number,
              public category: Category) { }
}
