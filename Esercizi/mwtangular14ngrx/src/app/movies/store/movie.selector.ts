import { createSelector } from '@ngrx/store';
import { IAppState, IMovieState } from 'src/app/store/app.states';

const selectMovies = (state: IAppState) => {
  return state.movieState;
};

export const selectMovieList  = createSelector(
  selectMovies,
  (state: IMovieState) => {
    return state.movies;
  }
);
