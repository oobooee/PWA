// import { Injectable } from '@angular/core';
// import { Observable, tap } from 'rxjs';
// import { HttpClient, HttpEventType, HttpHeaderResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

// import { MyCourses } from '../core/mycourses/model/MyCourses';
// import { LoginResult } from 'src/app/login/login-page/login-result.model';
// import { AppConstants } from 'src/app/app.constants';
// import { EMPTY } from 'rxjs'
// import { MyCourseDetail } from '../core/mycourses/model/MyCourseDetails';
// import { Teacher } from '../core/mycourses/model/Teacher';

// const baseUrl = 'http://172.18.0.110:8080/progetto/rest/utenti/';

// @Injectable({
//   providedIn: 'root'

// })
// export class MyCoursesService {

//   constructor(private httpClient: HttpClient) {

//   }

//   getAllCoursesService(): Observable<MyCourses[]> {
//     let login: LoginResult;
//     let loginStr: string | null = localStorage.getItem(
//       AppConstants.LOGIN_STORAGE
//     );
//     if (loginStr !== '' && loginStr !== null && loginStr !== undefined) {
//       login = JSON.parse(loginStr);
//       const p = baseUrl.concat(login.username).concat("/docenze/");
//       console.log(p)
//       return this.httpClient.get<MyCourses[]>(p);
//       // return this.httpClient.get<MyCourses[]>(baseUrl);
//     }
//     return EMPTY;
//   }

//   getCourseDetailService(c: number): Observable<MyCourseDetail> {
//     let login: LoginResult 
//     let loginStr: string | null = localStorage.getItem(
//       AppConstants.LOGIN_STORAGE
//     );
//     if (loginStr !== '' && loginStr !== null && loginStr !== undefined) {
//       login = JSON.parse(loginStr);
//       const p = baseUrl.concat(login.username).concat("/docenze/").concat(String(c));
//       console.log(p)
//       return this.httpClient.get<MyCourseDetail>(p);

//     }
//     return EMPTY;
//   }


//   getUserDetailsService(): Observable<Teacher> {
//     let login: LoginResult;
//     let loginStr: string | null = localStorage.getItem(
//       AppConstants.LOGIN_STORAGE
//     );
//     if (loginStr !== '' && loginStr !== null && loginStr !== undefined) {
//       login = JSON.parse(loginStr);
//       const p = baseUrl.concat(login.username)
//       return this.httpClient.get<Teacher>(p);
//     }
//     return EMPTY;
//   }

//   patchCourseService(c: MyCourseDetail): Observable<HttpResponse<any>> {
//     let login: LoginResult;
//     let loginStr: string | null = localStorage.getItem(
//       AppConstants.LOGIN_STORAGE
//     );
//     if (loginStr !== '' && loginStr !== null && loginStr !== undefined) {
//       login = JSON.parse(loginStr);
//       //const header1= {'Content-Type':'application/json',};
//       const p = baseUrl.concat(login.username).concat("/docenze/");
//       return this.httpClient.patch<HttpResponse<any>>(p, c, {
//         observe: 'response'
//       });
//     }
//     return EMPTY;
//   }
//   //  patchCourseService(c: MyCourseDetail): Observable<any>{
//   //    const header1= {'Content-Type':'application/json',};
//   //    const body =  JSON.stringify(c);
//   //    const p = baseUrl.concat("user").concat("/docenze/");
//   //  return this.httpClient.patch<any>(p ,body,{
//   //      headers: header1,
//   //      observe: 'response',
//   //      responseType: 'json'
//   //  });
//   //  }


//   addCourseService(c: MyCourseDetail): Observable<HttpResponse<any>> {
//     let login: LoginResult;
//     let loginStr: string | null = localStorage.getItem(
//       AppConstants.LOGIN_STORAGE
//     );
//     if (loginStr !== '' && loginStr !== null && loginStr !== undefined) {
//       login = JSON.parse(loginStr);
//       const p = baseUrl.concat(login.username).concat("/docenze/");
//       return this.httpClient.post<HttpResponse<any>>(p, c, {
//         observe: 'response'
//       });
//     }
//     return EMPTY;
//   }







// }
