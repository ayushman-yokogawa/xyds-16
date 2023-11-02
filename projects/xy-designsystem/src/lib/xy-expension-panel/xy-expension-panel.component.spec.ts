import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyExpensionPanelComponent } from './xy-expension-panel.component';

describe('XyExpensionPanelComponent', () => {
  let component: XyExpensionPanelComponent;
  let fixture: ComponentFixture<XyExpensionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyExpensionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyExpensionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
