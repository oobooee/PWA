import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Book } from './book.model';

const baseUrl = 'http://localhost:7070/v1/books/';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  //books?: Array<Book>;

  constructor(private httpClient: HttpClient) {
    console.log('BookService initialized.');

    /* this.books = [
      {id: 1, title: "Novecento"},
      {id: 2, title: "Seta"}
    ];*/
  }

  /* getAllBooks(): Book[] | undefined {
    return this.books;
  } */

  getAllBooks(): Observable<Book[]> {
    return this.httpClient
      .get<Book[]>(baseUrl)
      .pipe(retry(3), catchError(this.handleError));
  }

  addBook(b: Book): Observable<Book> {
    return this.httpClient.post<Book>(baseUrl, b)
    .pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
