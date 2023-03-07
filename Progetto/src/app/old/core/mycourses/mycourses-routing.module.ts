import { NgModule, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycoursesPageComponent } from './mycourses-page/mycourses-page.component';


const routes: Routes = [{ path: '', component: MycoursesPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MycoursesRoutingModule implements OnInit, OnDestroy{
  constructor(){
    
  }
  ngOnDestroy(): void {
    console.log("MycoursesRoutingModule destroyed")
  }
  ngOnInit(): void {
    console.log("MycoursesRoutingModule created")
  }

 
  
 }
