import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthorizedComponent } from './unauthorized.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { PhonesComponent } from './home/phones/phones.component';


const routes: Routes = [
  {
    path: '', component: UnauthorizedComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'cart', component: CartComponent },
      { path: 'product/:id', component: PhonesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnauthorizedRoutingModule {
}
