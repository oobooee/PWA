
import { HttpHeaderResponse, HttpResponse } from "@angular/common/http";
import { MyCourseDetail } from "../core/mycourses/model/MyCourseDetails";
import { MyCourses } from "../core/mycourses/model/MyCourses";
import { Teacher } from "../core/mycourses/model/Teacher";



export interface AppState {
    myCoursesState: MyCoursesState;
   // myCourseDetailState: IMyCourseDetailState;

}

export interface MyCoursesState {
    myCourses: MyCourses[];
    myCourseDetail: MyCourseDetail;
    teacherDetails: Teacher;
    id: number,
    response: HttpHeaderResponse[],
    message: any;
}




export const initialmyCoursesState: MyCoursesState = {
    myCourses: [],
    myCourseDetail: {},
    teacherDetails: {},
    response: [],
    id: 0,
    message: null
};



