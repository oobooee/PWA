import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { CoursePageComponent } from './courses/course-page/course-page.component';
import { CourseComponent } from './courses/course/course.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { CarouselComponent } from './commons/carousel/carousel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { HighlightDirective } from './commons/directives/highlight.directive';
import { EmailValidatorDirective } from './commons/directives/email-validator.directive';
import { TextValidatorDirective } from './commons/directives/text-validator.directive';
import {HttpClientModule} from '@angular/common/http';
import { ObservablePageComponent } from './observables/observable-page/observable-page.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginResult } from './login/login-page/login-result.model';
import { AppConstants } from './app.constants';


export function tokenGetter() {
  let loginStored: LoginResult;

  let loginStr: string | null = localStorage.getItem(
    AppConstants.LOGIN_STORAGE
    );
  
  if (loginStr !== '' && loginStr !== null && loginStr !== undefined){
    loginStored = JSON.parse(loginStr);
  
  } else {
    return '';
  }
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoursePageComponent,
    CourseComponent,
    HomePageComponent,
    CarouselComponent,
    LoginPageComponent,
    HighlightDirective,
    EmailValidatorDirective,
    TextValidatorDirective,
    ObservablePageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:8080/progetto/rest']
        //disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("AppModule created");

    
  }
}
