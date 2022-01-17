import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSkillFormComponent } from './create-skill-form.component';

describe('CreateSkillFormComponent', () => {
  let component: CreateSkillFormComponent;
  let fixture: ComponentFixture<CreateSkillFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSkillFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSkillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
