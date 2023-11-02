import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyDialogActionsComponent } from './xy-dialog-actions.component';

describe('XyDialogActionsComponent', () => {
  let component: XyDialogActionsComponent;
  let fixture: ComponentFixture<XyDialogActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyDialogActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyDialogActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
