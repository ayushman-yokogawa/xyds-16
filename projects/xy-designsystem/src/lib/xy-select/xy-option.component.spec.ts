import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyOptionComponent } from './xy-option.component';

describe('XyOptionComponent', () => {
  let component: XyOptionComponent;
  let fixture: ComponentFixture<XyOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
