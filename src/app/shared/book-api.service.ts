import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { Book } from '../model/book';
import { API_URL } from '../tokens';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  constructor(
    private readonly httpClient: HttpClient,
    @Inject(API_URL) private readonly url: string
  ) {}

  getBookByIsbn(isbn: string): Observable<Book> {
    const url = `${this.url}/${isbn}`;

    return this.httpClient.get<Book>(url);
  }

  getBook(isbn: string): Observable<Book | undefined> {
    const books$ = this.getAll();

    const book$ = books$.pipe(
      map((books) => {
        return books.find((b) => b.isbn === isbn);
      })
    );

    return book$;
  }

  getAll(): Observable<Book[]> {
    // A stream of books => books$
    const books$ = this.httpClient.get<Book[]>(this.url);

    return books$.pipe(
      delay(3_000),
      catchError((err, caught) => {
        console.log(err);
        return of([
          {
            isbn: '123',
            title: 'Some Book',
            author: 'Some Author',
          },
        ]);
      }),
      tap((res) => console.log(res))
    );
  }
}
