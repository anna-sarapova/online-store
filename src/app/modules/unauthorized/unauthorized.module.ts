import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnauthorizedRoutingModule } from './unauthorized-routing.module';
import { UnauthorizedComponent } from './unauthorized.component';
import {SharedModule} from '../../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LearnMoreComponent } from './home/learn-more/learn-more.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { PhonesComponent } from './home/phones/phones.component';


@NgModule({
  declarations: [UnauthorizedComponent, HomeComponent, CartComponent, LearnMoreComponent, CategoriesComponent, PhonesComponent],
  imports: [
    CommonModule,
    SharedModule,
    UnauthorizedRoutingModule
  ]
})
export class UnauthorizedModule { }
