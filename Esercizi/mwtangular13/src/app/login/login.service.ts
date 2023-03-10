import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs/internal/Observable';
import { AppConstants } from '../app.constants';
import { LoginData } from './login-data.model';
import { LoginResult } from './login-result.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService
  ) {}

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

    const token = login.token;
    let tokenExpired: boolean = false;

    console.log('DECODED TOKEN: ' + this.jwtHelper.decodeToken(token));

    if (this.jwtHelper.isTokenExpired(token)) {
      localStorage.setItem(AppConstants.LOGIN_STORAGE, '');
      tokenExpired = true;
    }

    // Check whether the token is expired and return
    // true or false
    return !tokenExpired;
  }

  public logout() {
    localStorage.setItem(AppConstants.LOGIN_STORAGE, '');
  }
}
