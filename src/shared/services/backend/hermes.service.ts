import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Book } from '../../interfaces';

const BACKEND_BASE_URL:string = 'http://localhost:3000';
const ACCOUNT_PATH:string = BACKEND_BASE_URL + '/account';
const ACCOUNT_LOGIN_PATH:string = ACCOUNT_PATH + '/login';

const BOOOKS_PATH: string = BACKEND_BASE_URL + '/books';
const REVIEWED_BOOKS_PATH:string = BOOOKS_PATH + '/reviewed';
const TODO_BOOKS_PATH:string = BOOOKS_PATH + '/todo';

@Injectable({
  providedIn: 'root'
})
export class HermesService {

  constructor(private readonly http:HttpClient) { }

  //account
  //account/
  public postNewAccount(body:any):Observable<any> {
    return this.http.post<any>(ACCOUNT_PATH, body);
  }
  //account/login
  public postloginAccount(body:any):Observable<any> {
    return this.http.post<any>(ACCOUNT_LOGIN_PATH, body);
  }
  //books/
  //books/
  public getAllBooks(sorting:string): Observable<Book[]> {
    return this.http.get<Book[]>(BOOOKS_PATH + `?srt=${sorting}`);
  }
  public postNewBook(body:any): Observable<any> {
    return this.http.post<any>(BOOOKS_PATH, body);
  }
  //books/reviewed
  public getReviewedBooks():Observable<any> {
    return this.http.get<any>(REVIEWED_BOOKS_PATH);
  }
  //books/todo
  public getTodoBooks():Observable<any> {
    return this.http.get<any>(TODO_BOOKS_PATH);
  }
}
