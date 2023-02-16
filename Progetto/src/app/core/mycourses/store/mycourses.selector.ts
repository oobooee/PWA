import { state } from '@angular/animations';
import { createSelector } from '@ngrx/store';
import { IAppState,   IMyCourseDetailState,   IMyCoursesState } from 'src/app/store/app.states';


const selectMyCourse = (state: IAppState) => {
  return state.myCourseDetailState;
};


const selectMyCourses = (state: IAppState) => {
  return state.myCoursesState;
  
};


export const selectMyCoursesList  = createSelector(
  selectMyCourses,
  (state: IMyCoursesState) => {
    return state.myCourses;
  }
);

export const selectMyCourseDetail  = createSelector(
  selectMyCourse,
  (state: IMyCourseDetailState) => {
    return state.myCourseDetail;
  }
);





