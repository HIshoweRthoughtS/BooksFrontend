import { TestBed } from '@angular/core/testing';

import { JsonDbServiceService } from './json-db-service.service';

describe('JsonDbServiceService', () => {
  let service: JsonDbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonDbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
