import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XySnackbarComponent } from './xy-snackbar.component';

describe('XySnackbarComponent', () => {
  let component: XySnackbarComponent;
  let fixture: ComponentFixture<XySnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XySnackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XySnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
