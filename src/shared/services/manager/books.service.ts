import { Injectable } from '@angular/core';
import { HermesService } from '../backend/hermes.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private readonly hermes:HermesService) { }

  public sendGetAll(sort:string):void {
    this.hermes.getAllBooks(sort).subscribe(console.log);
  }

  public sendCreateNewBook(formValues:any):void {
    //todo:
    //if not enough info: https://isbndb.com/apidocs/v2
    let body = {
      ...formValues
    };
    this.hermes.postNewBook(body).subscribe(console.log);
  }
}
