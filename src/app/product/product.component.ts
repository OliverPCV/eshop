import { Component, OnInit } from '@angular/core';
import {CategoryPage} from "../models/CategoryPage.model";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../services/products.service";
import {ProductPage} from '../models/ProductPage.model';
import {Product} from '../models/Product.model';
import {Ratings} from "../models/Ratings.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public description: string;
  public title: string;
  public product: Product;
  public ratings: Ratings[];
  public avgRatingsArr: number[];
  public sum: number;
  public avgRatingsNumber: number;


  constructor(private activatedRoute: ActivatedRoute, private products: ProductsService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(i => {
      this.products.getProduct(i.id).subscribe((data: Product) => {
        console.log(data);
        this.product = data;
        this.ratings = data.ratings;
        this.avgRatingsArr = this.ratings.map(l => l.percent);
        this.sum = this.avgRatingsArr.reduce((a, b) => a + b, 0);
        this.avgRatingsNumber = this.sum / this.ratings.length;
      });
    });
  }

}
