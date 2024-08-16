import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ServerError } from '../backend/hermes.service';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  private readonly loginStateSubject$ = new BehaviorSubject<boolean>(false);
  private readonly loginNameSubject$ = new BehaviorSubject<string>('');

  constructor() { }

  public tapLoginState(): Observable<boolean> {
    return this.loginStateSubject$.asObservable();
  }
  public tapLoginname(): Observable<string> {
    return this.loginNameSubject$.asObservable();
  }

  public notifyLogout() {
    this.loginStateSubject$.next(false);
    this.loginNameSubject$.next('');
  }
  public notifyLogin(name:string) {
    this.loginStateSubject$.next(true);
    this.loginNameSubject$.next(name);
  }

  public backEndRequestFailed(error:ServerError) {

  }
}
