import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MycoursesAsStudentRoutingModule } from './mycourses-as-student-routing.module';
import { MycoursesAsStudentComponent } from './mycourses-as-student-page/mycourses-as-student.component';


@NgModule({
  declarations: [
    MycoursesAsStudentComponent
  ],
  imports: [
    CommonModule,
    MycoursesAsStudentRoutingModule
  ]
})
export class MycoursesAsStudentModule { }
