import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-observable-page',
  templateUrl: './observable-page.component.html',
  styleUrls: ['./observable-page.component.css']
})
export class ObservablePageComponent implements OnInit, OnDestroy{

  result?: number;
  paramName?: string;
  timer$: Observable<number> = timer(0, 1000);
  subscription?: Subscription;
  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void{
    this.route.queryParams.subscribe(params =>{
      this.paramName = params['name'];
    });

    console.log("inizializzo di nuovo");
    this.subscription = this.timer$.subscribe(sec => {
      console.log(sec);
      this.result = sec;
    })
  }
  ngOnDestroy(){
      console.log("distrutto");
    this.subscription?.unsubscribe();
  }
}
