import { TestBed } from '@angular/core/testing';

import { ListjobsService } from './listjobs.service';

describe('ListjobsService', () => {
  let service: ListjobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListjobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
