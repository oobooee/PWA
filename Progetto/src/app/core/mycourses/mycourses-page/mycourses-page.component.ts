import { Component, OnInit } from '@angular/core';
import { MyCourses } from '../model/MyCourses';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.states';
import { Observable } from 'rxjs';
import { selectMyCourseDetail, selectMyCoursesList } from '../store/mycourses.selector';
import { ShowAllAction, ShowDetailAction } from '../store/mycourses.actions';
import { MyCourseDetail } from '../model/MyCourseDetails';

@Component({
  selector: 'app-mycourses-page',
  templateUrl: './mycourses-page.component.html',
  styleUrls: ['./mycourses-page.component.css'],
  
})
export class MycoursesPageComponent implements OnInit {
  mycourses$?: Observable<MyCourses[]>;
  mycourseDetails$?: Observable<MyCourseDetail>;

  constructor( private store: Store<IAppState>){
    this.mycourses$ = this.store.select(selectMyCoursesList);
    this.mycourseDetails$ = this.store.select(selectMyCourseDetail);
  }
  ngOnInit(): void {
    this.getAllCourses();
  }
  getAllCourses() {
    this.store.dispatch(new ShowAllAction());
  }

  getCourseDetails(id_corso: number) {
    this.store.dispatch(new ShowDetailAction(id_corso));
  }

}


