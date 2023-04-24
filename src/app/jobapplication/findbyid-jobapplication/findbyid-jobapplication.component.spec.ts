import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbyidJobapplicationComponent } from './findbyid-jobapplication.component';

describe('FindbyidJobapplicationComponent', () => {
  let component: FindbyidJobapplicationComponent;
  let fixture: ComponentFixture<FindbyidJobapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindbyidJobapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbyidJobapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
