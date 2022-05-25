import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillHeadComponent } from './skill-head.component';

describe('SkillHeadComponent', () => {
  let component: SkillHeadComponent;
  let fixture: ComponentFixture<SkillHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
