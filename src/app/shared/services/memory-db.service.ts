import { Injectable } from '@angular/core';
import { db, DbStruct } from '../db/db'
import { Book } from '../interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemoryDbService {
  private inMemDb:DbStruct;
  private DbBooksSubject:BehaviorSubject<Book[]>;
  public Books$:Observable<Book[]>;

  constructor() {
    this.inMemDb = db;
    this.DbBooksSubject = new BehaviorSubject<Book[]>(this.inMemDb.books);
    this.Books$ = this.DbBooksSubject.asObservable();
  }

  get Books(): Book[] {
    return this.inMemDb.books;
  }

  addBook(book:Book) {
    this.inMemDb.books.push(book);
    this.DbBooksSubject.next(this.Books);
  }

  set Books(newBooks:DbStruct) {
    console.log(this.inMemDb);
    this.inMemDb = newBooks;
  }
}
