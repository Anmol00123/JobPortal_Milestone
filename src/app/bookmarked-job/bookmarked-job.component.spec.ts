import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedJobComponent } from './bookmarked-job.component';

describe('BookmarkedJobComponent', () => {
  let component: BookmarkedJobComponent;
  let fixture: ComponentFixture<BookmarkedJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkedJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
