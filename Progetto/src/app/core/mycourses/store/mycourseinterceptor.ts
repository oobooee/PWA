import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, catchError, of } from "rxjs";
import { AppState } from "src/app/store/app.states";
import { AddErrors } from "./mycourses.actions";

@Injectable() 
export class MyCourseInterceptor implements HttpInterceptor{

    constructor(private store: Store<AppState>){

    }

intercept(
    req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((response: HttpErrorResponse) => {
        if ([401, 422, 500].includes(response.status)) {
          this.store.dispatch(new AddErrors(response.error));
        }
        return of(response.error);

      }));


  }
}