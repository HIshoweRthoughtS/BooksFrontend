import { Injectable, inject } from '@angular/core';
import { MemoryDbService } from './memory-db.service';
import { Book, Review } from '../interfaces';
import { DbManager } from '../abstracts/db-manager';

@Injectable({
  providedIn: 'root'
})
export class BookManagementService {

  private dbHandler:DbManager;

  constructor() {
    this.dbHandler = inject(MemoryDbService);
  }

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
