import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyCardHeaderActionComponent } from './xy-card-header-action.component';

describe('XyCardHeaderActionComponent', () => {
  let component: XyCardHeaderActionComponent;
  let fixture: ComponentFixture<XyCardHeaderActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyCardHeaderActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyCardHeaderActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
