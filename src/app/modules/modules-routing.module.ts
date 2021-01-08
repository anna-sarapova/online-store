import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from "./modules.component";
import { CategoriesComponent } from './unauthorized/home/categories/categories.component';
import { PhonesComponent } from './unauthorized/home/phones/phones.component';

const routes: Routes = [
  {
    path: '', component: ModulesComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./unauthorized/unauthorized.module').then(m => m.UnauthorizedModule) },
      { path: 'admin', loadChildren: () => import('./authorized/authorized.module').then(m => m.AuthorizedModule) },
      {
        path: 'category', component: CategoriesComponent,
        children: [
          {path: ':id', component: PhonesComponent}
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule {
}
