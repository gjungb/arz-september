import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { startWith, switchMap, switchMapTo, tap } from 'rxjs/operators';
import { Book } from '../model/book';
import { BookApiService } from './book-api.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  readonly books$$ = new BehaviorSubject<Book[]>([]);
  constructor(private readonly api: BookApiService) {}

  get books$() {
    return this.api.getAll().pipe(
      tap({
        next: (res) => this.books$$.next(res),
      })
    );
  }
}
