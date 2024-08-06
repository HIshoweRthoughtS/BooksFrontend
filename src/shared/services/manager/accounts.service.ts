import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HermesService } from '../backend/hermes.service';
import { Credentials } from '../../interfaces';
import { ResponseCodes } from '../../enums/response-codes.enumeration';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private loginState:boolean = false;
  private loginname:string = '';

  private readonly loginStatusSubject = new BehaviorSubject<boolean>(this.loginState);
  private readonly loginNameSubject = new BehaviorSubject<string>(this.loginname);

  public readonly logedIn$:Observable<boolean>;
  public readonly loginname$:Observable<string>

  constructor(private readonly hermes:HermesService) {
    this.logedIn$ = this.loginStatusSubject.asObservable();
    this.loginname$ = this.loginNameSubject.asObservable();
  }
  
  get LoggedIn(): boolean {
    return this.loginState;
  }

  get Loginname(): string {
    return this.loginname;
  }

  public askLoginState() {
    this.sendStateReq().subscribe((res:any) => {
      if (res.info === ResponseCodes.success) {
        this.notifyLogin(res.detail.loginname);
      }
      else {
        this.notifyLogout();
      }
    });
  }
  private sendStateReq() {
    return this.hermes.getAccountLoginState();
  }

  public clockOut() {
    this.sendLogout().subscribe((res:any) => {
      this.notifyLogout();
      console.log('[Logout] res: ',res);
    });
  }
  private sendLogout() {
    return this.hermes.getLogout();
  }

  public clockIn(creds:Credentials) {
    this.sendLogMeIn(creds).subscribe((res:any) => {
      console.log('[Login] res: ', res)
      if (res.info === ResponseCodes.success) {
        this.notifyLogin(res.detail.loginname);
        console.log('[Login] loged in!');
      }
    });
  }
  private sendLogMeIn(creds:Credentials) {
    return this.hermes.postLoginAccount(creds)
  }

  public notifyLogout() {
    this.loginState = false;
    this.loginStatusSubject.next(this.loginState);
    this.loginname = '';
    this.loginNameSubject.next(this.loginname);
  }
  private notifyLogin(name:string) {
    this.loginState = true;
    this.loginStatusSubject.next(true);
    this.loginname = name;
    this.loginNameSubject.next(name);
  }
}
