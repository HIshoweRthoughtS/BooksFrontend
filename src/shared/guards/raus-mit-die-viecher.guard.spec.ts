import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { rausMitDieViecherGuard } from './raus-mit-die-viecher.guard';

describe('rausMitDieViecherGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rausMitDieViecherGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
