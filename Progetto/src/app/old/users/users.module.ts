import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { UsersPageComponent } from './users-page/users-page.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    UsersComponent,
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { 
  constructor(){
    console.log("UsersModule created")
   }
}
