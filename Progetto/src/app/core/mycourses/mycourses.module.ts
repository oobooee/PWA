import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MycoursesRoutingModule } from './mycourses-routing.module';

import { MycoursesPageComponent } from './mycourses-page/mycourses-page.component';




@NgModule({
  declarations: [
    MycoursesPageComponent
  ],
  imports: [
    CommonModule,
    MycoursesRoutingModule,

  ]
})
export class MycoursesModule {

  constructor() {
    console.log("MycoursesModule created")
  }

}
