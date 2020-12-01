import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizedRoutingModule } from './authorized-routing.module';
import { AuthorizedComponent } from './authorized.component';


@NgModule({
  declarations: [AuthorizedComponent],
  imports: [
    CommonModule,
    AuthorizedRoutingModule
  ]
})
export class AuthorizedModule { }
