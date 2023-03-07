import { HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CustomValidators } from 'src/app/commons/validators/custom-validators';
import { Feedback } from 'src/app/model/feedback.model';
import { AppState } from 'src/app/store/app.states';
import { MyCourseDetail } from '../model/MyCourseDetails';
import { MyCourses } from '../model/MyCourses';
import { Teacher } from '../model/Teacher';
import { CreateAction, ID, PatchCourseAction, ResetStorageResponse, SaveOnStorageSuccess } from '../store/mycourses.actions';
import { draftedCourse, selectMessageDetails, selectMyCourseDetail, selectMyCoursesList, selectTeacheDetails } from '../store/mycourses.selector';
import { CourseCatalogService } from 'src/app/shared/services/coursecatalog.service';
import { CoursesOnCatalog } from 'src/app/courses/catalog/model/CoursesOnCatalog';


@Component({
  selector: 'app-mycourses-page', 
  templateUrl: './mycourses-page.component.html',
  styleUrls: ['./mycourses-page.component.css'],

})
export class MycoursesPageComponent implements OnInit, OnDestroy {

 
  mycourses$?: Observable<MyCourses[]>;
  mycourseDetails$?: Observable<MyCourseDetail>;

  teacherDetails$?: Observable<Teacher>;
  response$?: Observable<HttpResponse<any>>;
  errors$?: Observable<any>;
  myDraft$?: Observable<MyCourseDetail[]>;
  display: string = "none";
  displayView: string = "";
  displayCreate: string = "";
  courseForm: FormGroup;
  c?: MyCourseDetail;
  courses?: MyCourses[];
  draftedCourses?: MyCourseDetail[];
  resp: any;
  subscription1$: Subscription | undefined;
  feedback?: Feedback

  @ViewChild('form1')
  form1?: ElementRef;
  
  
  //@Input()
  courseDetail?: CoursesOnCatalog;
 
  //coursesFire?: AngularFirestoreDocument<any>;
  
  constructor(private store: Store<AppState>, private form: FormBuilder, private courseservicefire: CourseCatalogService ) {
   
    
    
    this.mycourses$ = this.store.select(selectMyCoursesList);
    console.log(this.mycourses$)
    //this.draftedCourses = [];
    this.teacherDetails$ = this.store.select(selectTeacheDetails);
    this.myDraft$ = this.store.select(draftedCourse);
    this.courseForm = this.form.group(
      {
        // title: ['', [Validators.required]],
        // id_corso:[,[]],
        id_corso: [{ value: '', disabled: true }, [CustomValidators.totalempty]],
        titolo: ['', Validators.minLength(4),],
        numPosti: ['', [CustomValidators.totalempty]],
        numPostiDisponibili: [{ value: '', disabled: true }, [CustomValidators.totalempty]],
        previstoEsame: ['', [CustomValidators.totalempty]],
        prezzo: ['', [CustomValidators.totalempty]],
        inizio: [{ value: '', disabled: true }, [CustomValidators.totalempty]],
        fine: [{ value: '', disabled: true }, [CustomValidators.totalempty]],
        crediti: ['', [CustomValidators.totalempty]],
        ore: ['', [CustomValidators.totalempty]],
        descrizione: ['', [CustomValidators.totalempty]],
        lingua: ['', [CustomValidators.totalempty]],
        categoria: ['', [CustomValidators.totalempty]],
        image: ['',]

      },
    );

  }
  ngOnInit(): void {
    //this.getAllCourses();
    //this.getUserDetails();
    this.displayCreate = "none";
  }

  ngOnDestroy() {
    this.subscription1$?.unsubscribe();
  }
  
  ngAfterViewInit() { //Da testare
      this.form1?.nativeElement.style.none;
    //this.form1.nativeElement.block;
      }

  
  // getUserDetails(){
  //   this.store.dispatch(new GetTeacherAction());
  // }
  setCourseDetails(c: number) {

    this.store.dispatch(new ID(c));
    this.mycourseDetails$ = this.store.select(selectMyCourseDetail);


  }
  patchOnStore() {
    const courseFormAcquired: MyCourseDetail = this.courseForm.getRawValue();
    console.log(JSON.stringify(courseFormAcquired));
    this.store.dispatch(new PatchCourseAction(courseFormAcquired))
    //this.subscription1$ = this.store.select(selectMessageDetails).subscribe(resp => {console.log(resp)});
    this.response$ = this.store.select(selectMessageDetails)
    this.subscription1$ = this.response$.subscribe(resp => {  console.log(resp)
      if(resp.url != null){
        this.feedback = { success: resp.ok, message: "Operazione completata con codice: "+"("+resp.status+")"}
      }
      if(!resp.ok){this.feedback = { success: resp.ok, message: "Errore "+"("+resp.status+")"}}
    })
    this.refresh()
  }


  saveOndDB() {
    console.log("save on db");
   
    this.courseForm.reset;
    const courseFormAcquired: CoursesOnCatalog = this.courseForm.getRawValue();
    this.courseDetail = courseFormAcquired
    console.log(this.courseDetail)
    this.courseservicefire?.create(this.courseDetail)
    this.store.dispatch(new CreateAction(courseFormAcquired))
    this.response$ = this.store.select(selectMessageDetails)
    this.subscription1$ = this.response$.subscribe(resp => {
      if(resp.url != null){
        this.feedback = { success: resp.ok, message: "Operazione completata con codice: "+"("+resp.status+")"}
      }
      if(!resp.ok){this.feedback = { success: resp.ok, message: "Errore "+"("+resp.status+")"}}
    })
    this.refresh()

    
  }


  saveOnStorage() {
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
  cleanSingleDraftFromStorage() { }





  enableForm() {
    this.courseForm.reset;
    this.display = "block";
    this.displayView = "none";
    this.displayCreate = "none";
    this.subscription1$ = this.mycourseDetails$?.subscribe((course: MyCourseDetail) => this.courseDetail = course)

    this.courseForm.patchValue({
      id_corso: this.courseDetail?.id_corso,
      titolo: this.courseDetail?.titolo,
      numPosti: this.courseDetail?.numPosti,
      numPostiDisponibili: this.courseDetail?.numPostiDisponibili,
      previstoEsame: this.courseDetail?.previstoEsame,
      prezzo: this.courseDetail?.prezzo,
      //inizio: formatDate(this.courseDetail?.inizio!, 'd/M/yy, h:mm a', 'en-US'),
      //fine: formatDate(this.courseDetail?.fine!, 'd/M/yy, h:mm a', 'en-US'),
      inizio: this.courseDetail?.inizio,
      fine: this.courseDetail?.fine,
      crediti: this.courseDetail?.crediti,
      ore: this.courseDetail?.ore,
      descrizione: this.courseDetail?.descrizione,
      lingua: this.courseDetail?.lingua,
      categoria: this.courseDetail?.categoria,
      
    })



  }
  disableForm() {
    this.courseForm.reset;
    this.display = "none";
    this.displayView = "block";
    this.displayCreate = "none";
    
  }

  refresh(): void {
    this.courseForm.reset;
    this.display = "none";
    this.displayView = "none";
    this.displayCreate = "none";
  }

  createForm() {
    this.courseForm.reset;
    this.courseForm = this.form.group(
      {
        id_corso: [{ value: this.getnextfromserver(), disabled: true }, [CustomValidators.numbers]],
        titolo: ['', Validators.minLength(4),],
        numPosti: ['', [CustomValidators.numbers]],
        numPostiDisponibili: [{ value: '', disabled: false }, [CustomValidators.numbers]],
        previstoEsame: ['', [CustomValidators.totalempty,]],
        prezzo: ['', [CustomValidators.numbers]],
        inizio: [{ value: '', disabled: false }, [CustomValidators.totalempty]],
        fine: [{ value: '', disabled: false }, [CustomValidators.totalempty]],
        crediti: ['', [CustomValidators.numbers]],
        ore: ['', [CustomValidators.numbers]],
        descrizione: ['', [CustomValidators.totalempty]],
        lingua: ['', [CustomValidators.totalempty]],
        categoria: ['', [CustomValidators.totalempty]],
        image:  ['']
      })

    this.display = "none";
    this.displayView = "none";
    this.displayCreate = "block";
  }


  getnextfromserver() {
    let max: number = 10000;
    return Math.floor(Math.random() * max);
  }

  feedbackEvHandler() {
    this.feedback = undefined,
    this.store.dispatch(new ResetStorageResponse())
    this.disableForm();
    //this.getAllCourses();   

  }

}

