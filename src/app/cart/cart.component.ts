import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../services/products.service';
import {Product} from '../models/Product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public arr = [];
  public finalPrice: number;
  constructor(private activatedRoute: ActivatedRoute, private products: ProductsService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(i => {
      this.products.getProduct(i.id).subscribe((data: Product) => {
        this.arr.push(data);
        localStorage.setItem('product', JSON.stringify(this.arr));
        const jsonProduct = localStorage.getItem('product');
        this.arr = JSON.parse(jsonProduct);

      });
    });
    const jsonProduct2 = localStorage.getItem('product');
    this.arr = JSON.parse(jsonProduct2);
    const result  =  this.arr.map(res => res.price).reduce((acc, ele) => acc + ele, 0);
    this.finalPrice = result;

  }
  getProduct(id: number) {
    this.router.navigate(['/product'], {queryParams: {id}});
  }

}
