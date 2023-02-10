import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MycoursesRoutingModule } from './mycourses-routing.module';

import { MycoursesPageComponent } from './mycourses-page/mycourses-page.component';
import { MycoursesComponent } from './mycourses/mycourses.component';


@NgModule({
  declarations: [
    MycoursesPageComponent,
    MycoursesComponent
  ],
  imports: [
    CommonModule,
    MycoursesRoutingModule
  ]
})
export class MycoursesModule { 

  constructor(){
    console.log("MycoursesModule created")
   }

}
