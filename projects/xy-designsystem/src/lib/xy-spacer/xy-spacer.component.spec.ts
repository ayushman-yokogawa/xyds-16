import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XySpacerComponent } from './xy-spacer.component';

describe('XySpacerComponent', () => {
  let component: XySpacerComponent;
  let fixture: ComponentFixture<XySpacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XySpacerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XySpacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
