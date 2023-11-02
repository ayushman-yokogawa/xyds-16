import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyIconComponent } from './xy-icon.component';

describe('XyIconComponent', () => {
  let component: XyIconComponent;
  let fixture: ComponentFixture<XyIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
