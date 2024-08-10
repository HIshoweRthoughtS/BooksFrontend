import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountsService } from '../services/manager/accounts.service';
import { environment } from '../../environments/environment.development';

export const rausMitDieViecherGuard: CanActivateFn = (route, state) => {
  const allow = inject(AccountsService).LoggedIn;
  return allow || environment.dev ? true : inject(Router).createUrlTree(['/']);
};
