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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("AppModule created");
  }
}
