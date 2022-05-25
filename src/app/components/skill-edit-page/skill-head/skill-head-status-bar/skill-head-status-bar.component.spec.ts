import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillHeadStatusBarComponent } from './skill-head-status-bar.component';

describe('SkillHeadStatusBarComponent', () => {
  let component: SkillHeadStatusBarComponent;
  let fixture: ComponentFixture<SkillHeadStatusBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillHeadStatusBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillHeadStatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
