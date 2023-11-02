import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensionPanelExampleComponent } from './expension-panel-example.component';

describe('ExpensionPanelExampleComponent', () => {
  let component: ExpensionPanelExampleComponent;
  let fixture: ComponentFixture<ExpensionPanelExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensionPanelExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensionPanelExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
