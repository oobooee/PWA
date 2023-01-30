import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from './courses/course-page/course-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';

const routes: Routes = [{path: 'ro_courses', component: CoursePageComponent},
                        {path: '', component: HomePageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log("AppRoutingModule created");
  }
}
