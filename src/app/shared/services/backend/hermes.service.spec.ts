import { TestBed } from '@angular/core/testing';

import { HermesService } from './hermes.service';

describe('HermesService', () => {
  let service: HermesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HermesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
