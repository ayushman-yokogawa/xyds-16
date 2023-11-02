import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyDatepickerComponent } from './xy-datepicker.component';

describe('XyDatepickerComponent', () => {
  let component: XyDatepickerComponent;
  let fixture: ComponentFixture<XyDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
