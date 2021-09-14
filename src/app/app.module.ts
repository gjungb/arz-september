import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookListComponent } from './book-list/book-list.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ArzIsbnPipe } from './shared/arz-isbn.pipe';
import { API_URL } from './tokens';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    BookListComponent,
    ArzIsbnPipe,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: API_URL,
      useValue: 'http://localhost:4730/books',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
