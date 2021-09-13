import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookListComponent } from './book-list/book-list.component';
import { ArzIsbnPipe } from './shared/arz-isbn.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    BookListComponent,
    ArzIsbnPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
