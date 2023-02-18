import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { exhaustMap, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
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
} from './mycourses.actions';


import { MyCourses } from '../model/MyCourses';
import { MyCoursesService } from '../service/mycourses.service';
import { MyCourseDetail } from '../model/MyCourseDetails';
import { Teacher } from '../model/Teacher';

@Injectable()
export class MyCoursesEffects {
  constructor(private actions$: Actions, private mycoursesService: MyCoursesService) {

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
      switchMap((mycoursdetailresp: MyCourseDetail) => of (new ShowDetailSuccessAction(mycoursdetailresp)))
    );
  });

  loadTeacher$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType<GetTeacherAction>(EMyCoursesActions.GET_TEACHER),
      switchMap(() => this.mycoursesService.getUserDetailsService()),
      switchMap((teacherresp: Teacher) => of (new GetTeacherSuccessAction(teacherresp)))
    );
  });

  patchCourse$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType<PatchCourseAction>(EMyCoursesActions.PATCH_COURSE),
      switchMap((action) => this.mycoursesService.patchCourseService(action.payload)),
      switchMap((patchedresp: number) => of (new PatchCourseSuccessAction(patchedresp)))
    );
  });

  
}
