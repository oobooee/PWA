import { MyCoursesState, initialmyCoursesState } from "src/app/store/app.states";
import * as fromActions from './mycourses.actions';

import { HttpResponse } from '@angular/common/http';
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
                response: action.payload
            };

        }

        case EMyCoursesActions.CREATE_SUCCESS: {
            return {
                ...state,
                response: action.payload
            };

        }

        case EMyCoursesActions.SAVE_ON_STORAGE: {
            return {
                ...state,
                myDraft: action.payload
            };

        }

        case EMyCoursesActions.SAVE_ON_STORAGE_SUCCESS: {

            return {
                ...state,
                myDraft: action.payload
            };

        }
        case EMyCoursesActions.RESET_STORAGE: {

            return {
                myCourses: [],
                myDraft: [],
                myCourseDetail: {},
                teacherDetails: {},
                response: new HttpResponse({}),
                id: 0,
                message: null
            };


        }
        case EMyCoursesActions.RESET_RESP_STORAGE: {

            return {
                ...state,
                response: new HttpResponse({}),
            };


        }



        default:
            return state;
    }

}


