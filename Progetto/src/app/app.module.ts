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
import { HighlightDirective } from './commons/directives/highlight.directive';
import { EmailValidatorDirective } from './commons/directives/email-validator.directive';
import { TextValidatorDirective } from './commons/directives/text-validator.directive';
import {HttpClientModule} from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthService } from './shared/services/auth.service';
import { CatalogComponent } from './catalog/catalog.component';




// export function tokenGetter() {
//   let loginStored: LoginResult;

//   let loginStr: string | null = localStorage.getItem(
//     AppConstants.LOGIN_STORAGE
//     );
  
//   if (loginStr !== '' && loginStr !== null && loginStr !== undefined){
//     loginStored = JSON.parse(loginStr);
  
//   } else {
//     return '';
//   }
//   return localStorage.getItem("access_token");
// }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    CarouselComponent,
    HighlightDirective,
    EmailValidatorDirective,
    TextValidatorDirective,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    CatalogComponent

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
       // tokenGetter: tokenGetter,
        allowedDomains: ['localhost:8080/progetto/rest']
        //disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
    //StoreModule.forRoot(appReducers),
    //EffectsModule.forRoot( [MyCoursesEffects] ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    //provideDatabase(() => getDatabase()),
    AngularFirestoreModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("AppModule created");
     
    
    


  }


  
}
