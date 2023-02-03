import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from './model/model/Movie';

const baseUrl = 'https://api.tvmaze.com/shows';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(baseUrl);
  }
}
