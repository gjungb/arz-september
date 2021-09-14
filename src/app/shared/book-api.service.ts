import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
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
