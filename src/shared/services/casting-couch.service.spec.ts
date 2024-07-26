import { TestBed } from '@angular/core/testing';

import { CastingCouchService } from './casting-couch.service';

describe('CastingCouchService', () => {
  let service: CastingCouchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CastingCouchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
