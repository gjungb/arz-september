import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'arz-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    {
      isbn: '1-234',
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: 'How to Win Friends and Influence ...',
    },
    {
      isbn: '2-345',
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...',
    },
    {
      isbn: '3-456',
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ...",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleSelectBook(ev: string): void {
    console.log(ev);
  }
}
