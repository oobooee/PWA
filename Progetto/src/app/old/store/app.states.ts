
import { HttpErrorResponse, HttpHeaderResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import { MyCourseDetail } from "../core/mycourses/model/MyCourseDetails";
import { MyCourses } from "../core/mycourses/model/MyCourses";
import { Teacher } from "../core/mycourses/model/Teacher";
import { MyCourseAsStudentDetails } from "../core/mycourses-as-student/model/MyCourseAsStudentDetails";
import { EMPTY } from "rxjs";



export interface AppState {
    myCoursesState: MyCoursesState;

}

export interface MyCoursesState {
    //catalog: Courses[]
    myCourses: MyCourses[];
    myDraft: MyCourseDetail[];
    myCourseDetail: MyCourseDetail;
    teacherDetails: Teacher;
    id: number,
    response: HttpResponse<any>,
    message: any;
}


export const initialmyCoursesState: MyCoursesState = {
    myCourses: [],
    myDraft: [],
    myCourseDetail: {},
    teacherDetails: {},
    response: new HttpResponse,
    id: 0,
    message: null
};


export interface MyCoursesAsStudentState {
    myCoursesAsStudent: MyCourses[];
    myCourseAsStudentDetail: MyCourseAsStudentDetails;
    message: any;
}

export const initialmyCoursesAsStudentState: MyCoursesAsStudentState = {
    myCoursesAsStudent: [],
    myCourseAsStudentDetail: {},
    message: null
};
