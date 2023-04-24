import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbyskillComponent } from './findbyskill.component';

describe('FindbyskillComponent', () => {
  let component: FindbyskillComponent;
  let fixture: ComponentFixture<FindbyskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindbyskillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbyskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
