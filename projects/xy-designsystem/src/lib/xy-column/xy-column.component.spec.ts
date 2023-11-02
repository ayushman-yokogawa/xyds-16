import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyColumnComponent } from './xy-column.component';

describe('XyColumnComponent', () => {
  let component: XyColumnComponent;
  let fixture: ComponentFixture<XyColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
