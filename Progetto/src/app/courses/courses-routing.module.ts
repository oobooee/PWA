import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from './course-page/course-page.component';


const routes: Routes = [{ path: '', component: CoursePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {

  constructor(){
    console.log("CoursesRoutingModule created")
  }
 }
