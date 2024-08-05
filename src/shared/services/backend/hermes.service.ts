import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { BE_Book_A_Name_P_Title, FormAccount } from '../../interfaces';
import { ResponseCodes } from '../../enums/response-codes.enumeration';

const BACKEND_BASE_URL:string = 'http://localhost:3000';
const ACCOUNT_PATH:string = BACKEND_BASE_URL + '/account';
const ACCOUNT_LOGOUT_PATH:string = ACCOUNT_PATH + '/logout';
const ACCOUNT_LOGIN_PATH:string = ACCOUNT_PATH + '/login';

const BOOOKS_PATH: string = BACKEND_BASE_URL + '/books';
const REVIEWED_BOOKS_PATH:string = BOOOKS_PATH + '/reviewed';
const TODO_BOOKS_PATH:string = BOOOKS_PATH + '/todo';

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
    this.http.get(BACKEND_BASE_URL + '/dev/deletedb').subscribe(console.log);
  }

  //account
  //account/
  public getAccountLoginState() {
    return this.http.get<ServerRes<{loginname:string}>>(ACCOUNT_PATH);
  }
  public postNewAccount(body:FormAccount):Observable<any> {
    return this.http.post<any>(ACCOUNT_PATH, body);
  }
  //account/logout
  public getLogout(): Observable<ServerRes<string>> {
    return this.http.get<ServerRes<string>>(ACCOUNT_LOGOUT_PATH);
  }
  //account/login
  public postLoginAccount(body:any):Observable<ServerRes<FormAccount>> {
    return this.http.post<ServerRes<FormAccount>>(ACCOUNT_LOGIN_PATH, body);
  }
  //books/
  //books/
  public getAllBooks(sorting:string): Observable<BE_Book_A_Name_P_Title[]> {
    return this.http.get<BE_Book_A_Name_P_Title[]>(BOOOKS_PATH/* + `/?srt=${sorting}`*/);
  }
  public postNewBook(body:any): Observable<ServerRes<string>> {
    return this.http.post<ServerRes<string>>(BOOOKS_PATH, body);
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
