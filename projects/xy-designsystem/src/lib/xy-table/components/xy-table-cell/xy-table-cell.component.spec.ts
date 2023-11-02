import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyTableCellComponent } from './xy-table-cell.component';

describe('XyTableCellComponent', () => {
  let component: XyTableCellComponent;
  let fixture: ComponentFixture<XyTableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyTableCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
