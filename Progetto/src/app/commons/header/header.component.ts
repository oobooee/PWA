import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
 
})
export class HeaderComponent implements OnInit {


  display:string = "";
  constructor( private authServiceFire: AuthService, private router: Router, ){


  }
  ngOnInit(): void {
   
  }
 

  isLoggedOnFire(): boolean{
    return this.authServiceFire.isLoggedIn;
  }
  logout(): void{
   
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
