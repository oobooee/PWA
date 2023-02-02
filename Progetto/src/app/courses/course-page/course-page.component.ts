import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Feedback } from 'src/app/model/feedback.model';
import { Course } from '../../model/course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css'],
  encapsulation: ViewEncapsulation.Emulated     //opzionale di default lofa già- se si mette none, l'impostazione parent figlio si protrae
})
export class CoursePageComponent implements OnInit, OnDestroy{
  
      courses?: Array<Course>;
      courseEdited?: Course;
      feedback?: Feedback
      constructor(private courseService: CourseService){
        console.log("Course page created");
        
      }

  ngOnInit(): void {
    console.log("ngOnINit coursepage component");
    this.courseService.getAllCourses()?.subscribe(data => {
      this.courses = data;
    }, error => {
      console.log(`Error: ${JSON.stringify(error)}`);
      this.feedback ={success:false, message: "Operation failed. unable to retrieve data "};
    })
  }
  ngOnDestroy(): void {
    console.log("course page destroyed")
  }
  
  feedbackEvHandler(f: Feedback){
    console.log(JSON.stringify(f));
    this.feedback = f;
  
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



