import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyTableComponent } from './xy-table.component';

describe('XyTableComponent', () => {
  let component: XyTableComponent;
  let fixture: ComponentFixture<XyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
