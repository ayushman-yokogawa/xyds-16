import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyStepComponent } from './xy-step.component';

describe('XyStepComponent', () => {
  let component: XyStepComponent;
  let fixture: ComponentFixture<XyStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
