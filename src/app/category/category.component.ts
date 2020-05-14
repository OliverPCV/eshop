import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoriesService} from '../services/categories.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../models/Category.model';
import {CategoryPage} from '../models/CategoryPage.model';
import {Product} from '../models/Product.model';
import {ProductsService} from '../services/products.service';
import {Images} from '../models/Images.model';
import * as md from 'markdown-it';
import {Ratings} from "../models/Ratings.model";

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
  public ratingOfProduct: number[];
  public avgRatingsArr: number[];
  public sum: number;
  public avgRatingsNumber: Ratings[];
  public ratingNumber: number;


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
        this.description = data.category.description;
        this.productArr = data.products;
        // tslint:disable-next-line:prefer-for-of

        const result = md().renderInline(this.description);
        this.description = result;
        console.log(this.productArr);

      });
    });
  }

  getProduct(id: number) {
    this.router.navigate(['/product'], {queryParams: {id}});
  }

}
