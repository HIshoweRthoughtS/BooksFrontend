import { Injectable } from '@angular/core';
import { Book, ReviewedBook, TodoBook } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CastingCouchService {

  constructor() { }

  public toBook(b:TodoBook): Book;
  public toBook(b:ReviewedBook): Book;
  public toBook(b:ReviewedBook | TodoBook) {
    const tmpBook = {
      isbn:b.isbn,
      author:b.author,
      title:b.title,
      publisher:b.publisher,
      pages:b.pages,
      extended_title:b.extended_title,
      more_pages:b.more_pages,
      extra_info:b.extra_info,
      thoughts:b.thoughts
    }
    return tmpBook;
  }
}
