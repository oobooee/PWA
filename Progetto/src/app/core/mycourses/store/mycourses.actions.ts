import { Action } from '@ngrx/store';
import { MyCourses } from '../model/MyCourses';
import { MyCourseDetail } from '../model/MyCourseDetails';
import { Teacher } from '../model/Teacher';
import { HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse } from '@angular/common/http';

export enum EMyCoursesActions {
  SHOW_ALL = '[MyCourses] Show All',
  SHOW_ALL_SUCCESS = '[MyCourses] Show All Success',
  SHOW_DETAIL =' [MyCourseDetail] Show detail ',
  SHOW_DETAIL_SUCCESS =' [MyCourseDetail] Show detail success',
  ID = '[ID ] Show id success',
  GET_TEACHER = '[Teacher ] Get teacher ',
  GET_TEACHER_SUCCESS = '[Teacher ] Get teacher success',
  PATCH_COURSE = '[MyCourses ] Patch course ',
  PATCH_COURSE_SUCCESS = '[HttpHeaderResponse ] Patch course success',
  SAVE_ON_STORAGE = ' [MyCourseDetailssssss] Save On Storage',
  SAVE_ON_STORAGE_SUCCESS =  '[MyCourseDetails] Saved On Storage',
  CREATE = '[MyCourses] Create',
  CREATE_SUCCESS = '[MyCourses] Create Success',
  CREATE_FAILURE = '[MyCourses] Create Failure',
  RESET_STORAGE = '[RESET STORAGE] Reset successful'
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

}


export class ID implements Action {
  readonly type = EMyCoursesActions.ID;
  constructor(public payload: number) {}
}
export class ShowDetailSuccessAction implements Action {
  readonly type = EMyCoursesActions.SHOW_DETAIL_SUCCESS;
  constructor(public payload: MyCourseDetail) {}
}

export class PatchCourseAction implements Action{
  readonly type = EMyCoursesActions.PATCH_COURSE;
  constructor(public payload: MyCourseDetail){}
}
export class PatchCourseSuccessAction implements Action{
  readonly type = EMyCoursesActions.PATCH_COURSE_SUCCESS;
  constructor(public payload: any[]){}
}
export class ResetStorage implements Action{
  readonly type = EMyCoursesActions.RESET_STORAGE;
  
}


export class GetTeacherAction implements Action {
  readonly type = EMyCoursesActions.GET_TEACHER;
  
}
export class GetTeacherSuccessAction implements Action {
  readonly type = EMyCoursesActions.GET_TEACHER_SUCCESS;
  constructor(public payload: Teacher) {}

}

export class SaveOnStorage implements Action {
  readonly type = EMyCoursesActions.SAVE_ON_STORAGE;
  constructor(public payload: MyCourseDetail[]) {}
}

export class SaveOnStorageSuccess implements Action {
  readonly type = EMyCoursesActions.SAVE_ON_STORAGE_SUCCESS;
  constructor(public payload: MyCourseDetail[]) {}
}

export class AddErrors implements Action {
  readonly type = EMyCoursesActions.SAVE_ON_STORAGE_SUCCESS;
  constructor(public payload: HttpErrorResponse[]) {}
}
export class CreateAction implements Action {
  readonly type = EMyCoursesActions.CREATE;
  constructor(public payload: MyCourseDetail) {}
}
export class CreateSuccessAction implements Action {
  readonly type = EMyCoursesActions.CREATE_SUCCESS;
  constructor(public payload: MyCourseDetail) {}
}
export class CreateFailureAction implements Action {
  readonly type = EMyCoursesActions.CREATE_FAILURE;
  constructor(public payload: any) {}
}

export type ALL_REDUCER_ACTIONS = ShowAllSuccessAction | ResetStorage |CreateSuccessAction | CreateFailureAction | ShowDetailSuccessAction | ShowDetailAction | GetTeacherSuccessAction | PatchCourseAction |PatchCourseSuccessAction | SaveOnStorage |SaveOnStorageSuccess ;
