import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyRadioGroupComponent } from './xy-radio-group.component';

describe('XyRadioGroupComponent', () => {
  let component: XyRadioGroupComponent;
  let fixture: ComponentFixture<XyRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyRadioGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
