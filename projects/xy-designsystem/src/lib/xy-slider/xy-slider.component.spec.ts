import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XySliderComponent } from './xy-slider.component';

describe('XySliderComponent', () => {
  let component: XySliderComponent;
  let fixture: ComponentFixture<XySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XySliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
