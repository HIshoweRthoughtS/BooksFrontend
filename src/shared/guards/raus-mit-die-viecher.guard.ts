import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountsService } from '../services/manager/accounts.service';

export const rausMitDieViecherGuard: CanActivateFn = (route, state) => {
  const allow = inject(AccountsService).LoggedIn;
  return allow ? allow : inject(Router).createUrlTree(['/']);
};
