import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Book } from '../model/book';
import { BookApiService } from '../shared/book-api.service';

@Component({
  selector: 'arz-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  // books: Book[] = [];

  books$?: Observable<Book[]>;

  private sub?: Subscription;

  constructor(private readonly bookService: BookApiService) {}

  ngOnInit(): void {
    this.sub = timer(2_000, 3_000).subscribe({
      next: (value) => console.log(value),
    });

    this.books$ = this.bookService.getAll().pipe(
      tap({
        complete: () => console.log('Bin fertig!'),
      })
    );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  handleSelectBook(ev: string): void {
    console.log(ev);
  }

  handleSearch(term: string): void {
    console.log(term);

    // TODO filter list
  }
}
