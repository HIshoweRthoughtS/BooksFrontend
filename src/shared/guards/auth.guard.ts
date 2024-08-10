import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { AccountsService } from '../services/manager/accounts.service';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const name = inject(AccountsService).Loginname;
  const para = state.url.substring(1, state.url.indexOf('/',1));
  console.log(para);
  return name === para;
};
