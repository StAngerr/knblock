import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlinesComponent } from './outlines.component';

describe('OutlinesComponent', () => {
  let component: OutlinesComponent;
  let fixture: ComponentFixture<OutlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutlinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
