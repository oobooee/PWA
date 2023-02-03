import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from './courses/course-page/course-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { ObservablePageComponent } from './observables/observable-page/observable-page.component';
import { AuthGuardService } from './login/login-page/auth-guard.service';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'admin-ops', component: CoursePageComponent, canActivate:[AuthGuardService]},
  {path: 'login', component: LoginPageComponent},
  {path: 'observables', component: ObservablePageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log("AppRoutingModule created");
  }
}
