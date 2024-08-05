import { Injectable } from '@angular/core';
import { HermesService } from '../backend/hermes.service';
import { Observable, take, tap } from 'rxjs';
import { BE_Book_A_Name_P_Title } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private readonly hermes:HermesService) { }

  public sendGetAll(sort:string):Observable<BE_Book_A_Name_P_Title[]> {
    //todo: cache
    return this.hermes.getAllBooks(sort);
  }

  public sendCreateNewBook(formValues:any): Observable<any> {
    //todo:
    //if not enough info: https://isbndb.com/apidocs/v2
    let body = {
      ...formValues
    };
    return this.hermes.postNewBook(body).pipe(tap((_:any) => console.log(_)), take(1));
  }
}
