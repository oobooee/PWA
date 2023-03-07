import { Component, Directive, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { MyCourseDetail } from 'src/app/core/mycourses/model/MyCourseDetails';
import { FireShowAllAction, SaveOnStorage, ShowAllAction } from 'src/app/core/mycourses/store/mycourses.actions';
import { CoursesOnCatalog } from 'src/app/courses/catalog/model/CoursesOnCatalog';
import { CourseService } from 'src/app/courses/course.service';
import { CourseCatalogService } from 'src/app/services/coursecatalog.service';
import { AppState } from 'src/app/store/app.states';
import { NgbPopoverConfig, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { Reviews } from 'src/app/courses/catalog/model/Reviews';



@Component({
  selector: 'app-home-page', 
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  
})



export class HomePageComponent  {
  title = 'Progetto MWT Angular Giarrusso Paolantonio';
  hide?:boolean 
  
  coursesCatalogFromFire?: CoursesOnCatalog[];

  constructor(private store: Store<AppState>, private courseCatalogService: CourseCatalogService, popover: NgbPopoverConfig) {
    console.log("HomePageComponent service created");
  }

  
}
