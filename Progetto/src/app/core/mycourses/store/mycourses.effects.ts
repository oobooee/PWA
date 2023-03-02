import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import {
  CreateAction,
  CreateSuccessAction,
  EMyCoursesActions,
  GetTeacherAction,
  GetTeacherSuccessAction,
  ID,
  PatchCourseAction,
  PatchCourseSuccessAction,
  ShowAllAction,
  ShowAllSuccessAction,
  ShowDetailSuccessAction
} from './mycourses.actions';


import { HttpResponse } from '@angular/common/http';
import { AppState } from 'src/app/store/app.states';
import { MyCoursesService } from '../../../services/mycourses.service';
import { MyCourseDetail } from '../model/MyCourseDetails';
import { MyCourses } from '../model/MyCourses';
import { Teacher } from '../model/Teacher';
import { FireCourseServices } from 'src/app/services/firecourses.service';

@Injectable()
export class MyCoursesEffects {
  constructor(private actions$: Actions, private mycoursesService: MyCoursesService,
     private store: Store<AppState>,) {
      
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

  loadUser$: Observable<Action> = createEffect(() => {
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
      switchMap((patchedresp: HttpResponse<any>) => of(new PatchCourseSuccessAction(patchedresp)))
     
    );
  });

  

  postCourse$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType<CreateAction>(EMyCoursesActions.CREATE),
      switchMap((action) => this.mycoursesService.addCourseService(action.payload)),
      switchMap((patchedresp: HttpResponse<any>) => of(new CreateSuccessAction(patchedresp))),
     
    );
  });

 
      


}


// catchError((response: HttpHeaderResponse) => {
//   if ([401, 422, 500].includes(response.status)) {
//     this.store.dispatch(new AddErrors(response.error));
//   }
//   return of(response.error);

// })