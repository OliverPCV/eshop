import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoriesService} from '../services/categories.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryPage} from '../models/CategoryPage.model';
import {Product} from '../models/Product.model';
import {ProductsService} from '../services/products.service';
import * as md from 'markdown-it';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public name: string;
  public description: string;
  public product: Product;
  public productArr: Product[];
  public categoryId: number;
  public ratingNumber: number;
  public pagesCount: number;

  constructor(private http: HttpClient,
              private category: CategoriesService,
              private activatedRoute: ActivatedRoute,
              private products: ProductsService,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(i => {
      this.category.getCategory(i.id).subscribe((data: CategoryPage) => {
        console.log(data);
        this.name = data.category.name;
        this.categoryId = data.category.id;
        this.description = data.category.description;
        this.productArr = data.products;
        this.pagesCount = data.pagesCount + 1;
        const result = md().renderInline(this.description);
        this.description = result;
      });
    });
  }
  get pageCount(): Array<number> {
    console.log(Array.from(new Array(this.pagesCount).keys()));
    return Array.from(new Array(this.pagesCount).keys());
  }
  loadPage(id: number, page: number) {
      this.category.getProductPage(id, page).subscribe(
          (data: CategoryPage) => {
            console.log(data);
            this.productArr = data.products;

          }, (error) => {

          }
        );
      console.log(page);
  }

  getProduct(id: number) {
    this.router.navigate(['/product'], {queryParams: {id}});
  }

}
