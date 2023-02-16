import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import {
  ShowAllAction,
  EMyCoursesActions,
  ShowAllSuccessAction,
  ShowDetailAction,
  ShowDetailSuccessAction,
} from './mycourses.actions';


import { MyCourses } from '../model/MyCourses';
import { MyCoursesService } from '../service/mycourses.service';
import { MyCourseDetail } from '../model/MyCourseDetails';

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
      ofType<ShowDetailAction>(EMyCoursesActions.SHOW_DETAIL),
      switchMap(() => this.mycoursesService.getCourseDetailService(id_corso)),
      switchMap((mycoursdetailresp: MyCourseDetail) => 
      of (new ShowDetailSuccessAction(mycoursdetailresp)))
    );
  });

  
}
