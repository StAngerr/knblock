import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillEditPageComponent } from './skill-edit-page.component';

describe('SkillEditPageComponent', () => {
  let component: SkillEditPageComponent;
  let fixture: ComponentFixture<SkillEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
