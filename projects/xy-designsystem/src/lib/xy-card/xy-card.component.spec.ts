import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyCardComponent } from './xy-card.component';

describe('XyCardComponent', () => {
  let component: XyCardComponent;
  let fixture: ComponentFixture<XyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
