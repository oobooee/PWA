import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { CourseCatalogService } from 'src/app/shared/services/coursecatalog.service';

import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { AppState } from 'src/app/old/store/app.states';
import { CoursesOnCatalog } from 'src/app/catalog/model/CoursesOnCatalog';



@Component({
  selector: 'app-home-page', 
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  
})



export class HomePageComponent  {
  title = 'Progetto MWT Angular Giarrusso Paolantonio';
 
  


  constructor() {
    console.log("HomePageComponent service created");
  }

  
}
