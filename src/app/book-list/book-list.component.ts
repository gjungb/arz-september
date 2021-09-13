import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookApiService } from '../shared/book-api.service';

@Component({
  selector: 'arz-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private readonly bookService: BookApiService) {}

  ngOnInit(): void {
    this.bookService.getAll().subscribe({
      next: (value) => (this.books = value),
      complete: () => console.log('Bin fertig!'),
    });
  }

  handleSelectBook(ev: string): void {
    console.log(ev);
  }
}
