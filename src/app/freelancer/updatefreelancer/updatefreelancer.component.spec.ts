import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefreelancerComponent } from './updatefreelancer.component';

describe('UpdatefreelancerComponent', () => {
  let component: UpdatefreelancerComponent;
  let fixture: ComponentFixture<UpdatefreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatefreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatefreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
