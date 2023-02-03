import { Action } from '@ngrx/store';
import { Movie } from 'src/app/movies/model/model/Movie';

export enum EMovieActions {
  SHOW_ALL = '[Movie] Show All',
  SHOW_ALL_SUCCESS = '[Movie] Show All Success',
  CREATE = '[Movie] Create',
  CREATE_SUCCESS = '[Movie] Create Success',
  CREATE_FAILURE = '[Movie] Create Failure'
}

export class ShowAllAction implements Action {
  readonly type = EMovieActions.SHOW_ALL;
}
export class ShowAllSuccessAction implements Action {
  readonly type = EMovieActions.SHOW_ALL_SUCCESS;
  constructor(public payload: Movie[]) {}
}
export class CreateAction implements Action {
  readonly type = EMovieActions.CREATE;
  constructor(public payload: Movie) {}
}
export class CreateSuccessAction implements Action {
  readonly type = EMovieActions.CREATE_SUCCESS;
  constructor(public payload: Movie) {}
}
export class CreateFailureAction implements Action {
  readonly type = EMovieActions.CREATE_FAILURE;
  constructor(public payload: any) {}
}

export type ALL_REDUCER_ACTIONS = ShowAllSuccessAction | CreateSuccessAction | CreateFailureAction;
