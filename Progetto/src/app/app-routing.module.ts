import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { ObservablePageComponent } from './observables/observable-page/observable-page.component';
import { AuthGuardService } from './login/login-page/auth-guard.service';
import { PipePageComponent } from './pipes/pipe-page/pipe-page.component';
import { AuthGuardServiceUser } from './login/login-page/auth-guard-user.service';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'observables', component: ObservablePageComponent },
  { path: 'pipes', component: PipePageComponent },
  { path: 'admin-ops', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule), canLoad: [AuthGuardService] },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), canLoad: [AuthGuardService] },
  { path: 'mycourses', loadChildren: () => import('./core/mycourses/mycourses.module').then(m => m.MycoursesModule), canLoad: [AuthGuardServiceUser] },
  { path: 'mycoursesAsStudent', loadChildren: () => import('./core/mycourses-as-student/mycourses-as-student.module').then(m => m.MycoursesAsStudentModule), canLoad: [AuthGuardServiceUser] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log("AppRoutingModule created");
  }
}
