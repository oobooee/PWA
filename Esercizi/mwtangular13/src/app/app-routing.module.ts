import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPageComponent } from './books/book-page/book-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AuthGuardService } from './login/auth-guard.service';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { ObservablePageComponent } from './observables/observable-page/observable-page.component';
import { PipePageComponent } from './pipes/pipe-page/pipe-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'observables', component: ObservablePageComponent },
  { path: 'pipes', component: PipePageComponent },
  { path: 'books', 
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule), 
    canLoad : [AuthGuardService] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() { 
    console.log("AppRoutingModule created.");
  }
 }
