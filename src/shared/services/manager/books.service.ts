import { Injectable } from '@angular/core';
import { HermesService } from '../backend/hermes.service';
import { Observable } from 'rxjs';
import { FormRead, FullBERead, SimpleBook } from '../../interfaces';
import { AccountsService } from './accounts.service';

@Injectable({
    providedIn: 'root'
})
export class BooksService {

    constructor(private readonly hermes:HermesService, private readonly accd:AccountsService) { }

    public sendGetAll(sort?:string):Observable<SimpleBook[]> {
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

    public sendSetBookLength(b:SimpleBook, formContent:{last_page:number, chapter?:number}): Observable<any> {
        return this.hermes.patchBookLength(String(b.b_id_ref), formContent);
    }

    public sendGetAllTodos(): Observable<any> {
        return this.hermes.getTodoBooks(String(this.accd.AccountId));
    }

    public sendGetOneTodo(todoId:string): Observable<FullBERead> {
        return this.hermes.getOneTodo(String(this.accd.AccountId), todoId);
    }

    public sendSetTodoPages(todoId:string, body:{current_page:number}): Observable<any> {
        return this.hermes.patchTodoPages(todoId, String(this.accd.AccountId), body)
    }

    public sendCreateNewTodo(book:SimpleBook): Observable<any> {
        return this.hermes.postTodoBooks(String(this.accd.AccountId), {bookId: String(book.b_id_ref), start_date: new Date().toISOString()});
    }

    public sendCreateNewRead(read:FormRead) {
        return this.hermes.postRead(this.accd.Loginname, {
            ...read,
            started_read_date: new Date(read.started_read_date).toISOString(),
            finished_read_date: new Date(read.finished_read_date).toISOString()
        });
    }

    public sendTodoAddInfo(todoId:string, body:any) {
        return this.hermes.postTodoAddInfo(String(this.accd.AccountId), todoId, body);
    }

    //todo: maybe create private function to always add accId when needed. lots of dubs right now
}
