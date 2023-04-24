import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindfreelancerComponent } from './findfreelancer.component';

describe('FindfreelancerComponent', () => {
  let component: FindfreelancerComponent;
  let fixture: ComponentFixture<FindfreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindfreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindfreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
