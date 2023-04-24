import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobapplicationComponent } from './add-jobapplication.component';

describe('AddJobapplicationComponent', () => {
  let component: AddJobapplicationComponent;
  let fixture: ComponentFixture<AddJobapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJobapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
