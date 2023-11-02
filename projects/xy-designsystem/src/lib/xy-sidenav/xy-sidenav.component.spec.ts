import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XySidenavComponent } from './xy-sidenav.component';

describe('XySidenavComponent', () => {
  let component: XySidenavComponent;
  let fixture: ComponentFixture<XySidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XySidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XySidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
