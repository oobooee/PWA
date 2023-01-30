import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/model/feedback.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{

  feedback?: Feedback
  ngOnInit(): void {
    this.feedback = {success: false, message: "Errore"}
    
  }

}
