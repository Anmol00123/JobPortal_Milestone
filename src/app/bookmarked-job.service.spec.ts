import { TestBed } from '@angular/core/testing';

import { BookmarkedJobService } from './bookmarked-job.service';

describe('BookmarkedJobService', () => {
  let service: BookmarkedJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookmarkedJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
