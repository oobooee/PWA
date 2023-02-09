import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from './courses/course-page/course-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { ObservablePageComponent } from './observables/observable-page/observable-page.component';
import { AuthGuardService } from './login/login-page/auth-guard.service';
import { PipePageComponent } from './pipes/pipe-page/pipe-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'observables', component: ObservablePageComponent},
  {path: 'pipes', component: PipePageComponent},
  { path: 'admin-ops', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule), canLoad:[AuthGuardService] },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), canLoad:[AuthGuardService] }];
  //canActivate:[AuthGuardService] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log("AppRoutingModule created");
  }
}
