import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyDialogComponent } from './xy-dialog.component';
import {MatLegacyDialogRef as MatDialogRef} from "@angular/material/legacy-dialog";

describe('XyDialogComponent', () => {
  let component: XyDialogComponent;
  let fixture: ComponentFixture<XyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyDialogComponent ],
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
