import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XySidenavContentComponent } from './xy-sidenav-content.component';

describe('XySidenavContentComponent', () => {
  let component: XySidenavContentComponent;
  let fixture: ComponentFixture<XySidenavContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XySidenavContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XySidenavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
