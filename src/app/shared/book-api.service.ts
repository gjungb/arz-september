import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  constructor(private readonly httpClient: HttpClient) {}

  getAll(): Observable<Book[]> {
    // A stream of books => books$
    const books$ = this.httpClient.get<Book[]>('http://localhost:4730/books');

    return books$.pipe(
      delay(3_000),
      tap((res) => console.log(res)),
    );
  }
}
