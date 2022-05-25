import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBodyConstructorComponent } from './skill-body-constructor.component';

describe('SkillBodyConstructorComponent', () => {
  let component: SkillBodyConstructorComponent;
  let fixture: ComponentFixture<SkillBodyConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillBodyConstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillBodyConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
