import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {HotkeyModule} from 'angular2-hotkeys';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule) },
      { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


