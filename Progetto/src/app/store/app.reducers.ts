import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.states';
import { mycoursesReducer } from '../core/mycourses/store/mycourses.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
   myCoursesState: mycoursesReducer,
   //myCourseDetailState: mycourseDetailReducer,

};
