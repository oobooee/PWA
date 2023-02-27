import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs/internal/Observable';
import { AppConstants } from '../app.constants';
import { LoginData } from '../login/login-page/login.model';
import { LoginResult } from '../login/login-page/login-result.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.states';
import { ResetStorage } from '../core/mycourses/store/mycourses.actions';

// chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  displayLoggedOut?: string;
  constructor(
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService,
    public router: Router,
    private store: Store<AppState>
  ) { }

  public login(loginData: LoginData): Observable<LoginResult> {

    return this.httpClient.post<LoginResult>(AppConstants.LOGIN_ENDPOINT, loginData);
  }

  public isAuthenticated(): boolean {
    let login: LoginResult;
    let loginStr: string | null = localStorage.getItem(
      AppConstants.LOGIN_STORAGE
    );
    if (loginStr !== '' && loginStr !== null && loginStr !== undefined) {
      login = JSON.parse(loginStr);
    } else {
      return false;
    }
    if (login.username == "user") {  //Da Sostituire user con role: admins 
      return false
    }
    else {
      //check token   
      const token = login.token;
      let tokenExpired: boolean = false;
      if (this.jwtHelper.isTokenExpired(token)) {
        localStorage.setItem(AppConstants.LOGIN_STORAGE, '');
        tokenExpired = true;
        this.httpClient.delete(token);
        console.log("token expired");
      }
      return !tokenExpired;
    }
  }

  public isAuthenticatedUser(): boolean {
    let login: LoginResult;
    let loginStr: string | null = localStorage.getItem(
      AppConstants.LOGIN_STORAGE
    );
    if (loginStr !== '' && loginStr !== null && loginStr !== undefined) {
      login = JSON.parse(loginStr);
    } else {
      return false;
    }
    if (login.username == "admin") {  //Da Sostituire admin con role: admins 
      return false
    }
    else {
      //check token   
      const token = login.token;
      let tokenExpired: boolean = false;
      if (this.jwtHelper.isTokenExpired(token)) {
        localStorage.setItem(AppConstants.LOGIN_STORAGE, '');
        tokenExpired = true;
        this.httpClient.delete(token);
        console.log("token expired");
      }
      return !tokenExpired;
    }
  }

  public logout() {

    localStorage.setItem(AppConstants.LOGIN_STORAGE, '');
    this.store.dispatch(new ResetStorage());
    window.location.reload;
    this.router.navigate(['']);

  }

  // public isTokenExpired() {
  //   this.displayLoggedOut = "displayLoggedOut"
  // }
}
