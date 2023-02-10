import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
 
})
export class HeaderComponent implements OnInit {

  display:string = "";
  constructor(private authService: LoginService, private router: Router){


  }
  ngOnInit(): void {
  
  }
  isLogged(): boolean{
    return this.authService.isAuthenticated();
    
  }
  isLoggedUser(): boolean{
    return this.authService.isAuthenticatedUser();
  }
  logout(): void{
    this.authService.logout();
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
