import {ComponentFixture, TestBed} from '@angular/core/testing';

import {XyMenuComponent} from './xy-menu.component';

describe('XyMenuComponent', () => {
  let component: XyMenuComponent;
  let fixture: ComponentFixture<XyMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
