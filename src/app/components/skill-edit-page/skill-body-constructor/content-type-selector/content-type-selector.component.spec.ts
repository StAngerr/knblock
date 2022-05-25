import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTypeSelectorComponent } from './content-type-selector.component';

describe('ContentTypeSelectorComponent', () => {
  let component: ContentTypeSelectorComponent;
  let fixture: ComponentFixture<ContentTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTypeSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
