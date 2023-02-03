import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './commons/header/header.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { HighlightDirective } from './commons/directives/highlight.directive';
import { EmailValidatorDirective } from './commons/directives/email-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { ObservablePageComponent } from './observables/observable-page/observable-page.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginResult } from './login/login-result.model';
import { AppConstants } from './app.constants';
import { PipePageComponent } from './pipes/pipe-page/pipe-page.component';
import { ExponentialStrengthPipe } from './commons/pipes/exponential-strength.pipe';

export function tokenGetter() {
  let loginStored: LoginResult;

  let loginStr: string | null = localStorage.getItem(
    AppConstants.LOGIN_STORAGE
  );

  if (loginStr !== '' && loginStr !== null && loginStr !== undefined) {
    loginStored = JSON.parse(loginStr);
  } else {
    return '';
  }

  return loginStored.token;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    LoginPageComponent,
    HighlightDirective,
    EmailValidatorDirective,
    ObservablePageComponent,
    PipePageComponent,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:7070']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { 
  constructor() { 
    console.log("AppModule created.");
  }
}
