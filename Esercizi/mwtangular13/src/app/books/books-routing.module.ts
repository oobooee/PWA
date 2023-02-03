import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPageComponent } from './book-page/book-page.component';

const routes: Routes = [
  { path: '', component: BookPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { 
  constructor() {
    console.log('BooksRoutingModule created.');
  }
}
