import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/app.constants';
import { LoginData } from '../login-data.model';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginData: LoginData;

  constructor(private loginService: LoginService,
    private router: Router) {
    this.loginData = { username: '', password: '' };
  }

  ngOnInit(): void {}

  login() {
    console.log(JSON.stringify(this.loginData));
    this.loginService.login(this.loginData).subscribe(
      (res) => {
        console.log(`LOGIN RESULT: ${JSON.stringify(res)}`);
        localStorage.setItem(AppConstants.LOGIN_STORAGE, JSON.stringify(res));
        this.router.navigate(['books']);
      },
      (error) => {
        console.error(`LOGIN RESULT: ${JSON.stringify(error)}`);
      }
    );
  }
}
