import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyHintComponent } from './xy-hint.component';

describe('XyHintComponent', () => {
  let component: XyHintComponent;
  let fixture: ComponentFixture<XyHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyHintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
