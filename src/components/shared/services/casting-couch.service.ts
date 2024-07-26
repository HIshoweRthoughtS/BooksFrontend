import { Injectable } from '@angular/core';
import { Book, BookReadStates, Read, ReviewedBook, TodoBook } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CastingCouchService {

  constructor() { }

  public toBook(b:TodoBook): Book;
  public toBook(b:ReviewedBook): Book;
  public toBook(b:ReviewedBook | TodoBook): Book {
    const tmpBook:Book = {
      isbn:b.isbn,
      author:b.author,
      title:b.title,
      publisher:b.publisher,
      pages:b.pages,
      extended_title:b.extended_title,
      more_pages:b.more_pages,
      read_state:b.read_state,
      extra_info:b.extra_info,
      thoughts:b.thoughts
    }
    return tmpBook;
  }

  public getNewReviewedBook(b:Book, read:Read): ReviewedBook;
  public getNewReviewedBook(b:TodoBook, read:Read): ReviewedBook;
  public getNewReviewedBook(b:Book | TodoBook, read:Read): ReviewedBook {
    return {
      ...b,
      read_state: BookReadStates.reviewed,
      reads: [read],
      rank: -1
    }
  }
}
