import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements  CanLoad{
  constructor(public auth: LoginService, public router: Router) { 

    
  }

  
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }  

  // canActivate(): boolean {
  //   if (!this.auth.isAuthenticated()) {
  //     this.router.navigate(['login']);
  //     return false;
  //   }
  //   return true;
  // }
}

/*
@Injectable({
    providedIn: 'root'
  })
  export class AuthGuardService implements CanLoad { //, CanActivate
    constructor(public auth: LoginService, public router: Router) { }
  
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if (!this.auth.isAuthenticated()) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
    }
  
    canActivate(): boolean {
      if (!this.auth.isAuthenticated()) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
    }
  }
  */
