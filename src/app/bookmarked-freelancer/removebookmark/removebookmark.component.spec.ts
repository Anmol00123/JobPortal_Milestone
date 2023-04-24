import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovebookmarkComponent } from './removebookmark.component';

describe('RemovebookmarkComponent', () => {
  let component: RemovebookmarkComponent;
  let fixture: ComponentFixture<RemovebookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovebookmarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovebookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
