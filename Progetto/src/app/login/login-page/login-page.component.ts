import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';
import { Teacher } from 'src/app/core/mycourses/model/Teacher';
import { GetTeacherAction } from 'src/app/core/mycourses/store/mycourses.actions';
import { selectTeacheDetails } from 'src/app/core/mycourses/store/mycourses.selector';
import { LoginData } from 'src/app/login/login-page/login.model';
import { LoginService } from 'src/app/services/login.service';
import { AppState } from 'src/app/store/app.states';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {
  // teacherDetails$?: Observable<Teacher>;
  display: string = "";
  loginData: LoginData;
  constructor(private loginService: LoginService, private router: Router, private store: Store<AppState>) {
    this.loginData = { username: '', password: '' }
    // this.teacherDetails$ = this.store.select(selectTeacheDetails);
    //this.refresh();
  }
  ngOnInit(): void {
    this.refresh();
  }

  loginSubmit() {
    console.log(JSON.stringify(this.loginData));
    this.loginService.login(this.loginData).subscribe(res => {

      //localStorage.setItem(AppConstants.LOGIN_STORAGE, JSON.stringify(res));


      localStorage.setItem(AppConstants.LOGIN_STORAGE, JSON.stringify(res));

      console.log(`${JSON.stringify(res)}`);
      this.getUserDetails();
      if (res.username == 'admin') { this.router.navigate(['admin-ops']); }
      else { this.router.navigate(['mycourses']); }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        this.openModalMessage();
        this.router.navigate(['login']);
      }
    })
  }


  openModalMessage() {
    this.display = "block";

  }
  closeModalMessage() {
    this.display = "none";
  }


  getUserDetails() {
    this.store.dispatch(new GetTeacherAction());
    console.log(this.store)
  }
  refresh(): void {
    window.location.reload;
  }

}


