import { state } from '@angular/animations';
import { createSelector } from '@ngrx/store';
import { AppState,   MyCoursesState } from 'src/app/store/app.states';


const selectMyState = (state: AppState) => {
  return state.myCoursesState;
};


export const selectMyCoursesList  = createSelector(
  selectMyState,
  (state: MyCoursesState) => {
    return state.myCourses;
  }
);

export const selectMyCourseDetail  = createSelector(
  selectMyState,
  (state: MyCoursesState) => {
    return state.myCourseDetail;
  }
);

export const selectTeacheDetails  = createSelector(
  selectMyState,
  (state: MyCoursesState) => {
    return state.teacherDetails;
  }
);

export const selectMessageDetails  = createSelector(
  selectMyState,
  (state: MyCoursesState) => {
    return state.message;
  }
);





