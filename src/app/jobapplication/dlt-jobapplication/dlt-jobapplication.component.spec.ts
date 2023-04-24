import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DltJobapplicationComponent } from './dlt-jobapplication.component';

describe('DltJobapplicationComponent', () => {
  let component: DltJobapplicationComponent;
  let fixture: ComponentFixture<DltJobapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DltJobapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DltJobapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
