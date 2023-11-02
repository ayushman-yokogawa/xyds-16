import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyTooltipComponent } from './xy-tooltip.component';

describe('XyTooltipComponent', () => {
  let component: XyTooltipComponent;
  let fixture: ComponentFixture<XyTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
