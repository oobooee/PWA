import * as fromActions from './mycourses.actions';
import { IMyCourseDetailState, IMyCoursesState, initialmyCourseDetailState, initialmyCoursesState } from "src/app/store/app.states";

import { EMyCoursesActions } from "./mycourses.actions";

export function mycoursesReducer(state = initialmyCoursesState,
    action: fromActions.ALL_REDUCER_ACTIONS): IMyCoursesState {
    switch (action.type) {
        case EMyCoursesActions.SHOW_ALL_SUCCESS: {
            return {
                ...state,
                myCourses: action.payload,

            };
        }


        default:
            return state;
    }

}


export function mycourseDetailReducer(state = initialmyCourseDetailState,
    action: fromActions.ALL_REDUCER_ACTIONS): IMyCourseDetailState {
    switch (action.type) {
        case EMyCoursesActions.SHOW_DETAIL_SUCCESS: {
            return {
                ...state,
                myCourseDetail: action.payload,

            };
        }
        case EMyCoursesActions.SHOW_DETAIL:{
            return {
                ...state,
                id_corso: action.payload,
            }
        }
        default:
            return state;
    }

}



