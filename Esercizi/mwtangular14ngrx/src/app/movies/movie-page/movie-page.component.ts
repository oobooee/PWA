import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Movie } from '../model/model/Movie';
import { IAppState } from 'src/app/store/app.states';
import { ShowAllAction } from 'src/app/movies/store/movie.actions';
import { selectMovieList } from '../store/movie.selector';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movies$?: Observable<Movie[]>;

  constructor(private store: Store<IAppState>) {
    this.movies$ = this.store.select(selectMovieList);
  }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies() {
    this.store.dispatch(new ShowAllAction());
  }
}
