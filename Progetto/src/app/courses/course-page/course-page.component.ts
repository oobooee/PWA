import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Feedback } from 'src/app/model/feedback.model';
import { Course } from '../../model/course.model';
import { CourseService } from 'src/app/services/course.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CustomValidators } from 'src/app/commons/validators/custom-validators';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css'],
  encapsulation: ViewEncapsulation.Emulated     //opzionale di default lofa già- se si mette none, l'impostazione parent figlio si protrae
})
export class CoursePageComponent implements OnInit, OnDestroy{
  
      courses?: Array<Course>;
      courseSearch: FormGroup;
      courseEdited?: Course;
      feedback?: Feedback
      constructor(private fb: FormBuilder, private courseService: CourseService){
        this.courseSearch = this.fb.group(
          {
           titolo: ['', [CustomValidators.search]]
           });
        console.log("Course page created");
        
      }

  ngOnInit(): void {
  
  }
  ngOnDestroy(): void {
    console.log("course page destroyed")
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
     this.courseService.getAllCourses()?.subscribe(data => {
    this.courses = data;
  }, error => {
    this.feedback ={success:false, message: `Unable to retrieve data. See log for more informations`};
  })
  }
  view_getAllCoursesBytitle(title: string): void{
    console.log("ngOnINit coursepage component");
      this.courseService.getAllCoursesBytitle(title)?.subscribe(data => {
      this.courses = data;
  }, error => {
    this.feedback ={success:false, message: `Unable to retrieve data. See log for more informations`};
  })
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
  getCourse(c: Course){
    //this.refresh();
    this.courseEdited = c;
    console.log(JSON.stringify(c));
  }
}



