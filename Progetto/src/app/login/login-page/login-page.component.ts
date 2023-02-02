import { Component } from '@angular/core';
import { LoginData } from 'src/app/model/login.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  loginData: LoginData;
  constructor(){
    this.loginData = {userid: '', password: ''}

  }

  loginSubmit(){
    console.log(JSON.stringify(this.loginData));
  }

  
}
