import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyDatePickerExampleComponent } from './xy-date-picker-example.component';

describe('XyDatePickerExampleComponent', () => {
  let component: XyDatePickerExampleComponent;
  let fixture: ComponentFixture<XyDatePickerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyDatePickerExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyDatePickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
