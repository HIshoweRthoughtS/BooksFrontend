import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BACKEND_BASE_URL:string = 'localhost:3000';
const ACCOUNT_PATH:string = BACKEND_BASE_URL + '/account';

@Injectable({
  providedIn: 'root'
})
export class HermesService {

  constructor(private readonly http:HttpClient) { }

  public postNewAccount(body:any):Observable<any> {
    return this.http.post<any>(ACCOUNT_PATH, body);
  }
}
