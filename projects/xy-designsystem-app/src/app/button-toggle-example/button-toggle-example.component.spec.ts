import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleExampleComponent } from './button-toggle-example.component';

describe('ButtonToggleExampleComponent', () => {
  let component: ButtonToggleExampleComponent;
  let fixture: ComponentFixture<ButtonToggleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonToggleExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonToggleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
