import * as fromActions from '../store/movie.actions';
import { IMovieState, initialMovieState } from "src/app/store/app.states";
import { EMovieActions } from "./movie.actions";


export function movieReducer(state = initialMovieState, action: fromActions.ALL_REDUCER_ACTIONS): IMovieState {
    switch (action.type) {
        case EMovieActions.SHOW_ALL_SUCCESS: {
            return {
                ...state,
                movies: action.payload
            };
        }

        default:
            return state;
    }
}
