import { Injectable } from '@angular/core';
import { db, DbStruct } from '../db/db'
import { Book, Read, Review, ReviewedBook, TodoBook } from '../interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { DbManager } from '../abstracts/db-manager';

//future backendside all around books service -> just for dev and test in frontend, only provides debug and test essential features
@Injectable({
  providedIn: 'root'
})
//why impliment and not extend abstract DbManager? A.: https://stackoverflow.com/questions/35990538/extending-vs-implementing-a-pure-abstract-class-in-typescript
export class MemoryDbService implements DbManager {
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

  //Getters
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

  //setters/adders
  set Books(newBooks:DbStruct) {
    console.log(this.inMemDb);
    this.inMemDb = newBooks;
  }
  addBook(book:Book) {
    this.inMemDb.books.push(book);
    this.DbBooksSubject.next(this.inMemDb.books);
  }
  addReadToBook(read: Read, book:ReviewedBook): void {
    book.reads.push(read);
  }

  //finders
  findBook(isbn: string): Book | undefined {
    const retBook:Book | undefined = this.inMemDb.books.find((b:Book) => b.isbn === isbn);
    return retBook;
  }
  // findRead(readId: string): Read | undefined {
  //   let retRead:  Read | undefined = undefined;
  //   const tmpBook = this.findReviewedBook(readId);
  //   if (tmpBook) {
  //     retRead = tmpBook.reads.find((read:Read) => read.id === readId);
  //   }
  //   return retRead;
  // }
  // findReviewedBook(readId: string): ReviewedBook | undefined {
  //   throw new Error('Method not implemented.');
  // }
}
