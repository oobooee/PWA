
import { MyCourseDetail } from "../core/mycourses/model/MyCourseDetails";
import { MyCourses } from "../core/mycourses/model/MyCourses";



export interface IAppState {
    myCoursesState: IMyCoursesState;
    myCourseDetailState: IMyCourseDetailState;
}

export interface IMyCoursesState {
    myCourses: MyCourses[];
     message: any;
}
export interface IMyCourseDetailState {
    myCourseDetail: MyCourseDetail;
    id_corso: number | null| undefined;
     message: any;
}


export const initialmyCoursesState: IMyCoursesState = {
    myCourses: [],
    message: null
};

export const initialmyCourseDetailState: IMyCourseDetailState = {
    myCourseDetail: {},
    id_corso: 0,
    message: null
};


