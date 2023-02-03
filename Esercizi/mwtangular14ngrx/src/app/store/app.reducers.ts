import { ActionReducerMap } from '@ngrx/store';
import { movieReducer } from '../movies/store/movie.reducers';
import { IAppState } from './app.states';

export const appReducers: ActionReducerMap<IAppState, any> = {
   movieState: movieReducer
};
