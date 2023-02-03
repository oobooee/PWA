import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/books/book.model';

@Component({
  selector: 'app-pipe-page',
  templateUrl: './pipe-page.component.html',
  styleUrls: ['./pipe-page.component.css']
})
export class PipePageComponent implements OnInit {

  now?: Date;
  greeting?: string;
  upperString?: string;
  money?: string;
  book?: Book;
  expBase: number = 2;

  constructor() { }

  ngOnInit(): void {
    this.now = new Date();
    this.greeting = "hello!";
    this.upperString = "WELCOME";
    this.money = '2500';
    this.book = { id: 1, title: 'Novecento' };
  }
}
