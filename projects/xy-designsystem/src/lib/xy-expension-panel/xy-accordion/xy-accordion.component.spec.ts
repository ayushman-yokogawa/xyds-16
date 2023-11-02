import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyAccordionComponent } from './xy-accordion.component';

describe('XyAccordionComponent', () => {
  let component: XyAccordionComponent;
  let fixture: ComponentFixture<XyAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
