import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyChipsComponent } from './xy-chips.component';

describe('XyChipsComponent', () => {
  let component: XyChipsComponent;
  let fixture: ComponentFixture<XyChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
