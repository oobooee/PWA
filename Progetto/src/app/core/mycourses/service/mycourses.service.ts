import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { MyCourses } from '../model/MyCourses';
import { LoginResult } from 'src/app/login/login-page/login-result.model';
import { AppConstants } from 'src/app/app.constants';
import { EMPTY } from 'rxjs'
import { MyCourseDetail } from '../model/MyCourseDetails';

const baseUrl = 'http://172.18.0.110:8080/progetto/rest/utenti/';

@Injectable({
 providedIn: 'root'

})
export class MyCoursesService {

  constructor(private httpClient: HttpClient) { 
    
  }

  getAllCoursesService(): Observable<MyCourses[] > {
   let login: LoginResult;
    let loginStr: string | null = localStorage.getItem(
      AppConstants.LOGIN_STORAGE
     );
     if (loginStr !== '' && loginStr !== null && loginStr !== undefined) {
       login = JSON.parse(loginStr);
       const p = baseUrl.concat(login.username).concat("/docenze/");
       console.log(p)
       return this.httpClient.get<MyCourses[]>(p);
       // return this.httpClient.get<MyCourses[]>(baseUrl);
      }
       return  EMPTY;
   }

   getCourseDetailService(c: MyCourses): Observable<MyCourses> {
    let login: LoginResult;
    let loginStr: string | null = localStorage.getItem(
      AppConstants.LOGIN_STORAGE
     );
     if (loginStr !== '' && loginStr !== null && loginStr !== undefined) {
       login = JSON.parse(loginStr);
       const p = baseUrl.concat(login.username).concat("/docenze/").concat(String(c.id_corso));
       console.log(p)
       console.log(this.httpClient.get<MyCourseDetail>(p))
       return this.httpClient.get<MyCourseDetail>(p);
       // return this.httpClient.get<MyCourses[]>(baseUrl);
      }
       return  EMPTY;
   }
    
}
