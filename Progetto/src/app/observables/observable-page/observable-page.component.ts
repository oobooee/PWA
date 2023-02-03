import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-observable-page',
  templateUrl: './observable-page.component.html',
  styleUrls: ['./observable-page.component.css']
})
export class ObservablePageComponent {

  paramName?: string;
  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    this.route.queryParams.subscribe(params =>{
      this.paramName = params['name'];
    });
  }
}
