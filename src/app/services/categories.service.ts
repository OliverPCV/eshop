import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Host from '../Host';
import {Category} from '../models/Category.model';
import {CategoryPage} from '../models/CategoryPage.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories() {
    const headers = new HttpHeaders().set('access-token', Host.token);

    return this.http.get<Category[]>('/api/categories', {headers});
  }
  getCategory(id: number) {
    const headers = new HttpHeaders().set('access-token', Host.token);

    return this.http.get<CategoryPage>('/api/categories/' + id, {headers});
  }
  getProductPage(id: number, page: number) {
    const headers = new HttpHeaders()
      .set('access-token', Host.token);

    return this.http.get<CategoryPage>('/api/categories/' + id + '/?page=' + page, {headers});
  }


}
