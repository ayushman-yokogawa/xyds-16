import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyProgressSpinnerComponent } from './xy-progress-spinner.component';

describe('XyProgressSpinnerComponent', () => {
  let component: XyProgressSpinnerComponent;
  let fixture: ComponentFixture<XyProgressSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyProgressSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
