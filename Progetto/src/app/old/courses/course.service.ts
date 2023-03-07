import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, concat, retry, throwError } from 'rxjs';

const path = "http://172.18.0.110:8080/progetto/rest/corsi?titolo="

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses?: Array<Course>;
  
  constructor(private httpClient:HttpClient) { 
    console.log("Course service");
   /* this.courses = [
      {id_corso:213, titolo:"Programming in cobol", numPosti:50, numPostiDisponibili:2, previstoEsame: "yes" },
      {id_corso:123, titolo: "Programming in javascript", numPosti:25, numPostiDisponibili:10, previstoEsame: "no"},
    ]; */
  }

  /*getAllCourses(): Array<Course> | undefined{
    return this.courses;
  } */

  getAllCourses(): Observable<Array<Course>> | undefined{
    return this.httpClient.get <Array<Course>>(path)
    .pipe(retry(3),
     catchError(this.handleError));
  }

  addCourse(c: Course): Observable<Course> {
    this.courses?.push(c)
     return this.httpClient.post<Course>(path,c)
    .pipe(retry(3),
     catchError(this.handleError));
  }

  getAllCoursesBytitle(title: string): Observable<Array<Course>> | undefined{
    
    const path2 = path.concat(title);
    console.log(path2);
    return this.httpClient.get<Array<Course>>(path2)
    .pipe(retry(3),
     catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {  if (error.error instanceof ErrorEvent) {  
      // A client-side or network error occurred. Handle it accordingly.   
       console.error('An error occurred:', error.error.message); 
       } else {
            // The backend returned an unsuccessful response code. 
               // The response body may contain clues as to what went wrong,  
                 console.error(    
                    `Backend returned code ${error.status}, ` +   
                       `body was: ${error.error}`);  } 
                        // return an observable with a user-facing error message 
                         return throwError( 
                             'Something bad happened; please try again later.');};

}
