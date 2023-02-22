import { Component, Input, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { MyCourses } from '../model/MyCourses';
import { State, Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { Observable, Subscription, filter, map } from 'rxjs';
import {  draftedCourse, selectMessageDetails, selectMyCourseDetail, selectMyCoursesList, selectTeacheDetails } from '../store/mycourses.selector';
import { CreateAction, GetTeacherAction, ID, PatchCourseAction, ResetStorage, SaveOnStorage, SaveOnStorageSuccess, ShowAllAction, ShowDetailAction } from '../store/mycourses.actions';
import { MyCourseDetail } from '../model/MyCourseDetails';
import { OnReducer } from '@ngrx/store/src/reducer_creator';
import { Teacher } from '../model/Teacher';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/commons/validators/custom-validators';
import { Title } from '@angular/platform-browser';
import { __values } from 'tslib';
import { DatePipe, formatDate } from '@angular/common';
import { HttpErrorResponse, HttpHeaderResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MycoursesRoutingModule } from '../mycourses-routing.module';
import { Feedback } from 'src/app/model/feedback.model';

@Component({
  selector: 'app-mycourses-page',
  templateUrl: './mycourses-page.component.html',
  styleUrls: ['./mycourses-page.component.css'],
  
})
export class MycoursesPageComponent implements OnInit , OnDestroy{

  mycourses$?: Observable<MyCourses[]>;
  mycourseDetails$?: Observable<MyCourseDetail>;
  teacherDetails$?: Observable<Teacher>;
  response$?: Observable<HttpResponse<any>>; 
  errors$?: Observable<any>;
  myDraft$?: Observable<MyCourseDetail[]>;
  display:string = "none";
  displayView: string ="";
  displayCreate: string ="";
  courseForm: FormGroup;
  c?: MyCourseDetail;
  courses?: MyCourses[];
  draftedCourses?: MyCourseDetail[];
  resp: any;
  subscription1$: Subscription | undefined;
  feedback?: Feedback

  @Input()   
  courseDetail?: MyCourseDetail;

  
  


  constructor( private store: Store<AppState>, private form: FormBuilder){
    this.mycourses$ = this.store.select(selectMyCoursesList);
    console.log(this.mycourses$)
    //this.draftedCourses = [];
    this.teacherDetails$ = this.store.select(selectTeacheDetails);
    this.myDraft$ = this.store.select(draftedCourse);
    this.courseForm = this.form.group(
      { 
       // title: ['', [Validators.required]],
      // id_corso:[,[]],
       id_corso:  [{value:'', disabled:true}, [CustomValidators.totalempty]] ,
       titolo: ['', Validators.minLength(4),],
       numPosti: ['', [CustomValidators.totalempty]] ,
       numPostiDisponibili: [{value:'', disabled:true}, [CustomValidators.totalempty]] ,
       previstoEsame: ['', [CustomValidators.totalempty]] ,
       prezzo: ['', [CustomValidators.totalempty]] ,
       inizio: [{value:'', disabled:true}, [CustomValidators.totalempty]] ,
       fine: [{value:'', disabled:true}, [CustomValidators.totalempty]] ,
       crediti: ['', [CustomValidators.totalempty]], 
       ore: ['', [CustomValidators.totalempty]] ,
       descrizione: ['', [CustomValidators.totalempty]] ,
       lingua: ['', [CustomValidators.totalempty]] ,
       categoria: ['', [CustomValidators.totalempty]] ,
       
       },
       );
      
  }
  ngOnInit(): void {
    this.getAllCourses();
    //this.getUserDetails();
    this.displayCreate ="none";
  }

  ngOnDestroy(){
    this.subscription1$?.unsubscribe();
    
  }
  getAllCourses() {
    this.store.dispatch(new ShowAllAction());
  }
  // getUserDetails(){
  //   this.store.dispatch(new GetTeacherAction());
  // }
  setCourseDetails(c: number) {
    
    this.store.dispatch(new ID(c));
    this.mycourseDetails$ = this.store.select(selectMyCourseDetail);
  
  
  }
  patchOnStore(){
    const courseFormAcquired: MyCourseDetail = this.courseForm.getRawValue();
    console.log(JSON.stringify(courseFormAcquired));
    this.store.dispatch(new PatchCourseAction(courseFormAcquired))
    //this.subscription1$ = this.store.select(selectMessageDetails).subscribe(resp => {console.log(resp)});
    this.response$ = this.store.select(selectMessageDetails)
   
    this.response$.subscribe(resp => {
      
      this.feedback = { success: resp.ok, message: "Operazione eseguita "+ "("+resp.status+")" }
    })
  }


  saveOndDB(){
    console.log("save on db");
    this.courseForm.reset;
    const courseFormAcquired: MyCourseDetail = this.courseForm.getRawValue();
    this.store.dispatch(new CreateAction(courseFormAcquired))
    this.response$ = this.store.select(selectMessageDetails)   
    this.response$.subscribe(resp => {
      this.feedback = { success: resp.ok, message: "Operazione eseguita "+ "("+resp.status+")" }
    })
  }
  
  
  saveOnStorage(){
    console.log("save on local storage");
    const courseFormAcquired: MyCourseDetail = this.courseForm.getRawValue();
    console.log(courseFormAcquired)
    this.subscription1$ = this.myDraft$?.subscribe((corsi: MyCourseDetail[]) => this.draftedCourses = corsi)
    
    this.draftedCourses = JSON.parse(JSON.stringify(this.draftedCourses));
    this.draftedCourses!.push(courseFormAcquired);
    console.log(this.draftedCourses)
    this.store.dispatch(new SaveOnStorageSuccess(this.draftedCourses!))
    this.myDraft$ = this.store.select(draftedCourse);
    console.log(this.myDraft$);
    
  }
  cleanSingleDraftFromStorage(){}

  

  

  enableForm(){
    this.courseForm.reset;
    this.display = "block";
    this.displayView = "none";
    this.displayCreate ="none";
    this.subscription1$ = this.mycourseDetails$?.subscribe((course: MyCourseDetail) => this.courseDetail = course)
   
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
    this.courseForm.reset;
    this.display = "none";
    this.displayView = "block";
    this.displayCreate ="none";
  }

  refresh(): void{
    this.courseForm.reset;
    this.display = "none";
    this.displayView = "none";
    this.displayCreate ="none";
  }

  createForm(){
    this.courseForm.reset;
    this.courseForm = this.form.group(
      { 
      id_corso:  [{value:this.getnextfromserver(), disabled:true}, [CustomValidators.numbers]] ,
       titolo: ['', Validators.minLength(4),],
       numPosti: ['', [CustomValidators.numbers]] ,
       numPostiDisponibili: [{value:'', disabled:false}, [CustomValidators.numbers]] ,
       previstoEsame: ['', [CustomValidators.totalempty, ]] ,
       prezzo: ['', [CustomValidators.numbers]] ,
       inizio: [{value:'', disabled:false}, [CustomValidators.totalempty]] ,
       fine: [{value:'', disabled:false}, [CustomValidators.totalempty]] ,
       crediti: ['', [CustomValidators.numbers]], 
       ore: ['', [CustomValidators.numbers]] ,
       descrizione: ['', [CustomValidators.totalempty]] ,
       lingua: ['', [CustomValidators.totalempty]] ,
       categoria: ['', [CustomValidators.totalempty]] ,
    })
    
    this.display = "none";
    this.displayView = "none";
    this.displayCreate ="block";
}


getnextfromserver(){
  let max: number = 10000;
  return Math.floor(Math.random() * max);
}

 feedbackEvHandler(){
 this.feedback = undefined 
 this.disableForm()

}






}