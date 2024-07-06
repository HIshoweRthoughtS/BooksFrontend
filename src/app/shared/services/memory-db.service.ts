import { Injectable } from '@angular/core';
import { db, DbStruct } from '../db/db'
import { Book, Review, ReviewedBook, TodoBook } from '../interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemoryDbService {
  private inMemDb:DbStruct;
  private DbSubject:BehaviorSubject<DbStruct>;
  private DbBooksSubject:BehaviorSubject<Book[]>;
  private DbTodosSubject:BehaviorSubject<TodoBook[]>;
  private DbReadsSubject:BehaviorSubject<ReviewedBook[]>;

  constructor() {
    this.inMemDb = db;
    this.DbSubject = new BehaviorSubject<DbStruct>(this.inMemDb);
    this.DbBooksSubject = new BehaviorSubject<Book[]>(this.inMemDb.books);
    this.DbTodosSubject = new BehaviorSubject<TodoBook[]>(this.inMemDb.todos);
    this.DbReadsSubject = new BehaviorSubject<ReviewedBook[]>(this.inMemDb.read);
  }

  get All(): Observable<DbStruct> {
    return this.DbSubject.asObservable();
  }

  get Books(): Observable<Book[]> {
    return this.DbBooksSubject.asObservable();
  }

  get Todos(): Observable<TodoBook[]> {
    return this.DbTodosSubject.asObservable();
  }

  get Reviews(): Observable<ReviewedBook[]> {
    return this.DbReadsSubject.asObservable();
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
