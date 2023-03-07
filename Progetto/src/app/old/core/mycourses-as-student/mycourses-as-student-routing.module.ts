import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycoursesAsStudentComponent } from './mycourses-as-student-page/mycourses-as-student.component';

const routes: Routes = [{ path: '', component: MycoursesAsStudentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MycoursesAsStudentRoutingModule { 


  constructor(){
  }
  ngOnDestroy(): void {
    console.log("MycoursesAsStudentRoutingModule destroyed")
  }
  ngOnInit(): void {
    console.log("MycoursesAsStudentRoutingModule created")
  }

  }

