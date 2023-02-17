import { Component, OnInit } from '@angular/core';
import { MyCourses } from '../model/MyCourses';
import { State, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { Observable } from 'rxjs';
import { selectMyCourseDetail, selectMyCoursesList, selectTeacheDetails } from '../store/mycourses.selector';
import { GetTeacherAction, ID, ShowAllAction, ShowDetailAction } from '../store/mycourses.actions';
import { MyCourseDetail } from '../model/MyCourseDetails';
import { OnReducer } from '@ngrx/store/src/reducer_creator';
import { Teacher } from '../model/Teacher';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidators } from 'src/app/commons/validators/custom-validators';

@Component({
  selector: 'app-mycourses-page',
  templateUrl: './mycourses-page.component.html',
  styleUrls: ['./mycourses-page.component.css'],
  
})
export class MycoursesPageComponent implements OnInit {
  mycourses$?: Observable<MyCourses[]>;
  mycourseDetails$?: Observable<MyCourseDetail>;
  teacherDetails$?: Observable<Teacher>;
  display:string = "none";
  displayView: string ="";
  courseForm: FormGroup;
  constructor( private store: Store<AppState>, private form: FormBuilder,){
    this.mycourses$ = this.store.select(selectMyCoursesList);
    console.log(this.mycourses$)
    this.teacherDetails$ = this.store.select(selectTeacheDetails);
    this.courseForm = this.form.group(
      { 
       // title: ['', [Validators.required]],
       id_corso:[,[]],
       titolo: ['', [CustomValidators.notempty]] 
       });
      
  }
  ngOnInit(): void {
    this.getAllCourses();
    this.getUserDetails();
  }
  getAllCourses() {
    this.store.dispatch(new ShowAllAction());
  }
  getUserDetails(){
    this.store.dispatch(new GetTeacherAction());
  }
  setCourseDetails(c: number) {
    this.store.dispatch(new ID(c));
    this.mycourseDetails$ = this.store.select(selectMyCourseDetail);
    console.log(this.mycourseDetails$);
    
    // let state1: AppState;
    // state1 = this.store.select(selectMyCourseDetail);
    // console.log(this.getState(this.store))
  }
  saveOnStore(){

  }
  enableForm(){
    this.display = "block";
    this.displayView = "none";
    
  }
  disableForm(){
    this.display = "none";
    this.displayView = "block";
  }



  
}


