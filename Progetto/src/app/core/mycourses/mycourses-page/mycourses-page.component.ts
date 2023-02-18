import { Component, Input, LOCALE_ID, OnInit } from '@angular/core';
import { MyCourses } from '../model/MyCourses';
import { State, Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { Observable, map } from 'rxjs';
import { selectMessageDetails, selectMyCourseDetail, selectMyCoursesList, selectTeacheDetails } from '../store/mycourses.selector';
import { GetTeacherAction, ID, PatchCourseAction, ShowAllAction, ShowDetailAction } from '../store/mycourses.actions';
import { MyCourseDetail } from '../model/MyCourseDetails';
import { OnReducer } from '@ngrx/store/src/reducer_creator';
import { Teacher } from '../model/Teacher';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from 'src/app/commons/validators/custom-validators';
import { Title } from '@angular/platform-browser';
import { __values } from 'tslib';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-mycourses-page',
  templateUrl: './mycourses-page.component.html',
  styleUrls: ['./mycourses-page.component.css'],
  providers: [ DatePipe ] ,
  
})
export class MycoursesPageComponent implements OnInit {

  mycourses$?: Observable<MyCourses[]>;
  mycourseDetails$?: Observable<MyCourseDetail>;
  teacherDetails$?: Observable<Teacher>;
  message$?: Observable<number>; 
  display:string = "none";
  displayView: string ="";
  courseForm: FormGroup;
  c?: MyCourseDetail;
  courses?: MyCourses[];

  @Input()   
  courseDetail?: MyCourseDetail;


  constructor( private store: Store<AppState>, private form: FormBuilder, private datePipe: DatePipe){
    this.mycourses$ = this.store.select(selectMyCoursesList);
    console.log(this.mycourses$)
    this.teacherDetails$ = this.store.select(selectTeacheDetails);
    this.courseForm = this.form.group(
      { 
       // title: ['', [Validators.required]],
      // id_corso:[,[]],
       id_corso: {value:'', disabled:false},
       titolo: [{value:''}, CustomValidators.totalempty],
       numPosti: ['', [CustomValidators.totalempty]] ,
       numPostiDisponibili: [{value:'', disabled:false}, [CustomValidators.totalempty]] ,
       previstoEsame: ['', [CustomValidators.totalempty]] ,
       prezzo: ['', [CustomValidators.totalempty]] ,
       inizio: ['', [CustomValidators.totalempty]] ,
       fine: ['', [CustomValidators.totalempty]] ,
       crediti: ['', [CustomValidators.totalempty]], 
       ore: ['', [CustomValidators.totalempty]] ,
       descrizione: ['', [CustomValidators.totalempty]] ,
       lingua: ['', [CustomValidators.totalempty]] ,
       categoria: ['', [CustomValidators.totalempty]] ,
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
   
    
    // let state1: AppState;
    // state1 = this.store.select(selectMyCourseDetail);
    // console.log(this.getState(this.store))
  }
  saveOnStore(){
    const courseFormAcquired: MyCourseDetail = this.courseForm.value;
    console.log(JSON.stringify(courseFormAcquired));
    this.store.dispatch(new PatchCourseAction(courseFormAcquired))
    this.message$ = this.store.select(selectMessageDetails);
    console.log(this.message$);
    
  }
  enableForm(){
    this.display = "block";
    this.displayView = "none";
    this.mycourseDetails$?.subscribe((course: MyCourseDetail) => this.courseDetail = course)
   
    this.courseForm.patchValue({
      id_corso: this.courseDetail?.id_corso,
      titolo: this.courseDetail?.titolo,
      numPosti: this.courseDetail?.numPosti ,
      numPostiDisponibili: this.courseDetail?.numPostiDisponibili, 
      previstoEsame: this.courseDetail?.previstoEsame,
      prezzo: this.courseDetail?.prezzo, 
      //inizio: formatDate(this.courseDetail?.inizio!, 'd/M/yy, h:mm a', 'en-US'),
      //fine: formatDate(this.courseDetail?.fine!, 'd/M/yy, h:mm a', 'en-US'),
      inizio:this.courseDetail?.inizio, 
      fine: this.courseDetail?.fine,
      crediti: this.courseDetail?.crediti,
      ore:this.courseDetail?.ore,
      descrizione: this.courseDetail?.descrizione, 
      lingua: this.courseDetail?.lingua, 
      categoria: this.courseDetail?.categoria, 
    })
    
      
    
  }
  disableForm(){
    this.display = "none";
    this.displayView = "block";
  }

  

  
}


function forEach() {
  throw new Error('Function not implemented.');
}

