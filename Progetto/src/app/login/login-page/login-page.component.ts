import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constants';
import { LoginData } from 'src/app/login/login-page/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {

  display:string = "";
  loginData: LoginData;
  constructor(private loginService: LoginService, private router: Router){
    this.loginData = {username: '', password: ''}

  }

  loginSubmit(){
    console.log(JSON.stringify(this.loginData));
    this.loginService.login(this.loginData).subscribe(res => {
      
      //localStorage.setItem(AppConstants.LOGIN_STORAGE, JSON.stringify(res));
     
        this.router.navigate(['']);
        localStorage.setItem(AppConstants.LOGIN_STORAGE, JSON.stringify(res));
             
      console.log(  `${JSON.stringify(res)}`);
  }, (err: any) => {
    if (err instanceof HttpErrorResponse) {
      if (err.status !== 401) {
       return;
      }
      this.router.navigate(['login']);
    }
    this.openModalMessage();
    console.log( "Unauthorized");
  })
  }

  
  openModalMessage(){
    this.display = "block";
    
  }
  closeModalMessage(){
    this.display = "none";
  }
}
