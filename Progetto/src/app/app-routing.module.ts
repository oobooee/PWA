import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
//import { LoginPageComponent } from './login/login-page/login-page.component';
//import { ObservablePageComponent } from './observables/observable-page/observable-page.component';
//import { AuthGuardService } from './login/login-page/auth-guard.service';
//import { PipePageComponent } from './pipes/pipe-page/pipe-page.component';
//import { AuthGuardServiceUser } from './login/login-page/auth-guard-user.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { CatalogComponent } from './catalog/catalog.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', redirectTo:'/sign-in', },   //component: LoginPageComponent 
 // { path: 'observables', component: ObservablePageComponent },
//  { path: 'pipes', component: PipePageComponent },
  //{ path: 'admin-ops', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule), canLoad: [AuthGuardService] },
  //{ path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), canLoad: [AuthGuardService] },
 // { path: 'mycourses', loadChildren: () => import('./core/mycourses/mycourses.module').then(m => m.MycoursesModule), canLoad: [AuthGuardServiceUser] },
 // { path: 'mycoursesAsStudent', loadChildren: () => import('./core/mycourses-as-student/mycourses-as-student.module').then(m => m.MycoursesAsStudentModule), canLoad: [AuthGuardServiceUser] },
  { path: 'sign-in', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard], },
  { path: 'register-user', component: SignUpComponent },
  { path: 'catalog', component: CatalogComponent },


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
