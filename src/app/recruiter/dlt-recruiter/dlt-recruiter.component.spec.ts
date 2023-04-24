import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DltRecruiterComponent } from './dlt-recruiter.component';

describe('DltRecruiterComponent', () => {
  let component: DltRecruiterComponent;
  let fixture: ComponentFixture<DltRecruiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DltRecruiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DltRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
