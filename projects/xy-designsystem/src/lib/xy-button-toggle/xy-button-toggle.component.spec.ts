import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { XyButtonToggleComponent } from './xy-button-toggle.component';

describe('XyButtonToggleComponent', () => {
  let component: XyButtonToggleComponent;
  let fixture: ComponentFixture<XyButtonToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyButtonToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyButtonToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
