import { TestBed } from '@angular/core/testing';

import { MemoryDbService } from './memory-db.service';

describe('MemoryDbService', () => {
  let service: MemoryDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
