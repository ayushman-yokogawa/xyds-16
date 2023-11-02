import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyProgressbarComponent } from './xy-progressbar.component';

describe('XyProgressbarComponent', () => {
  let component: XyProgressbarComponent;
  let fixture: ComponentFixture<XyProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyProgressbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
