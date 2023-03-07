import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursePageComponent } from './course-page/course-page.component';
import { CourseComponent } from './course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    CoursePageComponent,
    CourseComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule, 
    FormsModule, 
    NgbModule
  ]
})
export class CoursesModule {
   constructor(){
    console.log("CoursesModule created")
   }

}