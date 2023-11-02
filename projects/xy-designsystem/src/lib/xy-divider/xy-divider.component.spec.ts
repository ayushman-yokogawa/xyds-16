import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyDividerComponent } from './xy-divider.component';

describe('XyDividerComponent', () => {
  let component: XyDividerComponent;
  let fixture: ComponentFixture<XyDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
