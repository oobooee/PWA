import { Component, Input, OnInit } from '@angular/core';
import { MyCourses } from '../model/MyCourses';
import { State, Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { Observable, map } from 'rxjs';
import { selectMyCourseDetail, selectMyCoursesList, selectTeacheDetails } from '../store/mycourses.selector';
import { GetTeacherAction, ID, ShowAllAction, ShowDetailAction } from '../store/mycourses.actions';
import { MyCourseDetail } from '../model/MyCourseDetails';
import { OnReducer } from '@ngrx/store/src/reducer_creator';
import { Teacher } from '../model/Teacher';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from 'src/app/commons/validators/custom-validators';
import { Title } from '@angular/platform-browser';
import { __values } from 'tslib';

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

  @Input()   
  courseDetail?: MyCourseDetail;
  c?: MyCourseDetail;
  constructor( private store: Store<AppState>, private form: FormBuilder,){
    this.mycourses$ = this.store.select(selectMyCoursesList);
    console.log(this.mycourses$)
    this.teacherDetails$ = this.store.select(selectTeacheDetails);
    this.courseForm = this.form.group(
      { 
       // title: ['', [Validators.required]],
      // id_corso:[,[]],
       titolo: ['', [CustomValidators.notempty]] ,
       numPosti: ['', [CustomValidators.notempty]] ,
       numPostiDisponibili: ['', [CustomValidators.notempty]] ,
       previstoEsame: ['', [CustomValidators.notempty]] ,
       prezzo: ['', [CustomValidators.notempty]] ,
       inizio: ['', [CustomValidators.notempty]] ,
       fine: ['', [CustomValidators.notempty]] ,
       crediti: ['', [CustomValidators.notempty]], 
       ore: ['', [CustomValidators.notempty]] ,
       descrizione: ['', [CustomValidators.notempty]] ,
       lingua: ['', [CustomValidators.notempty]] ,
       categoria: ['', [CustomValidators.notempty]] ,
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
    const courseDetail: MyCourseDetail = this.courseForm.value;
    console.log(JSON.stringify(courseDetail));
  }
  enableForm(){
    this.display = "block";
    this.displayView = "none";
    this.mycourseDetails$?.subscribe((course: MyCourseDetail) => this.courseDetail = course);
    
    console.log(this.courseDetail);

    this.courseForm.patchValue({
      titolo: this.courseDetail?.titolo,
    })
      
  }
  disableForm(){
    this.display = "none";
    this.displayView = "block";
  }



  
}


