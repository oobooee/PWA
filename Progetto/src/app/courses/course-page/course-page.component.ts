import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Course } from '../../model/course.model';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css'],
  encapsulation: ViewEncapsulation.Emulated     //opzionale di default lofa già- se si mette none, l'impostazione parent figlio si protrae
})
export class CoursePageComponent implements OnInit, OnDestroy{
  
      courses?: Array<Course>;
      constructor(){
        console.log("creato");
      
      }

  ngOnInit(): void {
    console.log("course page created");
    this.courses = [
      {id_corso:213, titolo:"Programming in cobol"},
      {id_corso:123, titolo: "Programming in javascript"},
    ];

  }
  ngOnDestroy(): void {
    console.log("course page destroyed")
  }
     
}



