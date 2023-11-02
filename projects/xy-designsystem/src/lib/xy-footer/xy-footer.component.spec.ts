import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyFooterComponent } from './xy-footer.component';

describe('XyFooterComponent', () => {
  let component: XyFooterComponent;
  let fixture: ComponentFixture<XyFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
