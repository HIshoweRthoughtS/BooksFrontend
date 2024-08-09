import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SimpleBook, FormAccount, TwoBee_Todo_Book, FormRead } from '../../interfaces';
import { ResponseCodes } from '../../enums/response-codes.enumeration';

const BACKEND_BASE_URL:string = 'http://localhost:3000';
const ACCOUNT_PATH:string = BACKEND_BASE_URL + '/account';
const ACCOUNT_LOGOUT_PATH:string = ACCOUNT_PATH + '/logout';
const ACCOUNT_LOGIN_PATH:string = BACKEND_BASE_URL + '/login';

const BOOOKS_PATH: string = BACKEND_BASE_URL + '/books';
const TODO_BOOKS_PATH:string = BOOOKS_PATH + '/todo';
const REVIEWED_BOOKS_PATH:string = BOOOKS_PATH + '/reviewed';
const READS_PATH:string = BOOOKS_PATH + '/read';

interface ServerRes<T> {
  info: ResponseCodes,
  detail: T | ServerError
}

interface ServerError {
  summary: string,
  message: string,
  //more soon
}

@Injectable({
  providedIn: 'root'
})
export class HermesService {

  constructor(private readonly http:HttpClient) { }

  //devonly
  public deltedB() {
    this.get(BACKEND_BASE_URL + '/dev/deletedb').subscribe(console.log);
  }

  //account
  //account/
  public getAccountLoginState() {
    return this.get<{loginname:string}>(ACCOUNT_PATH);
  }
  public postNewAccount(body:FormAccount):Observable<any> {
    return this.post<any>(ACCOUNT_PATH, body);
  }
  //account/logout
  public getLogout(): Observable<ServerRes<string>> {
    return this.get<string>(ACCOUNT_LOGOUT_PATH);
  }
  //account/login
  public postLoginAccount(body:any):Observable<ServerRes<FormAccount>> {
    return this.post<FormAccount>(ACCOUNT_LOGIN_PATH, body);
  }
  //books/
  //books/
  public getAllBooks(sorting:string): Observable<SimpleBook[]> {
    return this.get<SimpleBook[]>(BOOOKS_PATH)/* + `/?srt=${sorting}`*/;
  }
  public postNewBook(body:any): Observable<ServerRes<string>> {
    return this.post<string>(BOOOKS_PATH, body);
  }
  //books/todo
  public getTodoBooks():Observable<any> {
    return this.get<any>(TODO_BOOKS_PATH);
  }
  public postTodoBooks(body:TwoBee_Todo_Book) {
    return this.post<string>(TODO_BOOKS_PATH, body);
  }
  //books/reviewed
  public getReviewedBooks():Observable<any> {
    return this.get<any>(REVIEWED_BOOKS_PATH);
  }
  //books/read
  public postRead(body:FormRead) {
    return this.post<string>(READS_PATH, body);
  }

  private get<T>(uri:string, options?:any): Observable<any> {
    return this.http.get<ServerRes<T>>(uri, options).pipe(tap((res:any) => this.loggerFirstDraft(uri,res,undefined,options)));//.pipe(catchError(this.errorHandler).bind(this))
  }
  private post<T>(uri:string, body:any | null, options?:any): Observable<any> {
    return this.http.post<ServerRes<T>>(uri, body, options).pipe(tap((res:any) => this.loggerFirstDraft(uri,res,body,options)));//.pipe(catchError(this.errorHandler).bind(this))
  }


  private loggerFirstDraft(uri:string, res:any, body?:any, options?:any): void {
    const msg:string = `Response from ${uri} is ${res.info}
    Res detail: ${res.detail}
    Body was: ${body}
    with options: ${options}`;
    console.log(msg);
  }
}
