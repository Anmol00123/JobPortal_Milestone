import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFeedbackComponent } from './save-feedback.component';

describe('SaveFeedbackComponent', () => {
  let component: SaveFeedbackComponent;
  let fixture: ComponentFixture<SaveFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
