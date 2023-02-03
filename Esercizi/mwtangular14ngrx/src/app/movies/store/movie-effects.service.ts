import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  ShowAllAction,
  EMovieActions,
  ShowAllSuccessAction,
} from '../store/movie.actions';
import { MovieService } from 'src/app/movies/movies.service';
import { Movie } from 'src/app/movies/model/model/Movie';

@Injectable()
export class MovieEffects {
  constructor(private actions$: Actions, private movieService: MovieService) {}

  loadAllMovies$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType<ShowAllAction>(EMovieActions.SHOW_ALL),
      switchMap(() => this.movieService.getAllMovies()),
      switchMap((moviesResp: Movie[]) =>
        of(new ShowAllSuccessAction(moviesResp))
      )
    );
  });
}
