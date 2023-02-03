import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/commons/validators/custom-validators';
import { Feedback } from '../../commons/feedback.model';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  @Input()
  book?: Book;

  @Output()
  feedbackEvent: EventEmitter<Feedback>;

  bookForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private bookService: BookService) { 
    this.feedbackEvent = new EventEmitter();

    this.bookForm = this.fb.group({
      isbn: ['', [CustomValidators.isbn]],
      title: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  save() {
    const book: Book = this.bookForm.value;
    console.log(JSON.stringify(book));
    this.bookService.addBook(book);
    this.bookForm.reset();
    let f: Feedback = { success: true, 
      message: 'Operation success.' 
    };
    this.feedbackEvent.emit(f);
  }
}
