import { TestBed } from '@angular/core/testing';

import { FeedbackService } from './feedbackservice.service';

describe('FeedbackserviceService', () => {
  let service: FeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
