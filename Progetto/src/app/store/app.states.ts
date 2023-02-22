
import { HttpErrorResponse, HttpHeaderResponse, HttpResponse } from "@angular/common/http";
import { MyCourseDetail } from "../core/mycourses/model/MyCourseDetails";
import { MyCourses } from "../core/mycourses/model/MyCourses";
import { Teacher } from "../core/mycourses/model/Teacher";



export interface AppState {
    myCoursesState: MyCoursesState;
   // myCourseDetailState: IMyCourseDetailState;

}

export interface MyCoursesState {
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
    response: new HttpResponse(),
    id: 0,
    message: null
};



