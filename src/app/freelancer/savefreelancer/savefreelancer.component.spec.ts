import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavefreelancerComponent } from './savefreelancer.component';

describe('SavefreelancerComponent', () => {
  let component: SavefreelancerComponent;
  let fixture: ComponentFixture<SavefreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavefreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavefreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
