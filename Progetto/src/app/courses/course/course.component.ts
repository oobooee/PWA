import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CustomValidators } from 'src/app/commons/validators/custom-validators';
import { Course } from 'src/app/model/course.model';
import { Feedback } from 'src/app/model/feedback.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {


  @Input()   //impostato a livello parent nella vista
  course?: Course;

  @Output()
  feedbackEvent: EventEmitter<Feedback>

  courseForm: FormGroup;

  constructor(private fb: FormBuilder, private courseservice:CourseService) {
    this.feedbackEvent = new EventEmitter();
    this.courseForm = this.fb.group(
      { 
       // title: ['', [Validators.required]],
       id_corso:[,[]],
       titolo: ['', [CustomValidators.notempty]] 
       });
  }


  ngOnInit(): void {
    
  }


  sendFeedback() {
    let f: Feedback = { success: true, message: "Operation completed" };
    this.feedbackEvent.emit(f);
  }
   
  save(){
    const course: Course = this.courseForm.value;
    console.log(JSON.stringify(course));
    this.courseservice.addCourse(course);
    this.courseForm.reset();
    this.sendFeedback();
    

  }
  localAlert() {
    alert("alert semplice");
  }
}
