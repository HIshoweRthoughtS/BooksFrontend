import { Injectable } from '@angular/core';
import { db, DbStruct } from '../db/db'
import { Book, Read, ReviewedBook, TodoBook } from '../interfaces';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
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
    this.DbBooksSubject = new BehaviorSubject<Book[]>(this.inMemDb.other);
    this.DbTodosSubject = new BehaviorSubject<TodoBook[]>(this.inMemDb.todos);
    this.DbReadsSubject = new BehaviorSubject<ReviewedBook[]>(this.inMemDb.reviewed);
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

  getOtherBook(isbn: string): Book | undefined {
    return this.inMemDb.other.find((b:Book) => b.isbn === isbn);
  }

  getTodoBook(isbn: string): TodoBook | undefined {
    return this.inMemDb.todos.find((b:TodoBook) => b.isbn === isbn);
  }

  getReviewedBook(isbn: string): ReviewedBook | undefined {
    return this.inMemDb.reviewed.find((b:ReviewedBook) => b.isbn === isbn);
  }

  //setters/adders
  set Books(newBooks:DbStruct) {
    console.log(this.inMemDb);
    this.inMemDb = newBooks;
  }
  addOther(book:Book) {
    this.inMemDb.other.push(book);
    this.DbBooksSubject.next(this.inMemDb.other);
  }
  addTodo(book: TodoBook): void {
    this.inMemDb.todos.push(book);
    this.DbBooksSubject.next(this.inMemDb.todos);
  }
  addReviewed(book: ReviewedBook): void {
    this.inMemDb.reviewed.push(book);
    this.DbBooksSubject.next(this.inMemDb.reviewed);
  }
  addReadToBook(read: Read, book:ReviewedBook): void {
    book.reads.push(read);
  }

  //finders
  findBook(isbn:string): Book | undefined {
    console.log("{q}[memdb] can i cast a reviewbook in book?");
    //review book sollte zurueck gegeben werden, wenn es eins gibt. dann todo, dann other
    let ret:Book | undefined = this.findReviewedBook(isbn);
    ret = ret ? ret : this.findTodoBook(isbn);
    ret = ret ? ret: this.findOther(isbn);
    return ret;
  }
  findOther(isbn: string): Book | undefined {
    const retBook:Book | undefined = this.inMemDb.other.find((b:Book) => b.isbn === isbn);
    return retBook;
  }
  containsOther(book:Book): boolean {
    let ret: boolean = false;
    if (!this.findOther(book.isbn)) {
      ret = true;
    }
    return ret;
  }

  findReviewedBook(isbn:string): ReviewedBook | undefined {
    return this.inMemDb.reviewed.find((b:ReviewedBook) => b.isbn === isbn);
  }
  containsReviewedBook(book:ReviewedBook): boolean {
    let ret: boolean = false;
    if (!this.findReviewedBook(book.isbn)) {
      ret = true;
    }
    return ret;
  }
  reviewContainsAnyBook(book:Book): boolean {
    let ret: boolean = false;
    if (!this.findReviewedBook(book.isbn)) {
      ret = true;
    }
    return ret;
  }

  findTodoBook(isbn:string): TodoBook | undefined {
    return this.inMemDb.todos.find((b:TodoBook) => b.isbn === isbn);
  }
  containsTodoBook(book:TodoBook): boolean {
    let ret: boolean = false;
    if (!this.findTodoBook(book.isbn)) {
      ret = true;
    }
    return ret;
  }
  todoContainsAnyBook(book:Book): boolean {
    let ret: boolean = false;
    if (!this.findTodoBook(book.isbn)) {
      ret = true;
    }
    return ret;
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


  changeTodoToReview(todo: TodoBook, review: ReviewedBook): boolean {
    //this.changeAnyToReview(todo.isbn, review, this.inMemDb.todos);
    let success = false;
    
    //assume todo exists
    if (todo.isbn !== review.isbn) { throwError(() => "changeTodo: books must be same!"); }
    
    //add review first. Duplicates are better than none after error
    this.inMemDb.reviewed.push(review);

    const idxTodo = this.inMemDb.todos.findIndex((b:TodoBook) => b.isbn === todo.isbn);
    if (idxTodo >= 0) {
      this.inMemDb.todos.splice(idxTodo, 1);
      success = true;
      console.log("{verbose}[memdb] removed todo from db");
    }
    else {
      console.log("{verbose}[memdb] no todo found");
    }

    return success;
  }

  changeOtherToReview(book: Book, review: ReviewedBook): boolean {
    //this.changeAnyToReview(todo.isbn, review, this.inMemDb.other);
    let success = false;
    
    //assume todo exists
    if (book.isbn !== review.isbn) { throwError(() => "changeOther: books must be same!"); }
    
    //add review first. Duplicates are better than none after error
    this.inMemDb.reviewed.push(review);

    const idxTodo = this.inMemDb.other.findIndex((b:Book) => b.isbn === book.isbn);
    if (idxTodo >= 0) {
      this.inMemDb.other.splice(idxTodo, 1);
      success = true;
      console.log("{verbose}[memdb] removed todo from db");
    }
    else {
      console.log("{verbose}[memdb] no todo found");
    }

    return success;
  }

  private changeAnyToReview(isbn:string, review:ReviewedBook, list:Book[]): boolean {
    let success = false;
    
    //assume todo exists
    if (isbn !== review.isbn) { throwError(() => "changeOther: books must be same!"); }
    
    //add review first. Duplicates are better than none after error
    this.inMemDb.reviewed.push(review);

    const idxTodo = list.findIndex((b:Book) => b.isbn === isbn);
    if (idxTodo >= 0) {
      list.splice(idxTodo, 1);
      success = true;
      console.log(`{verbose}[memdb] removed Book (${list[0]?.read_state}) from db`);
    }
    else {
      console.error("{verbose}[memdb] Book not found in list\n", list);
    }

    return success;
  }
}
