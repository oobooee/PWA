import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Feedback } from 'src/app/model/feedback.model';
import { Course } from '../../model/course.model';
import { CourseService } from 'src/app/courses/course.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CustomValidators } from 'src/app/commons/validators/custom-validators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css'],
  encapsulation: ViewEncapsulation.Emulated     //opzionale di default lofa già- se si mette none, l'impostazione parent figlio si protrae
})
export class CoursePageComponent implements OnInit, OnDestroy{
  
      courses?: Array<Course>;
      courseSearch: FormGroup;
      courseEdited?: Course
      temp?: Course;
      feedback?: Feedback
      getcourseSubscr?:Subscription;
      getcoursesbytitleSubscr?:Subscription

      constructor(private fb: FormBuilder, private courseService: CourseService){
        this.courseSearch = this.fb.group(
          {
           titolo: ['', [CustomValidators.search]]
           });
        console.log("Course page created");
        
      }

  ngOnInit(): void {
  
  }
 
  ngOnUpdate(): void{
    console.log("course page updated")
  }
  feedbackEvHandler(f: Feedback){
    console.log(JSON.stringify(f));
    this.feedback = f;
  
  }
  view_getAllCourses(): void{
    console.log("ngOnINit coursepage component");
    this.getcourseSubscr = this.courseService.getAllCourses()?.subscribe(data => {
    this.courses = data;
    this.feedback ={success:true, message: `Done. Data has been retrieved successfully`};
    
  }, error => {
    this.feedback ={success:false, message: `Unable to retrieve data. See log for more informations. You are working with cashed data`};
  })
  }
  view_getAllCoursesBytitle(title: string): void{
    console.log("ngOnINit coursepage component");
      this.getcoursesbytitleSubscr = this.courseService.getAllCoursesBytitle(title)?.subscribe(data => {
      this.courses = data;
      this.feedback ={success:true, message: `Done. Data has been retrieved successfully`};
  }, error => {
    this.feedback ={success:false, message: `Unable to retrieve data. See log for more informations, You are working with cashed data`};
  })
  }
  ngOnDestroy(): void {
     this.getcoursesbytitleSubscr?.unsubscribe();
     this.getcourseSubscr?.unsubscribe();
    
  }
  search(){  
    const coursetitle: string = this.courseSearch.value.titolo;
    console.log(coursetitle);
    //this.courseSearch.reset();
   // this.courses = this.courseService.getAllCoursesBytitle(coursetitle);
    this.view_getAllCoursesBytitle(coursetitle);
    //this.courseSearch.reset();
   // this.sendFeedback();
   
}
  refresh(){
    alert("Refresh !")
  }
  getInfo(){
    alert("Mostra edit")
  }
  editCourse(c: Course){
    //this.refresh();
    this.courseEdited = c;
    console.log(JSON.stringify(c));
  }

  deleteCourse(c: Course): void{
    this.courses?.forEach( (course, index) => {
      console.log(JSON.stringify(this.courses));
      if(course.id_corso == c.id_corso){
        this.courses?.splice(index, 1);
        }
  });
    
    
   }
  
  }


