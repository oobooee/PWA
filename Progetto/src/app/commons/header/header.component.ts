import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/core/mycourses/model/Teacher';
import { GetTeacherAction } from 'src/app/core/mycourses/store/mycourses.actions';
import { selectTeacheDetails } from 'src/app/core/mycourses/store/mycourses.selector';
import { LoginService } from 'src/app/services/login.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AppState } from 'src/app/store/app.states';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
 
})
export class HeaderComponent implements OnInit {

  teacherDetails$?: Observable<Teacher>;
  display:string = "";
  constructor(private authService: LoginService, private authServiceFire: AuthService, private router: Router, private store: Store<AppState>,){


  }
  ngOnInit(): void {
    this.teacherDetails$ = this.store.select(selectTeacheDetails);
  }
  isLogged(): boolean{
    return this.authService.isAuthenticated();
      
  }
  isLoggedUser(): boolean{
    return this.authService.isAuthenticatedUser();
  }

  isLoggedOnFire(): boolean{
    return this.authServiceFire.isLoggedIn;
  }
  logout(): void{
    this.authService.logout();
    this.authServiceFire.SignOut();
    this.closeModalMessage();
    this.router.navigate(['login']);
    
  }

  hide(): void{
    this.hide();
  }

  openModalMessage(){
    this.display = "block";
    
  }
  closeModalMessage(){
    this.display = "none";
  }

 

}
