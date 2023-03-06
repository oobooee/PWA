import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  display: string = "";
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() { }

  
  openModalMessage() {
    this.display = "block";

  }
  closeModalMessage() {
    this.display = "none";
  }
}