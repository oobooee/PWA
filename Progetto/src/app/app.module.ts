import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';

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
import { PipePageComponent } from './pipes/pipe-page/pipe-page.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './store/app.reducers';
import { MyCoursesEffects } from './core/mycourses/store/mycourses.effects';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';




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
    HomePageComponent,
    CarouselComponent,
    LoginPageComponent,
    HighlightDirective,
    EmailValidatorDirective,
    TextValidatorDirective,
    ObservablePageComponent,
    PipePageComponent,

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
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot( [MyCoursesEffects] ),
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    AngularFirestoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("AppModule created");
     
    
    


  }


  
}
