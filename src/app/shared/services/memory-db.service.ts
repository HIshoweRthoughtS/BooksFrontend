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

  constructor() {
    this.inMemDb = db;
    this.DbBooksSubject = new BehaviorSubject<Book[]>(this.inMemDb.books);
  }

  get Books(): Observable<Book[]> {
    return this.DbBooksSubject.asObservable();
  }

  addBook(book:Book) {
    this.inMemDb.books.push(book);
    this.DbBooksSubject.next(this.inMemDb.books);
  }

  set Books(newBooks:DbStruct) {
    console.log(this.inMemDb);
    this.inMemDb = newBooks;
  }
}
