import { Injectable } from '@angular/core';
import { HermesService } from '../backend/hermes.service';
import { Observable } from 'rxjs';
import { FormRead, SimpleBook } from '../../interfaces';
import { AccountsService } from './accounts.service';

@Injectable({
    providedIn: 'root'
})
export class BooksService {

    constructor(private readonly hermes:HermesService, private readonly accd:AccountsService) { }

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
        return this.hermes.getTodoBooks(this.accd.Loginname);
    }

    public sendSetTodoPages(body:{todo_id:number,last_page?:number,current_page?:number}): Observable<any> {
        return this.hermes.putTodoPages(this.accd.Loginname, body)
    }

    public sendCreateNewTodo(book:SimpleBook): Observable<any> {
        return this.hermes.postTodoBooks(this.accd.Loginname,{book, start_date: new Date().toISOString()});
    }

    public sendCreateNewRead(read:FormRead) {
        return this.hermes.postRead(this.accd.Loginname, {
            ...read,
            started_read_date: new Date(read.started_read_date).toISOString(),
            finished_read_date: new Date(read.finished_read_date).toISOString()
        });
    }
}
