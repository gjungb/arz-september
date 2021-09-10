import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'arz-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  /**
   * The content to be displayed
   */
  @Input('arzContent')
  content!: Book

  /**
   * Reacts to selecting the book
   * Will emit the ISBN
   */
  @Output('arzSelectBook')
  selectBook = new EventEmitter<string>();

  /**
   * 
   */
  customStyle = {
    color: 'blue',
    backgroundColor: 'yellow'
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleIsbnClick(ev: MouseEvent): void {
    console.log(ev.clientX);
    this.selectBook.emit(this.content.isbn);
  }

}
