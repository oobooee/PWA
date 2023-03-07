import { Action } from '@ngrx/store';
import { MyCourses } from '../model/MyCourses';
import { MyCourseDetail } from '../model/MyCourseDetails';
import { Teacher } from '../model/Teacher';
import { HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';

export enum MyCoursesAsStudentActions {
  SHOW_ALL = '[MyCourses] Show All',
  SHOW_ALL_SUCCESS = '[MyCourses] Show All Success',
  SHOW_DETAIL =' [MyCourseDetail] Show detail ',
  SHOW_DETAIL_SUCCESS =' [MyCourseDetail] Show detail success',
  ID = '[ID ] Show id success',
  GET_TEACHER = '[Teacher ] Get teacher ',
  GET_TEACHER_SUCCESS = '[Teacher ] Get teacher success',
  RESET_STORAGE = '[RESET STORAGE] Reset successful'
}

export class ShowAllAction implements Action {
  readonly type = MyCoursesAsStudentActions.SHOW_ALL;
}
export class ShowAllSuccessAction implements Action {
  readonly type = MyCoursesAsStudentActions.SHOW_ALL_SUCCESS;
  constructor(public payload: MyCourses[]) {}
}
export class ShowDetailAction implements Action {
  readonly type = MyCoursesAsStudentActions.SHOW_DETAIL;

}

export class ID implements Action {
  readonly type = MyCoursesAsStudentActions.ID;
  constructor(public payload: number) {}
}
export class ShowDetailSuccessAction implements Action {
  readonly type = MyCoursesAsStudentActions.SHOW_DETAIL_SUCCESS;
  constructor(public payload: MyCourseDetail) {}
}

export class PatchCourseAction implements Action{
  readonly type = MyCoursesAsStudentActions.PATCH_COURSE;
  constructor(public payload: MyCourseDetail){}
}
export class PatchCourseSuccessAction implements Action{
  readonly type = MyCoursesAsStudentActions.PATCH_COURSE_SUCCESS;
  constructor(public payload: HttpResponse<any>){}
}
export class ResetStorage implements Action{
  readonly type = MyCoursesAsStudentActions.RESET_STORAGE;
  
}


export class GetTeacherAction implements Action {
  readonly type = MyCoursesAsStudentActions.GET_TEACHER;
  
}
export class GetTeacherSuccessAction implements Action {
  readonly type = MyCoursesAsStudentActions.GET_TEACHER_SUCCESS;
  constructor(public payload: Teacher) {}

}

export class SaveOnStorage implements Action {
  readonly type = MyCoursesAsStudentActions.SAVE_ON_STORAGE;
  constructor(public payload: MyCourseDetail[]) {}
}

export class SaveOnStorageSuccess implements Action {
  readonly type = MyCoursesAsStudentActions.SAVE_ON_STORAGE_SUCCESS;
  constructor(public payload: MyCourseDetail[]) {}
}

export class AddErrors implements Action {
  readonly type = MyCoursesAsStudentActions.SAVE_ON_STORAGE_SUCCESS;
  constructor(public payload: HttpErrorResponse[]) {}
}


export type ALL_REDUCER_ACTIONS = ShowAllSuccessAction | ResetStorage | ShowDetailSuccessAction | ShowDetailAction | GetTeacherSuccessAction | PatchCourseAction |PatchCourseSuccessAction | SaveOnStorage |SaveOnStorageSuccess ;
