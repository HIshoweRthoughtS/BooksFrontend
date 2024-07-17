import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BACKEND_BASE_URL:string = 'http://localhost:3000';
const ACCOUNT_PATH:string = BACKEND_BASE_URL + '/account';
const ACCOUNT_LOGIN_PATH:string = ACCOUNT_PATH + '/login';

const BOOOKS_PATH: string = BACKEND_BASE_URL + '/books';
const REVIEWED_BOOKS_PATH:string = BOOOKS_PATH + '/reviewed';

@Injectable({
  providedIn: 'root'
})
export class HermesService {

  constructor(private readonly http:HttpClient) { }

  public postNewAccount(body:any):Observable<any> {
    return this.http.post<any>(ACCOUNT_PATH, body);
  }
  public postloginAccount(body:any):Observable<any> {
    return this.http.post<any>(ACCOUNT_LOGIN_PATH, body);
  }
  public getReviewedBooks():Observable<any> {
    return this.http.get<any>(REVIEWED_BOOKS_PATH);
  }
}
