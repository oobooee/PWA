import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  
})
export class HeaderComponent implements OnInit {


  constructor(private authService: LoginService, private router: Router){


  }
  ngOnInit(): void {
  
  }
  isLogged(): boolean{
    return this.authService.isAuthenticated();
  }
  logout(): void{
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
