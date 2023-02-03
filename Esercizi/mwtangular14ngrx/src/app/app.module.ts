import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { MoviePageComponent } from './movies/movie-page/movie-page.component';
import { HeaderComponent } from './commons/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { HttpClientModule } from '@angular/common/http';
import { MovieEffects } from './movies/store/movie-effects.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MoviePageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot( [MovieEffects] ),
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
