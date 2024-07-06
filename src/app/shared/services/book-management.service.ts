import { Injectable, inject } from '@angular/core';
import { MemoryDbService } from './memory-db.service';
import { Book, Review, ReviewedBook, TodoBook } from '../interfaces';
import { DbManager } from '../abstracts/db-manager';
import { Observable } from 'rxjs';

//ClientSide all around Books handler
@Injectable({
  providedIn: 'root'
})
export class BookManagementService {

  private dbHandler:DbManager;

  constructor() {
    this.dbHandler = inject(MemoryDbService);
  }

  //Getter
  public get Books(): Observable<Book[]> { return this.dbHandler.Books; }
  public get Todos(): Observable<TodoBook[]> { return this.dbHandler.Todos; }
  public get Reviews(): Observable<ReviewedBook[]> { return this.dbHandler.Reviews; }

  //adder (setter)
  public addBook(book:Book): void { this.dbHandler.addBook(book) }

  addReviewFindBook(review:Review, isbn:string): void {
    const tmpBook:Book | undefined = this.dbHandler.findBook(isbn);
    if (tmpBook) {
      this.addReviewToBook(review, tmpBook);
    }
    else {
      console.error("[BookService] Book not found");
    }
  }//or return some success or book etc
  addReviewToBook(review:Review, book:Book): void {
    //if book has member in todos -> create new reviewedbook, delete todo
    //if book has member in reads -> add review to read.reviews
  }//same as above
}
