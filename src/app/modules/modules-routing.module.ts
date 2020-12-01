import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ModulesComponent} from "./modules.component";


const routes: Routes = [
  {
    path: '', component: ModulesComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: () => import('./unauthorized/unauthorized.module').then(m => m.UnauthorizedModule)},
      {path: 'admin', loadChildren: () => import('./authorized/authorized.module').then(m => m.AuthorizedModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule {
}
