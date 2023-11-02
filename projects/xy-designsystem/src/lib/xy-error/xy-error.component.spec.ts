import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyErrorComponent } from './xy-error.component';
import {XyInputModule} from "../xy-input/xy-input.module";
import {XyInputComponent} from "../xy-input/xy-input.component";

describe('XyErrorComponent', () => {
  let component: XyErrorComponent;
  let fixture: ComponentFixture<XyErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyErrorComponent ],
      providers: [{
        provide: XyInputComponent,
        useValue: {}
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
