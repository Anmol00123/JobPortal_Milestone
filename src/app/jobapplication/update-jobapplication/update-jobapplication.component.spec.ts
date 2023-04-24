import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJobapplicationComponent } from './update-jobapplication.component';

describe('UpdateJobapplicationComponent', () => {
  let component: UpdateJobapplicationComponent;
  let fixture: ComponentFixture<UpdateJobapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateJobapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJobapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
