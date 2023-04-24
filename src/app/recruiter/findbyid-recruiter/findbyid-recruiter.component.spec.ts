import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbyidRecruiterComponent } from './findbyid-recruiter.component';

describe('FindbyidRecruiterComponent', () => {
  let component: FindbyidRecruiterComponent;
  let fixture: ComponentFixture<FindbyidRecruiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindbyidRecruiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbyidRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
