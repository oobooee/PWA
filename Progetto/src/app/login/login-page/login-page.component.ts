import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constants';
import { LoginData } from 'src/app/login/login-page/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  loginData: LoginData;
  constructor(private loginService: LoginService, private router: Router){
    this.loginData = {username: '', password: ''}

  }

  loginSubmit(){
    console.log(JSON.stringify(this.loginData));
    this.loginService.login(this.loginData).subscribe(res => {
      localStorage.setItem(AppConstants.LOGIN_STORAGE, JSON.stringify(res));
      console.log(res.username);
      if (res.username == "admin"){
        this.router.navigate(['admin-ops']);
      }
      else {
        this.router.navigate(['observable']);
      }
      
      console.log(  `${JSON.stringify(res)}`);
  }, error => {
    console.log(  `${JSON.stringify(error)}`);
  })
  }

  
}
