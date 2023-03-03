import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CourseService } from 'src/app/courses/course.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements OnInit{
  title = 'Progetto MWT Angular Giarrusso Paolantonio';
  
  @ViewChild('openbutton')
  btn?:ElementRef

  @ViewChildren("div") divs?: QueryList<ElementRef>;

  constructor(private courseService: CourseService, private db: AngularFirestoreModule) {
    console.log("HomePageComponent service created");
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    this.btn?.nativeElement.display;
    this.divs?.forEach(div => console.log(div));
  }


}
