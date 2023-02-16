import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app.states';
import { mycourseDetailReducer, mycoursesReducer } from '../core/mycourses/store/mycourses.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
   myCoursesState: mycoursesReducer,
   myCourseDetailState: mycourseDetailReducer,
};
