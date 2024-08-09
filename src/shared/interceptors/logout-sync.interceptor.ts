import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';
import { ResponseCodes } from '../enums/response-codes.enumeration';
import { inject } from '@angular/core';
import { AccountsService } from '../services/manager/accounts.service';
import { BroadcastService } from '../services/broadcast/broadcast.service';

export const logoutSyncInterceptor: HttpInterceptorFn = (req, next) => {
  const accd = inject(AccountsService);
  const bbc = inject(BroadcastService);
  return next(req).pipe(tap(event => {
    if (event.type === HttpEventType.Response) {
      const tmp = (event.body as any);
      if (event.body && tmp.info === ResponseCodes.fail
            && tmp.detail && tmp.detail.summary === '???'

              && accd.LoggedIn) {
        bbc.notifyLogout();
      }
    }
  }));
};
