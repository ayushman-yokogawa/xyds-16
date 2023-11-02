import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyStepperComponent } from './xy-stepper.component';

describe('XyStepperComponent', () => {
  let component: XyStepperComponent;
  let fixture: ComponentFixture<XyStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
