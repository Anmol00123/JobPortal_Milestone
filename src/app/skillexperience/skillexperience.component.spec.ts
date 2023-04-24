import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillexperienceComponent } from './skillexperience.component';

describe('SkillexperienceComponent', () => {
  let component: SkillexperienceComponent;
  let fixture: ComponentFixture<SkillexperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillexperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
