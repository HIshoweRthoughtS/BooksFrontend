import { Injectable } from '@angular/core';
import { HermesService } from '../backend/hermes.service';
import { map, Observable } from 'rxjs';
import { FormRead, SimpleBook, SimpleTodo } from '../../interfaces';
import { ResponseCodes } from '../../enums/response-codes.enumeration';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private readonly hermes:HermesService) { }

  public sendGetAll(sort:string):Observable<SimpleBook[]> {
    //todo: cache
    return this.hermes.getAllBooks(sort);
  }

  public sendCreateNewBook(formValues:any): Observable<any> {
    //todo:
    //if not enough info: https://isbndb.com/apidocs/v2
    let body = {
      ...formValues
    };
    return this.hermes.postNewBook(body);
  }

  public sendGetAllTodos(): Observable<any> {
    return this.hermes.getTodoBooks().pipe(map((res:any) => {
      if (res.info === ResponseCodes.success) {
        return res.detail;
      }
      else {
        return [] as SimpleTodo[];
      }
    }))
  }

  public sendCreateNewTodo(book:SimpleBook): Observable<any> {
    return this.hermes.postTodoBooks({book, start_date: new Date().getTime()});
  }

  public sendCreateNewRead(read:FormRead) {
    return this.hermes.postRead({
      ...read,
      started_read_date: new Date(read.started_read_date).getTime(),
      finished_read_date: new Date(read.finished_read_date).getTime()
    });
  }
}
