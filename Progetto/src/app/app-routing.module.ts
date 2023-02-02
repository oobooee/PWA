import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from './courses/course-page/course-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'ro_courses', component: CoursePageComponent},
  {path: 'login', component: LoginPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log("AppRoutingModule created");
  }
}
