import { Injectable } from '@angular/core';
import { Book } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class JsonDbServiceService {
  //barebones db interface
  //just to test stuff and mock first data

  constructor() { }

  get Books()/*: Book*/ {
    return 
  }

  private get DbFullContent() {
    return 
  }
}
