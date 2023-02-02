import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  title = 'Progetto MWT Marco e Fabio';
  
  
  constructor(private courseService: CourseService) {
    console.log("HomePageComponent service created");
  }

}
