import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MycoursesRoutingModule } from './mycourses-routing.module';

import { MycoursesPageComponent } from './mycourses-page/mycourses-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MycoursesPageComponent
  ],
  imports: [
    
    CommonModule,
    MycoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class MycoursesModule {

  constructor() {
    console.log("MycoursesModule created")
  }

}
