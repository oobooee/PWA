import * as fromActions from './mycourses.actions';
import {  MyCoursesState,  initialmyCoursesState } from "src/app/store/app.states";

import { EMyCoursesActions } from "./mycourses.actions";

export function mycoursesReducer(state = initialmyCoursesState,
    action: fromActions.ALL_REDUCER_ACTIONS): MyCoursesState {
    switch (action.type) {
        case EMyCoursesActions.SHOW_ALL_SUCCESS: {
            return {
                ...state,
                myCourses: action.payload
            };
        }

        case EMyCoursesActions.SHOW_DETAIL_SUCCESS: {
            return {
                ...state,
                myCourseDetail: action.payload
            };
        }
        case EMyCoursesActions.GET_TEACHER_SUCCESS: {
            return {
                ...state,
                teacherDetails: action.payload
            };
     
        }
        case EMyCoursesActions.PATCH_COURSE: {
            return {
                ...state,
                myCourseDetail: action.payload
            };
     
        }

        case EMyCoursesActions.PATCH_COURSE_SUCCESS: {
            return {
                ...state,
                message: action.payload
            };
     
        }
        default:
            return state;
    }

}


