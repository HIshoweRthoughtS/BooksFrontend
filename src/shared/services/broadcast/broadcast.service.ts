import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  private readonly loginStatusSubject = new BehaviorSubject<boolean>(false);
  private readonly loginNameSubject = new BehaviorSubject<string>('');

  public readonly logedIn$:Observable<boolean>;
  public readonly loginname$:Observable<string>;

  constructor() {
    this.logedIn$ = this.loginStatusSubject.asObservable();
    this.loginname$ = this.loginNameSubject.asObservable();
  }

  public notifyLogout() {
    this.loginStatusSubject.next(false);
    this.loginNameSubject.next('');
  }
  public notifyLogin(name:string) {
    this.loginStatusSubject.next(true);
    this.loginNameSubject.next(name);
  }
}
