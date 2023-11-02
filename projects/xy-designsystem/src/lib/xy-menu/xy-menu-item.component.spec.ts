import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyMenuItemComponent } from './xy-menu-item.component';

describe('XyMenuItemComponent', () => {
  let component: XyMenuItemComponent;
  let fixture: ComponentFixture<XyMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
