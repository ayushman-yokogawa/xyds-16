import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XySidenavItemComponent } from './xy-sidenav-item.component';

describe('XySidenavItemComponent', () => {
  let component: XySidenavItemComponent;
  let fixture: ComponentFixture<XySidenavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XySidenavItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XySidenavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
