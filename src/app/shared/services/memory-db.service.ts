import { Injectable } from '@angular/core';
import { db, DbStruct } from '../db/db'
import { Book } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class MemoryDbService {
  private inMemDb:DbStruct;

  constructor() {
    this.inMemDb = db;
  }

  get Books(): Book[] {
    return this.inMemDb.books;
  }
  
  set Books(newBooks:DbStruct) {
    console.log(this.inMemDb);
    this.inMemDb = newBooks;
  }
}
