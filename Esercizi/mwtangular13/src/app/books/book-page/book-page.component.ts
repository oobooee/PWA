import { Component, OnDestroy, OnInit } from '@angular/core';
import { Feedback } from 'src/app/commons/feedback.model';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']  
})
export class BookPageComponent implements OnInit, OnDestroy {

  books?: Array<Book>;
  bookSelected?: Book;
  feedback?: Feedback;

  constructor(private bookService: BookService) { 
    console.log("BookPageComponent created.");
  }

  feedbackEvHandler(f: Feedback) {
    console.log(JSON.stringify(f));
    this.feedback = f;
  }

  ngOnInit(): void {
    console.log("BookPageComponent ngOnInit()");
    this.bookService.getAllBooks().subscribe( 
      res => {
        this.books = res;
      }, 
      error => {
        console.error(JSON.stringify(error));
        this.feedback = {
          success: false,
          message: 'An error occurred.'
        }
      }
      );
  }

  selectBook(b: Book) {
    console.log(JSON.stringify(b));
    this.bookSelected = b;
  }

  ngOnDestroy(): void {
    console.log("BookPageComponent ngOnDestroy()");
  }
}
