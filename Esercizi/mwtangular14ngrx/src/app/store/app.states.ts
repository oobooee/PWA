import { Movie } from "src/app/movies/model/model/Movie";


export interface IAppState {
    movieState: IMovieState;
}

export interface IMovieState {
    movies: Movie[];
    message: any;
}

export const initialMovieState: IMovieState = {
    movies: [],
    message: null
};
