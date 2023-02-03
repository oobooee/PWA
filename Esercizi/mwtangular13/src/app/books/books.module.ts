import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookPageComponent } from './book-page/book-page.component';
import { BookComponent } from './book/book.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookPageComponent,
    BookComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ]
})
export class BooksModule {
  constructor() {
    console.log('BooksModule created.');
  }
 }
