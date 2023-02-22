import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { Observable, of, timer } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import {
  ShowAllAction,
  EMyCoursesActions,
  ShowAllSuccessAction,
  ShowDetailAction,
  ShowDetailSuccessAction,
  ID,
  GetTeacherAction,
  GetTeacherSuccessAction,
  PatchCourseAction,
  PatchCourseSuccessAction,
  CreateAction,
  CreateSuccessAction,
  SaveOnStorage,
  SaveOnStorageSuccess,

} from './mycourses.actions';


import { MyCourses } from '../model/MyCourses';
import { MyCoursesService } from '../service/mycourses.service';
import { MyCourseDetail } from '../model/MyCourseDetails';
import { Teacher } from '../model/Teacher';
import { HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { AppState } from 'src/app/store/app.states';

@Injectable()
export class MyCoursesEffects {
  constructor(private actions$: Actions, private mycoursesService: MyCoursesService, private store: Store<AppState>) {

  }

  

  loadMyCourses$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType<ShowAllAction>(EMyCoursesActions.SHOW_ALL),
      switchMap(() => this.mycoursesService.getAllCoursesService()),
      switchMap((mycoursesresp: MyCourses[]) =>
        of(new ShowAllSuccessAction(mycoursesresp))
      )
    );
  });

  loadACourse$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType<ID>(EMyCoursesActions.ID),
      switchMap((action) => this.mycoursesService.getCourseDetailService(action.payload)),
      switchMap((mycoursdetailresp: MyCourseDetail) => of(new ShowDetailSuccessAction(mycoursdetailresp)))
    );
  });

  loadTeacher$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType<GetTeacherAction>(EMyCoursesActions.GET_TEACHER),
      switchMap(() => this.mycoursesService.getUserDetailsService()),
      switchMap((teacherresp: Teacher) => of(new GetTeacherSuccessAction(teacherresp)))
    );
  });

  patchCourse$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType<PatchCourseAction>(EMyCoursesActions.PATCH_COURSE),
      switchMap((action) => this.mycoursesService.patchCourseService(action.payload)),
      switchMap((patchedresp: HttpHeaderResponse) => of(new PatchCourseSuccessAction(patchedresp))),
     
    );
  });

  postCourse$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType<CreateAction>(EMyCoursesActions.CREATE),
      switchMap((action) => this.mycoursesService.addCourseService(action.payload)),
      switchMap((patchedresp: MyCourseDetail) => of(new CreateSuccessAction(patchedresp))),
     
    );
  });

 
      


}


// catchError((response: HttpHeaderResponse) => {
//   if ([401, 422, 500].includes(response.status)) {
//     this.store.dispatch(new AddErrors(response.error));
//   }
//   return of(response.error);

// })