import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoriesService} from '../services/categories.service';
import {Category} from '../models/Category.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public category: Category[];
  public length: number;

  constructor(private httpClient: HttpClient, private categori: CategoriesService, private router: Router) {
    this.categori.getCategories()
      .subscribe(
        (data: Category[]) => {
          this.category = data;
          console.log(data);
        }, (error) =>  {
          console.log(error);
        }
      );
  }

  ngOnInit() {

  }
}
