import { Injectable } from '@angular/core';
import { HermesService } from '../backend/hermes.service';
import { Credentials } from '../../interfaces';
import { BroadcastService } from '../broadcast/broadcast.service';

@Injectable({
    providedIn: 'root'
})
export class AccountsService {

    private loginState:boolean = false;
    private loginname:string = '';

    constructor(private readonly hermes:HermesService, private readonly bbc:BroadcastService) {
        bbc.tapLoginState().subscribe((lolIn:boolean) => {
            if (!lolIn && this.loginState) {
                this.doLogout();
            }
        });
    }
    
    get LoggedIn(): boolean {
        return this.loginState;
    }

    get Loginname(): string {
        return this.loginname;
    }

    public askLoginState() {
        this.sendStateReq().subscribe((res:any) => {
            if (res) {
                this.doLogin(res.loginname);
            }
            else {
                this.doLogout();
            }
        });
    }
    private sendStateReq() {
        return this.hermes.getAccountLoginState();
    }

    public clockOut() {
        this.sendLogout().subscribe((res:any) => {
            this.doLogout();
        });
    }
    private sendLogout() {
        return this.hermes.getLogout();
    }

    public clockIn(creds:Credentials) {
        this.sendLogMeIn(creds).subscribe((res:any) => {
            if (!!res) {
                this.doLogin(res.loginname);
            }
        });
    }
    private sendLogMeIn(creds:Credentials) {
        return this.hermes.postLoginAccount(creds)
    }

    public doLogout() {
        this.loginState = false;
        this.loginname = '';
        this.bbc.notifyLogout();
    }
    private doLogin(name:string) {
        this.loginState = true;
        this.loginname = name;
        this.bbc.notifyLogin(name);
    }
}
