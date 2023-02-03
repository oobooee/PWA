import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

  title = 'MWT Angular 13';

  @ViewChild('openButton')
  btn?: ElementRef;

  @ViewChildren("div") 
  divs?: QueryList<ElementRef>;
  
  constructor() {
    console.log("HomePageComponent created.");
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.btn?.nativeElement.click();
    this.divs?.forEach(div => console.log(div));
  }
}
