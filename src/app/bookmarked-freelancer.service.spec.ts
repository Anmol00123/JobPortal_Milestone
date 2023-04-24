import { TestBed } from '@angular/core/testing';

import { BookmarkedFreelancerService } from './bookmarked-freelancer.service';

describe('BookmarkedFreelancerService', () => {
  let service: BookmarkedFreelancerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookmarkedFreelancerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
