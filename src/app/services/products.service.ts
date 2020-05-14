import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Host from '../Host';
import {CategoryPage} from '../models/CategoryPage.model';
import {Product} from '../models/Product.model';
import {Images} from '../models/Images.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { }

  getProduct(id: number) {
    const headers = new HttpHeaders().set('access-token', Host.token);

    return this.http.get<Product>('/api/products/' + id, {headers});
  }

  getProductRating() {

  }
}


