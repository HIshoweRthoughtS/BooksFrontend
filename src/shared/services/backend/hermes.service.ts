import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Account, Book } from '../../interfaces';
import { ResponseCodes } from '../../enums/response-codes.enumeration';

const BACKEND_BASE_URL:string = 'http://localhost:3000';
const ACCOUNT_PATH:string = BACKEND_BASE_URL + '/account';
const ACCOUNT_LOGOUT_PATH:string = ACCOUNT_PATH + '/logout';
const ACCOUNT_LOGIN_PATH:string = ACCOUNT_PATH + '/login';

const BOOOKS_PATH: string = BACKEND_BASE_URL + '/books';
const REVIEWED_BOOKS_PATH:string = BOOOKS_PATH + '/reviewed';
const TODO_BOOKS_PATH:string = BOOOKS_PATH + '/todo';

interface ServerError {
  summary: string,
  message: string,
  //more soon
}

interface ServerRes<T> {
  info: ResponseCodes,
  detail: T | ServerError
}

@Injectable({
  providedIn: 'root'
})
export class HermesService {

  constructor(private readonly http:HttpClient) { }

  //devonly
  public deltedB() {
    this.http.get(BACKEND_BASE_URL + '/dev/deletedb').subscribe(console.log);
  }

  //account
  //account/
  public getAccountLoginState() {
    return this.http.get<ServerRes<{login_name:string}>>(ACCOUNT_PATH);
  }
  public postNewAccount(body:Account):Observable<any> {
    return this.http.post<any>(ACCOUNT_PATH, body);
  }
  //account/logout
  public getLogout(): Observable<ServerRes<string>> {
    return this.http.get<ServerRes<string>>(ACCOUNT_LOGOUT_PATH);
  }
  //account/login
  public postLoginAccount(body:any):Observable<ServerRes<Account>> {
    return this.http.post<ServerRes<Account>>(ACCOUNT_LOGIN_PATH, body);
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
