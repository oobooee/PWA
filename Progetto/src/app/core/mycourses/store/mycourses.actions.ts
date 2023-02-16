import { Action } from '@ngrx/store';
import { MyCourses } from '../model/MyCourses';
import { MyCourseDetail } from '../model/MyCourseDetails';

export enum EMyCoursesActions {
  SHOW_ALL = '[MyCourses] Show All',
  SHOW_ALL_SUCCESS = '[MyCourses] Show All Success',
  SHOW_DETAIL =' [MyCourseDetail] Show detail ',
  SHOW_DETAIL_SUCCESS =' [MyCourseDetail] Show detail success',
  CREATE = '[MyCourses] Create',
  CREATE_SUCCESS = '[MyCourses] Create Success',
  CREATE_FAILURE = '[MyCourses] Create Failure'
}

export class ShowAllAction implements Action {
  readonly type = EMyCoursesActions.SHOW_ALL;
}
export class ShowAllSuccessAction implements Action {
  readonly type = EMyCoursesActions.SHOW_ALL_SUCCESS;
  constructor(public payload: MyCourses[]) {}
}
export class ShowDetailAction implements Action {
  readonly type = EMyCoursesActions.SHOW_DETAIL;
  constructor(public payload: MyCourses) {}
}

export class ShowDetailSuccessAction implements Action {
  readonly type = EMyCoursesActions.SHOW_DETAIL_SUCCESS;
  constructor(public payload: MyCourses) {}
}

export class CreateAction implements Action {
  readonly type = EMyCoursesActions.CREATE;
  constructor(public payload: MyCourses) {}
}
export class CreateSuccessAction implements Action {
  readonly type = EMyCoursesActions.CREATE_SUCCESS;
  constructor(public payload: MyCourses) {}
}
export class CreateFailureAction implements Action {
  readonly type = EMyCoursesActions.CREATE_FAILURE;
  constructor(public payload: any) {}
}

export type ALL_REDUCER_ACTIONS = ShowAllSuccessAction | CreateSuccessAction | CreateFailureAction | ShowDetailSuccessAction | ShowDetailAction;
