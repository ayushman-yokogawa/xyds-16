import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyBottomSheetComponent } from './xy-bottom-sheet.component';

describe('XyBottomSheetComponent', () => {
  let component: XyBottomSheetComponent;
  let fixture: ComponentFixture<XyBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyBottomSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
