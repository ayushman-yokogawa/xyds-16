import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyCardActionsComponent } from './xy-card-actions.component';

describe('XyCardActionsComponent', () => {
  let component: XyCardActionsComponent;
  let fixture: ComponentFixture<XyCardActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyCardActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyCardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
