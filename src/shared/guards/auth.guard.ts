import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { AccountsService } from '../services/manager/accounts.service';
import { environment } from '../../environments/environment.development';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const name = inject(AccountsService).Loginname;
  const para = state.url.substring(1, state.url.indexOf('/',1));
  return name === para || environment.dev;
};
