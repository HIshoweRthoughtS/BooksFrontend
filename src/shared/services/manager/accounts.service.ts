import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HermesService } from '../backend/hermes.service';
import { Account, Credentials } from '../../interfaces';
import { ResponseCodes } from '../../enums/response-codes.enumeration';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private readonly loginStatusSubject = new BehaviorSubject<boolean>(false);
  private readonly loginNameSubject = new BehaviorSubject<string>('');

  public readonly logedIn$:Observable<boolean>;
  public readonly loginname$:Observable<string>

  constructor(private readonly hermes:HermesService) {
    this.logedIn$ = this.loginStatusSubject.asObservable();
    this.loginname$ = this.loginNameSubject.asObservable();
  }

  public clockIn(creds:Credentials) {
    this.sendLogMeIn(creds);
  }

  public clockOut() {
    this.hermes.getLogout().subscribe((res:any) => {
      this.sendLogout();
      console.log('[Logout] res: ',res);
    });
  }

  private sendLogMeIn(creds:Credentials) {
    this.hermes.postLoginAccount(creds).subscribe((res:any) => {
      console.log('[Login] res: ', res)
      if (res.info === ResponseCodes.success) {
        this.sendLogin(res.detail.loginname);
        console.log('[Login] loged in!');
      }
    });
  }

  private sendLogout() {
    this.loginStatusSubject.next(false);
    this.loginNameSubject.next('');
  }
  private sendLogin(name:string) {
    this.loginStatusSubject.next(true);
    this.loginNameSubject.next(name);
  }
}
