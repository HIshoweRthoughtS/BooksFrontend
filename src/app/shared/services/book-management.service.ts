import { Injectable, inject } from '@angular/core';
import { MemoryDbService } from './memory-db.service';
import { Book, BookReadStates, Read, Review, ReviewedBook, TodoBook } from '../interfaces';
import { DbManager } from '../abstracts/db-manager';
import { Observable } from 'rxjs';
import { CastingCouchService } from './casting-couch.service';

//ClientSide all around Books handler
@Injectable({
  providedIn: 'root'
})
export class BookManagementService {

  private dbHandler:DbManager;

  constructor(private caster:CastingCouchService) {
    this.dbHandler = inject(MemoryDbService);
  }

  //Getter
  public get Books(): Observable<Book[]> { return this.dbHandler.Books; }
  public get Todos(): Observable<TodoBook[]> { return this.dbHandler.Todos; }
  public get Reviews(): Observable<ReviewedBook[]> { return this.dbHandler.Reviews; }

  public getOtherBook(isbn:string): Book | undefined {
    return this.dbHandler.getOtherBook(isbn)
  }

  public getTodoBook(isbn:string): TodoBook | undefined {
    return this.dbHandler.getTodoBook(isbn)
  }

  public getReviewedBook(isbn:string): ReviewedBook | undefined {
    return this.dbHandler.getReviewedBook(isbn)
  }

  public getBookState(isbn:string): BookReadStates {
    let ret = BookReadStates.exisnt;
    const tmpBook = this.dbHandler.findBook(isbn);
    if (tmpBook) {
      ret = tmpBook.read_state;
    }
    return ret;
  }

  //adder (setter)
  public addOther(book:Book): void { this.dbHandler.addOther(book) }

  addReadFindBook(read:Read, isbn:string): void {
    const tmpBook:Book | undefined = this.dbHandler.findBook(isbn);
    if (tmpBook) {
      this.addReadToBook(read, tmpBook);
    }
    else {
      console.error("[BookService] Book not found");
    }
  }//or return some success or book etc
  addReadToBook(read:Read, book:Book): boolean {
    let success = false
    switch(book.read_state) {
      case BookReadStates.reviewed: {
        const revBook:ReviewedBook | undefined = this.getReviewedBook(book.isbn);
        if (revBook) {
          const count = revBook.reads.length;
          read.id = `${revBook.isbn}--${count + 1}`;
          revBook.reads.push(read);

          success = true;
        }
        else {
          //assertion
          console.error("[Bookservice] reviewed book not found");
        }
        break;
      }
      case BookReadStates.todo:
      case BookReadStates.progress:
      case BookReadStates.awaiting: {
        const toBook:TodoBook | undefined = this.getTodoBook(book.isbn);
        if (toBook) {
          read.id = `${toBook.isbn}--1`;
          const newBook:ReviewedBook = this.caster.getNewReviewedBook(toBook, read);
          console.log(newBook);

          success = this.dbHandler.changeTodoToReview(toBook, newBook);
        }
        else {
          //assertion
          console.error("[Bookservice] todo book not found")
        }
        break;
      }
      case BookReadStates.exists:
      case BookReadStates.interesting: {
        const oBook:Book | undefined = this.getOtherBook(book.isbn);
        if (oBook) {
          read.id = `${oBook.isbn}--1`;
          const newBook:ReviewedBook = this.caster.getNewReviewedBook(oBook, read);
          console.log(newBook);

          success = this.dbHandler.changeOtherToReview(oBook, newBook);
        }
        else {
          //assertion
          console.error("[Bookservice] other book not found")
        }
        break;
      }
      case BookReadStates.exisnt:
      default: {
        console.error("[Bookservice] error in addReadToBook");
        break;
      }
    }
    return success;
  }//same as above

  //finder
  reviewsContain(book:Book): boolean {
    return this.dbHandler.reviewContainsAnyBook(book);
  }
  todoContain(book:Book): boolean {
    return this.dbHandler.todoContainsAnyBook(book);
  }
}
