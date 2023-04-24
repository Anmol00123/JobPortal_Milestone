import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedFreelancerComponent } from './bookmarked-freelancer.component';

describe('BookmarkedFreelancerComponent', () => {
  let component: BookmarkedFreelancerComponent;
  let fixture: ComponentFixture<BookmarkedFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkedFreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkedFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
