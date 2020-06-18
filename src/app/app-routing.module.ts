import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CategoryComponent} from './category/category.component';
import {ProductComponent} from './product/product.component';
import {CartComponent} from './cart/cart.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'product', component: ProductComponent},
  {path: 'cart', component: CartComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
